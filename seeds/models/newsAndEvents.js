const newsAndEvents = require("../../db/models/newsAndEvents");

module.exports = async () => {
    await Promise.all([
        newsAndEvents.create(
            {
                title: "Upcoming 17th Conference!",
                description:
                    "We are delighted to annouce that the 17th Sakyadhita International Association of Buddhist Women's Conference will be online! Save the dates: December 26th - 29th, 2021",
                imageLink:
                    "https://lh3.googleusercontent.com/ykejm8tgK4dBs7ng31eTMDT1m9g0divFCb7f6NK-uqpLsx0Ro8P1EYi97vfjGZ86E-gp3eb-rownzFEL7QYYQceAD-VnU4o9_UYIerdC4yAhKgNqiU05blASZ0w9eGJg5dGhVjMcrHDdqG1xwA_s_3GK7te5Bdup3052E-avFaHJQyowMKz4uaJ-j1o3lTXx4LZJJ-O3MlBURjY8Iady-eegFen82N1NUIAHs2UVCLxtgF0grvgQahlhr3B9eGJiXu2KDeyu7PG_br_Yz7Ryi24jrqFHpYcaN8sFEEzgdt3V7F-3cAFEjhlGS1tHi4pj9wQZkdYwAtDk4bj87MkOGm4-umi8nRzr4wuSbMKa_rns9u-srOl8rggBAXyqBjGGvQEruN0fcV-DYbiRmNjAc9TcL857mSdun7lYB9-2Q3ezT9dzprFlISR8Q3HZJc9GY11FCFxnqyBLUiUd4_O20akEhd_sQ2Qk4sPCVkRTP1vLPnPM5u1h2T9xWBwLy3kT4BHr9CB0X1xCwMfukquQR_tT5DuqNLaure1s-uIOfjVPheJFLqsbLnbBmPDlWKNNl7uBGL0xfrg2Ef2Q1tPO-308GzOa4IfI31jVrBzFjWEmlbhMuxytb-V-laBODgCNDk52uz28Z8VJPDXkiTarYpuf2f6rWYkbjLGq4TqSca851docIOvSaUqBeuVBlboGUpYRHSV-oOUPmZ4iAZ0erVk=w800-h450-no?authuser=1",
                redirectLink:
                    "https://sakyadhita-international-association-of-buddhist.heysummit.com/",
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
                    "https://lh3.googleusercontent.com/knKvgcaFUDNeL3KcpmUCBAbkispyH2rK0XfCNXrtS6MCB5jJHwJIYDKGecWY7_Vo0foeuNZKPijaDFkANdAttfm9-n7FSxKKA9OHe1R_z2bENR0SvBs-eTz9qUD3Q9zWzzvRrf6KS0OHtpZ-ycgmvT_p34ln4msA5Hb2qZTTpMsCEreUlQV20vBWYUca4KMahgnUmUhGTnDWmsU3FhCVyRKD03Sc8-ipdYysdseiPxI-8yupkBFugeE1a6H0rX6_X5mvFYVW8F9-RpuQ_r-d4yqyIGZ9ru-tgPUQvaz8mlKQZ3xSptP2-ReqXKtS4rS0ZZp092974EzMy4tcgKr_VDhdcmryqs1p2dhABIk4HdeeZGlMvBdFegtF_d7xEo0J6CScfRIyeJWDlby2h2aTRJAbUVqqbIVXM91WO4yTBez78nhjvvSOcavTfTTBiLnacvgnujrQTiuHdXHiIC8PwiHpKYfYAM7D9f-OSMFjIBRmoYvw8jhsYjetXQbaXGeGxtFc2G5fgSMQjR-skbCXPFXgC0uk1l5lUV262AKLOJS54MnTH3ofoUJBHvDDHCVLGlOo6KKK4heb49vv2tNNKgq28uXeSS9gBokcKrVWRO6DUzxn7w-W9dOgkYEpCFDQvET6qNcH-ZF3D3nMVVAarj6_lex7kbx6i_GeZxQ6rTgLhTDF2Y9mNDFmBg_xlmb_vzDOTXHmcUmLPlzh17wy1RQ=w961-h441-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/MNswzkbk2u_zBdKSBimSiQkGZaqAf3fMEwaD7-XBq6QEhopGLy_vCBzitiAUc9mo9RGXMCLiPSFnr4_IrQJ-9F1fGBKdyVIL7lV-pWq_QrThofocxTgZaAm3BNYJt7Po7j7z3X5iTrUklNSoSomXRl1bAdwPvfsL4vqdyyugXnyUVcAYJ2LaYR-L5-skbMhcNfHbEXjRnX30TN41Yhhza7_POuEzdeCwJ4QSs4dALE8t5d0QU-_kZk868JD_KGEGfD7M-HI2qvoD_zwFu9c0gGIytqUaV7bj2eYLOMjVi91cLarortxqwsdQMlHS5I5RsDasRc2Yq3IYxhxcLBs0nlwlN3tjX6-rpGXdSBA35gDqTsaoC_4ffL_Vb826WJoCI0UQmGJHd_BKekINXc7-Otf_VR5cKaGWmHm46AltRWDghNyHAx8upWNJLSr5iEkpKGwAZZsfL4c01TFufvvgLcQCb1f40li9IXMYvaDwz7JL0DO19gTI6dsh6YhJ17OM2Mi6IDA95NIVHj7QK7PZNnycOPV8HRmqhKyALMc1SEcqxisLxUgj4rjrgal_LRl25WHlmNHCiXH7LlHSNnTCw8EmM--uIYoEpRPxoWqHpA4dBaFeJ_adLLzqPWdYNWe_xGoZOpJHbQcI3YOTxYtsyvTTUTA9-nEaiA5MYLTjZHkElxTvqeI3rl-JuFs2s3nQn9dHv2LHlqXcKMfaFtn0e_o=w960-h440-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/VB8k8OqZA2Nc7KZx5Z9fVlOSrKsAA7zrAsdwoTTKQRLw6gDtmVNGC-ZO8MU0Gnpe4ghpgL6FTy5bf-4WEmgz2-YypWf4UQjY1GTdAuJCFE8leU6daI7AU4FrzxnngfoGBig7RNUHQoy40a9aRrA3e3Fi8c3HKsZXtQ50cxJumPq-7q0F7Ubz_7hScToZfkCX_lvYXrz5Igi4v2fXUBfZdB3R7QvKrrToTbkOLRD5Y2Tb7GeR7nkgvj6jK02nOaPHHaBwcb4O6WGJyWtAk3zrbhitZP02nIXmbZ-sndLOjDK31wUBNL_k6pPEJAJz4UnrcNEHS1u-QG7i5ghyvysBArvTxAdAZz1a8chSFsSuhmMz-x8ANv-iUE45NozAxI_pah4FNWzE2kiaa7FaElGbjsL-fhG4euZvA022I9BV0CoxE35zBs9h2Ft76MxvHC3xMS3pkyedNGn6wp5MnDt1kTh_r-K3f_thpRuRLgaXcz5RINWGHS-VmhZ3_R34uf9kb66b6gqB4FusU3LG8yMEi6721NNXFFw-hUL68MOEFg8MOVsMAL0ylYs5zDi-XkkU3h0UUejf5JINI7RgK5e4KVS2kIhfb_JVAEscvCABR6jjz4bKhjzocrHNByoewGui-FXCqTfCY2pPainPYLFw5i626U-_yf1gP1w3Cqi54VkVj6LCuSrBgeXD-aren5Rz8w0KCZ5-D0oVbiCha5NL-w0=w2771-h1056-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/FdSHXl68maxETnM9QoVqpjiG0pQNPFoGLLDC12q6EFq5AdaciSY0yyjKzvP1D5BoPT19RKHxNDoc4Y5oTZSzzed44AildNIYLOFPk_liA_Mi-A2Io_WaKyNHh6lCIsfJ_aq5YSQVbMz-FHMoxTTG6vb6vItJbV8Jr5ktWPZCIVLDHzfmGuhZ-e1FmitCjmnABG2rw-dUOnd3HPjtMeogUWhvMGe8ejYVE5LjGeN_UvoWU98Ws87E0ICHvSPmIaquj--4D9dikizqvIi24rwTh7k9C6pc9tvR2xvMizZHo9FHhbCxlRSeKmktP7cFWDzo9gYodrmZLR4_6_8GLPwrVitkmNRTRMZU6GSIhto7wddLauT622EJnqJJ1A6j5W4OmDCQvORC54zRF0e5S2c-konbwTMEpzUybdO4Ken1zoQj5IFGALW1OdLx1zI68uYlU7gxv1ks0J4sNRdbUkiIHk_c57Qg3awF1hNaX0CHAfAg8qn1rHUHMrrkcNnT6UhD7OXPpWxhUEj5R9C1XEWwLkiYW_gTApeEvBNxEMCTWkCMll8JrJmJxPz6-UPytRHJBmBlF3nmo8Pjw3IwGedqYmtwBG_obGOrK852nCnrJ1EP9siqSczYFuMEkD03_dWB-vTtl2ddM9SLa-p-0OwDIGqDrEhbrKe4fICW3KTdo_4fjWlvs4QPFEtAnlilOlEvvwfcHn-g3r53KhmtbkcRj3A=w960-h440-no?authuser=1",
                redirectLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2021%20Sakyadhita%20Newsletter%20Vol.%2029.pdf",
                openInSameTab: false,
            },
            { logging: false }
        ),
        newsAndEvents.create(
            {
                title: "Sakyadhita eBooks",
                description: "Sakyadhita eBooks available for all!",
                imageLink:
                    "https://lh3.googleusercontent.com/O7rq76vgZEEduaX4FYHS4j-Tdte7aVDbEiICIAZHgvma3rJyZEN6bG509LeJm9sSJcRPkUg3MkdTDGUy-Jy4A0mnUzLpwyQCHu5eAj7NJWnB3zcgORLSNyk4IYc3RTh-Z_mFVeMten7gJYEcNd-yXDjB0QDSLXtPFn2sW3oQ5BAR4yrKELlE-LXsm-DecBExctJ76ccJOGJAN61_sH90YM6X0k7xGVBLFhlRMSuYM9AIcpFdrNwjhFJDGxv58Anj1_4q8OuDPNIXIyTSq5dZ548InUG89aYkDlJ2O538TEF9QTudF1meO44T8qIIxPXraImQirtRzbByY3m0h8Ipwz_LBLHOy8OCywP53SXUYAIPUO3EnlQ26lYc-XOlmpWPTF50CrV69Cxfat6Gm4GTEZ2He4zJNh9dT5duBk-94zrmw7X1WBfAIFMkTMQj2tqs9gk6y60mFcyI89OgOBXb7gy8NEIHR29a2DBWhjLt-XcCcL9GSCXnZ1hR-Yn27q7EEirKI4W3BWCm45VoGDtCYEXGuFed-bPLEOEaExStaMbsU0mbbR4Se0eJvhys7LsQ97mj0-y7w2MK1dgY81-S0-IvuemQHziYZD1w7-vtFW3tCsPDlqPh9paAfbMMmK78peVaDbxv7WS_MdoNc7dEK5Ugbkf78h0r5yv64aEC-DPvPE3tmS-RgrhBxrylrXM6dgDmdRKdIHJnf77dWLcajzY=w960-h440-no?authuser=1",
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
