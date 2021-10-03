//take completed form and send to email

const submitForm = function() {
    let responses = [];


    responses.push(document.getElementById("userName").value);
    responses.push(document.getElementById("userEmail").value);  
    responses.push(document.getElementById("message").value);  
    responses.forEach(element => { console.log(element)});
    
    window.alert("Form Completed.");

}