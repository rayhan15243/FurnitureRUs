function checkData ()
   {
   
          if (document.signup.NAME.value == "")
		  {
	                   alert("Please fill in your name.")
					   document.signup.NAME.focus()
					   return false
		   }
		   
          if (document.signup.NAME.value.length < 3)
		  {
	                   alert("Name cannot be less than three characters.")
					   document.signup.NAME.focus()
					   return false
		   }
		   		   


		   
		  if (document.signup.EMAIL.value =="")
		  {
		  
		                alert("Please fill in your email address.")
						document.signup.EMAIL.focus()
						return false;
		  } 
		  
		      
			 var x=document.forms["signup"]["EMAIL"].value;
			 var atpos=x.indexOf("@");
			 var dotpos=x.lastIndexOf(".");
			 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
			   {
			   alert("Not a valid e-mail address");
			   return false;
			   }
		  if (document.signup.COMMENTS.value =="")
		  {
		                
						alert("Please type in a message.")
						document.signup.COMMENTS.focus()
						return false;
		  }
		         
		  
		  else {
		  
			return true;
		  }
		  
		  
   }