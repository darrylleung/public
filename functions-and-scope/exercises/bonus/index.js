function getTotaler() {
    var sum = 0;

    var totaler = function (number) {
        console.log("INPUT", number);
        sum += number;
        console.log("SUM", sum);
        return sum;
    };
    return totaler;
}

//step 1:

var totaler = getTotaler();

totaler(7);
totaler(10);
var newSum = totaler(12);
