const barsEl = document.querySelector(".bars");
const linkItemEl = document.querySelector(".link-item");
const formEl = document.querySelector("form");
const previewEl = document.querySelector(".preview");
let fName = document.getElementById("fname");
let mName = document.getElementById("mname");
let lName = document.getElementById("lname");
let momName = document.getElementById("mothername");
let dadName = document.getElementById("fathername");
let mobNo = document.getElementById("mob");
let gender = document.getElementsByName("gender");
let dayEl = document.getElementById("day");
let monthEl = document.getElementById("month");
let yearEl = document.getElementById("year");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let pwd = document.getElementById("password");
let conpwd = document.getElementById("conpassword");
let user = document.getElementById("user");
let roll = document.getElementById("roll");
let course = document.getElementById("course");
let clg = document.getElementById("clgname");
let universityEl = document.getElementById("university");
let cityEl = document.getElementById("city");
let state = document.getElementById("state");
let pin = document.getElementById("pin");
let photo = document.getElementById("photo");
let tc = document.getElementById("tc");


console.log(gender)
// for mobile device Control 

barsEl.addEventListener("click", () => {
    linkItemEl.classList.toggle("block")
})

// form bydefault submit Stop 
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
});

// preview the form 
previewEl.addEventListener("click", () => {
    // if(fName){
    //     alert("sorry");
    // }else{
        document.getElementById("fullName").innerHTML = `${fName.value} ${mName.value} ${lName.value} `;
    // }
    document.getElementById("motherName").innerHTML = momName.value;
    document.getElementById("fatherName").innerHTML = dadName.value;
    document.getElementById("phone").innerHTML = mobNo.value;

    // gender Checking       
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
        document.getElementById("genderEl").innerHTML = gender[i].value;
    }

    document.getElementById("dobEl").innerHTML = `${dayEl.value} ${monthEl.value} ${yearEl.value}`;

    
    document.getElementById("emailId").innerHTML = email.value;

    // password Verifying
    if(pwd.value === conpwd.value && pwd.value != ""){
        document.getElementById("passwordEl").innerHTML = pwd.value;
    }else{
        alert("Please Enter Same Password");
    }

    document.getElementById("conpassword").innerHTML = conpwd.value;
    document.getElementById("userName").innerHTML = user.value;
    document.getElementById("rollNo").innerHTML = roll.value;
    document.getElementById("courseName").innerHTML = course.value;
    document.getElementById("clgName").innerHTML = clg.value;
    document.getElementById("uinversityName").innerHTML = universityEl.value;
    document.getElementById("cityName").innerHTML = cityEl.value;
    document.getElementById("stateName").innerHTML = state.value;
    document.getElementById("pinCode").innerHTML = pin.value;
    // let userPhoto = photo.value;
    // let t_c = tc.value;

    console.log(universityEl.value)


})