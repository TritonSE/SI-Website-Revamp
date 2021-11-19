const ExecCommittee = require("../../db/models/execCommittee");

module.exports = async () => {
    await Promise.all([
        // 2021 - 2025
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 1,
                name: "Sharon A. Suh",
                position: "President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "https://sakyadhita.org/docs/home/bio/Bio%20Sharon%20A,%20Suh.pdf",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 2,
                name: "Hsiao-Lan Hu",
                position: "Vice President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "https://sakyadhita.org/docs/home/bio/Bio%20Hsiao-Lan%20Hu.pdf",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 3,
                name: "Kaytee Sumida",
                position: "Treasurer",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "https://sakyadhita.org/docs/home/bio/Bio%20Kaytee%20Sumida.pdf",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 4,
                name: "Thich Nu Tien Lien",
                position: "Corresponding Secretary",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "https://sakyadhita.org/docs/home/bio/Bio%20Thich%20Nu%20Tien%20Lien.pdf",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2021,
                endYear: 2025,
                rank: 5,
                name: "Buphyun Sunim",
                position: "Recording Secretary",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "https://sakyadhita.org/docs/home/bio/Bio%20Buphyun%20Sunim.pdf",
                openInSameTab: false,
            },
            { logging: false }
        ),

        // 2013 - 2021
        ExecCommittee.create(
            {
                startYear: 2013,
                endYear: 2021,
                rank: 1,
                name: "Jetsunma Tenzin Palmo",
                position: "President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "http://tenzinpalmo.com/tenzin_palmo/biography.htm",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2013,
                endYear: 2021,
                rank: 2,
                name: "Eun-su Cho",
                position: "Vice President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "http://sakyadhita.org/home/exec-eunsu-cho.html",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2013,
                endYear: 2021,
                rank: 3,
                name: "Kaytee Sumida",
                position: "Secretary",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "https://sakyadhita.org/home/exec-kaytee-sumida.html",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2013,
                endYear: 2021,
                rank: 4,
                name: "Lien Bui",
                position: "Treasurer",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "http://sakyadhita.org/home/exec-lien-bui.html",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2013,
                endYear: 2021,
                rank: 5,
                name: "Bhikshuni Karma Lekshe Tsomo",
                position: "Branch & Chapter Coordinator",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "http://www.sandiego.edu/cas/theo/faculty/biography.php?ID=296",
                openInSameTab: false,
            },
            { logging: false }
        ),

        // 2009 - 2013
        ExecCommittee.create(
            {
                startYear: 2009,
                endYear: 2013,
                rank: 1,
                name: "Christie Yuling Chang",
                position: "President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "mailto:sakyadhita@gmail.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2009,
                endYear: 2013,
                rank: 2,
                name: "Paula Arai",
                position: "Vice President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "mailto:parai@lsu.edu",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2009,
                endYear: 2013,
                rank: 3,
                name: "Melissa Vincenty",
                position: "Secretary",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "mailto:melissa@HanaleiRugCompany.com",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2009,
                endYear: 2013,
                rank: 4,
                name: "Maria Arroyo",
                position: "Treasurer",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "mailto:marroyo@crs.org",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2009,
                endYear: 2013,
                rank: 5,
                name: "Bhikshuni Karma Lekshe Tsomo",
                position: "Branch & Chapter Coordinator",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                redirectLink: "http://www.sandiego.edu/cas/theo/faculty/biography.php?ID=296",
                openInSameTab: false,
            },
            { logging: false }
        ),

        // 2000-2009
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2009,
                rank: 1,
                name: "Bhikkshuni Karma Lekshe Tsomo",
                position: "President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2009,
                rank: 2,
                name: "Christie Yuling Chang",
                position: "Vice President",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2009,
                rank: 3,
                name: "Carol Stevens",
                position: "Secretary",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2009,
                rank: 4,
                name: "Rebecca Paxton",
                position: "Treasurer",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
                openInSameTab: false,
            },
            { logging: false }
        ),
        ExecCommittee.create(
            {
                startYear: 2000,
                endYear: 2009,
                rank: 5,
                name: "Evelyn Diane Cowie",
                position: "Branch & Chapter Coordinator",
                bio: "",
                imageLink: "https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg",
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
