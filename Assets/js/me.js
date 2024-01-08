function init(){
	displayTaskbar();
}
window.onload = init;
function displayTaskbar(){
	// var widthScreen = id(screen).style.width;
	// var footerHeight = id(footer).style.height;
	// var bottomHeight = gclass(bottom).style.height;
	// var taskbarPos = footerHeight + bottomHeight;
	// gclass(bottom).style.width = widthScreen;
	// gclass(bottom).style.bottom = footerHeight;
 //    gclass(taskbar).style.width = widthScreen;
 //    gclass(taskbar).style.bottom = taskbarPos;
 //    alert(widthScreen);
	 var widthScreen = id("screen").offsetWidth || id("screen").clientWidth;
	 var footerHeight = id("footer").offsetHeight || id("footer").clientHeight;
	 var bottomHeight = id("bottom").offsetHeight || id("bottom").clientHeight;
	 id(bottom).style.width = widthScreen;
	 console.log(bottomHeight);
}
function id(id){
	return document.getElementById(id);
}
function gclass(classname){
	return document.getElementsByClassName(classname);
}
function showModalUser(){
	var modalUser = id(modalUser);
	var mainContainer = id(main-container);
	
}
function showModal(modal, container){
	modal.style.display = "block";
	container.style.display = "none";
 }

