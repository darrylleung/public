const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play? ",
    answers: {
        yes: {
            q: "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? ",
            answers: {
                left: {
                    q: "There's a scary wizard! He asks you a tough question. What's 1+1? ",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye! ",
            },
        },
        no: "Alright then. Enjoy your day! ",
    },
};

exports.story = story;
