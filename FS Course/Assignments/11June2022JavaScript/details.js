
function display() {
    emailId = document.getElementById('emId').value;
    name = document.getElementById('name').value;
    password = document.getElementById('password').value;
    details ="Email Id is "+ emailId + "<br>Name is "+name +"<br>Password is: "+ password+"<br>";
    document.getElementById('display').innerHTML = '<br>Details are: <br> ' + details;
}