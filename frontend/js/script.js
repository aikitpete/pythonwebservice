define(['controllerObject'], function(controllerObject) {
	
	console.log("Start mapping handlers");
	$('#next').on("click",{},controllerObject.nextStep);
	$('#previous').on("click",{},controllerObject.previousStep);
	$('#home').on("click",{screen:"welcome",initial:true},controllerObject.navigateTo);
	$('#startimport').on("click",{screen:"workflow",initial:true},controllerObject.navigateTo);
	$('#marketplace').on("click",{screen:"marketplace",initial:true},controllerObject.navigateTo);
	//$('#dbSelect').on("selectmenuchange",{},controllerNavigationObject.dbSelectChanged);
	//$('#dbLogin').on("click",{},controllerNavigationObject.dbLoginClicked);
	//$('#dbTable').on("click",{},controllerNavigationObject.dbTableClicked);
	console.log("End mapping handlers");
	
	/*
	function nextClicked() {
		controllerNavigationObject.nextStep();
	}

	function previousClicked() {
		controllerNavigationObject.previousStep();
	}

	function homeClicked() {
		controllerNavigationObject.navigateTo("Welcome");
	}

	function startImportClicked() {
		controllerNavigationObject.navigateTo("Workflow");
	}

	function marketplaceClicked() {
		controllerNavigationObject.navigateTo("Marketplace");
	}


	function dbSelectChanged() {

	}

	function dbLoginClicked() {

	}

	function dbTableClicked() {

	}
	*/
});
