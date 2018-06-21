$(function(){
	console.log("vao1");
	$('.sorted-list').sortable({
		connectWith:'.sorted-list',
		placeholder: 'ui-state-highlight',
		start: function(event, ui){
			//addstyle class
			$(ui.item[0]).addClass('dragging');
			console.log("vao");
		},
		stop: function(event, ui){
			//remove class
			$(ui.item[0]).removeClass('dragging');
		}
	});
});

		    $( ".sorted-list" ).sortable({
		      connectWith: ".sorted-list"
		    });
