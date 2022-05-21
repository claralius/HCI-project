let button = document.getElementById('create');

button.addEventListener('click', function(e){
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let region = document.querySelector('#region').value;
    let date = document.querySelector('#date').value;

    let error = '';

    if(username === ''){
        error = 'Username must be filled';
    }
    else if(username.length < 8 || username.length > 20) { 
        error = 'Username must be 8 - 20 characters';
    }
    else if(username.includes(' ') === true){
        error = 'Username cannot include space';
    }
    else if(email === ''){
        error = 'Email must be filled';
    } else if(email.includes('@')){
        error = 'Please insert a valid email';
    }
    else if(password === ''){
        error = 'Password must be filled';
    }
    else if(password.length < 8 || username.length > 8) { 
        error = 'Password must be 8 characters';
    }
    else if(password.includes(' ') === true){
        error = 'Password cannot include space';
    }
    else if(region === ''){
        error = 'Region must be filled';
    }
    else if(date === ''){
        error = 'Date of Birth must be filled';
    }

    if(error === ''){
        alert('Success');
    }
    else{
        alert(error);
    }
})