let loggedArray;
(() => {

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)


    loggedArray = JSON.parse(userLogged)


    if(!userLogged){
    window.location.href = 'login.html'
    }

})()

console.log(loggedArray)

document.getElementById('name').innerHTML = loggedArray.firstName
document.getElementById('BAI').innerHTML = loggedArray.Bankaccount











let logOut = () => {
   localStorage.removeItem('loggedUser');

   window.location.href = 'login.html'

}

document.addEventListener("DOMContentLoaded", () => {
    // Check if the balance exists in local storage, if not, initialize it to 0.
    let balance = localStorage.getItem("balance");
    if (balance === null) {
      localStorage.setItem("balance", "0");
      balance = 0;
    } else {
      balance = parseFloat(balance);
    }
  
    // Display the balance on the page.
    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = balance.toFixed(2);
  });
  
  function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
      let balance = parseFloat(localStorage.getItem("balance"));
      balance += amount;
      localStorage.setItem("balance", balance.toFixed(2));
      document.getElementById("balance").textContent = balance.toFixed(2);
      document.getElementById("amount").value = "";
    } else {
      alert("Please enter a valid amount greater than 0.");
    }
  }
  
  function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
      let balance = parseFloat(localStorage.getItem("balance"));
      if (amount <= balance) {
        balance -= amount;
        localStorage.setItem("balance", balance.toFixed(2));
        document.getElementById("balance").textContent = balance.toFixed(2);
        document.getElementById("amount").value = "";
      } else {
        alert("Insufficient funds.");
      }
    } else {
      alert("Please enter a valid amount greater than 0.");
    }
  }
  





