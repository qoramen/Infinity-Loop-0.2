const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    const icon = document.querySelector('.fa-sun')
    icon.classList.toggle('fa-moon')
    document.body.classList.toggle('dark-theme')
});

const divs = Array.from(document.querySelectorAll('.hover'));

divs.forEach((div, index) => {
    div.addEventListener('mouseover', function () {
        const deses = document.getElementById(`des${index}`)
        deses.style.display = 'block'
    });

    div.addEventListener('mouseout', function () {
        const deses = document.getElementById(`des${index}`)
        deses.style.display = 'none'
    });
});

class User {
    constructor(username, email, message) {
        this.username = username
        this.email = email
        this.message = message
    }
}

User.prototype.report = function () {
    console.log(`Contacted user was ${this.username}, his/her email was ${this.email}`);
    console.log(`${this.username}'s message is: ${this.message}`);
}

const send = document.getElementById('submit')

send.addEventListener('click', function () {
    const usernameInput = document.getElementById('username'),
        usermailInput = document.getElementById('usermail'),
        messageInput = document.getElementById('usermessage')

    if (usernameInput.value == '' && usermailInput.value == '' && messageInput.value == '') {
        alert('inputs are empty')
    } else {
        const newUser = new User(usernameInput.value, usermailInput.value, messageInput.value)
        newUser.report()

        usernameInput.value = ''
        usermailInput.value = ''
        messageInput.value = ''
    }
})