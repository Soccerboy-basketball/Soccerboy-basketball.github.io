function validateForm() {
	var isValid = 1;
	
    if(document.getElementById("name").value.length < 1 ){
	   isValid = 0;
    }
	
	var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (!re.test(document.getElementById("email").value)) {
	   isValid = 0;
    }
	
	re = /\d\d\d-\d\d\d-\d\d\d\d/;
  var reg=/\(\d\d\d\)\s?\d\d\d\s?-?\s?\d\d\d\d/;
	if (!re.test(document.getElementById("phone").value) && !reg.test(document.getElementById("phone").value)) {
	   isValid = 0;
    }
	
	if(isValid){
	   alert("Thank you, we'll get back to you as soon as possible!");
    }
	else {
		alert("Please fill out all required fields correctly.");
	}
 }
 
 


document.getElementById("submit").addEventListener("click", function(event) {
    validateForm();
    event.preventDefault();
});

