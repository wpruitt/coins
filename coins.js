/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
// var coinTypes = [{name: "Quarters", value: ".25"},
//   {name: "Dimes", value: ".10"},
//   {name: "Nickels", value: ".05"},
//   {name: "Pennies", value: ".01"}];

// function coinCounter (changefor) {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {}
//   if (changefor > .50 )
//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();
function coinCounter (changeFor) {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;

  while (changeFor > .009){
    console.log(changeFor)
    if (changeFor >= .25){
      quarters += 1;
      changeFor -= .25;
    }
    else if (changeFor >= .10){
      dimes += 1;
      changeFor -= .10;
    }
    else if (changeFor >= .05){
      nickels += 1;
      changeFor -= .05;
    }
    else{
      pennies += 1;
      changeFor -= .01;
    }
  }
  return "quarters " + quarters + "\n" + "dimes " + dimes + "\n" + "nickels " + nickels + "\n" + "pennies " + pennies;
}