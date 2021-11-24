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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
                redirectLink: "https://www.dropbox.com/s/xcl700fofxmcdbu/Bio%20Sharon%20A%2C%20Suh.pdf?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
                redirectLink: "https://www.dropbox.com/s/a9dtefbzka23wj4/Bio%20Hsiao-Lan%20Hu.pdf?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
                redirectLink: "https://www.dropbox.com/s/oi65xrhqx3ekn44/Bio%20Kaytee%20Sumida.pdf?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
                redirectLink:
                    "https://www.dropbox.com/s/k5h0mw3dnu5xip8/Bio%20Thich%20Nu%20Tien%20Lien.pdf?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
                redirectLink: "https://www.dropbox.com/s/1m9e56opgy2vfya/Bio%20Buphyun%20Sunim.pdf?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
                imageLink:
                    "https://www.dropbox.com/s/ipsrms2hhq5c0q4/sexy.jpg?raw=1",
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
