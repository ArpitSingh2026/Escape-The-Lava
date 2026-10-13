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

