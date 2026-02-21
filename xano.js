function validate(){
const myform=document.getElementById('myform');
const name=document.getElementById('name').value.trim();
const 


if (name==="") {
    alert("Name can't be empty!");
    return false;
}
return true
}