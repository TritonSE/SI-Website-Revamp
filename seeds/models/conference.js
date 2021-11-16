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
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipNN101vlcZTBarrgTzdzPIBRz_5AbDbHCcbO_R_",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipMvWtChfJtGnQAEhCRa7u4EMiZ4jIfT4VnueOWO",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipPwETqQXNwJiaJbplBqd6701K047XRDmgFVEbOf",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipPWaBMDEnyzZDhXge_VrmNffTs_yvkprNsTpJy6",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipMeeZ0QfzEZMug73BdXFkqDHKdkTUHM7TJvM3wT",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipM-GFgbDS9Va3sI_3ZsOPPKCiu2lRoUXD40Tqvo",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipO5WRqvKYN5JtD4ZBitJDyF-6fxJkcHDZk2qWlq",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipMXYe6NkiweD--E8TiBkql7tYt1EBE4oCRc4SDO",
                        "https://photos.google.com/u/4/album/AF1QipMxSxsFeA7wyRowxGGMsJo0nuBB0dsrzvbbBS4p/photo/AF1QipPiSK8eQNXrOERvSGNstjjOwwVNh5cSOYSTsbMh",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "English Call for papers",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-SIConferenceCFP-English.pdf",
                        },
                        {
                            description: "Chinese Call for papers",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-SIConferenceCFP-Chinese.pdf",
                        },
                        {
                            description: "Simplified Chinese Call for papers",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-SIConferenceCFP-SmpCh.pdf",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Panel List",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-SIConferencePanelPresentations_10112016.pdf",
                        },
                        {
                            description: "Workshop List",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-WorkshopAbstractsList_SI2017Conference_03192017.pdf",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Panel Abstracts",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-Abstracts_SI2017Conference_03192017.pdf",
                        },
                        {
                            description: "Workshop Abstracts",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-WorkshopAbstracts_SI2017Conference_03192017.pdf",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "Poster",
                            url: "https://sakyadhita.org/images/conferences/15-SIConferencePoster-2017.jpg",
                        },
                        {
                            description: "English Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-ENGLISH-SIConferenceBrochure_12042016.pdf",
                        },
                        {
                            description: "简化字 Simplified Chinese Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-SimpChinese-SIConferenceBrochure_12222016.pdf",
                        },
                        {
                            description: "正體字Traditional Chinese Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/15-TradChinese-SIConferenceBrochure_12222016.pdf",
                        },
                    ],
                },
                video: "https://www.youtube.com/watch?v=xa7Jt8uVyGw",
                theme: `The 15th Sakyadhita Conference in Hong Kong was a resounding success, with over 800 participants from 31 countries. The theme “Contemporary Buddhist Women: Contemplation, Cultural Exchange & Social Action” led to lively conversations. A week of workshops and meditation at The University of Hong Kong, from June 22 to 28, was followed by a two-day tour to Lantau Island and other cultural attractions. Olivier Adam kindly shares glimpses of this joyful, meaningful gathering of Buddhist women leaders and their allies. \n
                The conference theme, “Contemporary Buddhist Women: Contemplation, Cultural Exchang e & Social Action,” highlights the diversity of contemporary Buddhist women throughout the world. \n
                Buddhism is a significant cultural force in our world, influencing virtually every sphere of human activity from business to popular music. This global spread of Buddhist ethics, iconography, meditation, and philosophy is having an impact on science, psychology, government, and the arts. Today, women have more pathways to self-enrichment than at any time in recorded history. Whether the choice is career, family, or monastery, women are expanding beyond traditional roles in creative and beneficial ways. Women also take different paths and approaches to spirituality. Depending on their cultural backgrounds and personal interests, they may be inclined to meditation, scholarship, social activism, or the arts. The 2017 conference theme is broad enough to encompass the many aspects of what Buddhism means to women and to embrace the range of Buddhist women's experiences.`,
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
                        "https://photos.google.com/u/4/album/AF1QipPFHHtzzSlBIGi0T8bEFWwkaaP9QXs_kcTbMtyB/photo/AF1QipPAMhlmn2vWcv2pLq2hYTxq0YsqBvkLmDGnYJ3g",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "Bahasa Indonesia Language Program",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-Program-SI2015Conference-BAHASAINDONESIA_05212015.pdf",
                        },
                        {
                            description: "English Language Program",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-Program_SI2015Conference_06022015.pdf",
                        },
                        {
                            description: "French Language Program",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-Program-SI2015Conference-FRENCH.pdf",
                        },
                        {
                            description: "German Language Program",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-GermanProgram.pdf",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "14th SI Press Release",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-PressRelease_06162015.pdf",
                        },
                        {
                            description: "14th SI Conference Resolution",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-Resolution_06302015.pdf",
                        },
                        {
                            description: "14th SI Conference Resolution Press Release",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-PressRelease-Resolution_06302015.pdf",
                        },
                        {
                            description: "Italian 14th SI Conference Resolution Press Release",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-ITALIAN-PressRelease-Resolution_06302015.pdf",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Conference Program Abstracts",
                            url: "https://sakyadhita.org/conferences/14th-si-con/14th-si-con-abstracts.html",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "Bahasa Indonesia Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-BAHASAINDONESIA-SIConference_Brochure_03142015.pdf",
                        },
                        {
                            description: "Simplified Chinese Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-ChineseSimplifiedBrochure.pdf",
                        },
                        {
                            description: "Traditional Chinese Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-ChineseTraditionalBrochure.pdf",
                        },
                        {
                            description: "English Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-EnglishBrochure_02142015.pdf",
                        },
                        {
                            description: "French Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-FRENCH-SIConference_Brochure_03302015.pdf",
                        },
                        {
                            description: "German Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-GERMAN-SIConference_Brochure_10072014.pdf",
                        },
                        {
                            description: "Japanese Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-JAPANESE-SIConference_Brochure_03302015.pdf",
                        },
                        {
                            description: "Korean Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-KOREAN-SIConference_Brochure_03302015.pdf",
                        },
                        {
                            description: "Russian Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-RUSSIAN-SIConference_Brochure_03142015.pdf",
                        },
                        {
                            description: "Spanish Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-SPANISH-SIConference_Brochure_03302015.pdf",
                        },
                        {
                            description: "Tibetan Language Brochure",
                            url: "https://sakyadhita.org/docs/resources/conferences/14-TIBETAN-SIConference_Brochure_03302015.pdf",
                        },
                    ],
                },
                video: "https://youtu.be/GRw_hiaiJ28",
                theme: `The 14th Sakyadhita Conference was held in Indonesia at the Sambi Resort, located in the highlands on the outskirts of Yogyakarta, Indonesia. The tropical ambiance and spacious grounds at Sambi were an ideal setting for meditation, educational presentations, workshops, interactive discussions, and cultural exchanges. As with all Sakyadhita International Conferences, all voices were welcome; women and men, lay and ordained of all ages, nationalities, and perspectives. \n
                Over many centuries, Buddhist women have made significant contributions to the spiritual and social well-being of their communities. Nevertheless, Buddhist women are frequently excluded from the processes that shape their communities, such as negotiations among religious, governmental, and social leaders. Decision makers and social activists may be unfamiliar with Buddhist women's contributions, while Buddhist women may remain disconnected from the overarching issues that affect their daily lives.

                The 14th Sakyadhita International Conference provided an opportunity to discuss creating better connections between Dharma and the social and political dimensions of women's experience. Together, we explored how compassion and spiritual development can help shape a more just and peaceful world.

                Yogyakarta is a city and the capital of Yogyakarta Special Region in Java, Indonesia. It is renowned as a center of classical Javanese fine art and culture such as batik, ballet, drama, music, poetry, and puppet shows. Additionally, Yogyakarta was the center of a refined and sophisticated Javanese Hindu-Buddhist culture for three centuries, beginning in the 8th Century CE. Consequently, there were numerous candi constructed including Borobudur and Prambanan.`,
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
                        "https://photos.google.com/u/4/album/AF1QipMch9FMMx2tcDHRqC3t2F7r4l1o5jB76ZW0JAgK/photo/AF1QipNYuWEan5HEMT3ouFwf457vlmBQiQAXoGc6uars",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "English Language",
                            url: "https://sakyadhita.org/docs/resources/conferences/13-English-ConferenceProgram.pdf",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Table of Contents",
                            url: "https://sakyadhita.org/docs/resources/conferences/13-ThaiAbstracts-Content.pdf",
                        },
                        {
                            description:
                                "Korean Sakyadhita National Chapter 13th Sakyashite Conference Slideshow",
                            url: "https://sakyadhita.org/docs/resources/conferences/13-Korea-GEP2.pdf",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Thai Language 13th Sakyadhita Conference",
                            url: "https://sakyadhita.org/docs/resources/conferences/13-ThaiAbstracts.pdf",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language",
                            url: "https://sakyadhita.org/docs/resources/conferences/13-English-SakyadhitaBrochure.pdf",
                        },
                    ],
                },
                video: "",
                theme: `The conference theme, “Buddhism at the Grassroots,” highlights the efforts and achievements of Buddhist women who work to alleviate the sufferings of living beings “on the ground.” Presenters will share their own work and a variety of approaches, including social activism, performance, education, meditation, and philosophy. Since the 1950s, Buddhism has undergone a renewal throughout the world. No longer confined to monasteries and retreat centers, Buddhism is being taught as a practice for everyday living. Until recently, Buddhist women primarily supported the practice of others, but today women are among the most dedicated and diligent practitioners. The 13th Sakyadhita Conference will highlight the achievements of Buddhist women from earliest times until today.`,
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
                        "https://photos.google.com/u/4/album/AF1QipMXLxBKv6MjvVgkXGSWdacoBFLP4KngN6bj9L40/photo/AF1QipPrKL3FYHnV1n_rMjYKPQ9uz7tI4l-URysWpAUN",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "English Language 12th Sakyadhita Conference",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-EnglishProgram.pdf",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Chinese Language 12th Sakyadhita Conference Paper",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-ChinesePapers.pdf",
                        },
                        {
                            description: "English Language 12th Sakyadhita Conference Paper",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-EnglishPapers.pdf",
                        },
                        {
                            description: "Japanese Language 12th Sakyadhita Conference Paper",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-JapanesePapers.pdf",
                        },
                        {
                            description: "Korean Language 12th Sakyadhita Conference Paper",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-KoreanPapers.zip",
                        },
                        {
                            description: "Thai Language 12th Sakyadhita Conference Paper",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-ThaiPapers.pdf",
                        },
                        {
                            description: "Vietnamese Language 12th Conference Paper",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-VietnamesePapers-%20TienToiGiaiThoat.pdf",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "Thai Language 13th Sakyadhita Conference Content",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-VietnameseContent.pdf",
                        },
                        {
                            description: "Chinese Language 12th Sakyadhita Conference Content",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-Chinese-Contents.pdf",
                        },
                        {
                            description: "Vietnamese Language 12th Conference Content",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-VietnameseContent.pdf",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 12th Sakyadhita Conference",
                            url: "https://sakyadhita.org/docs/resources/conferences/12-EnglishBrochure.pdf",
                        },
                    ],
                },
                video: "",
                theme: `The 12th Sakyadhita International Conference on Buddhist Women was held in Bangkok from June 12 to 18, 2011. The conference's theme was “Leading to Liberation," and a variety of issues were addressed including issues that people don’t generally associate with Buddhist women, such as the environment and LGBTQ concerns. The 12th Sakyadhita Conference was hosted at Sathira- Dhammasathan, a learning community founded in central Bangkok in 1987 by Maechee Sansanee Sthirasuta. The center’s programs for children, teenagers, parents, and abused women promote peace, harmony, compassion, and enlightenment among people of all ages, genders, and walks of life. The eco-friendly center is home to Savika Sikkahalaya Buddhist Institute, an educational project based on the experiences gained from over 20 years of Sathira Dhammasathan’s social services. The center is a delightful and inspiring venue for this historical gathering.`,
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
                    urls: [],
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
                            url: "https://sakyadhita.org/docs/resources/conferences/11-EnglishBrochure.pdf",
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
                        "https://photos.google.com/u/4/album/AF1QipOf7YPmV_dE_LptJxQfRdTcCFfK7gGEVbmkiZTS/photo/AF1QipMtvCbhZxwesqSdrB7ulG6Lx9rS1-EIDCjLbrHp",
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
                            url: "https://sakyadhita.org/docs/resources/conferences/10-Mongolia.pdf",
                        },
                    ],
                },
                video: "",
                theme: `The 10th Sakyadhita International Conference on Buddhist Women was held at Hotel Mongolia, Ulaanbataar, Mongolia from July 1 to July 5, 2008. The conference theme, “Buddhism in Transition: Tradition, Changes, and Challenges,” brought together leading Buddhist scholars, practitioners, artists, and social activists from around the world who offered ideas and insights on critical issues facing contemporary society. Morning meditations and evening chanting provided glimpses of the world’s rich Buddhist traditions. Small group discussions, interdisciplinary panels, and workshops facilitated dialogue among participants.`,
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
                        "https://photos.google.com/u/4/album/AF1QipMuV22b0jHf93gcJ94ag7k4bK0xtbnzr9FDcrBo/photo/AF1QipM6A_g-C24fAc2VrLtu3GswGPrNnpzAnDFYIFYF",
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
                            url: "https://sakyadhita.org/docs/resources/epublications/BuddhistWomenInAMulticulturalCommunity-Sakyadhita2009.pdf",
                        },
                    ],
                },
                brochures: {
                    data: [
                        {
                            description: "English Language 9th Sakyadhita Conference",
                            url: "https://sakyadhita.org/docs/resources/conferences/09-Malaysia.pdf",
                        },
                    ],
                },
                video: "",
                theme: `The 9th Sakyadhita International Conference on Buddhist Women was held at Sau Seng Lum (Puchong) Exhibition Center in Kuala Lumpur, the capital of Malaysia from June 17 to 21, 2006. The conference theme was “Buddhist Women in a Global Multicultural Community.”`,
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
                        "https://photos.google.com/u/4/album/AF1QipOFSh209mfVo2iwy6mlJvpgpwVn7SdAfEPs5sDy/photo/AF1QipONskREzTc5mnTXqz0tCJO7RFs4yO5ZNmiFyC8P",
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
                            url: "https://sakyadhita.org/docs/resources/conferences/08-Korea.pdf",
                        },
                    ],
                },
                video: "",
                theme: `The 8th Sakyadhita International Conference on Buddhist Women was held on June 27 through July 2, 2004. The conference's theme was "Discipline and Practice of Buddhist Women: Present and Past."`,
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
                        "https://photos.google.com/u/4/album/AF1QipOnnj0WEY_fpVEGKRt3mjDzx7o8cJwGexuQeCrt/photo/AF1QipNChM6LswUbzgR92zPkAMbC3rlPTLYx-lbImaMF",
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
                            url: "https://sakyadhita.org/docs/resources/conferences/07-Taiwan.pdf",
                        },
                    ],
                },
                video: "",
                theme: `Sakyadhita aims to empower women and transform their lives, their communities, and their worlds. Continuing this mission, the 7th International Conference on Buddhist Women focused on how women can fulfill this potential by joining their efforts. \n
                In our increasingly complex world, we are presented each day with new challenges and opportunities. Buddhists around the world are meeting frequently to discuss how Buddhist ideas and practices, such as compassion, skillful means, and uncompromising integrity, can help people maximize their potential to meet these challenges. More than ever before in history, women are playing leading roles in these crosscultural, interreligious exchanges.`,
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
                        "https://photos.google.com/u/4/album/AF1QipO5e3gA2faN4u6Oi2H_rU_T_A0RGKCBVpJdW7v2/photo/AF1QipOAqIr_l-99oO2Jx_pIj0N1sPjeNynWSzuY04jy",
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
                        "https://photos.google.com/u/4/album/AF1QipPvQlhJ1Ra6U3VWCtNgiPTsO0-gTawyZQrdDiVU/photo/AF1QipMQAb7GBRVP1aA9H_PBuYRgpaMfRhK5QMGnEZdS",
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
                        "https://photos.google.com/u/4/album/AF1QipM36WdB-7k0-ADvYB5IVe_rptjIFaJLHX_oWiMq/photo/AF1QipPvIgzt4nT87JcYuq1y87IHi_aDwaG1l0Zx5kbS",
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
                        "https://photos.google.com/u/4/album/AF1QipO9bZ2zyeW2uVpKlKAZqfz0P4rdlHzHEC7hbpOu/photo/AF1QipPeAunRU1Vy7FD26DzHpezN7U_BqUicjFkrorzx",
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
                        "https://photos.google.com/u/4/album/AF1QipO4TXgStZgK-da26u9iD_2WKQayRybtL8w49aDx/photo/AF1QipPEF5q5YhyCvlVRlQYz-gdoYOC0rNy6O9AyyE7C",
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
                        "https://photos.google.com/u/4/album/AF1QipO4TXgStZgK-da26u9iD_2WKQayRybtL8w49aDx/photo/AF1QipPEF5q5YhyCvlVRlQYz-gdoYOC0rNy6O9AyyE7C",
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
                            url: "https://sakyadhita.org/docs/resources/newsletters/16-1-2007.pdf",
                        },
                    ],
                },
                brochures: {
                    data: [],
                },
                video: "",
                theme: `The name Sakyadhita means “Daughter of the Buddha.” Based on Pali and Sanskrit, two ancient Buddhist languages, the term was coined at the first international gathering of Buddhist women held in Bodhgaya, India, in 1987. The initiative for the conference came from the German nun Ayya Khema; the American nun Karma Lekshe Tsomo; and the Thai professor Chatsumarn Kabilsingh (now Bhikkhuni Dhammananda). \n
                Sakyadhita International was formed that year, at the conclusion of a truly historic gathering, as an independent non-governmental organization. The aim was to work together to benefit Buddhist women, to reduce gender injustice, and awaken women to their potential for awakening the world.`,
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
