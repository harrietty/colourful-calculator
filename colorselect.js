$(document).ready(function(){

	function changeSchemeOnLoad(scheme) {

		if($("#colorselect option:selected").val() === scheme){

			// Remove all other color scheme classes from various elements
			$(".cell").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#answer").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#equals").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#point").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#clear").removeClass("ocean mountain desert woodland meadow unicorn");
			$("body").removeClass("ocean mountain desert woodland meadow unicorn");
			$("h1").removeClass("ocean mountain desert woodland meadow unicorn");
			$("h2").removeClass("ocean mountain desert woodland meadow unicorn");


			// Add the ocean class to various elements
			$(".cell").addClass(scheme);
			$("#answer").addClass(scheme);
			$("#equals").addClass(scheme);
			$("#point").addClass(scheme);
			$("#clear").addClass(scheme);
			$("body").addClass(scheme);
			$("h1").addClass(scheme);
			$("h2").addClass(scheme);

		}
	}

	changeSchemeOnLoad("ocean");
	changeSchemeOnLoad("mountain");
	changeSchemeOnLoad("desert");
	changeSchemeOnLoad("woodland");
	changeSchemeOnLoad("meadow");
	changeSchemeOnLoad("unicorn");

});


$("#colorselect").change(function() {

	function changeColorScheme(scheme) {

		if($("#colorselect").val() === scheme){

			// Remove all other color scheme classes from various elements
			$(".cell").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#answer").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#equals").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#point").removeClass("ocean mountain desert woodland meadow unicorn");
			$("#clear").removeClass("ocean mountain desert woodland meadow unicorn");
			$("body").removeClass("ocean mountain desert woodland meadow unicorn");
			$("h1").removeClass("ocean mountain desert woodland meadow unicorn");
			$("h2").removeClass("ocean mountain desert woodland meadow unicorn");


			// Add the ocean class to various elements
			$(".cell").addClass(scheme);
			$("#answer").addClass(scheme);
			$("#equals").addClass(scheme);
			$("#point").addClass(scheme);
			$("#clear").addClass(scheme);
			$("body").addClass(scheme);
			$("h1").addClass(scheme);
			$("h2").addClass(scheme);

		}
	}


	changeColorScheme("ocean");
	changeColorScheme("mountain");
	changeColorScheme("desert");
	changeColorScheme("woodland");
	changeColorScheme("meadow");
	changeColorScheme("unicorn");



});


// Add the pulsate effect to the .unicorn elements








