let myform = document.querySelector("#myform")
let name1 = document.querySelector("#name")

let email1 = document.querySelector("#email")

let pass = document.querySelector("#pass")

let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")

myform.addEventListener("submit" , function (event) {
    event.preventDefault()
    let isvalid = true ;
    let check = name1.value
    let pattern = /^[A-Za-z ]+$/
    if(check.trim() === ""){
        p1.innerText = "*Name is Required*"
        isvalid = false ;
    } else if (!pattern.test(check.trim())){
        p1.innerText = "Name is invalid"
        isvalid = false ;
    }
    else {
        p1.innerText = ""
    }
     let check1 = email1.value
    let pattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(check1.trim() === "") {
        p2.innerText = "*Email is Required*"
        isvalid = false ;
    } else if(!pattern1.test(check1.trim())){
        p2.innerText = "Email is invalid"
        isvalid = false
    }
     else {
        p2.innerText = ""
    }
    let check2 = pass.value
    let pattern2 = /^.{6,}$/;
    if(check2.trim() === ""){
        p3.innerText = "*Password is Required*"
        isvalid = false ;
    }else if (!pattern2.test(check2.trim())){
        p3.innerText = "password is invalid"
        isvalid = false
    }
    else {
        p3.innerText = ""
    }
    let sex = document.querySelector("#success")
    if(isvalid === true) {
        name1.value = ""
        email1.value = ""
        pass.value = ""
        sex.innerText = "Registration Successful!"
        hint.innerText = ""
    } else {
        sex.innerText =""
    }
})


    name1.addEventListener("input" , function () {
        p1.innerText = ""
    })

    email1.addEventListener("input" , function () {
        p2.innerText = ""
    })

    pass.addEventListener("input" , function () {
        p3.innerText = ""
    })

let btnshow = document.querySelector("#togglepass")
let eyeIcon = btnshow.querySelector("i")

btnshow.addEventListener("click" , function () {
    if(pass.type === "password"){
        pass.type ="text"
        eyeIcon.classList.remove("fa-eye")
        eyeIcon.classList.add("fa-eye-slash")
    }else {
        pass.type ="password"
        eyeIcon.classList.add("fa-eye")
        eyeIcon.classList.remove("fa-eye-slash")
    }
})

let hint = document.querySelector("#hint")

pass.addEventListener("input" , function() {
    let word = pass.value.trim()
    if(word.length === 0){
        hint.innerText = ""
        hint.style.color = ""
    }
    else if(word.length >= 0  && word.length <= 5){
        hint.innerText = "Weak Password"
        hint.style.color = "red"
    }
    else if (word.length >= 6 && word.length <= 9) {
        hint.innerText = "Medium Password"
        hint.style.color = "orange"
    }

    else if (word.length >= 10) {
        hint.innerText = "strong Password"
        hint.style.color = "green"
    }
})