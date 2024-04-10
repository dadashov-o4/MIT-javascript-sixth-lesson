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
    const passwordSahesi = document.getElementById("password");
    if (password.type === "password") {
      passwordSahesi.type = "text";
    } else {
      passwordSahesi.type = "password";
    }
  }

document.querySelector(".fa-eye").addEventListener("click", viewPassword)