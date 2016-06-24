var MonthTableViewModel = function(startDate, numberMonths, amount) {
	this.startDate = ko.observable(startDate);
	this.numberMonths = ko.observable(numberMonths);
	this.amount = ko.observable(amount);
	this.total = ko.computed(function() {
		return this.numberMonths() * this.amount();
	}, this);
};

function getToday() {
	var today = new Date();

	// parse today into separate components
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();

	// perform transformations based on date values
	if(month < 10) {
		month = '0' + month;
	}
	if(day < 10) {
		day = '0' + day;
	}

	// build conformant date string and return
	today = year + '-' + month + '-' + day;
	return today;
};

ko.applyBindings(new MonthTableViewModel(getToday(), 3, 1500));