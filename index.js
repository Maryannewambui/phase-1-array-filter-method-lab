// Code your solution here
/*
findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match
*/
const  drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, Bobby) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === Bobby.toLowerCase() })
    }  
findMatching()

/*
fuzzyMatch()
      1) returns a driver if beginning provided letters match
      2) does not return drivers if only middle or ending letters match
      3) does not return drivers if only middle or ending letters match
      */

function fuzzyMatch(drivers, s) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, s.length) === s.toLowerCase() })
  }
  fuzzyMatch()

//matchName() - accesses the data structure to check if name matches

function matchName(drivers, Annette) {
    return drivers.filter(function (driver) { return driver.name === Annette })
  }


