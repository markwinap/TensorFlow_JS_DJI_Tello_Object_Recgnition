/*
Marco Martinez -  markwinap@gmail.com
*/
const gamepad = require('gamepad');//GAMEPAD
 
const deathZone = 0.099;//FILTER FOR AXIS ANALOG INPUT
const scanInterval = 15;//MILISECONDS TO SCAN FOR GAMEPAD INPUT
const scanGamePadInterval = 500;//MILISECONDS TO SCAN FOR GAMEPAD ATTACH

gamepad.init();//Init gamepad
let device = gamepad.deviceAtIndex();

let detectGamepad = setInterval(gamepad.detectDevices, scanGamePadInterval);
let getButtons = setInterval(gamepad.processEvents, scanInterval);


//###GAMEPAD EVENT LISTENER
gamepad.on('move', function (id, axis, value) {
  if(value < (deathZone * -1) || value > deathZone) {
      console.log({axis: axis, value: value})
  }
});
gamepad.on('down', function (id, num) {    
    console.log({button: num});
});
gamepad.on('attach', function (id, device) {
    console.log({description: device.description, vendorID: device.vendorID, productID:  device.productID});
});