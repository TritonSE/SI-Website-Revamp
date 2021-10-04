const Conference = require("../../db/models/conference");

module.exports = async () => {
    await Promise.all([
        Conference.create(
            {
                title: "First Meeting!",
                confNum: 1,
                location: "San Diego",
                slideShowImages: {
                    urls: [
                        "https://media.istockphoto.com/photos/green-leaf-with-dew-on-dark-nature-background-picture-id1050634172?k=6&m=1050634172&s=612x612&w=0&h=C6CWho9b4RDhCqvaivYOLV2LK6FzygYpAyLPBlF1i2c=",
                        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
                        "https://st2.depositphotos.com/2001755/5408/i/600/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "Emminent Buddhist Women",
                            url: "eminentbuddhists.com",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Presentation",
                            url: "eminentbuddhists.com",
                        },
                    ],
                },
                abstracts: {
                    data: [
                        {
                            description: "abstracts",
                            url: "google",
                        },
                    ],
                },
                video: "https://www.youtube.com/watch?v=Jh5oX0VRnzk",
                theme: "Lorem Ipsum Dolor",
                signUpLink: "https://google.com",
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
