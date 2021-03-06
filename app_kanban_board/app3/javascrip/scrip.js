var COLUMN_TYPE = ['todo', 'doing', 'done'];
var MAX_COLUMN = [10, 10, 1000];

var DB = {
	getData: function(){
		if (typeof(Storage) !== "undefined") {	//kiem tra trinh duyet ho tro storate ko
    // Code for localStorage/sessionStorage.
    		var data;
    		try{
    			data = JSON.parse(localStorage.getItem('list') || {});
    		}catch(err)
    		{
    			data = {};
    		}
    		return data;
		} else {
		    alert("sorry! no web storage support");
		    return {};
		}
	},
	setData: function(data){
		localStorage.setItem('list', JSON.stringify(data));
		setCoundata();
	}
};

var list1 = DB.getData();

var app = {
	newJob: function(e, type, input){
		var jobName = $(input).val();
		var event = window.event || e;
		console.log("keycode" + event.keyCode);
		if(event.keyCode===13 && jobName.trim() !=''){
			console.log("add "+ jobName);

			if(!list1[type])
			{
				 list1[type] = [];
				 console.log("vao day 4646" + list1);
			}
			if(list1[type].length >= MAX_COLUMN[COLUMN_TYPE.indexOf(type)] )
			{
				console.log("ko dc them nua: full: " +  MAX_COLUMN[COLUMN_TYPE.indexOf(type)] + "length: "+ list1[type].length);
				$(input).val('');
				alert('full');
				return;
			}

			list1[type].push(jobName);
			DB.setData(list1);

			//up date dom
			this.addJobToList(type, jobName);
			//rsinput
			$(input).val('');
		}
	},
	addJobToList: function(type, jobName){
		var item = '<a href="#" class="list-group-item">'+jobName +'<i class="fas fa-trash-alt xoacv" onclick="app.clickDeleteJob(this)"></i> </a>';
		$('#'+ type).append(item);
 },
	clickDeleteJob: function (thei)
	{
		$('#myModal').modal();
		console.log(thei);
		var item = $(thei).parent();	//lay value id

		

		$('#btndelete').off('click');
		$('#btndelete').on('click', function(){

			var columtype = item.parent().attr('id');	//lay value id
			var itemPosition = $('#'+columtype+' .list-group-item').index(item);
			console.log('item p: '+ itemPosition + "x "+ columtype);

			list1[columtype].splice(itemPosition, 1);	//xoa phan tu tai vi tri kia va xoa 1 phan tu
			console.log(list1);
			DB.setData(list1);
			item.remove();
		});
	}
};
	
$(function(){
setCoundata();

	COLUMN_TYPE.forEach(function(type){
		var columgtype = list1[type]||[];

		columgtype.forEach(function(job){
		app.addJobToList(type, job);
	});
	});


	console.log("vao1");
	$('.sorted-list').sortable({
		connectWith:'.sorted-list',
		// placeholder: 'ui-state-highlight',
		start: function(event, ui){
			//addstyle class
			$(ui.item[0]).addClass('dragging');
			console.log( ui);

			ui.item.lodComumnType = ui.item.parent().attr('id');
			ui.item.oldItemPosition = ui.item.index();
		},
		stop: function(event, ui){
			//remove class
			$(ui.item[0]).removeClass('dragging');

			var oldColumnType = ui.item.lodComumnType;
			var oldItemPosition = ui.item.oldItemPosition;
			var newComumnType = ui.item.parent().attr('id');
			var newItemPosition = ui.item.index();

			//xoa cu
			list1[oldColumnType].splice(oldItemPosition, 1);
			//them
			console.log(newItemPosition);
			if(!list1[newComumnType])
			{
				 list1[newComumnType] = [];
			}
			list1[newComumnType].splice(newItemPosition, 0, ui.item[0].innerText);

			//cap nhap
			DB.setData(list1);
		}
	});
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

function setCoundata(){
	COLUMN_TYPE.forEach(function(type){
		if(!list1[type])
			 list1[type] = [];
		$('#'+type).prev().find('span').text('('+list1[type].length+')');
	});
}


