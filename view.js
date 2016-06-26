/**
*	KNOCKOUT CODE
*	Below is the view model and application of such to support our page 
**/

var MonthTableViewModel = function(startDate, numberMonths, amount) {
	this.startDate = ko.observable(startDate);
	this.numberMonths = ko.observable(numberMonths);
	this.amount = ko.observable(amount);
	this.total = ko.computed(function() {
		return this.numberMonths() * this.amount();
	}, this);
	this.rows = ko.observableArray([]);
	this.monthName = ko.computed(function() {
		var d = new Date(this.startDate());
		return getMonthString(d.getMonth());
	}, this);
	this.rowsNew = ko.computed(function() {
		for(i = 0; i < this.numberMonths(); i++) {
			this.rows.push(
			{month: "test", amount: this.amount()}
			);
		}
	}, this);
};

ko.applyBindings(new MonthTableViewModel(getToday(), 3, 1500));

/**
*	HELPER FUNCTIONS
*	These support the view model, but are not directly tied to Knockout framework
**/
function getMonthString(monthNumber) {
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return monthNames[monthNumber];
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