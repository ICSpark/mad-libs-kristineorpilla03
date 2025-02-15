// ---- Write code below ---- \\
function dinner() {
    let food = prompt("Name a food");
    let somethingStrange = prompt("Name something strange");
    let adjective = prompt("Give an adjective");
    let animal = prompt("Name an animal");
    let verb = prompt("Give a verb");
    let object = prompt("Give an object");
    let funnyQuote1 = prompt("Give a funny quote");
    let funnyQuote2 = prompt("Give another funny quote");
    document.getElementById("output").innerHTML = `
<p>The dinner party started with a dish of ${food} that smelled like ${somethingStrange}. 
Suddenly, a(n) ${adjective} ${animal} appeared and started ${verb}ing on the table! 
The host grabbed a(n) ${object} and yelled "${funnyQuote1}!" 
We all laughed and said "${funnyQuote2}." It was unforgettable!</p>
`;
}

function mystery() {
    let adjective = prompt("Give an adjective");
    let place = prompt("Give a place");
    let sound = prompt("Give a sound");
    let sillyName = prompt("Give a silly name");
    let object = prompt("Give an object");
    let noun = prompt("Give a noun");
    let name = prompt("Give a name");
    let jobTitle = prompt("Give a job title");
    let verb = prompt("Give a verb");
    let substance = prompt("Give a substance");
    let food = prompt("Give a food");

    document.getElementById("output").innerHTML = `
  <p>On a(n) ${adjective} night in the grand ${place}, a loud ${sound} revealed Lord ${sillyName} lying beside a(n) ${object}, muttering, "It was the ${noun}!"
  Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction. 
  It turns out Lord ${sillyName} had slipped on ${substance} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
}

function travel() {
    let historicalFigure = prompt("Name a historical figure");
    let place = prompt("Name a place");
    let object = prompt("Give an object");
    let pluralNoun = prompt("Give a plural noun");
    let adjective1 = prompt("Give an adjective");
    let verb = prompt("Give a verb");
    let historicalPlace = prompt("Give a historical place");
    let sillyName = prompt("Give a silly name");
    let adjective2 = prompt("Give an adjective");

    document.getElementById("output").innerHTML = `
    <p>Your time machine malfunctions, and a(n) ${historicalFigure} steals your homework escaping to ${place}!
    Armed with a(n) ${object}, you chase them through time, dodging ${pluralNoun} and a(n) ${adjective1} dinosaur trying to ${verb} you.
    You finally catch the thief at the ${historicalPlace} and grab your homework just in time.
    Back in class, your teacher, ${sillyName}, says, "That's the most ${adjective2} excuse ever!" But hey, you got an A!</p>
    `;
}







