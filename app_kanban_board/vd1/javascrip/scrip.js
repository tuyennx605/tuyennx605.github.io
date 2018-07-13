var app = {
	newJob: function(e, type, input){
		var jobName = $(input).val();
		var event = window.event || e;
		console.log("keycode" + event.keyCode);
		if(event.keyCode===13 && jobName.trim() !=''){
			console.log("add "+ jobName);
			//up date dom
			this.addJobToList(jobName);
			//rsinput
			$(input).val('');
		}
	},
	addJobToList: function(jobName){
		var item = '<a href="#" class="list-group-item">'+jobName +'<i class="fas fa-trash-alt xoacv" onclick="app.clickDeleteJob(this)"></i> </a>';
		$('#doing').append(item);
 },
	clickDeleteJob: function (thei)
	{
		$('#myModal').modal();
		console.log(thei);
		var item = $(thei).parent();
		console.log("iiiii"+ item);
		$('#btndelete').off('click');
		$('#btndelete').on('click', function(){
			console.log(item);
			item.remove();
		});
	}
};
	
$(function(){
	console.log("vao1");
	$('.sorted-list').sortable({
		connectWith:'.sorted-list',
		// placeholder: 'ui-state-highlight',
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

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
