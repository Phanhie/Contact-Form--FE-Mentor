const contForm = document.querySelector("#contact-form");
const successMsg = document.querySelector("#success-msg");




contForm.addEventListener('submit', (e) => {
    e.preventDefault()

    
    const firstName = document.querySelector("#firstname").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector(".Email").value.trim();
    const queryType = document.querySelector('input[name=".query-type"]:checked');
    const message = document.querySelector("#message").value.trim();
    const consent = document.querySelector("#checkbox").checked;


    const formAlert = document.querySelectorAll("#form-items");

    

});

console.log(formAlert)