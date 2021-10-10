	
$(document).ready(function() {
let button= document.getElementById("start-btn");
let text= document.getElementById("text");
let message= document.getElementById("message");
let result= document.getElementById("result");
let startTime, endTime;

text.disabled=true;

const SetofWords= [ 
"	JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.",

"   Javascript helps you create really beautiful and crazy fast websites. You can develop your website with a console like look and feel and give your users the best Graphical User Experience. ",

"   JavaScript usage has now extended to mobile app development, desktop app development, and game development. This opens many opportunities for you as Javascript Programmer." ,

"   Client side validation - This is really important to verify any user input before submitting it to the server and Javascript plays an important role in validting those inputs at front-end itself.",

"   Manipulating HTML Pages - Javascript helps in manipulating HTML page on the fly. This helps in adding and deleting any HTML tag very easily using javascript and modify your HTML to change its look and feel based on different devices and requirements.",

"   User Notifications - You can use Javascript to raise dynamic pop-ups on the webpages to give different types of notifications to your website visitors.",

"   The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk.",

"   Back-end Data Loading - Javascript provides Ajax library which helps in loading back-end data while you are doing some other processing. This really gives an amazing experience to your website visitors.",

"   Presentations - JavaScript also provides the facility of creating presentations which gives website look and feel. JavaScript provides RevealJS and BespokeJS libraries to build a web-based slide presentations",

"   Server Applications - Node JS is built on Chrome's Javascript runtime for building fast and scalable network applications. This is an event based library which helps in developing very sophisticated server applications including Web Servers"
];


const start = () => {
let index= Math.floor(Math.random()*SetofWords.length);
$("#message").html(SetofWords[index]);
let date= new Date();
startTime = date.getTime();
}

const end= () => {
	let date= new Date();
	let endTime= date.getTime();
	let timeTaken= (endTime-startTime-800)/1000;
	console.log(timeTaken);

	let totalWords= (message.innerText.split(" ")).length;
	if((text.value.trim()).length>0)
	{
		var wordsCount= (text.value.split(" ")).length;
	}
	else {
		var wordsCount=0;
	}

	console.log(totalWords+ " "+wordsCount+message.innerText);
	
	let speed= Math.round(((60/timeTaken)*wordsCount));

	let correctWords=accuracy(text.value,message.innerText);
	console.log('Total Words:'+wordsCount+ 'Correct Words:'+correctWords);
	

	$("#result h4").html(`Speed:  ${speed} wpm <br> 
						Words Typed: ${wordsCount}  <br> 
						Correct Words: ${correctWords} <br> 
						Accuracy:	${Math.round((correctWords/wordsCount)*100)}%`);
	$("#message").html("Text will appear here once you click on Start");
	$("#text").prop("disabled",true);
}

const accuracy = (str,message) => {

message=(message.split(" "));
let count=0;
console.log(message);
 str.trim().split(" ").forEach(function (item) { 
            console.log("item: "+item+ message.indexOf(item)); 
            if(message.indexOf(item) > -1)
            	count++;
         
        }); 
 return count;
}


button.addEventListener('click',function(){
		console.log("Clicked ");
	if(this.innerText === "Start")
	{	
		$("textarea").val("");
		console.log('Started');
		this.innerText="Stop";
		$("#result").fadeOut();
		$("#text").prop("disabled",false);
		start();

	}
	else
	{	
		$("#result").fadeIn();
		console.log('Stopped');
		$(this).html("Start");
		end();
		

	}
});


	
});

