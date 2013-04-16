/* ===========================================================
*				INDEX CONTROLLER (homescreen)
============================================================== */


/* INIT
============================================================== */
var animation = Titanium.UI.createAnimation({
	duration: 333,
	left : 0
});
var menuCtrl = Alloy.createController("menu", {
	indexCtrl: $
});
var menuView = menuCtrl.getView();


/* SETUP
============================================================== */
$.container.add(menuView)


/* BINDING EVENTS
============================================================== */
$.showEventsOptionsBTN.addEventListener('touchstart', toggleAddRemoveDialog)
$.resetListButton.addEventListener('touchstart', cleanTheList)


/* START THE SHOW
============================================================== */
$.myWindow.open();


/* FUNCTIONS
============================================================== */

/* display the add/remove events dialog
-------------------------------------------------------------- */
function toggleAddRemoveDialog(event) {

	if (animation.getLeft() === 0) {
		animation.setLeft(APP.device.width)
		$.showEventsOptionsBTN.setTitle("Events")
	}
	else {
		animation.setLeft(0)
		$.showEventsOptionsBTN.setTitle("ok, let's test")
	}

	menuView.animate(animation);
}

/* removes the current text resulting from the events
-------------------------------------------------------------- */
function cleanTheList(event) {

	$.eventsListLBL.text = ""
}


/* Convert units
-------------------------------------------------------------- */
function pixelsToDPUnits(pixels) {

	if ( Titanium.Platform.displayCaps.dpi > 160 ) {
		return (pixels / Titanium.Platform.displayCaps.dpi / 160);
	}

	return pixels
}


function dpUnitsToPixels(dpUnits) {

	if ( Titanium.Platform.displayCaps.dpi > 160 ) {
		return (dpUnits * Titanium.Platform.displayCaps.dpi / 160);
	}

	return dpUnits
}



