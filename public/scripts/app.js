const $ = document
const scrollBtn = $.querySelector('.scroll-btn')
const loginInput = $.querySelector('#username-input')
const loginBtn = $.querySelector('.login-btn')
const passwordInput = $.querySelector('#password-input')
const boxElem = $.querySelector('.box-elem')
const openBtn = $.querySelector('.bars-3');
const closeBtn = $.querySelector('.x-mark-minibars-3');
const chevronDown = document.querySelector('.chevron-down');
const chevronUp = document.querySelector('.chevron-up');
const submenu = document.querySelector('.submenu');
const menu = $.querySelector('.menu');
let togglePassword = $.querySelector('.toggle-password');
const eyeSvg = $.querySelector('.eye-svg')
const eyeSlashSvg = $.querySelector('.eye-slash-svg')
const emailContact = $.querySelector('#email-contact')

// Start Hamburger Menu
openBtn.addEventListener('click', () => {
    menu.style.left = '0';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    menu.style.left = '-100%';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});
// End Hamburger Menu

// Start ChevronDown Click & SubMenu
document.addEventListener('DOMContentLoaded', function () {

    submenu.classList.add('invisible');
    submenu.classList.add('opacity-0');

    chevronDown.addEventListener('click', function () {
        chevronDown.classList.add('hidden');
        chevronUp.classList.remove('hidden');

        submenu.classList.remove('invisible');
        submenu.classList.remove('opacity-0');

        const vineyardItem = document.querySelector('nav .menu > li:nth-child(2)');
        vineyardItem.style.marginTop = '64px';
    });

    chevronUp.addEventListener('click', function () {
        chevronDown.classList.remove('hidden');
        chevronUp.classList.add('hidden');

        submenu.classList.add('invisible');
        submenu.classList.add('opacity-0');

        const vineyardItem = document.querySelector('nav .menu > li:nth-child(2)');
        vineyardItem.style.marginTop = '0';
    });
});
// End  ChevronDown Click & SubMenu

// Start Scroll Top Handler JS
function scrollTopHandler() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
// End Scroll Top Handler JS

// Start Login Form Validation

let emailValidation = function () {
    let alertDisplayed = false;
    loginBtn.addEventListener('click', event => {
        event.preventDefault()
        if (alertDisplayed) {
            return;
        }
        let emailRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/g
        let emailRegexResult = emailRegex.test(loginInput.value)
        if (emailRegexResult) {
            loginInput.value = '';
            passwordInput.value = '';
            boxElem.insertAdjacentHTML('beforebegin', `<div class="w-full p-5 mt-24 bg-gray-100 border border-green-500">
<svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <p class="pt-1 text-sm text-green-500">You have successfully logged in.</p>
 </div>`);
            alertDisplayed = true;
        } else {
            boxElem.insertAdjacentHTML('beforebegin', `<div class="w-full p-5 mt-24 bg-gray-100 border border-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF6365" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"
             class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
        </svg>
        <p class="pt-1 text-sm text-orange-500">Unknown email address. Check again or try your username.</p>
    </div>`);
            alertDisplayed = true;
        }
    })
}
emailValidation()

emailContact.addEventListener('click', emailValidation)
// End Login Form Validation

// Start UserName Validation
function validateUsername(input) {
    const usernameRegex = /^[a-zA-Z]$/;
    return usernameRegex.test(input);
}

const usernameInput = document.getElementById('username-contact');
let alertDisplayed = false;
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateUsername(usernameInput.value)) {
        boxElem.insertAdjacentHTML('afterend', `<div class="w-full p-5 mt-24 bg-gray-100 border border-green-500">
<svg xmlns="http://www.w3.org/2000/svg" fill="#22c55e" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <p class="pt-1 text-sm text-green-500">You have successfully logged in.</p>
 </div>`);
        alertDisplayed = true;
    } else {
        boxElem.insertAdjacentHTML('beforebegin', `<div class="w-full p-5 mt-24 bg-gray-100 border border-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF6365" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"
             class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
        </svg>
        <p class="pt-1 text-sm text-orange-500">Unknown email address. Check again or try your username.</p>
    </div>`);
        alertDisplayed = true;
    }
});
// End UserName Validation


// Start Open & Close Eye Password
// Fire click event on eye icon
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "text") {
        passwordInput.type = "password";
        eyeSvg.style.display = 'none'
        eyeSlashSvg.style.display = 'block'
    } else {
        passwordInput.type = "text";
        eyeSvg.style.display = 'block'
        eyeSlashSvg.style.display = 'none'
    }
})
// End Open & Close Eye Password



