const barsEl = document.querySelector(".bars");
const linkItemEl = document.querySelector(".link-item");
const formEl = document.querySelector("form");
const previewEl = document.querySelector(".preview");
const fName = document.getElementById("fname");
const mName = document.getElementById("mname");
const lName = document.getElementById("lname");
const momName = document.getElementById("mothername"); 
const dadName = document.getElementById("fathername");
const mobNo = document.getElementById("mob");
// document.querySelector('input[name="gender"]:checked')

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const email = document.getElementById("email_id");
const pwd = document.getElementById("password");
const conpwd = document.getElementById("conpassword");
const user = document.getElementById("user");
const roll = document.getElementById("roll");
const course = document.getElementById("course");
const clg = document.getElementById("clgname");
const university = document.getElementById("university");
const city = document.getElementById("city");
const state = document.getElementById("state");
const pin = document.getElementById("pin");
const photo = document.getElementById("photo");



// for mobile device Control 
barsEl.addEventListener("click", () => {
    linkItemEl.classList.toggle("block")
})


// Set Error Message 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}

// Set Success Message 
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
};

photo.onchange = evt => {
    const [file] = photo.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }
// form bydefault submit Stop 
// formEl.addEventListener("submit", (event) => {
//     event.preventDefault();

    
// });


// preview the form 
formEl.addEventListener("submit", (event) => {
// console.log(gender.value) 
event.preventDefault();


    const firstName = fName.value;
    const lastName = lName.value;
    const momNameEl = momName.value;
    const dadNameEl = dadName.value;
    const mobNoEl = mobNo.value;
    // const genderEl = document.forms['myForm']['gender'];
    const gender = document.getElementsByName('gender');
    let monthValue = month.value;
    const dayEl = day.value;
    const yearEl = year.value;
    const dob = `${dayEl} ${monthValue} ${yearEl}`
    const emailEl = email.value;
    const pwdEl = pwd.value;
    const conpwdEl = conpwd.value;
    const userEl = user.value;
    const rollEl = roll.value;
    const courseEl = course.value;
    const clgEl = clg.value;
    const universityEl = university.value;
    const cityEl = city.value;
    const stateEl = state.value;
    const pinCode = pin.value; 
    const photoEl = photo.value;   
    const tc = document.getElementById("tc");
    
    // if(dayEl === ''){
    //     // setError(day, "day")
    //     console.log('error')
    // }else{
    //     // setSuccess(day)
    //     console.log(dob)
    // }

    const isPhone = /^[6789][0-9]{9}$/;
    const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    
    if(firstName === '') {
        fName.classList.add('is-invalid');
        setError(fName, 'First Name is required');
    } else {
        setSuccess(fName);
        fName.classList.remove('is-invalid');
        fName.classList.add('is-valid');
    }

    if(lastName === '') {
        lName.classList.add('is-invalid');
        setError(lName, 'Last Name is required');
    } else {
        setSuccess(lName)
        lName.classList.remove('is-invalid');
        lName.classList.add('is-valid');
    }

    if(momNameEl === '') {
        momName.classList.add('is-invalid');
        setError(momName, `Mother's Name is required`);
    } else {
        setSuccess(momName);
        momName.classList.remove('is-invalid');
        momName.classList.add('is-valid');
    }

    if(dadNameEl === '') {
        dadName.classList.add('is-invalid');
        setError(dadName, `Father's Name is required`);
    } else {
        setSuccess(dadName);
        dadName.classList.remove('is-invalid');
        dadName.classList.add('is-valid');
    }

    if(!isPhone.test(mobNoEl)) {
        mobNo.classList.add('is-invalid');
        setError(mobNo, 'Mobile No. is Invalid');
    } else {
        setSuccess(mobNo);
        mobNo.classList.remove('is-invalid');
        mobNo.classList.add('is-valid');
    }

    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked){
            console.log(gender[i].value)
        }
    }
  
    // if(dayEl === '') {
    //     day.classList.add('is-invalid');
    //     setError(day, `Day is required`);
    // } else {
    //     console.log(dayEl);
    //     day.classList.remove('is-invalid');
    //     day.classList.add('is-valid');
    // }

    if(!isEmail.test(emailEl)) {
        email.classList.add('is-invalid');
        setError(email, 'Email is Invalid');
    } else {
        setSuccess(email);
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    if(pwdEl === '') {
        pwd.classList.add('is-invalid');
        setError(pwd, 'Password is required');
    } else {
        setSuccess(pwd);
        pwd.classList.remove('is-invalid');
        pwd.classList.add('is-valid');
    }

    if(conpwdEl === '') {
        conpwd.classList.add('is-invalid');
        setError(conpwd, 'Confirm Password is required');
    } else {
        setSuccess(conpwd);
        conpwd.classList.remove('is-invalid');
        
    }

    if(pwdEl !== conpwdEl){
        conpwd.classList.add('is-invalid');
        setError(conpwd, 'Confirm Password is not match');
    }else{
        setSuccess(conpwd);
        conpwd.classList.add('is-valid');
    }

    if(userEl === '') {
        user.classList.add('is-invalid');
        setError(user, 'User Name is required');
    } else {
        setSuccess(user);
        user.classList.remove('is-invalid');
        user.classList.add('is-valid');
    }

    if(rollEl === '') {
        roll.classList.add('is-invalid');
        setError(roll, 'Roll No. is required');
    } else {
        setSuccess(roll);
        roll.classList.remove('is-invalid');
        roll.classList.add('is-valid');
    }

    if(courseEl === '') {
        course.classList.add('is-invalid');
        setError(course, 'Course is required');
    } else {
        setSuccess(course);
        course.classList.remove('is-invalid');
        course.classList.add('is-valid');
    }

    if(clgEl === '') {
        clg.classList.add('is-invalid');
        setError(clg, 'College is required');
    } else {
        setSuccess(clg);
        clg.classList.remove('is-invalid');
        clg.classList.add('is-valid');
    }

    if(universityEl === '') {
        university.classList.add('is-invalid');
        setError(university, 'University is required');
    } else {
        setSuccess(university);
        university.classList.remove('is-invalid');
        university.classList.add('is-valid');
    }

    if(cityEl === '') {
        city.classList.add('is-invalid');
        setError(city, 'City is required');
    } else {
        setSuccess(city);
        city.classList.remove('is-invalid');
        city.classList.add('is-valid');
    }

    if(stateEl === '') {
        state.classList.add('is-invalid');
        setError(state, 'State is required');
    } else {
        setSuccess(state);
        state.classList.remove('is-invalid');
        state.classList.add('is-valid');
    }

    if(pinCode === '') {
        pin.classList.add('is-invalid');
        setError(pin, 'Pin Code is required');
    } else {
        setSuccess(pin);
        pin.classList.remove('is-invalid');
        pin.classList.add('is-valid');
    }

    if(photoEl === '') {
        photo.classList.add('is-invalid');
        setError(photo, 'Photo is required');
    } else {
        setSuccess(photo);
        photo.classList.remove('is-invalid');
        photo.classList.add('is-valid');
    }

    if(!tc.checked) {
        setError(tc, 'Accept T&C');
    } else {
        setSuccess(tc);
        console.log('checked')
        
    }
   if(firstName, lastName, momNameEl, dadNameEl,conpwdEl,userEl, rollEl, courseEl, clgEl, universityEl, cityEl, stateEl, pinCode, photoEl === ''){
    return false
   }else if (!isPhone.test(mobNoEl), !isEmail.test(emailEl), !tc.checked){
    return false
   } else if(pwdEl !== conpwdEl){
    return false;
   } else {
    alert('Form Validate SuccessFully.......🔥🔥🔥🔥🔥🔥🔥🔥')
   }


})




