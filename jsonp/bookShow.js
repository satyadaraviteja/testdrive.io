/*Define a settings object which will be required for setting up the theatre seats*/
var settings=
{
	rows:10,
	column:12,
	rowCssPrefix:'row-',
	colCssPrefix:'col-',
	seatCss:'seat',
	width:72,
	height:35,
	selectedSeatCss:'selectedSeat',
	selectingSeatCss:'selectingSeat',
	price:
	{
		Bronze:80,
		Silver:100,
		Gold:150
	},
	movies:
	[
		"Inception",
		"Black Friday"

	]
};

var bookedSeats={};

var selectingSeatArray=[];
var invisibleSeats=[];
var no_of_seats;
 var reservedSeats;


var option = [];

/*This function will dynamically generate seats and insert them as <li> items in the different categories that have been defined here*/
function createSeats(reservedSeat)
{


	//alert(localStorage.getItem('tds'))
	

	if(reservedSeat != null || reservedSeat == false)
	{

	var start_times = (reservedSeat.slice(0,5));
	var total_duration = ( (reservedSeat.slice(5,10)));

	var dur = (reservedSeat.slice(10,12)/5);



var lis = $('#tickets_map li');

var data = [];
var data1 = [];
var a;
var countries = [];



for(var i=0; i<lis.length; i++)
{

    data.push(lis[i].id);  

      //alert(document.getElementById(data[i]).getAttribute('value'));


    var abd = (document.getElementById(data[i]).getAttribute('value'));

    //console.log(abd)

	   if(abd.slice(0,5) == start_times)
	   {

	   	 a = data[i];

	   }

	   if(abd.slice(0,5) == total_duration)
	   {

        var b = dur;

        var last_indeX = (parseFloat(a) + parseFloat(b))

        var seatIndex ;

                for (seatIndex = a-1; seatIndex < last_indeX-1; seatIndex++) 
                {

                	
 						countries.push(data[seatIndex]);

                	

                }

for(var b=0 ; b<countries.length;b++)
{
 						option.push(countries[b]);

}

       }
 				
}

var productss = countries;

var regions = (JSON.stringify(productss));
console.log((option));




}

else 
{
	 //alert(reservedSeat)
	option = ["0"];



}



	var seatList=[],seatNumber,seatClass;
	var k=0;




	
	var no_of_seats1 =$('#tddu').val();

	if(no_of_seats1 == "other")
	{
	
	 $(".timepicker-24-hr").on('change keyup paste', function () {
   var hrtime = $(this).val();
    var a = hrtime.split(':'); 

      var no_of_seatss = (+a[0]) * 60 + (+a[1]);  
	  console.log(no_of_seats)

      no_of_seats = (no_of_seatss/5);

         
      localStorage.setItem("td_duration",no_of_seatss);
 
});
	}
	else 
	{
		no_of_seats = $('#tddu').val();

		if(no_of_seats == '3')
		{
		localStorage.setItem("td_duration",15);
  
		}
		else if(no_of_seats == '6')
		{
				localStorage.setItem("td_duration",30);
  
		}
		else if(no_of_seats == '9')
		{
				localStorage.setItem("td_duration",45);
  
		}
		else if(no_of_seats == '11')
		{
				localStorage.setItem("td_duration",55);
  
		}

	}








	for(var i=0;i<settings.rows;i++,k++)
	{
		for(var j=0;j<settings.column;j++)
		{

			seatNumber=(j+i*settings.column+1);

			seatNumber1=(j+i*settings.column);



			if(seatNumber==1)
				
				seatList.push("<div class='gold_tickets_map col-md-12'>"+"<ul id='tickets_map' >");

			seatClass=settings.seatCss+' '+settings.rowCssPrefix+i.toString()+' '+settings.colCssPrefix+(j+1).toString();
			
			if ( $.inArray((option)) && $.inArray(seatNumber+'', (option)) != -1) 
			{
                seatClass += ' ' + settings.selectedSeatCss;
            }
			//seatList.push("<li class='"+seatClass+"'"+" style='top:"+(i*settings.height).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'></a>"+"</li>");
			if(seatNumber%25==150||seatNumber%25==200)
			{
				
				seatClass += ' '+'visible';
				seatList.push("<li class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"</li>");
			}
			else
	function intervals(startString, endString) {
    var start = moment(startString, 'HH:mm a');
    var end = moment(endString, 'HH:mm a');

    
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var result = [];

    var current = moment(start);

    while (current <= end) {
        result.push(current.format('HH:mm A'));
        current.add(5, 'minutes');
    }
	if(seatClass == "seat row-0 col-0" || seatClass == "seat row-0 col-0 selectedSeat")
	{
	seatList.push("<div  ><label style=\"margin-top: 10px\">09 AM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
	}	
	else if(seatClass == "seat row-0 col-1" || seatClass == "seat row-0 col-1 selectedSeat")
{
seatList.push("<div  ><label style=\"margin-top: 10px\">09 AM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-1 col-1" || seatClass == "seat row-1 col-1 selectedSeat" )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">10 AM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-2 col-2" || seatClass == "seat row-2 col-2 selectedSeat" )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">11 AM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-3 col-3" || seatClass == "seat row-3 col-3 selectedSeat" )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">12 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-4 col-4" || seatClass == "seat row-4 col-4 selectedSeat" )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">01 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-5 col-5" || seatClass == "seat row-5 col-5 selectedSeat" ) 
{
seatList.push("<div  ><label style=\"margin-top: 6px\">02 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-6 col-6" || seatClass == "seat row-6 col-6 selectedSeat" ) 
{
seatList.push("<div  ><label style=\"margin-top: 6px\">03 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-7 col-7" || seatClass == "seat row-7 col-7 selectedSeat" )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">04 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-8 col-8" || seatClass == "seat row-8 col-8 selectedSeat"  )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">05 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else if(seatClass == "seat row-9 col-9" || seatClass == "seat row-9 col-9 selectedSeat" )
{
seatList.push("<div  ><label style=\"margin-top: 6px\">06 PM</label><li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li></div>");
}
else
{
	seatList.push("<li value='"+result[seatNumber1]+"' id='"+seatNumber+"' class='"+seatClass+"'"+" style='top:"+(k*settings.height+5).toString()+"px;left:"+(j*settings.width).toString()+"px;'>"+"<a title='"+seatNumber+"'>"+0+""+0+" : "+(result[seatNumber1].slice(3,5))+"</a>"+"</li>");
}


}

intervals('9:00:00 AM', '6:55:00 PM');

		}
	}
	document.getElementById("container").innerHTML=seatList.join('');
	setUpClickBinding();
};
/*All event binding are done here*/
function setUpClickBinding()
{

	$('.'+settings.seatCss).click(function()
	{

				 var a = $('#tddu').val();
                 var b = this.id;

                 var last_indeX = (parseFloat(a) + parseFloat(b))
                 
                 var seatIndex ;

                for (seatIndex = this.id; seatIndex < last_indeX; seatIndex++) 
                {

                	if(document.getElementById(seatIndex).classList.contains(settings.selectedSeatCss) == true)
                	{
                		alert("Another User Has Booked Test Drive , Please select Available slots.");
                		window.location.href = "test_drive_scheduler1.html";
                	}

                }
 				


		if($(this).hasClass(settings.selectedSeatCss))
		{



			$('.seats_alert > span').html("Already Selected Seat");
			$('.seats_alert').removeClass('alert-success').addClass('alert-danger');
			$('.seats_alert').show();	
		}
		else
		{

			if($(this).hasClass(settings.selectingSeatCss))
			{
				 var a = $('#tddu').val();
                 var b = this.id;

                 var last_indeX = (parseFloat(a) + parseFloat(b))


               for ( var seatIndex = this.id; seatIndex < last_indeX; seatIndex++) 
               {

                   document.getElementById(seatIndex).classList.remove(settings.selectingSeatCss);

                

				var index= this.id;
				if(index!=-1)
				{
					selectingSeatArray.splice(index,1);
					$('.checkout').addClass("disabled");
				}
				no_of_seats++;
			   }
			}
			else
			{
				if(no_of_seats==0)
				{
				swal("Seat Already Selected");


					$('.seats_alert > span').html("Seats already selected,Proceed to checkout,or change the number of seats you want");
					$('.seats_alert').removeClass('.alert-success').addClass('alert-danger');
					$('.seats_alert').show();
				}
				else
				{
						 var a = no_of_seats;
                         var b = this.id;

                         var last_indeX = (parseFloat(a) + parseFloat(b))

                for ( var seatIndex = this.id; seatIndex < last_indeX; seatIndex++) {
                	                   //console.log(seatIndex)

                   document.getElementById(seatIndex).classList.toggle(settings.selectingSeatCss);

              

						selectingSeatArray.push(seatIndex);

						if(--no_of_seats==0)
						{
							selectingSeatArray.sort(sortNumber);


							//console.log(selectingSeatArray);
							if(isAdjacentSeat(selectingSeatArray))
							{
								if(isSingleSiloCreated(selectingSeatArray))
								{
									$('.seats_alert > span').html("Single silo created");
									$('.seats_alert').removeClass('.alert-success').addClass('alert-danger');
									$('.seats_alert').show();
								}
								else
								{
									
 			  var date = localStorage.getItem("date");
   			
				 var value = $('#tickets_map li.selectingSeat').attr('value');
				 

				 var time_being_value = "";
				 
				if((value.slice(0,2) == "13"))
				{
					time_being_value = "1";
					localStorage.setItem("td_time",time_being_value+""+value.slice(2,8))

				}
				else if((value.slice(0,2) == "14"))
				{
					time_being_value = "2";
					localStorage.setItem("td_time",time_being_value+""+value.slice(2,8))

				}
				else if((value.slice(0,2) == "15"))
				{
					time_being_value = "3";
					localStorage.setItem("td_time",time_being_value+""+value.slice(2,8))

				}
				else if((value.slice(0,2) == "16"))
				{
					time_being_value = "4";
					localStorage.setItem("td_time",time_being_value+""+value.slice(2,8))

				}
				else if((value.slice(0,2) == "17"))
				{
					time_being_value = "5";
					localStorage.setItem("td_time",time_being_value+""+value.slice(2,8))

				}
				else if((value.slice(0,2) == "18"))
				{
					time_being_value = "6";
					localStorage.setItem("td_time",time_being_value+""+value.slice(2,8))

				}
				else
				{
					localStorage.setItem("td_time",value);
                    console.log("else executed")
				}



			  var values = parseFloat(value.slice(3, 6))

			  var value1  =parseFloat($('#tddu option:selected').text());

			  var value2 = (values + value1);

			  var values1 = parseFloat(value.slice(0, 2));

			  var vals = (values1+":"+value2);

// text: "Are you sure , you want to confirm your Test Drive Booking on "+date+" @ "+value.slice(0,5) + " " +"-"+ " " + vals+" ! ",



 swal({
          text: "Are you sure , you want to confirm your Test Drive Booking on "+date+" @ "+value+" ! ",
          buttons: [
            'Cancel',
            'Confirm!'
          ],
          dangerMode: true,
        }).then(function(isConfirm) {
          if (isConfirm) {
          //localStorage.setItem('reservedSeat',JSON.stringify(selectingSeatArray));



            window.location.href = "form1.html";
          } else {
            window.location.href = "test_drive_scheduler1.html";
          }
        });
									$('.seats_alert > span').html("Seats selected,now proceed to checkout");
									$('.seats_alert').removeClass('alert-danger').addClass('alert-success');
									$('.seats_alert').show();
									$('.checkout').removeClass("disabled");
									//alert("Seats selected,now proceed to Book..")

								}
							}

						}


					
					else
					{
						$('.seats_alert > span').html("You can select tickets only from category");
						$('.seats_alert').removeClass('.alert-success').addClass('alert-danger');
						$('.seats_alert').show();
					}

  }

				}
			}
		}
	});

}
/*The sorting function to sort the seat numbers*/
function sortNumber(a,b)
{
	console.log(a+"-"+b)
	return a-b;	
}
/*This functions will check for adjacent seat condition and will return false,if the seats are not adjacent*/
function isAdjacentSeat(selectedSeatArray)
{
	var prev_value=parseInt(selectingSeatArray[0]);

	//alert(selectedSeatArray)
	
	for(var i=1;i<selectingSeatArray.length;i++)
	{
		//console.log(selectingSeatArray)
		if(selectingSeatArray[i]!=(parseInt(prev_value)+1))
		{
			
			$('.seats_alert > span').html("Please select adjacent seats");
			$('.seats_alert').removeClass('.alert-success').addClass('alert-danger');
			$('.seats_alert').show();
			return false;
		}
		else
		{
			prev_value=selectingSeatArray[i];
		}
	}
	return true;
	
}
/*This function will check that user is creating a siingle silo,until and unless there is no other alternative*/
function isSingleSiloCreated(selectedSeatArray)
{

	//console.log(selectedSeatArray)
	
	// var start_seat=selectingSeatArray[0];
	// var end_seat=selectingSeatArray[selectingSeatArray.length-1];
	// var left=false,right=false;
	// var selected_movie=$('#car_name').val();
	// if(start_seat%25!=1)
	// {
	// 	left=checkLeft(start_seat,end_seat,selected_movie);
	// }

	// if(end_seat%25!=0)
	// {
	// 	right=checkRight(end_seat,start_seat,selected_movie);
	// }
	// if(left || right)
	// {
	// 	return true;
	// }
	// return false;
}
/*It will check the left seats for single silo conditions*/
// function checkLeft(start_seat,end_seat,selected_movie)
// {
// 	if(start_seat%25!=2)
// 	{
// 		if(!($.inArray(parseInt(start_seat)-1+'', bookedSeats[selected_movie]) != -1) && ($.inArray(parseInt(start_seat)-2+'',bookedSeats[selected_movie])!=-1 || ($.inArray(parseInt(start_seat)-2,invisibleSeats)!=-1)) && end_seat%25!=0 && (!($.inArray(parseInt(end_seat)+1+'', bookedSeats[selected_movie]) != -1) && !($.inArray(parseInt(end_seat)+1, invisibleSeats) != -1)) && !($.inArray(parseInt(start_seat)-1, invisibleSeats) != -1))
// 		{
// 			return true;
// 		}
// 	}	

// 	else
// 	{
// 		if(!($.inArray(parseInt(start_seat)-1+'', bookedSeats[selected_movie]) != -1) && !($.inArray(parseInt(end_seat)+1,invisibleSeats)!=-1))
// 		{
// 			return true;
// 		}	
// 	}
// 	return false;
// }
// /*This will check the right seats for single silo condition*/
// function checkRight(end_seat,start_seat,selected_movie)
// {
// 	if(end_seat%25!=24)
// 	{
// 		if(!($.inArray(parseInt(end_seat)+1+'', bookedSeats[selected_movie]) != -1) && (($.inArray(parseInt(end_seat)+2+'',bookedSeats[selected_movie])!=-1) || ($.inArray(parseInt(end_seat)+2,invisibleSeats)!=-1)) && start_seat%25!=1 && !($.inArray(parseInt(start_seat)-1+'', bookedSeats[selected_movie]) != -1) && !($.inArray(parseInt(start_seat)-1,invisibleSeats)!=-1)) 	
// 		{
// 			return true;
// 		}
		
// 	}
// 	else
// 	{
// 		if(!($.inArray(parseInt(end_seat)+1+'', bookedSeats[selected_movie]) != -1) && !($.inArray(parseInt(start_seat)-1,invisibleSeats)!=-1))
// 		{
// 			return true;
// 		}
// 	}
// 	return false;
// }

/*window.onload=function()*/
$(document).ready(function()
{	

		
// function abc(start)
// {
//   var dealer_code = localStorage.getItem("dealer_code");
//       var td_id = localStorage.getItem("obj_id");
//       var date = localStorage.getItem("date");
      
//    $.ajax({

//            url:"http://toyota-td.apprikart.com/toyota_testdrive_api/dashboard/get_schedule_details/?dealer_code="+dealer_code+"&obj_id="+td_id+"&td_date="+start+"",
//            type:"get",
//                 data: "json",

//            success: function(data)
//              {

//           var data = JSON.parse(data);
//           for(var i=0; i< data.schedule_details.length ; i++)
//             {
//               var td_start_time =data.schedule_details[i].td_start_time;
//               var td_end_time =data.schedule_details[i].td_end_time;
//               var td_duration =data.schedule_details[i].td_duration;

//               // createSeats(td_start_time +""+td_duration);

//              }
//            }

//          })
// }

	
		if(!bookedSeats)
		{
			bookedSeats=[];
		}
		//createSeats(bookedSeats);





	function call(){
		if(typeof(Storage)!="undefined")
		{
			var selected_movie=$('#car_name').val();
			console.log(selectingSeatArray);
			


		}	
	}

	/*This function is for the dropdown on the main page,do not allow the user to select the quantity and category,until he has selected the movie*/
	// $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

	// 	var $target = $( event.currentTarget );
		


	// 	$target.closest( '.btn-group' )
	// 	.find( '[data-bind="label"]' ).text( $target.text() )
	// 	.end()
	// 	.children( '.dropdown-toggle' ).dropdown( 'toggle' );
	// 	if($target.closest( '.btn-group').find('[data-toggle="dropdown"]').hasClass('movies-toggle'))
	// 	{
	// 		if($target.closest( '.btn-group' ).find( '[data-bind="label"]' ).text()!="Select Movie")
	// 		{
	// 			$('.category-toggle').removeClass('disabled');
	// 		}
	// 		else
	// 		{
	// 			$('.category-toggle').addClass('disabled');
	// 		}
	// 	}
	// 	else if($target.closest( '.btn-group' ).find('[data-toggle="dropdown"]').hasClass('category-toggle'))
	// 	{
	// 		if($target.closest( '.btn-group' ).find( '[data-bind="label"]' ).text()!="Select Category")
	// 		{
	// 			$('.quantity-toggle').removeClass('disabled');
	// 		}
	// 		else
	// 		{
	// 			$('.quantity-toggle').addClass('disabled');
	// 		}

	// 	}
	// 	else
	// 		$('.book').removeClass('disabled');

	// 	return false;

	// });

	// /*Populate the movies,categories and qunatity dropdown*/
	// var movies=[];
	// for(var i=0;i<settings.movies.length;i++)
	// 	movies.push('<li>'+'<a href="#">'+settings.movies[i]+'</a>'+'</li>');
	// $('.movies').html(movies.join(''));
	// var categories=[];
	// for(category in settings.price)
	// {
	// 	categories.push('<li>'+'<a href="#">'+category+'</a>'+'</li>');
	// }
	// $('.movie_category').html(categories.join(''));

	// var quantity=[];
	// for(var i=1;i<=10;i++)
	// {
	// 	quantity.push('<li>'+'<a href="#">'+i+'</a>'+'</li>');
	// }
	// $('.quantity').html(quantity.join(''));
});