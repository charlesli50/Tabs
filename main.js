// two tabs, use onclick and .hide()
// first hides 2nd tab ==> also gets hidden with css


$( document ).ready(function(){
	$( '#content2').hide()
});

// on tab1 click, hide tab 1 and show tab 2

// if valid move onto part2

var form1 = $( "#form1" )

// part 1 validation

form1.validate();	
function isValid(){
	if (form1.valid() === true){
		part2()
		display(form1)
	}
}

// move to part 2

function part2(){
	$( '#content1').hide()
	$( '#content2').show()
	$( '.part1').css("background-color", "#ddd")
	$( '.part1').css("color", "black")
	$( '.part2').css("background-color", "#ccc")
	$( '.part2').css("color", "#4287f5")
}

// prevent reload on submit
$("form").submit(function(e) {
    e.preventDefault();
});
 

//part 2 validation

var form2 = $('#form2')

form2.validate();



function isValid2(){
	if (form2.valid() === true){
		display(form2);
	}
}

var info = []

function display(form) {
	data = form.serializeArray()
	console.log(data)
	info += (JSON.stringify(data))
	$("#info").html(info)
}
