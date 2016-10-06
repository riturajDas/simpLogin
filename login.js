$(document).ready(function() {
	$("#name").click(superplaceholder({	//SUPERPLACEHOLDERJS by Kushagra Gour. Check it out!
		el:document.querySelector("#name"),
		sentences:["Alok Nath", "Tony Stark", "Donald Trump"],
		options: {
			letterDelay:100,
			sentenceDelay:1000,
			startOnFocus:true,
			loop:true,
			shuffle:false,
			showCursor:true,
			cursor:"|"
		}
	}));
	$("#pwd").click(superplaceholder({
		el:document.querySelector("#pwd"),
		sentences:["haldichandan123", "31011995", "suresh<3sheila"],
		options: {
			letterDelay:100,
			sentenceDelay:1000,
			startOnFocus:true,
			loop:true,
			shuffle:false,
			showCursor:true,
			cursor:"|"
		}
	}));
});
