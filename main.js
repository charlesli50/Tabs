// two tabs, use onclick and .hide()
// first hides 2nd tab ==> also gets hidden with css


$( document ).ready(function(){
	$( '#content2').hide()
});

// on tab1 click, hide tab 1 and show tab 2

$ ( '#tab1').click(function(){
	$( '#content2').hide()
	$( '#content1').show()
})

$ ("#submit1").click(function(){
	$( '#content1').hide()
	$( '#content2').show()
	$( '.part1').css("background-color", "#ddd")
	$( '.part1').css("color", "black")
	$( '.part2').css("background-color", "#ccc")
	$( '.part2').css("color", "#4287f5")
})

// if valid move onto part2

var form1 = $( "#form1" )


form1.validate();	
function isValid(){
	if (form1.valid() === true){
		part2()
	}
}



function part2(){
	$( '#content1').hide()
	$( '#content2').show()
	$( '.part1').css("background-color", "#ddd")
	$( '.part1').css("color", "black")
	$( '.part2').css("background-color", "#ccc")
	$( '.part2').css("color", "#4287f5")
}


$("#form1").submit(function(e) {
    e.preventDefault();
});
 