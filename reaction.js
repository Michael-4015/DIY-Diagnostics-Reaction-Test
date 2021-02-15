
  var scriptURL = 'https://script.google.com/macros/s/AKfycbwTyhITsooZVhWcQbtJ5lwWLw6CW1uwuNouV5Pw4SkZQKPdXGHj/exec'
  const form = document.forms['chalder']
  
  
  function restTest() {
    scriptURL = 'https://script.google.com/macros/s/AKfycbwTyhITsooZVhWcQbtJ5lwWLw6CW1uwuNouV5Pw4SkZQKPdXGHj/exec';
    location.assign("#disclaimer");

  }
  function fatigueTest() {
    scriptURL = 'https://script.google.com/macros/s/AKfycbyeayo8NqtebfrjEeaR_GeGUHBWfKbSGydaO7L9fWzxpcgxIFec/exec';
    location.assign("#disclaimer");
  }

  function toInstructions() {
    location.assign("#instructions");

  }
	
  
  
  
  function submitForm() {
	  form.addEventListener('submit', e => {
    		e.preventDefault()
    		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      		.then(response => console.log('Success', response))
      		.catch(error => console.error('Error!', error.message))
  	})
  }
	function agreed() {
		var checkBox = document.getElementById("myCheck");
		var button = document.getElementById("moveOn1");
		if (checkBox.checked == true) {
			button.disabled = false; 
		} else {
			button.disabled = true;
		}
	}

  var numTests = 20; 	
  var numTimes = 0;
  var avgTime = 0;	
  var box = document.getElementById("box");
	
  
  
  
 function myFunction() {
    numTimes = 0;
    avgTime = 0; 
    location.assign("#two");
    makeBox(); 
 }	
  
  
  function setBox() {
     var yCoord = (Math.random() * (window.innerHeight - 75));
     var xCoord = (Math.random() * (window.innerWidth - 75));					
     box.style.top = yCoord + "px";
     box.style.left = xCoord + "px";			
     box.style.display="block";
     createdTime=Date.now();
  } 
		
		
  var clickedTime; 
  var createdTime;
  var reactionTime; 
		
  function makeBox() {
     var time=Math.random();
     time=time*3000;		
     setTimeout(setBox, time); 		
  }
	
  function clickCircle() {
     numTimes++;
     clickedTime=Date.now();			
     reactionTime=(clickedTime-createdTime)/1000;
     times.push(reactionTime);
     avgTime = avgTime + reactionTime;   
     box.style.display="none";			
     
  }
			
  box.onclick=function() {
     if (numTimes == (numTests - 1)) {
	 clickCircle();
	 location.assign("#three");
	 avgTime = avgTime / numTests;
	 document.getElementById("test").value = avgTime;
     } else {
        clickCircle();
	makeBox();
     }
  }
let btn = document.getElementById("submit");
var elements = document.getElementById("chalder");
var total = 0;
btn.onclick = function() {
	var result = elements.checkValidity();
        submitForm();
        location.assign("#results");
}

let btn2 = document.getElementById("submit2");
btn2.onclick = function() {
	location.assign("#thanks");
}

const reviewSheet = 'https://script.google.com/macros/s/AKfycbxNy5orFR8qWIpLOnw0LEtMk6jnJgOM77QBPE5B10idWz7uTDbg/exec';
const review = document.forms['feedback'];
	
review.addEventListener('submit', e => {
    e.preventDefault()
    fetch(reviewSheet, { method: 'POST', body: new FormData(review)})
      .then(response => console.log('yay', response))
      .catch(error => console.error('Error!', error.message))
  })
	


  
	
	  
