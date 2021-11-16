const branchesAndChapters = require("../../db/models/branchesAndChapters");

module.exports = async () => {
    await Promise.all([
        branchesAndChapters.create(
            {
                name: "Canada",
                latitude: 56.1304,
                longitude: -106.3468,
                isBranch: true,
                email: "info@sakyadhitacanada.org",
                siteLink: "http://www.sakyadhitacanada.org/",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "France",
                latitude: 46.2276,
                longitude: 2.2137,
                isBranch: true,
                email: "gabriela.frey@free.fr",
                siteLink: "www.google.com",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Germany",
                latitude: 51.1657,
                longitude: 10.4515,
                isBranch: true,
                email: "sakyadhitagermany@gmail.com",
                siteLink: "https://www.facebook.com/Sakyadhita.Germany", // Facebook link
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "South Korea",
                latitude: 35.9078,
                longitude: 127.7669,
                isBranch: true,
                email: "escho@snu.ac.kr",
                siteLink: "http://sakyadhita.kr/",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Nepal",
                latitude: 28.3949,
                longitude: 84.124,
                isBranch: true,
                email: "sakyadhitanepal@gmail.com",
                siteLink: "https://www.facebook.com/sakyadhitanepal", // Facebook Link
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Spain",
                latitude: 40.4637,
                longitude: -3.7492,
                isBranch: true,
                email: "mcastellaolive@gmail.com",
                siteLink: "https://sakyadhitaspain.wordpress.com/",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Taiwan",
                latitude: 23.6978,
                longitude: 120.9605,
                isBranch: true,
                email: "sakyadhita2012@gmail.com",
                siteLink: "https://www.facebook.com/SakyadhitaTaiwan", // Facebook link
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "United Kingdom",
                latitude: 55.3781,
                longitude: -3.436,
                isBranch: true,
                email: "enquiries@the-hermit-online.co.uk",
                siteLink: "https://sakyadhitauk.org",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "United States of America",
                latitude: 37.0902,
                longitude: -95.7129,
                isBranch: true,
                email: "susa@sakyadhitausa.org",
                siteLink: "http://www.sakyadhitausa.org/index.html",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "São Paulo (Brazil)",
                latitude: -23.5558,
                longitude: -46.6396,
                isBranch: false,
                email: "patriciagpalazzotsai.adv@gmail.com",
                siteLink: "www.google.com",
            },
            { logging: false }
        ),
        branchesAndChapters.create(
            {
                name: "Hawai'i",
                latitude: 19.8968,
                longitude: -155.5828,
                isBranch: false,
                email: "", // Missing contact
                siteLink: "hawaii.sakyadhita.org",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Branches and Chapters");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Branch or Chapter: ${err}`);
        });
};
