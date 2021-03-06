document.addEventListener('DOMContentLoaded', () => {

let w3Connect = document.getElementById('mm-button')

w3Connect.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' });
})

})