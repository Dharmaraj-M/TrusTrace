function fnameValidate(fname) {
    let namepattern = /([A-Za-z])$/;
    if (fname == "") {
        window.alert("First Name cannot be empty");
        return false;
    }
    else if (fname.match(/\d/) != null) {
        window.alert("First Name cannot have numbers");
        return false;
    }
    else if (!namepattern.test(fname)) {
        window.alert("First Name cannot have Special Characters");
        return false;
    }
    return true;
}
function lnameValidate(lname) {
    let namepattern = /([A-Za-z])$/;
    if (lname == "") {
        window.alert("Last Name cannot be empty");
        return false;
    }
    else if (lname.match(/\d/) != null) {
        window.alert("Last Name cannot have numbers");
        return false;
    }
    else if (!namepattern.test(lname)) {
        window.alert("Last Name cannot have Special Characters");
        return false;
    }
    return true;
}
function ageValidate(age) {
    if (age == "") {
        window.alert("Age cannot be empty");
        return false;
    }
    else if (age.length != 2) {
        window.alert("Age must be 10 to 99");
        return false;
    }
    return true;
}
function emailValidate(email) {
    let mailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == "") {
        window.alert("Email cannot be empty");
        return false;
    }
    else if (!mailpattern.test(email)) {
        window.alert("Email format is Invalid");
        return false;
    }
    return true;
}
function phone1Validate(phone1) {
    if (phone1 == "") {
        window.alert("Phone first part cannot be empty");
        return false;
    }
    else if (phone1.length != 3) {
        window.alert("Phone first part length must be 3");
        return false;
    }
    return true;
}
function phone2Validate(phone2) {
    if (phone2 == "") {
        window.alert("Phone middle part cannot be empty");
        return false;
    }
    else if (phone2.length != 3) {
        window.alert("Phone middle part length must be 3");
        return false;
    }
    return true;
}
function phone3Validate(phone3) {
    if (phone3 == "") {
        window.alert("Phone last part cannot be empty");
        return false;
    }
    else if (phone3.length != 4) {
        window.alert("Phone last part length must be 4");
        return false;
    }
    return true;
}
function addressValidate(address) {
    if (address == "") {
        window.alert("Address cannot be empty");
        return false;
    }
    if (address.length < 15) {
        window.alert("Address Length must be greater than 15");
        return false;
    }
    return true;
}
function zipcodeValidate(zipcode) {
    if (zipcode == "") {
        window.alert("Zip Code cannot be empty");
        return false;
    }
    else if (zipcode.length != 6) {
        window.alert("Zip Code length must be 6");
        return false;
    }
    return true;
}
function validate() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let phone1 = document.getElementById("phone1").value;
    let phone2 = document.getElementById("phone2").value;
    let phone3 = document.getElementById("phone3").value;
    let address = document.getElementById("address").value;
    let zipcode = document.getElementById("zipcode").value;
    if (fnameValidate(fname) != true || lnameValidate(lname) != true || ageValidate(age) != true || emailValidate(email) != true || phone1Validate(phone1) != true || phone2Validate(phone2) != true || phone3Validate(phone3) != true || addressValidate(address) != true || zipcodeValidate(zipcode) != true) {
        return false;
    }
    document.getElementById("hiddenaddress").value = document.getElementById("address").value;
    return true;
}