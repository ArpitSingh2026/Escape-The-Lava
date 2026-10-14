function  pressKey(num) {
    document.getElementById('pinShow').value += num;
}

function erasePin(num) {
    document.getElementById('pinShow').value = '';
}

function checkPin() {
    const enteredPin = document.getElementById('pinShow').value += "";
    if (enteredPin === '1100' ){
        window.location.href = 'index6.html';
    }else {
        alert('Password Is Incorrect❌❌');
    }
}

function CheckPassword(event) {
    const Password = document.querySelector('.password');
    const details = document.querySelector('.arrow').parentElement;
    const passwordLength = Password.value.length;
      if(passwordLength === 8) {
        window.location.href = '2index.html';
      }else {
         event.preventDefault();

        details.open = true;
        alert('Password Is Necessary')
    }
}
