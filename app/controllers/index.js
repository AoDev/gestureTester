/* ===========================================================
*				INDEX CONTROLLER (homescreen)
============================================================== */


/* INITIALIZATION
============================================================== */
var animation = Titanium.UI.createAnimation();

animation.duration = 500
animation.top = - Ti.Platform.displayCaps.platformHeight

$.testSurface.setHeight(Ti.Platform.displayCaps.platformHeight - 160)
$.addRemoveEventsDialog.setHeight(Ti.Platform.displayCaps.platformHeight - 160)
$.addRemoveEventsDialog.setTop(- Ti.Platform.displayCaps.platformHeight)

$.myWindow.open();


/* Class for event listeners handling
-------------------------------------------------------------- */
function EventsList() {

	var eventsListeners = {
		click : function () { $.eventsListLBL.text += "click "},
		dblclick : function () { $.eventsListLBL.text += "dblclick "},
		doubletap : function () { $.eventsListLBL.text += "doubletap "},
		keypressed : function () { $.eventsListLBL.text += "keypressed "},
		longclick : function () { $.eventsListLBL.text += "longclick "},
		longpress : function () { $.eventsListLBL.text += "longpress "},
		pinch : function () { $.eventsListLBL.text += "pinch " + " (scale: " + event.scale + " - velocity: " + event.velocity + ")"},
		singletap : function () { $.eventsListLBL.text += "singletap "},
		swipe : function (event) { $.eventsListLBL.text += "swipe (" + event.direction + ") "},
		touchend : function () { $.eventsListLBL.text += "touchend "},
		touchmove : function () { $.eventsListLBL.text += "touchmove "},
		touchstart : function () { $.eventsListLBL.text += "touchstart "},
		twofingertap : function () { $.eventsListLBL.text += "twofingertap "}
	}

	this.cleanList = function () {

		$.eventsListLBL.text = ""
	}

	this.getEventListener = function(eventName) {

		return eventsListeners[eventName]
	}
}

var eventsList = new EventsList()


/* TOP BAR
============================================================== */

/* display the add/remove events dialog
-------------------------------------------------------------- */
var toggleAddRemoveDialog = function (event) {

	if(animation.getTop() === - Ti.Platform.displayCaps.platformHeight) {
		animation.top = 80
		$.showEventsOptionsBTN.setTitle("ok, let's test")
	}
	else {
		animation.top = - Ti.Platform.displayCaps.platformHeight
		$.showEventsOptionsBTN.setTitle("events")
	}

	$.addRemoveEventsDialog.animate(animation);
}

$.showEventsOptionsBTN.addEventListener('touchstart', toggleAddRemoveDialog)


/* BOTTOM BAR
============================================================== */

/* clean the list of events when clicking the button
-------------------------------------------------------------- */
$.resetListButton.addEventListener('touchstart', function () {

	eventsList.cleanList()
})


/* FUNCTIONS
============================================================== */

/* Add an event listener for the corresponding gesture.

@description :
	This function is bound to each switch belonging to
	the events activation menu. (look at the markup)

	It works by parsing the id of the switch which should respect
	the following pattern: "set"+"NameOfEvent"
-------------------------------------------------------------- */
function updateListeners(event) {

	var eventName = event.source.id.substring(3).toLowerCase()

	if (event.value === true) {
		$.testSurface.addEventListener(eventName, eventsList.getEventListener(eventName))
	}
	else {
		$.testSurface.removeEventListener(eventName, eventsList.getEventListener(eventName))
	}

	eventName = null
}
