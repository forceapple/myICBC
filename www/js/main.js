var other={

};
var my={
	
};
var user = {
	
};
var page={
		num:-1,
		// login page, page 1
		login:
		//logo
		'<img id="logo" src="img/logo.png" />'+
		//containter
		'<div id="login">'+
		'<div id="errorMsg" class="errorMsg"></div>'+
		'<table  >'+
		'<tr><td><h2>Username:</h2></td></tr>'+
		'<tr><td><input type="text" name="username" id="username" class="textf"/></td></tr>'+
		'<tr><td><h2>Password:</h2></td></tr>'+
		'<tr><td><input type="password" name="password" id="password" class="textf" /></td></tr>'+
		'<tr><td><img  id="loginbut" src="img/submit-13.png"/></tr>'+
 		'<tr><td><div id="NR">not registered?</div></td></tr>'+
 		'</table>'+
 		'</div>',
		//page 1.5 register page
		register:'<h1 class="heading">Register</h1>'+
		'<div id="me">'+
		'<div id="message">Please fill out the following</div>'+
		'<div id="regError" class="errorMsg"></div>'+
		'<table id="meTable" >'+
		'<tr><td><h2>Username</h2></td></tr>'+
		'<tr><td><input type="text" name="myUsername" id="myUsername" class="otherText"/></td></tr>'+
		'<tr><td><h2>Password</h2></td></tr>'+
		'<tr><td><input type="password" name="myPassword" id="myPassword" class="otherText" /></td></tr>'+
		'<tr><td><h2>Re-type Password</h2></td></tr>'+
		'<tr><td><input type="password" name="rePassword" id="rePassword" class="otherText" /></td></tr>'+
		'<tr><td><h2>Email</h2></td></tr>'+
		'<tr><td><input type="text" name="myEmail" id="myEmail" class="otherText" /></td></tr>'+
		'<tr><td><h2>First Name</h2></td></tr>'+
		'<tr><td><input type="text" name="myFirstName" id="myFirstName" class="otherText" /></td></tr>'+
		'<tr><td><h2>Last name</h2></td></tr>'+
		'<tr><td><input type="text" name="myLastName" id="myLastName" class="otherText" /></td></tr>'+
		'<tr><td><h2>Phone Number</h2></td></tr>'+
		'<tr><td><input type="text" name="myPhoneNumber" id="myPhoneNumber" class="otherText" /></td></tr>'+
		'<tr><td><h2>License Plate</h2></td></tr>'+
		'<tr><td><input type="text" name="myLicensePlate" id="myLicensePlate" class="otherText" /></td></tr>'+
		'<tr><td><h2>Make of Car</h2></td></tr>'+
		'<tr><td><input type="text" name="myMakeOfCar" id="myMakeOfCar" class="otherText" /></td></tr>'+
		'<tr><td><h2>Model of Car</h2></td></tr>'+
		'<tr><td><input type="text" name="myModelOfCar" id="myModelOfCar" class="otherText" /></td></tr>'+
		'<tr><td><h2>Year of Car</h2></td></tr>'+
		'<tr><td><input type="text" name="myYearOfCar" id="myYearOfCar" class="otherText" /></td></tr>'+
		'<tr><td><h2>Address</h2></td></tr>'+
		'<tr><td><textarea rows="6" cols="27"  name="myAddress" id="myAddress"></textarea></td></tr>'+
		'<tr><td><img  id="register_btn" src="img/register_btn.png"/></td></tr>'+
 		'</table>'+
 		'</div>',
		// page 2 landing page
		home:'<img id="logo" src="img/logo.png" />'+
			'<img id="makeClaim" class="next_but" src="img/makeclaim_btn.png"/>'
		,
		// page 3 make a cliam page
		claim:'<h1 class="heading">Step 1</h1>'+
		'<div id="otherPerson">'+
		'<div id="message">Other driver&#8216s info</div>'+
		'<div id="otherError" class="errorMsg"></div>'+
		'<table id="otherTable" >'+
		'<tr><td><h2>Plate Province</h2></td></tr>'+
		'<tr><td><input type="text" name="plateProvince" id="plateProvince" class="otherText"/></td></tr>'+
		'<tr><td><h2>License Plate</h2></td></tr>'+
		'<tr><td><input type="text" name="licensePlate" id="licensePlate" class="otherText" /></td></tr>'+
		'<tr><td><h2>Make of Car</h2></td></tr>'+
		'<tr><td><input type="text" name="makeOfCar" id="makeOfCar" class="otherText" /></td></tr>'+
		'<tr><td><h2>Model of Car</h2></td></tr>'+
		'<tr><td><input type="text" name="modelOfCar" id="modelOfCar" class="otherText" /></td></tr>'+
		'<tr><td><h2>Year of Car</h2></td></tr>'+
		'<tr><td><input type="text" name="yearOfCar" id="yearOfCar" class="otherText" /></td></tr>'+
		'<tr><td><h2>First Name</h2></td></tr>'+
		'<tr><td><input type="text" name="firstName" id="firstName" class="otherText" /></td></tr>'+
		'<tr><td><h2>Last Name</h2></td></tr>'+
		'<tr><td><input type="text" name="lastName" id="lastName" class="otherText" /></td></tr>'+
		'<tr><td><h2>License Number</h2></td></tr>'+
		'<tr><td><input type="text" name="licenseNumber" id="licenseNumber" class="otherText" /></td></tr>'+
		'<tr><td><h2>Address:</h2></td></tr>'+
		'<tr><td><input type="text" name="address" id="address" class="otherText" /></td></tr>'+
		'<tr><td><h2>Phone Number</h2></td></tr>'+
		'<tr><td><input type="text" name="phoneNumber" id="phoneNumber" class="otherText" /></td></tr>'+
		'<tr><td><h2>Details/Comments</h2></td></tr>'+
		'<tr><td><textarea rows="6" cols="27"  name="details" id="details">Please write as detail as possible</textarea></td></tr>'+
		'<tr><td><img  id="next_btn" src="img/next_btn.png"/></td></tr>'+
 		'</table>'+
 		'</div>',
		// page 4 photo page
		image:'this will be the upload img page',
		// page 5 google maps page
		maps: 'this is the map',
		// page 6
		review:'<h1 class="heading">Review</h1>'+
		'<img  id="reviewSub" src="img/submit-13.png"/>'
		,
		//page 7
		thankyou:'thank you page',
		// functions -----------------------------------
		go:function(thispage){
			$('#main').html(thispage);
		},
		claimFunctions:function(){
			//store all val of inputs *temp
			
			var plate_province=$('#plateProvince').val();
			var L_plate =$('#licensePlate').val();
			var make_of_car =$('#makeOfCar').val();
			var model_of_car =$('#modelOfCar').val();
			var year_of_car =$('#yearOfCar').val();
			var first_name=$('#firstName').val();
			var last_name =$('#lastName').val();
			var license_number =$('#licenseNumber').val();
			var address =$('#address').val();
			var phone_number =$('#phoneNumber').val();
			var comments =$('#details').val();
			
			var detail =$('#details').val();
				if(L_plate==""){
					$('#otherError').text("license plate field is required")
					window.scrollTo(0, 0);
				}else if(first_name==""){
					$('#otherError').text("First name field is required")
					window.scrollTo(0, 0);
				}else if(last_name==""){
					$('#otherError').text("Last name field is required")
					window.scrollTo(0, 0);
				}else if(detail=="" || detail=="Please write as detail as possible"){
					$('#otherError').text("Details/Comments field is required")
					window.scrollTo(0, 0);
				}else{
				// if the required fields are filled then store the var into other
					other.plateProvince=plate_province;
					other.licensePlate=L_plate;
					other.makeOfCar=make_of_car;
					other.modelOfCar=model_of_car;
					other.yearOfCar=year_of_car;
					other.firstName=first_name;
					other.lastName=last_name;
					other.licenseNumber=license_number;
					other.address=address;
					other.phoneNumber=phone_number;
					other.details=comments;
					//$('#main').html(page.image);
					//this.go(page.image);
					page.num =2;
				}

		},
		online:function(){
			$('#loginbut').click(function(){
				//calls loginuser.php to submit
				$.post("php/loginuser.php", {
					name:$("#username").val(),
					pass:$("#password").val(),
				}, 
				function(resp){
					//console.log(resp);
					resp = $.parseJSON(resp);
					user.userid=resp.userid;
					user.username = resp.username;
					user.msg= resp.msg;
					user.logged_in=resp.logged_in;
					if(user.msg){
						$('#errorMsg').text(user.msg);
						window.scrollTo('#errorMsg',350);
					}
					// testing
					//user.logged_in=true;
					//takeout after ^^^^
					if(user.logged_in===true){
						page.num=0;
						//Home page
								if(page.num==0){
									page.go(page.home);
									$(document).on('click', '#makeClaim', function(){
										page.go(page.claim);
										page.num =1;

						//Claim page	claim page functions ----------------  
										if(page.num==1){
											//empty details input when clicked
											$('#details').click(function(){
												$('#details').val("");
											})
										 	$(document).on('click', '#next_btn', function(){

												page.claimFunctions();//makes page.num=2
						//Camera page			camera page functions ---------------

												if(page.num ==2){
													page.go(page.image)
													//put camera stuff here************
													//*****temp to go next page
													$('.next_but').click(function(){
														console.log(page.num)
														if(page.num==2){
															page.num =3;
															//page.go(page.maps)
														}else if (page.num==3){
															page.num=4
														}
														//camera stuff end*****************
													//map page function-----------------
													if(page.num ==3){
														console.log(page.num)
														page.go(page.maps)
														//put map stuff here*****************
														
														
														//map stuff ends***********************
																					
														
													}
													
//Review page										Review page functions------------------	
													if(page.num==4){
															page.go(page.review);
															$(document).on('click', '#reviewSub', function(){
																$.post("php/other.php", {
																	plateProvince:other.plateProvince,
																	licensePlate:other.licensePlate,
																	makeOfCar:other.makeOfCar,
																	modelOfCar:other.modelOfCar,
																	yearOfCar:other.yearOfCar,
																	firstName:other.firstName,
																	lastName:other.lastName,
																	licenseNumber:other.licenseNumber,
																	address:other.address,
																	phoneNumber:other.phoneNumber,
																	details:other.details,
																}, 
																function(resp){
																	//console.log(resp);
																	resp = $.parseJSON(resp);
																		
																	if(user.msg){
																		$('#errorMsg').text(user.msg);
																			window.scrollTo('#errorMsg',350);
																		}
																		if(user.logged_in===true){
																			$("#main").html(page.thankyou);
																
																		}

																	});

															})
														}

														
														
													})
													
											
												}
											})
										
										}
									})
								}

					}

				});
			})
		}
		


	};


$(document).ready(function(){
	$(body).append("hi")
	if(page.num==-1){
		page.go(page.login)
		//this is the not register_btn on the login page
			$('#NR').click(function(){
				$('#main').html(page.register)
				//register button on register_btn page
					$('#register_btn').click(function(){
						var meUsername = $('#myUsername').val();
						var mePass = $('#myPassword').val();
						var repass = $('#rePassword').val();
						var meEmail = $('#myEmail').val();
						var meFirstname = $('#myFirstName').val();
						var meLastname = $('#myLastName').val();
						var mePhone = $('#myPhoneNumber').val();
						var melicenseplate = $('#myLicensePlate').val();
						var meMakeofcar = $('#myMakeOfCar').val();
						var meModelofcar = $('#myModelOfCar').val();
						var myYearofcar = $('#myYearofcar').val();
						var meAddress = $('#myAddress').val();
						if(meUsername==""){
							$('#regError').text("Username field is required")
							window.scrollTo(0, 0);
						}else if(mePass==""){
							$('#regError').text("Password field is required")
							window.scrollTo(0, 0);
						}else if(repass==""){
							$('#regError').text("Please re-type your password")
							window.scrollTo(0, 0);
						}else if(meEmail==""){
							$('#regError').text("Email field is required")
							window.scrollTo(0, 0);
						}else if(meFirstname==""){
							$('#regError').text("First name field is required")
							window.scrollTo(0, 0);
						}else if(meLastname==""){
							$('#regError').text("Last name field is required")
							window.scrollTo(0, 0);
						}else if(mePhone==""){
							$('#regError').text("Phone number field is required")
							window.scrollTo(0, 0);
						}else if(melicenseplate==""){
							$('#regError').text("License plate field is required")
							window.scrollTo(0, 0);
						}else if(meMakeofcar==""){
							$('#regError').text("Make of car field is required")
							window.scrollTo(0, 0);
						}else if(meModelofcar==""){
							$('#regError').text("Model of car field is required")
							window.scrollTo(0, 0);
						}else if(myYearofcar==""){
							$('#regError').text("Year of car field is required")
							window.scrollTo(0, 0);
						}else if(meAddress==""){
							$('#regError').text("Address field is required")
							window.scrollTo(0, 0);
						}else{
							//store in to my array
							my.userName =meUsername;
							my.password =mePass;
							my.email =meEmail;
							my.firstName =meFirstname;
							my.lastName =meLastname;
							my.phone =mePhone;
							my.licensePlate =melicenseplate;
							my.makeOfCar =meMakeofcar;
							my.modelOfCar =meModelofcar;
							my.yearOfCar =myYearofcar;
							my.address =meAddress;
							// post to register.php
							$.post("php/register.php", {	
								userName:my.userName,
								pass:my.password,
								email:my.email,
								firstName:my.firstName,
								lastName:my.lastName,
								phone:my.phone,
								licensePlate:my.licensePlate,
								makeOfCar:my.makeOfCar,
								modelOfCar:my.modelOfCar,
								yearOfCar:my.yearOfCar,
								address:my.address,


							}, 
							function(resp){
								//console.log(resp);
								resp = $.parseJSON(resp);
								user.errors=resp.errors
								user.test=resp.test;
								user.made=resp.made;
								if(user.errors){
									$('#regError').text(user.errors);
									window.scrollTo(0, 0);
								}
								if(user.made==true){
									$("#main").html(page.login);
									page.online();
								}

							});
							
						}
					})
			})
		//end of register-------------------------------
		page.online();
		


	};
		
		if(page.num==5){
			$("#main").html(page.login);
			
	$('#loginbut').click(function(){
	//calls loginuser.php to submit

			})
		}

	


});