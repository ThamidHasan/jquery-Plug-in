$(document).ready(function(){

	//fadeIn
	$('.hide').click(function(){
		$('#img3').fadeOut("1000");
	});

	//fadeOut
	$('#show').click(function(){
		$('#img3').fadeIn("1000");
	});

	//fadeToggle
	$('#toggle').click(function(){
		$('#img3').fadeToggle("");
	});
	//fadeTo
	$('#to').click(function(){
		$('#img3').fadeTo(1000,.5);
	});
	//SlideToggle
	$('.title').click(function(){
		$('.content').slideToggle();
	});
	//dragable
    $( "#dragable" ).draggable();
 	
 	//Dropable
 	$( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    }); 
    // Selectable
    $( "#selectable" ).selectable();
    // Sortable
    $( "#sortable" ).sortable();
    // Accordion
    $( "#accordion" ).accordion({
      collapsible: true
    });
    // Auto Complete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    // Progress Bar
    $( "#progressbar" ).progressbar({
      value: 50
    });
});