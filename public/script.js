//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.getElementById('form-modal').addEventListener('submit', (e) => {
    document.querySelectorAll('input[class="form-control"]').forEach((elem) => {
        if (elem.value == "") {
            elem.parentNode.classList.add('form-group-valid');
            e.preventDefault();
        } else {
            elem.parentNode.classList.remove('form-group-valid');
        }
    })
    if (document.querySelector('textarea').value == "") {
        document.querySelector('textarea').parentNode.classList.add('form-group-valid');
        e.preventDefault();
    } else {
        document.querySelector('textarea').parentNode.classList.remove('form-group-valid');
    }
})