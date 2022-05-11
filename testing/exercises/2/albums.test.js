const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "Bat Out of Hell" },
                { name: "Bad Attitude" },
                { name: "Hell In A Handbasket" },
                { name: "Blind Before I Sleep" },
            ],
        },
    });

    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
