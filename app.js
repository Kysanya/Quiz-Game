// Questions

const Questions = [
	{
		id:0,
		q: "How do we greet each other in the morning?",
		answer: [{text: "Good Afternoon", isCorrect: false},
		         {text: "Good Morning", isCorrect: true}
	]
},

{
	id:1,
	q: "How do we greet each other in the afternoon?",
	answer: [{text: "Good Morning", isCorrect: false},
			     {text: "Good Afternoon", isCorrect: true}
]
},

{
	id:2,
	q: "Why do we go to school?",
	answer: [{text: "To Learn", isCorrect: true},
			     {text: "To Sleep", isCorrect: false}
]
},

{
	id:3,
	q: "We write using a ",
	answer: [{text: "Pencil", isCorrect: true},
			     {text: "Ruler", isCorrect: false}
]
},

{
	id:4,
	q: "We write in a ?",
	answer: [{text: "Desk", isCorrect: false},
			     {text: "Book", isCorrect: true}
]
}

]

// How To access different things of the array
// Accessing question text => Question[id].text, accessing first choice => Question[id].answer[0].text, Knowing the correct answer => Question[id].anwer[0].isCorrect
// id changes depending on the question number


// starting the program
let start = true;


// Populating Questions and answers into the divs
const handlesEvaluation = (id) => {
	// Result display section
	let result = document.getElementsByClassName('result');
	result[0].innerText = "";

	//Populating questions
	const question = document.getElementById('question');
	question.innerText = Questions[id].q;

	//Populating the options
	const choice1 = document.getElementById('opt1');
	const choice2 = document.getElementById('opt2');

	//Getting the option text
	choice1.innerText = Questions[id].answer[0].text;
	choice2.innerText = Questions[id].answer[1].text;

	//Setting true or false values
	choice1.value = Questions[id].answer[0].isCorrect;
	choice2.value = Questions[id].answer[1].isCorrect;

	// selected choice

	let selected = "";

	// show choice for first answer
	choice1.addEventListener("click", () => {
		choice1.style.backgroundColor = "white";
		choice2.style.backgroundColor = "linen";
		selected = choice1.value;
	})

	// show choice for second answer
	choice2.addEventListener("click", () => {
		choice1.style.backgroundColor = "linen";
		choice2.style.backgroundColor = "white";
		selected = choice2.value;
	})


	// Evaluation process
	const evaluation = document.getElementsByClassName('evaluate');
	evaluation[0].addEventListener("click", () => {
		if (selected == "false") {
			result[0].innerHTML = "Wrong Answer, Please try again";
			result[0].style.color = "red";
			setTimeout(() => {
				result[0].innerText = "";
				selected = "";
			}, 2000);
			return Questions[id].q;
		} else {
			result[0].innerHTML = "Correct Answer, Good work!"
			result[0].style.color = "green";
			setTimeout(() => {
				result[0].innerText = "";
				selected = "";
			}, 2000);
			const next = document.getElementsByClassName('next')[0].disabled = false;
		}
	})

}

const handlesNextButton = () => {
	const next = document.getElementsByClassName('next')[0];
	let id = 0;
	next.disabled = true;

	next.addEventListener("click", () => {
		start = false;
		next.disabled = true;
		if (id < 4) {
			id++;
			handlesEvaluation(id);
		}else {
			return window.location.assign("/end.html");
		}

	})
}


if (start) {
	handlesEvaluation(0);
	handlesNextButton();
}
