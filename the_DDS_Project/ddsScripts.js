//Today's date calculation
const dateDisplay = document.getElementById('date');
const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
	const date = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
	const todaysDate = `${month}/${date}/${year}`;

dateDisplay.innerHTML = `Date: ${todaysDate}`;


const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

const vehicleIdInput = document.getElementById('id');
const vehicleColorInput = document.getElementById('color');
const vehicleModelInput = document.getElementById('model');
const keyHideInput = document.getElementById('keyhide');
const keyFindInput = document.getElementById('keyfind');
const specialInput = document.getElementById('special');

const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');
const timeInInput = document.getElementById('timein');
const timeOutInput = document.getElementById('timeout');

const payMethodInput = document.getElementById('method');
const payChangeInput = document.getElementById('change');


//Submit button triggers functions
document.getElementById('submit').addEventListener('click', () => {
    const customers = [];
    addCustomer (customers, name2, phone)
    const name2 = nameInput.value;
    const phone = phoneInput.value;

    const customer = {name: name2, phone: phone};
    customers.push(customer);
console.log(customers);})


//What a customer looks like:
//customers = [customer1, customer2, customer3, etc...];

/* each customerObject is an object of :
contactInfo (object), 
vehicleArray (array of vehicleOjects)

Each trip {tripObject} has :
tripDetails (object),
paymentInfo (object)

Each ticketObject is comprised of customerObject and tripObject



)*/
// customerX = { customerObject, vehicleArray }
// ticketX = {customer, vehicle, tripDetails, paymentDetails}

  /*  customer = {
        uniqueID = randomGeneratedUUID,
        contactName = name,
        contactPhone = phone} ,

      vehicleArray = [vehicle1, vehcile2, etc...]
        vehicleX = {
            vehiclePlate = id,
            vehicleColor = color,
            vehicleModel = model,
            keyFind = keyFind,
            keyHide = keyHide,
            special = special
        },  //or should vehicleX be stringified?

        tripDetails = {
            tripDate = date
            tripFrom = from,
            tripTo = to,
            tripTimeIn = timeIn,
            tripTimeOut = out (date & time)
        }
        paymentDetails = {
            amountCalculation (tripFrom + tripTo + timeIn) = amount,
            paymentMethod = method,
            paymentTip?
            paymentCashNeedChange = change,
            }

//Calculations:
tripAmount = BasePrice + AfterHours 
    BasePrice = getInfoFromForm based on join of ${from} + ${to}
    AfterHours = { Switch? or Ifs?   
    if 1630>timeIn>16 add $x,
    if 1730>timeIn>17...

paymentMethodUpcharge = {
    if venmo or cc 
    if tripAmount < $50 add $1
    if tripAmount >= $50 <$100 add +$2,
    if tripAmount >=100 add $3}

returnCustomer = stringify Customer name and phone
        return options of vehicles
    */

// If paymentMethod = "Cash"
// unhide "Need Change form element"
addEventListener(fromInput)
function needChangeHide (paymentSelect){
    if paymentSelect = "Cash" {
        document.getElementById("change").show
    }
    else {document.getElementById('cash').hide}
}