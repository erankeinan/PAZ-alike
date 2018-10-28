function search(){
    alert("Search now...");
}

function documentReady() {
var imgNo=1;

    

    
    function clhangeImg(){  
    
        if(imgNo==1){
            document.getElementById("img1").src="./images/250X110668568400.jpg";
            document.getElementById("img2").src="./images/banner_atar.jpg";
            imgNo=2
            }
            else{
                document.getElementById("img1").src="./images/paz_250x110059890678.jpg"
                document.getElementById("img2").src="./images/paz_250x110103131473.jpg"
                imgNo=1;k
                }   
   
    }

    setInterval(clhangeImg, 10000);
    
}



function ValidateEmail()
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("email").value.match(mailformat))
        {
            validateEmailSize();
        }
    else
    {
        window.alert("You have entered an invalid email address!");
        document.getElementById("email").value = "";
    }
}


function subValidateFields(){

    var x=1;

    if (document.getElementById("firstName").value.length == 0)
    {
        window.alert("Name is a required field. Please fill it.")
        x=0;
    }
    else if (document.getElementById("lastName").value.length ==0)
        {
            window.alert("Last Name is a required field. Please fill it.")
            x=0;
        }
        else if (document.getElementById("email").value.length ==0)
            {
                window.alert("Email is required field. Please fill it.")
                x=0;
            } 
            else if (document.getElementById("phone").value.length ==0)
                {
                    window.alert("Phone number is required field. Please fill it.")
                    x=0;
                }    
    return x;
  }

  function formSubmitted() {
    var x=0;
    x=subValidateFields();
    // alert("x:" +x);
    if (x==1)
        {
        window.alert ("Form submitted");
            
        var emailValue = document.getElementById("email").value;
        var fname = document.getElementById("firstName").value;
        var lname=document.getElementById("lastName").value;
        alert("First Name: " + fname + " Last Name: " + lname +  " Email: "+emailValue +  ", You have submited the form");
        }
  }


  function validateFNameSize(){

    if(document.getElementById("firstName").value.length>30)
    {
        alert("Name size is too big. It must be below 31 chars");
        document.getElementById("firstName").value = "";
    }  
    else{
            updateRangeValue();
        }
  }

  function validateLNameSize(){

    if(document.getElementById("lastName").value.length>30)
    {
        alert("Name size is too big. It must be below 31 chars");
        document.getElementById("lastName").value = "";
    }  
    else{
            updateRangeValue();
        }
  }

  function validatePhone(){
//digits only and add check on up to 10 digits only 

  }