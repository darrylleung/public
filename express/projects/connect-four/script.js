(function () {
    var currentPlayer = "player1";
    // var currentChip = "chip1";
    var board = [];
    var squares = $(".container").find(".column .slot");
    // var chip = $(".chip1");

    for (var i = 0; i < squares.length; i++) {
        board.push(squares.eq(i));
    }

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
            // currentChip = "chip2";
        } else {
            currentPlayer = "player1";
            // currentChip = "chip1";
        }
    }

    function checkForVictory(slots) {
        var count = 0;

        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    // $(document).on("mousemove", function (e) {
    //     chip.css({
    //         top: e.pageY - chip.height() / 2,
    //         left: e.pageX - chip.width() / 2,
    //     });
    // });

    $(".reset").on("click", function () {
        $(".reset").addClass("move");
        $(".container2").addClass("visibility");
        $(".column").off();
        for (var i = 0; i < board.length; i++) {
            if (board[i].hasClass("player1")) {
                board[i].addClass("fall");
            } else if (board[i].hasClass("player2")) {
                board[i].addClass("fall");
            }
        }
        if ($(".container").find("*").hasClass("player1")) {
            // setTimeout(function () {
            //     $(".container").find("*").removeClass("player1");
            //     $(".container").find("*").removeClass("player2");
            //     currentPlayer = "player1";
            // }, 1000);
            setTimeout(function () {
                location.reload();
            }, 3000);
        }
    });

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                console.log("The current player is: ", currentPlayer);
                break;
            }
        }
        if (i < 0) {
            return;
        }
        if (checkForVictory(slotsInCol)) {
            if (currentPlayer == "player1") {
                $(".victory")
                    .addClass("visibility")
                    .html("PLAYER 1" + "<br>" + "WINS!");
                $(".column").off();
                // setTimeout(function () {
                //     location.reload();
                // }, 3000);
            } else {
                $(".victory2")
                    .addClass("visibility")
                    .html("PLAYER 2" + "<br>" + "WINS!");
                $(".column").off();
            }
        } else if (checkForVictory($(".row" + i))) {
            if (currentPlayer == "player1") {
                $(".victory")
                    .addClass("visibility")
                    .html("PLAYER 1" + "<br>" + "WINS!");
                $(".column").off();
            } else {
                $(".victory2")
                    .addClass("visibility")
                    .html("PLAYER 2" + "<br>" + "WINS!");
                $(".column").off();
            }
        } else {
            var winningDiagonals = [
                [board[0], board[7], board[14], board[21]],
                [board[1], board[8], board[15], board[22]],
                [board[2], board[9], board[16], board[23]],
                [board[6], board[13], board[20], board[27]],
                [board[7], board[14], board[21], board[28]],
                [board[8], board[15], board[22], board[29]],
                [board[12], board[19], board[26], board[33]],
                [board[13], board[20], board[27], board[34]],
                [board[14], board[21], board[28], board[35]],
                [board[18], board[25], board[32], board[39]],
                [board[19], board[26], board[33], board[40]],
                [board[20], board[27], board[34], board[41]],
                [board[3], board[8], board[13], board[18]],
                [board[4], board[9], board[14], board[19]],
                [board[5], board[10], board[15], board[20]],
                [board[9], board[14], board[19], board[24]],
                [board[10], board[15], board[20], board[25]],
                [board[11], board[16], board[21], board[26]],
                [board[15], board[20], board[25], board[30]],
                [board[16], board[21], board[26], board[31]],
                [board[17], board[22], board[27], board[32]],
                [board[21], board[26], board[31], board[36]],
                [board[22], board[27], board[32], board[37]],
                [board[23], board[28], board[33], board[38]],
            ];
            for (var y = 0; y < winningDiagonals.length; y++) {
                var test1 = winningDiagonals[y][0].hasClass(currentPlayer);
                var test2 = winningDiagonals[y][1].hasClass(currentPlayer);
                var test3 = winningDiagonals[y][2].hasClass(currentPlayer);
                var test4 = winningDiagonals[y][3].hasClass(currentPlayer);

                if (
                    test1 &&
                    test2 &&
                    test3 &&
                    test4 &&
                    currentPlayer == "player1"
                ) {
                    $(".victory")
                        .addClass("visibility")
                        .html("PLAYER 1" + "<br>" + "WINS!");
                    $(".column").off();
                } else if (
                    test1 &&
                    test2 &&
                    test3 &&
                    test4 &&
                    currentPlayer == "player2"
                ) {
                    $(".victory2")
                        .addClass("visibility")
                        .html("PLAYER 2" + "<br>" + "WINS!");
                    $(".column").off();
                }
            }
        }

        switchPlayers();

        // $(".victory").on("click", function () {
        //     location.reload();
        // });

        // $(".victory2").on("click", function () {
        //     location.reload();
        // });
    });
})();
