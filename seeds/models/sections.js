const Sections = require("../../db/models/sections");

module.exports = async () => {
    await Promise.all([
        Sections.create(
            {
                page: "Home",
                title: "Introduction",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Our Mission",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "How You Can Help",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "Home",
                title: "Lifestyle & Devotion ",
                content: "https://en.wikipedia.org/wiki/Barbara_Palvin",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "BuddhistCulture",
                title: "Bodhisattvas",
                content: "<p> In Buddhism, a bodhisattva is any person who is on the path towards Buddhahood. In the Early Buddhist schools as well as modern Theravada Buddhism, a bodhisattva refers to anyone who has made a resolution to become a Buddha and has also received a confirmation or prediction from a living Buddha that this will be so. </p>",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "BuddhistCulture",
                title: "Eight Fold Path",
                content: "<p> The Eightfold Path consists of eight practices: right view, right resolve, right speech, right conduct, right livelihood, right effort, right mindfulness, and right samadhi ('meditative absorption or union'). </p>",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "BuddhistCulture",
                title: "Bhikku",
                content: "<p>A <a href=\"https://en.wikipedia.org/wiki/Bhikkhu#:~:text=A%20bhikkhu%20\" target=\"_self\">bhikkhu</a>  is an ordained male in Buddhist monasticism. Male and female monastics are members of the Sangha. The lives of all Buddhist monastics are governed by a set of rules called the prātimokṣa or pātimokkha.&nbsp;</p>\n<p></p>\n<p></p>\n<img src=\"https://upload.wikimedia.org/wikipedia/commons/e/e6/Bhikkhu_Analayo.jpg\" alt=\"undefined\" style=\"height: 600px;width: 400px\"/>\n<p></p>",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "BuddhistCulture",
                title: "The Buddha",
                content: "<p> Gautama Buddha, popularly known as the Buddha or Lord Buddha, was a Śramaṇa who lived in ancient India. </p>",
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "OrdinationIssue",
                title: `Jukai`,
                content: `<p> In the United States, "jukai is a formal rite of passage that marks entrance into the Buddhist community. At that time, a student is given a Dharma name. </p>`,
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "OrdinationIssue",
                title: "Requirements",
                content: "<p> The latter are young boys who live and often grow up in monasteries and temples throughout Thailand, set to spend their lives devoted to the faith. The vast majority of monks in Thailand only do so temporarily, taking on short term ordinations for any period between a week to three months. </p>",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "OrdinationIssue",
                title: "Five Śīlas",
                content: "<p> The lay pratimokṣa consists of five vows that are also known as the Five Śīlas: To refrain from killing. To refrain from stealing. To refrain from false speech. </p>",
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "AboutUs",
                title: "Sakyadhita: A Beacon of Inspiration",
                content: `<p> In 2014, I was elected as the president of Sakyadhita. Since I had been associated with Sakyadhita for many years and had already attended several Sakyadhita conferences, I was honored to be chosen to represent this unique and esteemed international association of Buddhist women.

                After the Hong Kong conference, in June 2017, several Asian groups suggested the possibility of holding the next conference in a non-Buddhist country to see what the Dharma looked like in the West. Sakyadhita Australia kindly agreed to help us host the event. We quickly assembled a small team with our vice president, Eun-su Cho from Korea, former president Christie Chang from Taiwan, Yeo May Ling from Singapore as treasurer, and Ven. Aileen Barry from India as secretary, plus myself as president. Later we also engaged Lynn Bain in Sydney, who had already organized a number of His Holiness the Dalai Lama’s visits to Australia.
                
                For the first time, I was closely involved in setting up a Sakyadhita conference with all the endless decisions that had to be made. Thank heaven for Zoom! Although the organizers lived in various countries, we managed to put together a conference in the Blue Mountains that was highly successful and enjoyed by over 800 Buddhist women, both monastic and lay, from all traditions. That is the wonder that is Sakyadhita!
                
                Now, it is time to pass on this position as president – with the hope that our future Sakyadhita presidents will bring a clear vision and direction to the role. With their dedication, Sakyadhita will continue to be a beacon of inspiration for countless Buddhist women around the world.</p>`,
                isPublished: true,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "AboutUs",
                title: "Grassroots Efforts",
                content: `<p> Working at the grassroots level, Sakyadhita provides a communications network among Buddhist women internationally. We promote research and publications on Buddhist women's history and other topics of interest. Our members strive to create equal opportunities for women in all Buddhist traditions. We work to empower the world's 300 million Buddhist women to work for peace and social justice through local branches, the content we offer free of charge online, and through our biannual conferences.

                This website provides information on Buddhist women and a forum for sharing research, ideas, and experiences. <b> Working together Buddhist women are realizing their tremendous potential for social and spiritual transformation! </b> </p>`,
                isPublished: false,
            },
            { logging: false }
        ),
        Sections.create(
            {
                page: "AboutUs",
                title: "History & Vision",
                content: `<p>&nbsp;</p>\n<p>Since 1987, Sakyadhita: International Association of Buddhist Women has been working to benefit Buddhist women around the world. Established at the conclusion of the 1st Sakyadhita Conference in Bodhgaya, India, in 1987, the organization has nearly 2,000 members  in 45 countries worldwide.&nbsp;&nbsp;</p>\n<p>Laywomen and monastics from around the world come together every two years  to share their experiences and encourage projects that improve conditions for Buddhist women, especially in developing countries.&nbsp;&nbsp;</p>\n<p>The 13th Sakyadhita International Conference on Buddhist Women was held in  early  January 2013, in Vaishali, Bihar, India, where the Buddha's aunt/stepmother Mahapajapati Gotami became the first woman to receive ordination.&nbsp;</p>\n<h3>Sakyadhita's objectives are:&nbsp;&nbsp;</h3>\n<p>&nbsp;&nbsp;</p>\n<ul>\n<li>&nbsp;To establish an international alliance of Buddhist women&nbsp;&nbsp;</li>\n<li>&nbsp;To advance the spiritual and secular welfare of the world's women&nbsp;&nbsp;</li>\n<li>&nbsp;To work for gender equity in Buddhist education, training institutional structures, and ordination&nbsp;&nbsp;</li>\n<li>&nbsp;To promote harmony and dialogue among the Buddhist traditions and other religions&nbsp;&nbsp;</li>\n<li>&nbsp;To encourage research and publications on topics of interest to Buddhist women&nbsp;&nbsp;&nbsp;</li>\n<li>&nbsp;To foster compassionate social action for the benefit of humanity&nbsp;&nbsp;</li>\n<li>&nbsp;To promote world peace through the teachings of the Buddha&nbsp;&nbsp;&nbsp;&nbsp;</li>\n</ul>\n`,
                isPublished: true,
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Sections");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Sections: ${err}`);
        });
};
