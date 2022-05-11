(function () {
    var inp = $("input");
    var resultsContainer = $("#results");

    inp.on("input focus", function (e) {
        var val = inp.val();
        if (!val) {
            resultsContainer.removeClass("visibility");
            return;
        }

        resultsContainer.addClass("visibility");

        var matches = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
                matches.push(countries[i]);
                if (matches.length == 4) {
                    break;
                }
            }
        }
        if (matches.length) {
            var resultsHtml = "";
            for (i = 0; i < matches.length; i++) {
                resultsHtml += "<div>" + matches[i] + "</div>";
            }
            resultsContainer.html(resultsHtml).show();
        } else {
            resultsHtml = "<div>No results</div>";
        }
        resultsContainer.html(resultsHtml).show();
    });

    $(document)
        .on("mouseover", "#results div", function (e) {
            console.log("mouseover: ", e);
            $(e.target).addClass("highlight");
        })
        .on("mouseout", "#results div", function (e) {
            $(e.target).removeClass("highlight");
        })
        .on("mousedown", "#results div", function (e) {
            console.log("mousedown: ", e);
            inp.val(e.target.innerHTML);
            resultsContainer.hide();
        });

    inp.on("keydown", function (e) {
        var results = $("#results div");
        var highlighted = $(".highlight");

        if (e.key == "ArrowDown" && !highlighted.length) {
            $(results).first().addClass("highlight");
        } else if (e.key == "ArrowUp" && !highlighted.length) {
            $(results).last().addClass("highlight");
        } else if (
            e.key == "ArrowDown" &&
            highlighted.index() === results.length - 1
        ) {
            return;
        } else if (e.key == "ArrowDown" && highlighted.length) {
            highlighted.next().addClass("highlight");
            highlighted.removeClass("highlight");
        } else if (e.key == "ArrowUp" && highlighted.length) {
            highlighted.prev().addClass("highlight");
            highlighted.removeClass("highlight");
        } else if (e.key == "Enter" && highlighted.length) {
            inp.val(highlighted.html());
            resultsContainer.hide();
        }
    });

    inp.blur(function () {
        resultsContainer.hide();
    });

    inp.focus(function () {
        resultsContainer.show();
    });

    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Côte D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People’s Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
})();
