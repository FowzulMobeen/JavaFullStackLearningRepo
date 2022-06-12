//DOM Manipulation
document.getElementById('message').innerHTML='This is from DOM inner html';
console.log('hello from external js');
function addNumbers()
{
    var a=Number(document.getElementById('FN').value);
    var b=Number(document.getElementById('SN').value);
    var c=a+b;
    console.log('Added Result is :'+c);
    alert('Result is'+c);
    document.getElementById("result").innerHTML='Result is '+c;
}