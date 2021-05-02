
var row = 1;
var n =1;
var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);


function displayDetails() {

	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var mnumber = document.getElementById("mnumber").value;
	var gender = document.getElementById("gender").value;
	var uname = document.getElementById("uname").value;
	//var pswd = document.getElementById("pswd").value;
	
	var display = document.getElementById("display");

	var newRow = display.insertRow(row);
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);

	cell1.innerHTML = n; 
	cell2.innerHTML = fname+lname;
	cell3.innerHTML = mnumber;
	cell4.innerHTML = gender;
	cell5.innerHTML = uname;
	row++;
n++;


}