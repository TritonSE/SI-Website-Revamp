const Conference = require("../../db/models/conference");

module.exports = async () => {
    await Promise.all([
        Conference.create(
            {
                title: "Contemporary Buddhist Women",
                confNum: 15,
                location: "Hong Kong",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/x7kwjr74hfdp5xe/SICon17-CoverPhotos1.png?raw=1",
                        "https://www.dropbox.com/s/jc5xrunxl2dh2rf/SICon17-CoverPhotos2.png?raw=1",
                        "https://www.dropbox.com/s/wzy1f5d2u1nzewh/SICon17-CoverPhotos3.png?raw=1",
                        "https://www.dropbox.com/s/lawjrkmip0oli6d/SICon17-CoverPhotos4.png?raw=1",
                        "https://www.dropbox.com/s/lo26hgdc3nqb1ja/SICon17-CoverPhotos5.png?raw=1",
                        "https://www.dropbox.com/s/3ruabdoxgfqbkas/SICon17-CoverPhotos6.png?raw=1",
                        "https://www.dropbox.com/s/5js5xepgssyvcat/SICon17-CoverPhotos7.png?raw=1",
                        "https://www.dropbox.com/s/ao8jp63h413tzz0/SICon17-CoverPhotos8.png?raw=1",
                        "https://www.dropbox.com/s/fhqr9g6lnu70woa/SICon17-CoverPhotos9.png?raw=1",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "English Call for papers",
                            url: "https://www.dropbox.com/s/d92wq9okw0rh7xe/15-SIConferenceCFP-English.pdf?raw=1",
                        },
                        {
                            description: "Chinese Call for papers",
                            url: "https://www.dropbox.com/s/gj3m9z0wdqjka6j/15-SIConferenceCFP-Chinese.pdf?raw=1",
                        },
                        {
                            description: "Simplified Chinese Call for papers",
                            url: "https://www.dropbox.com/s/d92wq9okw0rh7xe/15-SIConferenceCFP-English.pdf?raw=1",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Panel List",
                            url: "https://www.dropbox.com/s/xn3bv6gbk6e00df/15-SIConferencePanelPresentations_10112016.pdf?raw=1",
                        },
                        {
                            description: "Workshop List",
                            url: "https://www.dropbox.com/s/m81hhna8xx9t9r9/15-WorkshopAbstractsList_SI2017Conference_03192017.pdf?raw=1",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Panel Abstracts",
                            url: "https://www.dropbox.com/s/z6yb7jiad8hhc5d/15-Abstracts_SI2017Conference_03192017.pdf?raw=1",
                        },
                        {
                            description: "Workshop Abstracts",
                            url: "https://www.dropbox.com/s/acicexz9gqfit0i/15-WorkshopAbstracts_SI2017Conference_03192017.pdf?raw=1",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "Poster",
                            url: "https://www.dropbox.com/s/ollrpr197np34pa/15-SIConferencePoster-2017.jpg?raw=1",
                        },
                        {
                            description: "English Brochure",
                            url: "https://www.dropbox.com/s/womyp3ws8li580s/15-ENGLISH-SIConferenceBrochure_12042016.pdf?raw=1",
                        },
                        {
                            description: "简化字 Simplified Chinese Brochure",
                            url: "https://www.dropbox.com/s/oteb1dzp92jxtqg/15-SimpChinese-SIConferenceBrochure_12222016.pdf?raw=1",
                        },
                        {
                            description: "正體字Traditional Chinese Brochure",
                            url: "https://www.dropbox.com/s/ez77etb3precf9u/15-TradChinese-SIConferenceBrochure_12222016.pdf?raw=1",
                        },
                    ],
                },
                video: "https://www.youtube.com/watch?v=xa7Jt8uVyGw",
                theme: `<p>The 15th Sakyadhita Conference in Hong Kong was a resounding success, with over 800 participants from 31 countries. The theme &ldquo;Contemporary Buddhist Women: Contemplation, Cultural Exchange &amp; Social Action&rdquo; led to lively conversations. A week of workshops and meditation at The University of Hong Kong, from June 22 to 28, was followed by a two-day tour to Lantau Island and other cultural attractions. Olivier Adam kindly shares glimpses of this joyful, meaningful gathering of Buddhist women leaders and their allies.</p>
                <p>The conference theme, &ldquo;Contemporary Buddhist Women: Contemplation, Cultural Exchange &amp; Social Action,&rdquo; highlights the diversity of contemporary Buddhist women throughout the world.&nbsp;</p>
                <p>Buddhism is a significant cultural force in our world, influencing virtually every sphere of human activity from business to popular music. This global spread of Buddhist ethics, iconography, meditation, and philosophy is having an impact on science, psychology, government, and the arts. Today, women have more pathways to self-enrichment than at any time in recorded history. Whether the choice is a career, family, or monastery, women are expanding beyond traditional roles in creative and beneficial ways. Women also take different paths and approaches to spirituality. Depending on their cultural backgrounds and personal interests, they may be inclined to meditation, scholarship, social activism, or the arts. The 2017 conference theme is broad enough to encompass the many aspects of what Buddhism means to women and to embrace the range of Buddhist women&apos;s experiences.</p>
                <p><strong>&quot;Contemplation&quot;</strong> includes personal introspection, mindfulness practice, meditation, and reflection on contemporary life issues.</p>
                <p><strong>&quot;Cultural exchange&quot;</strong> incorporates interreligious dialogue, indigenous Buddhist experience, inter-generational dialogue, and Buddhist transcultural exchange, expressed through music, literature, drama, painting, social media, and the martial arts.</p>
                <p><strong>&quot;Social action&quot;</strong> takes many forms, including charitable activities, social entrepreneurship, community leadership, and other ways of transforming society. The 15th Sakyadhita Conference will be a forum for making connections across cultures and traditions, exploring a wide range of Buddhist teachings, values, and techniques for living a meaningful life.</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),

        Conference.create(
            {
                title: "Compassion & Social Justice",
                confNum: 14,
                location: "Yogyakarta, Indonesia",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/hw4rfjbb5h7z8zz/14ConferenceHeader_09292013.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "Bahasa Indonesia Language Program",
                            url: "https://www.dropbox.com/s/9k88il8422ztmpr/14-Program-SI2015Conference-BAHASAINDONESIA_05212015.pdf?raw=1",
                        },
                        {
                            description: "English Language Program",
                            url: "https://www.dropbox.com/s/jkgnd6vgkawaphk/14-Program_SI2015Conference_06022015.pdf?raw=1",
                        },
                        {
                            description: "French Language Program",
                            url: "https://www.dropbox.com/s/uyyndzs7zrgsrkk/14-Program-SI2015Conference-FRENCH.pdf?raw=1",
                        },
                        {
                            description: "German Language Program",
                            url: "https://www.dropbox.com/s/io944hikcw10qym/14-GermanProgram.pdf?raw=1",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "14th SI Press Release",
                            url: "https://www.dropbox.com/s/zh37ylim6uwzbyt/14-PressRelease_06162015.pdf?raw=1",
                        },
                        {
                            description: "14th SI Conference Resolution",
                            url: "https://www.dropbox.com/s/nq2b896aitd3amm/14-Resolution_06302015.pdf?raw=1",
                        },
                        {
                            description: "14th SI Conference Resolution Press Release",
                            url: "https://www.dropbox.com/s/1efygj0d4921xw8/14-PressRelease-Resolution_06302015.pdf?raw=1",
                        },
                        {
                            description: "Italian 14th SI Conference Resolution Press Release",
                            url: "https://www.dropbox.com/s/bq6mme9rhp4oiu5/14-ITALIAN-PressRelease-Resolution_06302015.pdf?raw=1",
                        },
                    ],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [
                        {
                            description: "Bahasa Indonesia Language Brochure",
                            url: "https://www.dropbox.com/s/nwm6uscnff8zafi/14-BAHASAINDONESIA-SIConference_Brochure_03142015.pdf?raw=1",
                        },
                        {
                            description: "Simplified Chinese Language Brochure",
                            url: "https://www.dropbox.com/s/ygany7m8fextkih/14-ChineseSimplifiedBrochure.pdf?raw=1",
                        },
                        {
                            description: "Traditional Chinese Language Brochure",
                            url: "https://www.dropbox.com/s/x1tunjnqvolzbdj/14-ChineseTraditionalBrochure.pdf?raw=1",
                        },
                        {
                            description: "English Language Brochure",
                            url: "https://www.dropbox.com/s/uf0ly83po2oxxw5/14-EnglishBrochure_02142015.pdf?raw=1",
                        },
                        {
                            description: "French Language Brochure",
                            url: "https://www.dropbox.com/s/0clfzujyjwiacz9/14-FRENCH-SIConference_Brochure_03302015.pdf?raw=1",
                        },
                        {
                            description: "German Language Brochure",
                            url: "https://www.dropbox.com/s/unvu6dmn5z2acff/14-GERMAN-SIConference_Brochure_10072014.pdf?raw=1",
                        },
                        {
                            description: "Japanese Language Brochure",
                            url: "https://www.dropbox.com/s/ar7rchrhrh8ycp9/14-JAPANESE-SIConference_Brochure_03142015.pdf?raw=1",
                        },
                        {
                            description: "Korean Language Brochure",
                            url: "https://www.dropbox.com/s/fe72y6ss4g67mwn/14-KOREAN-SIConference_Brochure_03302015.pdf?raw=1",
                        },
                        {
                            description: "Russian Language Brochure",
                            url: "https://www.dropbox.com/s/ds0c8c8hu9omxmm/14-RUSSIAN-SIConference_Brochure_03142015.pdf?raw=1",
                        },
                        {
                            description: "Spanish Language Brochure",
                            url: "https://www.dropbox.com/s/81u6609lsgu9n9u/14-SPANISH-SIConference_Brochure_03302015.pdf?raw=1",
                        },
                        {
                            description: "Tibetan Language Brochure",
                            url: "https://www.dropbox.com/s/yi8tgrkmnbvzpg1/14-TIBETAN-SIConference_Brochure_03302015.pdf?raw=1",
                        },
                    ],
                },
                video: "https://youtu.be/GRw_hiaiJ28",
                theme: `<p>The 14th Sakyadhita Conference was held in Indonesia at the Sambi Resort, located in the highlands on the outskirts of Yogyakarta, Indonesia. The tropical ambiance and spacious grounds at Sambi were an ideal setting for meditation, educational presentations, workshops, interactive discussions, and cultural exchanges. As with all Sakyadhita International Conferences, all voices were welcome; women and men lay and ordained of all ages, nationalities, and perspectives.</p>
                <p>Over many centuries, Buddhist women have made significant contributions to the spiritual and social well-being of their communities. Nevertheless, Buddhist women are frequently excluded from the processes that shape their communities, such as negotiations among religious, governmental, and social leaders. Decision-makers and social activists may be unfamiliar with Buddhist women&apos;s contributions, while Buddhist women may remain disconnected from the overarching issues that affect their daily lives.</p>
                <p>The 14th Sakyadhita International Conference provided an opportunity to discuss creating better connections between Dharma and the social and political dimensions of women&apos;s experience. Together, we explored how compassion and spiritual development can help shape a more just and peaceful world.</p>
                <p>Yogyakarta is a city and the capital of Yogyakarta Special Region in Java, Indonesia. It is renowned as a center of classical Javanese fine art and culture such as batik, ballet, drama, music, poetry, and puppet shows. Additionally, Yogyakarta was the center of a refined and sophisticated Javanese Hindu-Buddhist culture for three centuries, beginning in the 8th Century CE. Consequently, there were numerous candi constructed including <a href="https://en.wikipedia.org/wiki/Borobudur">Borobudur&nbsp;</a>and <a href="https://en.wikipedia.org/wiki/Prambanan">Prambanan</a>. &nbsp; &nbsp;&nbsp;</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),

        Conference.create(
            {
                title: "Buddhism at the Grassroots",
                confNum: 13,
                location: "Vaishali, India",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/trxb3n0ddlz6ya0/13thConferenceHeader2_web.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "English Language",
                            url: "https://www.dropbox.com/s/dtsvjvb9ltki8p2/13-English-ConferenceProgram.pdf?raw=1",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Table of Contents",
                            url: "https://www.dropbox.com/s/w8i590hod1vijaw/13-ThaiAbstracts-Content.pdf?raw=1",
                        },
                        {
                            description:
                                "Korean Sakyadhita National Chapter 13th Sakyashite Conference Slideshow",
                            url: "https://www.dropbox.com/s/m8pslgij9owfl3w/13-Korea-GEP2.pdf?raw=1",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Thai Language 13th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/ivp3jsggkob8qrs/13-ThaiAbstracts.pdf?raw=1",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language",
                            url: "https://www.dropbox.com/s/k3bdmzrpkava8x5/13-English-SakyadhitaBrochure.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `<p>The conference theme, &ldquo;Buddhism at the Grassroots,&rdquo; highlights the efforts and achievements of Buddhist women who work to alleviate the sufferings of living beings &ldquo;on the ground.&rdquo; Presenters will share their own work and a variety of approaches, including social activism, performance, education, meditation, and philosophy. Since the 1950s, Buddhism has undergone a renewal throughout the world. No longer confined to monasteries and retreat centers, Buddhism is being taught as a practice for everyday living. Until recently, Buddhist women primarily supported the practice of others, but today women are among the most dedicated and diligent practitioners. The 13th Sakyadhita Conference will highlight the achievements of Buddhist women from earliest times until today.</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Leading to Liberation",
                confNum: 12,
                location: "Bangkok, Thailand",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/kwsrzi4wk75dwyt/12ConferenceHeader_09292013.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "English Language 12th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/j02g88z91u7pibf/12-EnglishProgram.pdf?raw=1",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Chinese Language 12th Sakyadhita Conference Paper",
                            url: "https://www.dropbox.com/s/nanjo00wcvj3vmv/12-ChinesePapers.pdf?raw=1",
                        },
                        {
                            description: "English Language 12th Sakyadhita Conference Paper",
                            url: "https://www.dropbox.com/s/afpwgk7m7l4pzl8/12-EnglishPapers.pdf?raw=1",
                        },
                        {
                            description: "Japanese Language 12th Sakyadhita Conference Paper",
                            url: "https://www.dropbox.com/s/l3k0lc7vt93afqw/12-JapanesePapers.pdf?raw=1",
                        },
                        {
                            description: "Korean Language 12th Sakyadhita Conference Paper",
                            url: "https://www.dropbox.com/s/rnkjng55t6ox3en/12-KoreanPapers.zip?raw=1", // another zip file
                        },
                        {
                            description: "Thai Language 12th Sakyadhita Conference Paper",
                            url: "https://www.dropbox.com/s/hgmcm0hito1eomi/12-ThaiPapers.pdf?raw=1",
                        },
                        {
                            description: "Vietnamese Language 12th Conference Paper",
                            url: "https://www.dropbox.com/s/4usmuvaep5gj7hc/12-VietnamesePapers-%20TienToiGiaiThoat.pdf?raw=1",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Chinese Language 12th Sakyadhita Conference Content",
                            url: "https://www.dropbox.com/s/03rbxh25gg22ivr/12-Chinese-Contents.pdf?raw=1",
                        },
                        {
                            description: "Vietnamese Language 12th Conference Content",
                            url: "https://www.dropbox.com/s/k0b4y9nkbjzpxwb/12-VietnameseContent.pdf?raw=1",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 12th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/7fsf9yd7xfj9047/12-EnglishBrochure.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `<p>The 12th Sakyadhita International Conference on Buddhist Women was held in Bangkok from June 12 to 18, 2011. The conference&apos;s theme was &ldquo;Leading to Liberation,&quot; and a variety of issues were addressed including issues that people don&rsquo;t generally associate with Buddhist women, such as the environment and LGBTQ concerns. The 12th Sakyadhita Conference was hosted at Sathira- Dhammasathan, a learning community founded in central Bangkok in 1987 by Maechee Sansanee Sthirasuta. The center&rsquo;s programs for children, teenagers, parents, and abused women promote peace, harmony, compassion, and enlightenment among people of all ages, genders, and walks of life. The eco-friendly center is home to Savika Sikkahalaya Buddhist Institute, an educational project based on the experiences gained from over 20 years of Sathira Dhammasathan&rsquo;s social services. The center is a delightful and inspiring venue for this historical gathering.</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Eminent Buddhist Women",
                confNum: 11,
                location: "Ho Chi Minh City, Vietnam",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/qnabgbloxtkb9eu/11th%20Sakyadhita%20Conference%20Vietnam.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 11th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/hin547gatqund5l/11-EnglishBrochure.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `The 11th Sakyadhita International Conference on Buddhist Women was held at the Universal Light Monastery in Ho Chi Minh City, Vietnam from December 28, 2009 to January 3, 2010. The conference theme, “Eminent Buddhist Women,” highlighted the achievements of Buddhist Women around the world. Until recently, women were largely absent from Buddhist histories, but since 1987, Sakyadhita members have made conscientious efforts to encourage research on the lives and achievements of both laywomen and nuns in Buddhist societies. The 11th Sakyadhita Conference encouraged further research and reflection on these achievements.`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Buddhism in Transition: Tradition, Changes, & Challenges",
                confNum: 10,
                location: "Ulaanbataar, Mongolia",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/7rh04yk18wlkbfk/10thConferenceHeader2_Web.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 10th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/l4ranwzlj7l7c9l/10-Mongolia.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `<p>The 10th Sakyadhita International Conference on Buddhist Women was held at Hotel Mongolia, Ulaanbataar, Mongolia from July 1 to July 5, 2008. The conference theme, &ldquo;Buddhism in Transition: Tradition, Changes, and Challenges,&rdquo; brought together leading Buddhist scholars, practitioners, artists, and social activists from around the world who offered ideas and insights on critical issues facing contemporary society. Morning meditations and evening chanting provided glimpses of the world&rsquo;s rich Buddhist traditions. Small group discussions, interdisciplinary panels, and workshops facilitated dialogue among participants.</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Buddhist Women in a Global Multicultural Community",
                confNum: 9,
                location: "Kuala Lumpar, Malaysia",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/6ferqowq8bmhfqb/9thConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [
                        {
                            description: "English Language 9th Sakyadhita Conference Book",
                            url: "https://www.dropbox.com/s/l8xbgwawrualhjf/BuddhistWomenInAMulticulturalCommunity-Sakyadhita2009.pdf?raw=1",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 9th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/htuqyiv9xvjj9qi/09-Malaysia.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `<p>The 9th Sakyadhita International Conference on Buddhist Women was held at Sau Seng Lum (Puchong) Exhibition Center in Kuala Lumpur, the capital of Malaysia from June 17 to 21, 2006. The conference theme was &ldquo;Buddhist Women in a Global Multicultural Community.&rdquo;</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Discipline & Practice of Buddhist Women: Present & Past ",
                confNum: 8,
                location: "Seoul, Korea",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/zt5f9qv3p2fzmvi/8thConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 8th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/jrq4mqkx5v6wbvx/08-Korea.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `<p>The 8th Sakyadhita International Conference on Buddhist Women was held on June 27 through July 2, 2004. The conference&apos;s theme was &quot;Discipline and Practice of Buddhist Women: Present and Past.&quot;</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Bridging Worlds",
                confNum: 7,
                location: "Huafan University, Taipei, Taiwan",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/fp75twhx7zd8nkp/7thConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 7th Sakyadhita Conference",
                            url: "https://www.dropbox.com/s/meact7q93ivmh3m/07-Taiwan.pdf?raw=1",
                        },
                    ],
                },
                video: "",
                theme: `<p>Sakyadhita aims to empower women and transform their lives, their communities, and their worlds. Continuing this mission, the 7th International Conference on Buddhist Women focused on how women can fulfill this potential by joining their efforts.</p>
                <p>In our increasingly complex world, we are presented each day with new challenges and opportunities. Buddhists around the world are meeting frequently to discuss how Buddhist ideas and practices, such as compassion, skillful means, and uncompromising integrity, can help people maximize their potential to meet these challenges. More than ever before in history, women are playing leading roles in these crosscultural, interreligious exchanges.</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Women as Peacemakers: Self, Family, Community, World",
                confNum: 6,
                location: "Lumbini, Nepal",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/py2uzb9ckqrlz8j/6thConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: "",
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Women in Buddhism: Unity & Diversity",
                confNum: 5,
                location: "Wat Onaloum, Phnom Penh, Cambodia",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/x45cvypc0xrzio3/5thConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: "",
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Women & the Power of Compassion: Survival in the 21st Century",
                confNum: 4,
                location: "Mahabodhi Meditation Center, Leh, Ladakh, India",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/3kiycf5xbr0co89/4thConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: "",
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Buddhist Women in Modern Society",
                confNum: 3,
                location: "International Centre, Colombo, Sri Lanka",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/ziimbc7xj9k5ga2/3rdConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: "",
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Buddhist Women in the Modern World",
                confNum: 2,
                location: "Thammasat University (Ransit Campus), Bangkok, Thailand",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/senc7vgrqqh4ae5/2ndConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: "",
                signUpLink: "",
            },
            { logging: false }
        ),
        Conference.create(
            {
                title: "Buddhist Nuns",
                confNum: 1,
                location: "Kalachakra Temple, Bodhgaya, India",
                slideShowImages: {
                    urls: [
                        "https://www.dropbox.com/s/za4wx2hh0mrj6gn/1stConferenceHeader.jpg?raw=1",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                abstracts: {
                    data: [
                        {
                            description:
                                "Special 20th Anniversary Sakyadhita International Newsletter, 2007",
                            url: "https://www.dropbox.com/s/l824lri1aa4e8jp/16-1-2007.pdf?raw=1",
                        },
                    ],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: `<p>The name Sakyadhita means &ldquo;Daughter of the Buddha.&rdquo; Based on Pali and Sanskrit, two ancient Buddhist languages, the term was coined at the first international gathering of Buddhist women held in Bodhgaya, India, in 1987. The initiative for the conference came from the German nun Ayya Khema; the American nun Karma Lekshe Tsomo; and the Thai professor Chatsumarn Kabilsingh (now Bhikkhuni Dhammananda).</p>
                <p>Sakyadhita International was formed that year, at the conclusion of a truly historic gathering, as an independent non-governmental organization. The aim was to work together to benefit Buddhist women, to reduce gender injustice, and awaken women to their potential for awakening the world.</p>`,
                signUpLink: "",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Conference");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Conference: ${err}`);
        });
};
