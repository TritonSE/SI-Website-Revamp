const newsAndEvents = require("../../db/models/newsAndEvents");

module.exports = async () => {
    await Promise.all([
        newsAndEvents.create(
            {
                title: "Davika Hoorne",
                description: "Davika Hoorne, also known as Mai Davika, is a Thai actress and model, who made an acting debut on 2010 in television series Ngao Kammathep as the lead role.",
                imageLink: "https://i.mydramalist.com/j43dBf.jpg",
                redirectLink: "https://en.wikipedia.org/wiki/Davika_Hoorne",
                openInSameTab: true,
            },

            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Taylor Hill",
                description: "Taylor Marie Hill is an American model. A former Victoria's Secret Angel, she appeared in the brand's annual fashion show from 2014 to 2018.",
                imageLink: "https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2016/10/Taylor-Hill.jpg",
                redirectLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
                openInSameTab: true,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Romee Strijid",
                description: "Romee Strijd is a Dutch model. A former Victoria's Secret Angel, she appeared in the brand's annual fashion show from 2014 to 2018. ",
                imageLink: "https://www.stylectory.net/wp-content/uploads/2021/01/6c0c6550ae03f40e8535d7a27a90d0d8-768x768-1.jpg",
                redirectLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Barbara Palvin",
                description: "Barbara Palvin is a Hungarian model. She first appeared in the Sports Illustrated Swimsuit Issue in 2016.",
                imageLink: "https://messika.cdn-tech.io/media/ultranoir/messikablog/celebrity/image//b/a/barbara-palvin-wearing-messika-high-jewelry_1.jpg",
                redirectLink: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                openInSameTab: false,
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
