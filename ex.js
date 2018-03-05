var Quo = function(string) {
    this.status = string;
}

Quo.prototype.get_status = function () {
    return this.status;
}

// var myQuo = new Quo("confused");
// document.writeln(myQuo.get_status());

// ====================================

/* var add = function(a, b) {
    return a+b;
}
var array = [3, 4];
var sum = add.apply(null, array);

var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject); */

// =====================================

var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    console.log(arguments);
    return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42));