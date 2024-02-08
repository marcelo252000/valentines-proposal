function answer(event) {
    console.log(event.value)

    if(event.value === 'Yes') {
        document.getElementById("gif").src="yes.gif";
        document.getElementById("question").innerHTML="YAAAAAYYY";
        document.getElementById("answer").remove()
    }
    else if(event.value === 'No') {
        document.getElementById("gif").src="no.gif";
        document.getElementById("question").innerHTML="ANSWER &nbsp; AGAIN";
        document.getElementById("no-answer").remove()

    }
}