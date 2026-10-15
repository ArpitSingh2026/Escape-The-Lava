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
    let clickSound = new Audio ('Game Click Sound Effect (1).mp3');
    clickSound.play().catch(e => console.log("click music"))

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

let audio = window.parent.audioElement || new Audio ('Gaming Background Music 1 Hour (2).mp3')
audio.loop = true;
window.parent.audioElement = audio;

document.addEventListener('click', () => {
    audio.play().catch(e => console.log(e));
},{once: true});