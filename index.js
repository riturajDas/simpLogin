$(document).ready(function() {
	$("#name").click(superplaceholder({	//SUPERPALCEHOLDERJS by Kushagra Gour. check it out!
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
	$("#email").click(superplaceholder({
		el:document.querySelector("#email"),
		sentences:["sanskar_101@email.com", "tony@starkind.com", "i_h8_mexico@dtrump.com"],
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
	$("#btn1").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var pw = $("#pwd").val();
        if(!name)
            {
              alert("Please enter your Name !");
            }
        else if(name.match(/^\s/))
            {
              alert("Please do not enter SPACE character first !");
              document.getElementById("names").innerHTML = email.trim();
            }
        else if(!email)
            {
              alert("Please enter your E-mail address !");
            }
        else if(!email.match(/@/))
            {
              alert("Please enter a valid E-mail ");
            }
        else if(!pw)
            {
              alert("Please Enter your Password !");
            }
        else if(pw.length < 6)
            {
              alert("Please enter atleast 6 characters !");
            }
        else
            {
              alert("You have registered successfully !");
            }
    });
});
