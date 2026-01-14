// Program: Print day name based on day number
// Valid input range: 1 to 7

let day = 3;

console.log("Select the day number between 1 to 7");

// The switch statement checks the value of `day`
switch (day) {

    case 1:
        console.log("Monday");
        break; // Stops execution after this case

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    // The default case runs if no case matches
    default:
        console.log("Invalid number");
}
