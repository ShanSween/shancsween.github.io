const {afterHours} = require("./afterHoursFee.js");

test('What is After Hours Fee?', () => {
    const feeResult = afterHours(1645);
    
    expect(feeResult).toEqual({"afterHoursFee": 10});
});