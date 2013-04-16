/* ===========================================================
*				MENU CONTROLLER
============================================================== */


/* INIT
============================================================== */
var indexCtrl = arguments[0].indexCtrl;
var options = {
	scale: false,
	velocity: false,
	direction: false
};
var eventsCallbacks = {
	click : function click() { indexCtrl.eventsListLBL.text = "click " + indexCtrl.eventsListLBL.text},
	dblclick : function dblclick() { indexCtrl.eventsListLBL.text = "dblclick " + indexCtrl.eventsListLBL.text},
	doubletap : function doubletap() { indexCtrl.eventsListLBL.text = "doubletap " + indexCtrl.eventsListLBL.text},
	keypressed : function keypressed() { indexCtrl.eventsListLBL.text = "keypressed " + indexCtrl.eventsListLBL.text},
	longclick : function longclick() { indexCtrl.eventsListLBL.text = "longclick " + indexCtrl.eventsListLBL.text},
	longpress : function longpress() { indexCtrl.eventsListLBL.text = "longpress " + indexCtrl.eventsListLBL.text},
	singletap : function singletap() { indexCtrl.eventsListLBL.text = "singletap " + indexCtrl.eventsListLBL.text},
	touchend : function touchend() { indexCtrl.eventsListLBL.text = "touchend " + indexCtrl.eventsListLBL.text},
	touchmove : function touchmove() { indexCtrl.eventsListLBL.text = "touchmove " + indexCtrl.eventsListLBL.text},
	touchstart : function touchstart() { indexCtrl.eventsListLBL.text = "touchstart " + indexCtrl.eventsListLBL.text},
	twofingertap : function twofingertap() { indexCtrl.eventsListLBL.text = "twofingertap " + indexCtrl.eventsListLBL.text},

	pinch : function pinch(event) {

		var txt = "pinch ";

		options.scale && (txt += "(s: " + (Math.floor(event.scale * 1000) / 1000) + ") ")
		options.velocity &&	(txt += "(v: " + (Math.floor(event.velocity * 1000) / 1000) + ") ")
		indexCtrl.eventsListLBL.text = txt + indexCtrl.eventsListLBL.text
	},

	swipe : function swipe(event) {

		var txt = "swipe ";

		options.direction && (txt += "(" + event.direction + ") ")
		indexCtrl.eventsListLBL.text = txt + indexCtrl.eventsListLBL.text
	}
};


/* SETUP
============================================================== */
$.container.width = APP.device.width


/* FUNCTIONS
============================================================== */

/* add or remove events listeners for selected event
-------------------------------------------------------------- */
function updateListeners(event) {

	var eventName = event.source.id.substring(3).toLowerCase()

	switch (eventName) {

		case "scale" : options.scale = event.value; break;
		case "velocity" : options.velocity = event.value; break;
		case "direction" : options.direction = event.value; break;

		default:

		if (event.value === true) {

			indexCtrl.testSurface.addEventListener(eventName, eventsCallbacks[eventName])
		}
		else {

			indexCtrl.testSurface.removeEventListener(eventName, eventsCallbacks[eventName])
		}
	}
}

