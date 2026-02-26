function validate(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("msgbox");
    let message = "";
    if(email ==='') {
        message = 'please enter an email.';
        msgbox.style.color = 'red';
    }else if (password ===''){
        message = 'please enter a password.';
        msgbox.style.color = 'orangered';
    }else if (age ===''){
        message = 'please enter your age.';
        msgbox.style.color = 'orange';
    }else if (age ===''){
        message = 'please enter your age.';
        msgbox.style.color = 'orange';
    }else{
        message = 'successfully logged in.';
        msgbox.style.color = 'green';
    }
    msgbox.innerHTML = message;
          }
          document.getElementById("loginForm").onsubmit = validate;

          document.getElementById("email").oninput = () => validate({ preventDefault: () => {} });
          document.getElementById("age").oninput = () => validate({ preventDefault: () => {} });

          document.getElementById("password").oninput = () => validate({ preventDefault: () => {} });

