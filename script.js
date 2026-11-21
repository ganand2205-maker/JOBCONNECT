<!--
/* =====================================
   1. HOME PAGE JOB SEARCH
===================================== */

function searchJobs() {

    const searchInput = document.getElementById("homeSearch");

    if (!searchInput) return;

    const search = searchInput.value.trim();

    if (search === "") {
        alert("Please enter a job title");
        return;
    }

    window.location.href =
        "jobs.html?search=" + encodeURIComponent(search);
}


/* =====================================
   2. JOBS PAGE FILTER
===================================== */

function filterJobs() {

    const input = document.getElementById("jobSearch");

    if (!input) return;

    const filter = input.value.toLowerCase();

    const jobs = document.getElementsByClassName("job-card");

    let count = 0;

    for (let i = 0; i < jobs.length; i++) {

        const title =
            jobs[i].querySelector("h3").innerText.toLowerCase();

        if (title.includes(filter)) {

            jobs[i].style.display = "block";
            count++;

        } else {

            jobs[i].style.display = "none";

        }
    }

    const noJobs = document.getElementById("noJobs");

    if (noJobs) {
        noJobs.style.display = count === 0 ? "block" : "none";
    }
}


/* =====================================
   3. GET HOME PAGE SEARCH
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("jobSearch");

    if (searchInput) {

        const params =
            new URLSearchParams(window.location.search);

        const search = params.get("search");

        if (search) {

            searchInput.value = search;

            filterJobs();
        }
    }

});


/* =====================================
   4. REGISTRATION AND LOGIN SWITCH
===================================== */

function showRegister() {

    const register = document.getElementById("registerSection");
    const login = document.getElementById("loginSection");

    if (!register || !login) return;

    register.classList.add("active");
    login.classList.remove("active");

    document.getElementById("registerTab")
        ?.classList.add("active");

    document.getElementById("loginTab")
        ?.classList.remove("active");
}


function showLogin() {

    const register = document.getElementById("registerSection");
    const login = document.getElementById("loginSection");

    if (!register || !login) return;

    login.classList.add("active");
    register.classList.remove("active");

    document.getElementById("loginTab")
        ?.classList.add("active");

    document.getElementById("registerTab")
        ?.classList.remove("active");
}


/* =====================================
   5. REGISTRATION FORM VALIDATION
===================================== */

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage") ||
            document.getElementById("message");

        const resume =
            document.getElementById("resume");

        function showRegisterMessage(text, color) {

            if (message) {
                message.style.color = color;
                message.textContent = text;
            }
        }

        if (password.length < 8) {

            showRegisterMessage(
                "Password must contain at least 8 characters.",
                "red"
            );

            return;
        }

        if (password !== confirmPassword) {

            showRegisterMessage(
                "Passwords do not match!",
                "red"
            );

            return;
        }

        if (resume && resume.required && !resume.files.length) {

            showRegisterMessage(
                "Please upload your resume.",
                "red"
            );

            return;
        }

        if (resume && resume.files.length) {

            const file = resume.files[0];

            if (!/\.(pdf|doc|docx)$/i.test(file.name)) {

                showRegisterMessage(
                    "Upload PDF, DOC or DOCX files only.",
                    "red"
                );

                return;
            }

            if (file.size > 5 * 1024 * 1024) {

                showRegisterMessage(
                    "Resume must be less than 5 MB.",
                    "red"
                );

                return;
            }
        }

        const email =
            registrationForm.elements.email.value;

        showRegisterMessage(
            "Form validated! Redirecting to login...",
            "green"
        );

        // Frontend demo only.
        // Actual account creation requires a backend.

        setTimeout(function() {

            window.location.href =
                "register.html?show=login&email=" +
                encodeURIComponent(email);

        }, 1500);

    });

}


/* =====================================
   6. LOGIN FORM VALIDATION
===================================== */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    // Get email from registration page

    const params =
        new URLSearchParams(window.location.search);

    const email = params.get("email");

    if (email && document.getElementById("loginEmail")) {

        document.getElementById("loginEmail").value = email;
    }

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");

        if (email === "" || password === "") {

            message.style.color = "red";

            message.textContent =
                "Please enter your email and password.";

            return;
        }

        message.style.color = "#2875c7";

        message.textContent =
            "Please connect your backend to verify login details.";

        // Do not redirect or treat this as an authenticated login.
    });

}


/* =====================================
   7. CONTACT FORM
===================================== */

function contactForm() {

    const name =
        document.getElementById("contactName");

    if (!name) return false;

    if (name.value.trim() === "") {

        alert("Please enter your name");

        return false;
    }

    alert(
        "Thank you " + name.value +
        "! Your message has been validated."
    );

    return false;
}


/* =====================================
   8. REGISTRATION PAGE INITIAL VIEW
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    const params =
        new URLSearchParams(window.location.search);

    if (params.get("show") === "login") {

        if (typeof showLogin === "function") {
            showLogin();
        }

        const email = params.get("email");

        const loginEmail =
            document.getElementById("loginEmail");

        if (email && loginEmail) {
            loginEmail.value = email;
        }
    }

});
-->


/* =====================================
   1. HOME PAGE JOB SEARCH
===================================== */

function searchJobs() {

    const input = document.getElementById("homeSearch");

    if (!input) return;

    const search = input.value.trim();

    if (search === "") {
        alert("Please enter a job title");
        return;
    }

    window.location.href =
        "jobs.html?search=" + encodeURIComponent(search);
}


/* =====================================
   2. JOB SEARCH FILTER
===================================== */

function filterJobs() {

    const input = document.getElementById("jobSearch");

    if (!input) return;

    const filter = input.value.toLowerCase();

    const jobs = document.getElementsByClassName("job-card");

    let count = 0;

    for (let i = 0; i < jobs.length; i++) {

        const title = jobs[i]
            .querySelector("h3").innerText.toLowerCase();

        if (title.includes(filter)) {

            jobs[i].style.display = "block";
            count++;

        } else {

            jobs[i].style.display = "none";

        }
    }

    const noJobs = document.getElementById("noJobs");

    if (noJobs) {
        noJobs.style.display = count === 0 ? "block" : "none";
    }
}


/* =====================================
   3. REGISTER / LOGIN SWITCH
===================================== */

function showRegister() {

    const register =
        document.getElementById("registerSection");

    const login =
        document.getElementById("loginSection");

    if (!register || !login) return;

    register.classList.add("active");
    login.classList.remove("active");

    document.getElementById("registerTab")
        ?.classList.add("active");

    document.getElementById("loginTab")
        ?.classList.remove("active");
}


function showLogin() {

    const register =
        document.getElementById("registerSection");

    const login =
        document.getElementById("loginSection");

    if (!register || !login) return;

    login.classList.add("active");
    register.classList.remove("active");

    document.getElementById("loginTab")
        ?.classList.add("active");

    document.getElementById("registerTab")
        ?.classList.remove("active");
}


/* =====================================
   4. REGISTRATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const registrationForm =
        document.getElementById("registrationForm");

    if (!registrationForm) return;

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            registrationForm.elements.fullName.value.trim();

        const email =
            registrationForm.elements.email.value.trim().toLowerCase();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const resume =
            document.getElementById("resume");

        const message =
            document.getElementById("registerMessage");

        function showMessage(text, color) {
            message.style.color = color;
            message.textContent = text;
        }

        if (password.length < 8) {

            showMessage(
                "Password must contain at least 8 characters.",
                "red"
            );

            return;
        }

        if (password !== confirmPassword) {

            showMessage(
                "Passwords do not match!",
                "red"
            );

            return;
        }

        if (resume && !resume.files.length) {

            showMessage(
                "Please upload your resume.",
                "red"
            );

            return;
        }

        if (resume && resume.files.length) {

            const file = resume.files[0];

            if (!/\.(pdf|doc|docx)$/i.test(file.name)) {

                showMessage(
                    "Upload PDF, DOC or DOCX files only.",
                    "red"
                );

                return;
            }

            if (file.size > 5 * 1024 * 1024) {

                showMessage(
                    "Resume must be less than 5 MB.",
                    "red"
                );

                return;
            }
        }

        const existingUser =
            JSON.parse(localStorage.getItem("jobConnectUser"));

        if (existingUser && existingUser.email === email) {

            showMessage(
                "Email already registered. Please login.",
                "red"
            );

            return;
        }

        // Store account information for demo purposes.
        // Do not use plain-text password storage in production.

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem(
            "jobConnectUser",
            JSON.stringify(user)
        );

        showMessage(
            "Registration Successful! Please Login.",
            "green"
        );

        setTimeout(function () {

            showLogin();

            document.getElementById("loginEmail").value = email;

            document.getElementById("loginMessage").textContent =
                "Your account has been created. Please login.";

            document.getElementById("loginMessage").style.color =
                "green";

        }, 1200);

    });

});


/* =====================================
   5. LOGIN
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) return;

    const loginFormEmail =
        document.getElementById("loginEmail");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            loginFormEmail.value.trim().toLowerCase();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");

        const user =
            JSON.parse(localStorage.getItem("jobConnectUser"));

        if (!user) {

            message.style.color = "red";

            message.textContent =
                "Account not found. Please register first.";

            return;
        }

        if (email === user.email && password === user.password) {

            localStorage.setItem(
                "jobConnectLoggedIn",
                "true"
            );

            message.style.color = "green";

            message.textContent =
                "Login Successful! Welcome " + user.name;

            setTimeout(function () {

                window.location.href = "index.html";

            }, 1200);

        } else {

            message.style.color = "red";

            message.textContent =
                "Invalid email or password. Please try again.";

        }

    });

});


/* =====================================
   6. HOME PAGE WELCOME MESSAGE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const welcomeMessage =
        document.getElementById("welcomeMessage");

    if (!welcomeMessage) return;

    const user =
        JSON.parse(localStorage.getItem("jobConnectUser"));

    const loggedIn =
        localStorage.getItem("jobConnectLoggedIn");

    if (user && loggedIn === "true") {

        welcomeMessage.textContent =
            "Hi, " + user.name + "! Welcome to JobConnect.";

    } else {

        welcomeMessage.textContent = "";

    }

});


/* =====================================
   7. LOGOUT
===================================== */

function logoutUser() {

    localStorage.removeItem("jobConnectLoggedIn");

    alert("You have successfully logged out!");

    window.location.href = "index.html";

}


/* =====================================
   8. LOGOUT LINK DISPLAY
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const logoutLink =
        document.getElementById("logoutLink");

    if (logoutLink) {

        const loggedIn =
            localStorage.getItem("jobConnectLoggedIn");

        logoutLink.hidden = loggedIn !== "true";

    }

});


/* =====================================
   9. CONTACT FORM
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const status =
            document.getElementById("contactStatus");

        status.style.color = "green";

        status.textContent =
            "Thank you " + name +
            "! Your message has been validated.";

        contactForm.reset();

    });

});


/* =====================================
   10. JOB SEARCH URL
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("jobSearch");

    if (!searchInput) return;

    const params =
        new URLSearchParams(window.location.search);

    const search = params.get("search");

    if (search) {

        searchInput.value = search;

        filterJobs();

    }

});
