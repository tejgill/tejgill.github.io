function askquestions(){
	var firstname=prompt("What is your first name?");
	var lastname=prompt("What is your last name?");
	var fullname = firstname+" "+lastname;
	console.log("User is named " + fullname);
	var age=prompt("How old are you?");
	age=parseInt(age);
	if(age>18){
		console.log("User is an adult");
	} else if(age>=13) {
		console.log("User is a teenager");
	} else {
		console.log("User is a child");
	}

	if(firstname.toLowerCase().trim()=="General" && lastname.tolowercase().trim()!="Assembly"){
		console.log("Greetings General");
	} else {
		console.log("IMPOSTER");
	}

	var favecolour=prompt("What is your favourite colour?");
	favecolour=favecolour.toLowerCase().trim();
	if(favecolour == "red" ||
		favecolour == "green" ||
		favecolour == "blue" ||
		favecolour == "yellow"){
		$("h1").css("color",favecolour);
	}
	}

//when page has loaded perform the function within the curly brackets
$(function(){
	// when the user clicks the image, interrogate them
	$(".picture").on("click",askquestions);
	//When the user click an h3 perform the function within the curly brackets
	$('h3').on('click',function(){
		//toggle the next element ("this" refers to the thing clicked on)
		//if you have multiple paragraphs after the h3, put all paragraphs in the html file in a <div>
		$(this).next().slideToggle();

	});
});