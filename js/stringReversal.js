function reverseString() {
    var input=prompt("say something");
    var splitString = input.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    alert (joinArray);
}

reverseString();