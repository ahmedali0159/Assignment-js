// 01: Kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var convert = kilometerToMeter(12);
console.log(convert);
// 02: Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var expense = watch * phone * laptop;
    return expense;
}
var result = budgetCalculator(2 + 50, 1 + 100, 2 + 500);
console.log(result);
// 03: HOtel Cost
function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 80 * 10;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result = hotelCost(25);
console.log(result);

// 04: MegaFriend
function megaFriend(name) {
    var largest = name[0];
    for (var i = 0; i < name.length; i++) {
        var array = name[i];
        if (array.length > largest.length) {
            largest = array;
        }
    }
    return largest;
}
var result = megaFriend(["Faris", "Jubayer", "Mizanuur", "Hira"]);
console.log(result);