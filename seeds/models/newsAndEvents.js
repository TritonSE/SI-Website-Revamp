const newsAndEvents = require("../../db/models/newsAndEvents");

module.exports = async () => {
    await Promise.all([
        newsAndEvents.create(
            {
                title: "Upcoming 17th Conference!",
                description:
                    "We are delighted to annouce that the 17th Sakyadhita International Association of Buddhist Women's Conference will be online! Save the dates: December 26th - 29th, 2021",
                imageLink:
                    "https://lh3.googleusercontent.com/BBVHRqf6MiQumOd-pymJhsJtAdt-6bcG9kEDNLXcpp2ON-K5Dqa8sUh_r4eieLaprOrislhCw1U3bw2kYd2vSbZIuhGTTQ7KbIG13o3-jfnoieh0yyU0f8VO_o7t-3VkTVaShfw389TuA7vVKTyiqXJjL3O-6mEYuDe3YTnwOqykYtZofgzsiZdnI8Vei_dr0Qi58KuHC7-54BEOgVoskgU_8wQ-n08S5MF4_77W0jR_fy0kmmpGhAmH1Qj0Z7m9_GcYF2uY2NuwEqzlt6bQaTviOjzEskVtToBmiNAlWoGE_AKqpnQXIj151NAqlzFPyjTLPx12S_AzNP4XvSOc2df41ittgsIwyt2SWURubem9Wsh2TPylIV2brGj_hBCPckKDCgeflFkCLsZIUTIE5Qpu0ndsPwcMsJYZtaG-hSachXc7bkZL0TiZG0keX7d-qABkdWsGukiqOm2p2RodFCWzjxVdXyhpIOeJo4LgKf8cKtXiWG_K46_PhGqhamzWZDWQJZmcit4Dyz5p6QTyVF8-GppHRH527hGMm4kAZ-9sF8ef7sZuEnYnCx7QAuTX_nOCcq0OY6uy-l8-9PkkQB55HAw4RBmwHcP2OQbCYZdQMXP8vgdx1_eLLR7Vk4opGbSgA5lTgmqF6MEZAgp8IEA2ZMT0ZMmjkvNt0Q8XXUxdZKQCANpdLVLeZw15gJsBsteUBPjkWXYxSUxalFBKUbk=w800-h450-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/lsXl5XXNJ7Rq733ce7pfxNpDzAeOPKw1doTzNb7Zp0u9X1cU1OtdT1d22fV5NBG_HRWiIy1t-gp-KQZ7cREHnD_qnskmpLwVc9FNj7h0USrYkcjmTSwjI_G1ZS6Ezp8x3DU4D3eAohLJ3pQJ8V7PhN0onh09NtpmxA3iOBJbIy14cdYb3dNM_zDiW03fMr4AJfjBdMRyEyLs3Lrg5jQKefsShyelPRPYvI4Y2wXToZw1KSju-0ZIRVWWC4yYX2THC0t72qOp_bdTZ2hi2s7RZFZ7NDgrBwbvm8iWj9RM5QIkncOSBSdayd7rvAKdqlVa_LEpPEZMWSQ1lkJ-Uvgk_2HrQU0y76pxVjU87zyOO5gDhob6eEjRaxb0eMbWi5U5BMusxWZ5KTtoL4tGf___hH3m0oKFLDCZ7G2vp7SoBaAcq5meVc-xLaX1_Srb1qoRSPqEziJWpeEUxmVD6-NUUVLlWscTWgG0ZjkPXmkTH1J7b0st_DavJ_f-c2Gqz_oaPK_K1d2kP5oihekz56mW4xZMHXAf2eUnMs9j1ERskRCNBTvoZUxkYSOBHrqqSkmxhsXY_NP3QCpRLX36ngSh_4sagaByBFkdfcuqUaaJw4MM8ZG-QDUkd4BJQuNbRr23bK5BW5Q831tEUEHKsAYm8kX9i2J1ZffSAfTcA8B_e7mPWsAkj5I3zV-EXqN69fV149fHRWcQNO3HNj987AD9o5k=w961-h441-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/V5rB-SfylCFM-AWgFp267A4jQOLDCIltX1EItYl18ZLGu7AtWRozrku1-LNHx8IugLo4RoeAm6kTd9Yeuzg4bYB73dychKMH_L-LPG8bPMTx-LW3a7-ql53piQZ5hrQjR5faU6Pw8Pl3U62II764jvpTSS7nk-uINZkDT_TtFdWvdrGcwIYfZY1IFLfZD7tki8Ubnmf0WhcZR31IirT3mOQo3ekSp-XGxnWvI1mH3VJJtcOdXS--T6s3s8H-6oJNk0GHmMxtK10JSQBcim1ULOiUJTrtg45kek5_ED44fvMgdar8HucdOTFLttsW52iSmj7NNMme0qv1Ek4E7eMKC7JI59kCZatUjqCJxXdmSE0Vd0eJURApOQvgKEWPCLvCXaUVjOsQ9h2iGndMjBMUJ4Klnvq3NlUYOZNC2CfJ04Q9HSfWQiWXP456wSkrjOYmO57lGyiy_QJw3m0ZpwBEdRH9XK0CmiTo_eMp5UwKKbg-LGA6AXtY5vNNiIu1ZPR14ruG0WGsloBg8-mdMd4328nna7m0mbpDJCfiDeQGXyExo_pDp88KkIcmZ80tUudDcgItQ-HyuUtqUHyPfBvJFV0fO7NZKXnIkBa34OznGwDiFa3tZVOyusqDczNyFy0U396BPUl8GXFRAxOzmwH3hRZ1nW82sfWl_ZNBF5dX8b8PGYITiVAkC2kWVbT6PW8WgpTksMiccRYLtJ8OiNgd1dQ=w960-h440-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/9kGPLttcNtdxDQFU9x1HgmINT0E1LiKqn4a-4xARUM5aeUbb-xF1QQ1t0dEohf37kuRgiXvEfE0NZ434HfJIp35dcdQ91PtVxC6YxeAshB6MrbWWb2XVPHi-zO5aJkAl5R7LYpUapTB_8pHmFk002J5ZqfJo_3hUo8VgLrpAKJ-wrZlzjA8njbNdI-8nA8uM9OGbtuqXWBkDhaSK0oOAsq8riZj3SmQxuUn3_UhEWBjPU63Y8chCJAxG1iqKJ1VB87cPCy0oCZj3SKxQk2LBU20yPF_Q3lyeYR2dprp6pAwM0-prrBNbWTB6BfOaw_lgI_4X7mBeGa3vkRdWLysDCfiE3rjNgfbHWNtF8Xv-51Z8Gt67KfRtNgP4ClfjWWF5fMFBcx0t0rCQdehKsJPJzO0Q0E_n7D1QKlwS5E53BXC996PM9SeduQQS4FvTsauZDJG1i--Oz_TI35PZZvsuD-QpxuZP7nY7NYlGmfIm4UFJFMQVGpuNG4B-3iVeRmjBdBav2o2zt8w42fIl0vS_RGlzagczGWmi5vnawvVN4gQ54Nnduxb11H-lrGPmynSNKJW8A0fWUIjHT7AvKuCeeT017Q3wT-tV9xx1RDVL9VRTvrk3Lf4FfvncuFgLJSQxl4OvtveEKpJ4vgRF07WDzo0-9MCjQEDYHq-BzBZRn4js4PyAeu09gSewuobMao4xzH68gcpTb-yzgzlUuj_S5Dw=w2771-h1056-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/xpOBlXLpt3S-pEuURcKrLQzVAsLMvJjN8e9wRPgSpz_aczZRNHVe0TB6o1IZGM1ds0LSPZdMW87mAt3K5NWe6kgh71xJd0ZqJ9WrDPAGj-vm0-xVKtDwHtVt54vlaxgiNMseE1JoN9ZcexOzvWLc35qeu83clM2M15RZ6a4uFFYafQmfUO3IY1uVue5kviAPgAutcPYjNslBGD_pwAoHIYcszy5iuvROuPBGL0t8s3bMWVRyRurAMY3ritthbKrZ542c0gp-SZPmAdzXykXXcyzGt7cNzRQhBe5VJkAf7xw6SPyDRURMHH7v_sA94iJqkv91iA6ozEMfhboiVy5PVf9ynaXu9vBZRCWL3xPL4z7bFL3QptVdbXbb3-yk9SLCVoW9kwjdvVcNZaXl1UoYDtDt4JTB5XWO7wZ16v4289t1i-YwfxPZLGU9EmqRB9GCp_priEvLYMc4YtWMh5yFdpmI-GXV0Xti93t4sgJKb3ZPQsg1AAguLiler7MRplJ5d4Jyvd89_r8dxBFRdhfN81VgqWnpHKEoLssRWYHtWQbz8QTwYJcQmqaR57uMj72jWLXA_mGUbVW_ICrtWY6pHlbsSQEvaMwwpsKzpQ_MwsigQN03IdSg0XwKli0ZqHz1eU_lyrledUtTzGEEaISxS0zatGnJ3kc5LSfE3SlYl5m5RtXbhjVHv4V2e6thVC6cDRc8I21K7dmWvn0E9YNVs3Q=w960-h440-no?authuser=1",
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
                    "https://lh3.googleusercontent.com/h5har4-FfudF42AVB5ra6ntFXyrc-zSFJ6Q6opNGKQIFv7S7ETrORWhlPd0PJbmO_DQE4KTjcPN4Ks14oJHuRupouVhcS3HOcQnUIFn2oyQnYAKS2NaUF9IgEflP8JxzdpfSXnL41X1WtBmkYG5I_BcVAGVBj115UmXpBAQZ0GYD7yF5u0jDB55jQ2LfQS4t6Uk8lkw44nlalS8fzyMHYJk7sqO1zgpuEOpCIkIqIbCDgDUeqihhZvpSmeGEZ57Kn6rNX9LDU9d1bKaEq_FwkEQ78nmwjiMmUkOjKubZnV9GKD4HOHo8lvuDJkO_xXnG9Fs7iL9bAAoL9X1vGKXvfu7P10qhb0YV-TNVbV5qdZC9fkP4SyCrPIZB2jPyLoLN_2ceJZzc9fyE8j5hQ9r6-eiMdOktl-9GyPD2TMoy5xYim0MVHaaXoE3C5shIJIafnPIUDuRoZItuip_-2eeNE5pJZLfx7-E3tNcKM5sdt-v5U1a4SxASgEQeKdYbUNdt3-EKt86zsp4tts96_JyX1jBQIY7UkNn1_pG8rpOLEQ_Sfx_9jvgWwziLHRvRMDcHvByIi7bTKS_xDe12Cfcbc1PBEmZDvHgMMEmoQehHsPGzjokDfnUtQaRLKforzEeAiHEdWvkgmBv4NkEdXUVqMM2D4WKoMXnLDcYrWG5ddnVZgbDLd1onRy-qSbIKvk1OeyU-LEJx-FBcl--Z3WSmwyI=w694-h318-no?authuser=1",
                redirectLink:
                    "/resources/epublications",
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
