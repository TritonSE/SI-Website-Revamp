const newsAndEvents = require("../../db/models/newsAndEvents");

module.exports = async () => {
    await Promise.all([
        newsAndEvents.create(
            {
                title: "Upcoming 17th Conference!",
                description:
                    "We are delighted to annouce that the 17th Sakyadhita International Association of Buddhist Women's Conference will be online! Save the dates: December 26th - 29th, 2021",
                imageLink:
                    "https://www.dropbox.com/s/rdeyizxkm2bwqcq/17th_Conference_Promotional.jpeg?raw=1",
                redirectLink:
                    "https://www.dropbox.com/s/rdeyizxkm2bwqcq/17th_Conference_Promotional.jpeg?raw=1",
                openInSameTab: false,
            },

            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "15th Conference",
                description: `More than 800 people from 31 countries
                    attended the 15th Sakyadhita Conference
                    at the University of Hong Kong, June 22 through
                    28, 2017.`,
                imageLink:
                    "https://www.dropbox.com/s/cyekye3qrwi9737/Hong%20Kong%20Conference.jpeg?raw=1",
                redirectLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
                openInSameTab: true,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "14th Conference",
                description: "​14th Sakyadhita Conference in Yogyakarta, Indonesia (2015)",
                imageLink:
                    "https://www.dropbox.com/s/gcx7b8ej9pid32v/Indonesia%20Conference.jpeg?raw=1",
                redirectLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Women in Buddhism: Unity & Diversity",
                description:
                    "Buddhist women offer a wide variety of practices, traditions, cultures, philosophies, and lifestyles. Sakyadhita unites women in one of the world's oldest religions, and how that can be expanded.",
                imageLink:
                    "https://www.dropbox.com/s/knddhkqhdi1cmwm/imgonline-com-ua-twotoone-WPgNdyLwnxBI9Le.jpg?raw=1",
                redirectLink: "http://www.youtube.com/channel/UCLOIc4vqaqPKcjaRqmn6-yg/playlists",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "New Newsletter",
                description: "Check out the latest Sakyadhita Newsletter!",
                imageLink:
                    "https://www.dropbox.com/s/dtuggjn3ouuaul5/Sakyadhita%20Newsletters.jpeg?raw=1",
                redirectLink:
                    "https://www.dropbox.com/s/2o4pv6kpvnogv7m/2021%20Sakyadhita%20Newsletter%20Vol.%2029.pdf?raw=1",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Sakyadhita eBooks",
                description: "Sakyadhita eBooks available for all!",
                imageLink: "https://www.dropbox.com/s/u7chwhkcjkwed36/Sakyadhita%20Books.png?raw=1",
                redirectLink: "/resources/epublications",
                openInSameTab: true,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished News and Events");
        })
        .catch((err) => {
            // some error occurred
            console.error(`News or Event: ${err}`);
        });
};
