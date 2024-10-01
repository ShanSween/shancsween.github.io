function afterHours(timeIn) {
	let afterHoursFee //, afterHoursStatement
	;
	if(timeIn < 1600) {
		afterHoursFee = 0;
	//	afterHoursStatement = "";
	} else if(timeIn >=1600 && timeIn <1630) {
		afterHoursFee = 5;
	//	afterHoursStatement = "After 4pm";
	} else if(timeIn >=1630 && timeIn <1700) {
		afterHoursFee = 10;
	//	afterHoursStatement = "After 4:30pm";
	} else if(timeIn >=1700 && timeIn <1730) {
		afterHoursFee = 15;
	//	afterHoursStatement = "After 5pm";
	} else if(timeIn >=1730 && timeIn <1800) {
		afterHoursFee = 20;
	//	afterHoursStatement = "After 5:30pm";
	}
	 else {
		afterHoursFee = 25;
	//	afterHoursStatement = "After 6pm";
	}
	return {
		afterHoursFee,
	//	afterHoursStatement
	};
}

module.exports = {afterHours};

