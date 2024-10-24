// start Dark Mode
function toggleDarkMode() {
    // Toggle the dark mode class on the body
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
}

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
//end Dark Mode

// start sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.marginLeft = "0";
  }
// end sidenav
  


function CheckValidation() {
    console.log("Validation function called");
    let email = document.getElementById("exampleInputEmail1");
    let pass = document.getElementById("exampleInputPassword1");
    let error = document.getElementById("error");
    let text;

    if (email.value.indexOf("@") == -1) {
        text = "Please enter a valid email.";
        error.innerHTML = text;
        return false;
    } else if (pass.value.length <8) {
        text = "Please enter a valid password (at least 8 characters).";
        error.innerHTML = text;
        return false;
    } else {
        text = "Submitted successfully.";
        error.innerHTML = text;
        return true;
    }
}


