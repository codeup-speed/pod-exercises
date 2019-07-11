function sumUpThoseDigits() {
    var input = prompt("enter a number");
    var sum = 0;
    var string = input.toString();

    for(var i=0; i < string.length; i++){
        sum = sum + parseInt(string.substring(i, i+1));
    }

    console.log(sum);
}
sumUpThoseDigits();