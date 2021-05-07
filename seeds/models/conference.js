const Conference = require("../../db/models/conference");

module.exports = async () => {
    await Promise.all([
        Conference.create(
            {
                title: "First Meeting!",
                confNum: 1,
                location: "San Diego",
                slideShowImages: { urls: ["https://www.google.com/"] },
                programs: {
                    data: [
                        {
                            description: "Emminent Buddhist Women",
                            url: "eminentbuddhists.com",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Presentation",
                            url: "eminentbuddhists.com",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "abstracts",
                            url: "google",
                        },
                    ],
                },
                video: "google.com",
                theme: "Lorem Ipsum Dolor",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Sample");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Sample: ${err}`);
        });
};
