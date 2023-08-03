let userArray = [];

(() => {

    let userInfo = localStorage.getItem('userData')
    console.log(userInfo)

    if (userInfo) {
        userArray = JSON.parse(userInfo)
    }

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)

    if(userLogged){
    window.location.href = 'index.html'
    }

})()



let login = (e) => {
    e.preventDefault();


    let Bankaccount = document.getElementById('BAI').value;
    let password = document.getElementById('password').value;


    let isBankaccountValid = false;

    for (let i = 0; i < userArray.length; i++) {

    

        if (Bankaccount === userArray[i].Bankaccount) {

            isBankaccountValid = true;

            if (password === userArray[i].password) {
                window.location.href = 'index.html'
                localStorage.setItem('loggedUser', JSON.stringify(userArray[i]));
            }
            else {
                document.getElementById('passerror').textContent = `Invalid Password`;
                setTimeout(() => {
                    document.getElementById('passerror').textContent = ``;
                }, 3000)
            }
        }
    }


    if (!isBankaccountValid) {


        document.getElementById('IDerror').textContent = `Invalid Bankaccount`;
        setTimeout(() => {
            document.getElementById('IDerror').textContent = ``;
        }, 3000)

    }




}