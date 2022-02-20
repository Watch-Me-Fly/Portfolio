var firstName = "Jane";
var lastName = "Doe";

// challenge 1
    console.log(`${firstName}`);
    console.log(`${lastName}`);
// challenge 2
    console.log(firstName + " " + lastName); 
// Challenge 3
    var adjective = "lost";
    console.log(
    `We state that ${firstName} ${lastName} is ${adjective}`
    );
//Challenge 4
    var fullName = prompt(
        "What's your name?", ""
        );
    console.log(
        `Hello ${fullName}, and Welcome !`
        );
// Challenge 5
    var fullNumber = prompt(
        "Enter a number", ""
    );
    // if ( fullNumber < 10 ) {
    //     console.log(
    //         `You entered a number smaller than 10`
    //     );
    // } else {
    //     console.log(
    //         `You entered a big number`
    //         );
    // }
// Challenge 6
    // if ( fullNumber < 10 ) {
    //     console.log(
    //         `You entered a number smaller than 10`
    //     );
    // } else if ( fullNumber > 10) {
    //     console.log(
    //         `You entered a big number`
    //         );
    // } else {
    //     console.log(
    //         `ERROR: you did not enter a number!`
    //     );
    // }
// Challenge 7
    // if ( fullNumber < 10 ) {
    //     console.log(
    //         `You entered a number smaller than 10`
    //     );
    //     for ( var N = 0; N < 10; N++ ) {
    //         console.log(
    //             `Here is a ${N}`
    //         );
    //     }
    // } else if ( fullNumber > 10) {
    //     console.log(
    //         `You entered a big number`
    //         );
    // } else {
    //     console.log(
    //         `ERROR: you did not enter a number!`
    //     );
    // }    
// Challenge 8
    if ( fullNumber < 10 ) {
        console.log(
            `You entered a number smaller than 10`
        );
        for ( var N = 0; N < 10; N++ ) {
            if ( N == fullNumber ) {
                console.log(
                    `Here is a ${N} <-- this is your number !`
                );
            }
            console.log(
                `Here is a ${N}`
            );
        }
    } else if ( fullNumber >= 10) {
        console.log(
            `You entered a big number`
            );
    } else {
        console.log(
            `ERROR: you did not enter a number!`
        );
    }
// Challenge 9
    var colorCh = prompt(
        "Enter a color", ""
    );
        if ( colorCh == "red" || colorCh == "blue" || colorCh == "yellow" ) {
            console.log(`This is a primary color : ${colorCh}`);
        } else if ( colorCh == "orange" || colorCh == "green" || colorCh == "purple" ) {
            console.log(`This is a secondary color : ${colorCh}`);
        } else {
            console.log(`${colorCh} is not a registered color in our database`);
        }
