document.addEventListener("DOMContentLoaded", function () {
    const username = document.querySelector("#username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const password2 = document.getElementById("password2")
    const formElement = document.querySelector(".form")



    function showSuccess(input) {
        const valideynElement = input.parentElement
        valideynElement.classList.add("success")
        valideynElement.classList.remove("error")

    }

    function showError(qutu, mesaj) {
        const valideynElement = qutu.parentElement
        valideynElement.classList.add("error")
        const smallTag = valideynElement.querySelector("small")
        smallTag.innerText = mesaj
    }

    function checkEmail(elektronPoct) {
        const qayda = /^[a-zA-Z0-9]+@$/
        if(qayda.test(elektronPoct)) {
            showSuccess(elektronPoct)
        }
        else {
            showError(elektronPoct, "elektron poct standartlara uygun deyil")
        }
    }

    function checkRequired(inputlar) {
        inputlar.forEach(birInput => {
            if(birInput.value.trim() === ""){
                showError(birInput, `${getFieldName(birInput)} sahesi bos buraxila bimez!`)
            }
            else {
                showSuccess(birInput)
            }
        })
    }

    function getFieldName(textBox) {
        return textBox.id.charAt(0).toUpperCase() + textBox.id.slice(1)

    }

    function checkLength(inputlar, min, max) {
           
        
        if(input.value.length < min || input.value.length > max) {
                showError(input, `${getFieldName(input)} sahesinde minimum ${min} maksimum ${max} simvol olmalidir`)
            }
            else {
                showSuccess(input)
            }
        
    }

    function comparePassword(password, confirmPassword) {
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "shifreler uygun deyil")
        }
        else {
            showSuccess(input)
        }

    }

    formElement.addEventListener("submit", function(e) {
        e.preventDefault()


    checkLength(username, 3, 16)
    checkLength(password, 8, 13)
    checkRequired([username, email, password, password2])
    checkEmail(email)
    comparePassword(password, password2)


    })
    
    // checkRequired([username, email, password, password2])
})



function viewPassword() {
    const passwordSahesi = document.getElementById("password")
    const passwordSahesi2 = document.getElementById("password2")
    if (passwordSahesi.type === "password") {
      passwordSahesi.type = "text"
    } 
     else {
      passwordSahesi.type = "password"
    }
    if (passwordSahesi2.type === "password") {
        passwordSahesi2.type = "text"
      } 
       else {
        passwordSahesi2.type = "password"
      }
  }
  

document.querySelector("#eye1").addEventListener("click", viewPassword)
document.querySelector("#eye2").addEventListener("click", viewPassword)


document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const succes = false
    if (succes) {
      
    } 
    else {
        Toastify({
            text: "Girish ugursuz. Tekrar cehd edin",
            duration: 3000, 
            gravity: "top", 
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
        }).showToast();
    
}
});