var MonthTableViewModel = function(startDate, numberMonths, amount) {
	this.startDate = ko.observable(startDate);
	this.numberMonths = ko.observable(numberMonths);
	this.amount = ko.observable(amount);
	this.total = ko.computed(function() {
		return this.numberMonths() * this.amount();
	}, this);
};

ko.applyBindings(new MonthTableViewModel('1/1/2015', 3, 1500));