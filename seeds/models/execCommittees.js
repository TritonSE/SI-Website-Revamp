const ExecCommittee = require("../../db/models/execCommittee");

module.exports = async () => {
    await Promise.all([
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 1,
                name: "Carly Shay",
                position: "President",
                bio: "I'm the president of this committee!",
                imageLink: "https://image14.photobiz.com/10164/3_20180601100153_22858585_large.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 2,
                name: "Sam Puckett",
                position: "Vice President",
                bio: null,
                imageLink:
                    "https://i.pinimg.com/originals/77/71/68/7771683223d86b237a3304d6f32828b9.jpg",
                redirectLink: null,
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 3,
                name: "Cat Valentine",
                position: "Secretary",
                bio: "I'm the secretary of this committee!",
                imageLink:
                    "https://i.pinimg.com/originals/83/2a/46/832a460b522c84fa9650c11face5927e.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 4,
                name: "Tori Vega",
                position: "Treasurer",
                bio: "I'm the secretary of this committee!",
                imageLink:
                    "https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/professional-headshots-girl-laughing-outdoors-1.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),

        // 2020
        ExecCommittee.create(
            {
                startYear: 2016,
                endYear: 2019,
                rank: 1,
                name: "Superman",
                position: "President",
                bio: "I'm the president of this committee!",
                imageLink:
                    "https://www.looper.com/img/gallery/supermans-live-action-costumes-ranked-worst-to-best/l-intro-1616093733.jpg",
                redirectLink: null,
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2016,
                endYear: 2019,
                rank: 2,
                name: "Iron Man",
                position: "Vice President",
                bio: "I'm the vice president of this committee!",
                imageLink:
                    "https://cdn-www.comingsoon.net/assets/uploads/2011/09/file_82704_1_ewavengersheadshots2.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2016,
                endYear: 2019,
                rank: 2,
                name: "Batman",
                position: "Vice President",
                bio: "I'm the vice president of this committee!",
                imageLink: "https://pbs.twimg.com/media/DBj6fhYWsAAl8Ya.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),

        // 2019
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2015,
                rank: 1,
                name: "Joker",
                position: "President",
                bio: "I'm the president of this committee!",
                imageLink:
                    "http://images6.fanpop.com/image/photos/39700000/Jared-as-The-Joker-jared-leto-39790684-236-354.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2015,
                rank: 2,
                name: "Harley Quinn",
                position: "Vice President",
                bio: "I'm the vice president of this committee!",
                imageLink:
                    "https://c4.wallpaperflare.com/wallpaper/879/96/967/harley-quinn-margot-robbie-makeup-women-wallpaper-preview.jpg",
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2015,
                rank: 4,
                name: "Deadshot",
                position: "Treasurer",
                bio: null,
                redirectLink: "https://google.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Exec Committee");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Exec Committee: ${err}`);
        });
};
