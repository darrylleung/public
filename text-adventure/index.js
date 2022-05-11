const readline = require("readline");
const { story } = require("./story1");
const { colors } = require("./colors");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let selectedColor;

function askColor(colors) {
    rl.question(
        "Please select a color for your adventure: ",
        function (answer) {
            if (colors.indexOf(answer) > -1) {
                selectedColor = answer;
                console.log(`You selected ${answer}`);
                ask(story);
            } else {
                console.log(
                    "That's an invalid color. Vanilla adventure it is!"
                );
                ask(story);
            }
        }
    );
}

function ask(storyItem) {
    if (selectedColor) {
        rl.question(chalk[selectedColor](storyItem.q), function (answer) {
            console.log(`You responded ${answer}`);
            if (storyItem.answers[answer]) {
                if (typeof storyItem.answers[answer] == "object") {
                    ask(storyItem.answers[answer]);
                } else {
                    console.log(storyItem.answers[answer]);
                    rl.close();
                }
            } else {
                console.log("Wrong answer");
                ask(storyItem);
            }
        });
    } else {
        rl.question(storyItem.q, function (answer) {
            console.log(`You responded ${answer}`);
            if (storyItem.answers[answer]) {
                if (typeof storyItem.answers[answer] == "object") {
                    ask(storyItem.answers[answer]);
                } else {
                    console.log(storyItem.answers[answer]);
                    rl.close();
                }
            } else {
                console.log("Wrong answer");
                ask(storyItem);
            }
        });
    }
}

askColor(colors);
