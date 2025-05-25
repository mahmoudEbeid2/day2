function showMessage() {
  alert("Hello from Version 2");
}

let email =document.getElementById('email');
let pass = document.getElementById('pass');
function Submit(){
  if(email.value.trim() === "" || pass.value.trim()===""  )
    {
      
    alert("InVaild Mail Or Pass")
  }else{
    console.log(email.val)
    console.log(pass.val)
  alert("Submition Successful");
  }
}