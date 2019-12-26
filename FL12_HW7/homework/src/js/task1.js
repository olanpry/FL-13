let email = prompt('Enter email', '');
const FIVE = 5;
const SIX = 6

if (email === null || !email) {
    alert('Canceled');
} else if (email.length < FIVE) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter password', '');
    if (password === null || !password) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        let question = confirm('Do you want to change your password?');
        if (!question) {
            alert('You have failed the change');
        } else {
            let oldPassword = prompt('Write your old password', '');
            if (oldPassword === null || !oldPassword) {
                alert('Canceled')
            } else if (oldPassword === password) {
                let newPassword = prompt('Write your new password', '');
                if (newPassword === null || !newPassword) {
                    alert('Canceled');
                } else if (newPassword.length < SIX) {
                    alert('It’s too short password. Sorry');
                } else {
                    let againNewPassword = prompt('Write your new password again', '');
                    if (againNewPassword !== newPassword) {
                        alert('You wrote the wrong password');
                    } else if (againNewPassword === newPassword) {
                        alert('You have successfully changed your password')
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}