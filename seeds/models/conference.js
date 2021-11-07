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
                brochures: {
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
                theme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet. Scelerisque in dictum non consectetur a erat nam. Adipiscing at in tellus integer feugiat scelerisque varius. Mollis aliquam ut porttitor leo a. Et tortor at risus viverra adipiscing at in tellus integer. Lacus viverra vitae congue eu. Aliquet nec ullamcorper sit amet. Molestie ac feugiat sed lectus. Purus in mollis nunc sed id semper risus in. Enim diam vulputate ut pharetra. Feugiat pretium nibh ipsum consequat nisl vel. Diam sollicitudin tempor id eu nisl.`,
                signUpLink: "https://google.com",
            },
            { logging: false }
        ),

        Conference.create(
            {
                title: "Lotus Flower Festivel!",
                confNum: 2,
                location: "Budapest",
                slideShowImages: {
                    urls: [
                        "https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDM5XBUhoW5dKvpJCMDfN1rBSr1HLFBoNA7w&usqp=CAU",
                        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/buddha-and-lotus-flower-mihaela-pater.jpg",
                        "https://www.lionsroar.com/wp-content/uploads/2018/07/GettyImages-1005019240_master.jpg",
                        "https://media.istockphoto.com/photos/green-leaf-with-dew-on-dark-nature-background-picture-id1050634172?k=6&m=1050634172&s=612x612&w=0&h=C6CWho9b4RDhCqvaivYOLV2LK6FzygYpAyLPBlF1i2c=",
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
                        "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg",
                    ],
                },
                programs: {
                    data: [],
                },
                presentations: {
                    data: [],
                },
                brochures: {
                    data: [
                        {
                            description: "Emminent Buddhist Women",
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
                video: null,
                theme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Cras adipiscing enim eu turpis egestas pretium. Velit sed ullamcorper morbi tincidunt ornare massa eget. Dolor sit amet consectetur adipiscing elit ut aliquam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Viverra tellus in hac habitasse. Eu non diam phasellus vestibulum lorem sed risus. Tristique senectus et netus et malesuada fames ac. Vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum morbi blandit cursus risus at. Nisi est sit amet facilisis magna. Fermentum odio eu feugiat pretium. Molestie a iaculis at erat. Consectetur lorem donec massa sapien faucibus et. Mi quis hendrerit dolor magna eget. Amet luctus venenatis lectus magna fringilla. Faucibus et molestie ac feugiat. Auctor urna nunc id cursus. Vitae tempus quam pellentesque nec nam aliquam sem et.

                Consequat id porta nibh venenatis. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Facilisis magna etiam tempor orci eu lobortis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. In nibh mauris cursus mattis molestie a iaculis. Aenean sed adipiscing diam donec adipiscing tristique risus. Ornare massa eget egestas purus viverra. Diam phasellus vestibulum lorem sed. Id aliquet risus feugiat in ante. Nunc pulvinar sapien et ligula. Pretium vulputate sapien nec sagittis aliquam. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Faucibus scelerisque eleifend donec pretium vulputate. Sed turpis tincidunt id aliquet. Tellus cras adipiscing enim eu. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lacus laoreet non curabitur gravida arcu. Magna fermentum iaculis eu non diam phasellus. Id ornare arcu odio ut sem nulla. Fermentum dui faucibus in ornare quam viverra orci.
                
                Molestie nunc non blandit massa enim nec dui nunc. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat lacus laoreet. Facilisi morbi tempus iaculis urna id volutpat lacus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada fames ac turpis. Mattis enim ut tellus elementum sagittis. Enim ut tellus elementum sagittis vitae et leo. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Habitant morbi tristique senectus et netus et malesuada. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Turpis nunc eget lorem dolor sed. Eget nulla facilisi etiam dignissim. Purus sit amet luctus venenatis lectus magna.
                
                Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sit amet massa vitae tortor. Id semper risus in hendrerit gravida rutrum quisque non tellus. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Vestibulum morbi blandit cursus risus at ultrices. Morbi tincidunt ornare massa eget egestas purus viverra. Euismod lacinia at quis risus sed. Pretium viverra suspendisse potenti nullam ac. Et tortor consequat id porta nibh venenatis cras. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
                
                Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Enim nunc faucibus a pellentesque. Risus nec feugiat in fermentum. Tellus cras adipiscing enim eu. Dictum non consectetur a erat nam. Eros donec ac odio tempor orci dapibus ultrices in. Sed velit dignissim sodales ut eu. Nisl nunc mi ipsum faucibus vitae. Lectus sit amet est placerat. Faucibus et molestie ac feugiat sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Habitasse platea dictumst vestibulum rhoncus est. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Felis imperdiet proin fermentum leo vel orci porta.`,
                signUpLink: "",
            },
            { logging: false }
        ),

        Conference.create(
            {
                title: "An Ode to Nature",
                confNum: 3,
                location: "Delhi",
                slideShowImages: {
                    urls: [
                        "https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640",
                        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_91756359_Full.jpg?crop=0,233,4000,2200&wid=4000&hei=2200&scl=1.0",
                        "https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg",
                    ],
                },
                programs: {
                    data: [
                        {
                            description: "Water",
                            url: "google",
                        },
                        {
                            description: "Earth",
                            url: "google",
                        },
                        {
                            description: "Fire",
                            url: "google",
                        },
                        {
                            description: "Air",
                            url: "google",
                        },
                    ],
                },
                presentations: {
                    data: [
                        {
                            description: "Meditation",
                            url: "google",
                        },
                        {
                            description: "Nirvana",
                            url: "google",
                        },
                        {
                            description: "Enlightenment",
                            url: "google",
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
                brochures: {
                    data: [
                        {
                            description: "Emminent Buddhist Women",
                            url: "eminentbuddhists.com",
                        },
                    ],
                },
                video: null,
                theme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam. Cras adipiscing enim eu turpis egestas pretium. Velit sed ullamcorper morbi tincidunt ornare massa eget. Dolor sit amet consectetur adipiscing elit ut aliquam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Viverra tellus in hac habitasse. Eu non diam phasellus vestibulum lorem sed risus. Tristique senectus et netus et malesuada fames ac. Vulputate eu scelerisque felis imperdiet proin fermentum. Vestibulum morbi blandit cursus risus at. Nisi est sit amet facilisis magna. Fermentum odio eu feugiat pretium. Molestie a iaculis at erat. Consectetur lorem donec massa sapien faucibus et. Mi quis hendrerit dolor magna eget. Amet luctus venenatis lectus magna fringilla. Faucibus et molestie ac feugiat. Auctor urna nunc id cursus. Vitae tempus quam pellentesque nec nam aliquam sem et.

                Consequat id porta nibh venenatis. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Facilisis magna etiam tempor orci eu lobortis. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. In nibh mauris cursus mattis molestie a iaculis. Aenean sed adipiscing diam donec adipiscing tristique risus. Ornare massa eget egestas purus viverra. Diam phasellus vestibulum lorem sed. Id aliquet risus feugiat in ante. Nunc pulvinar sapien et ligula. Pretium vulputate sapien nec sagittis aliquam. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Faucibus scelerisque eleifend donec pretium vulputate. Sed turpis tincidunt id aliquet. Tellus cras adipiscing enim eu. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Lacus laoreet non curabitur gravida arcu. Magna fermentum iaculis eu non diam phasellus. Id ornare arcu odio ut sem nulla. Fermentum dui faucibus in ornare quam viverra orci.
                
                Molestie nunc non blandit massa enim nec dui nunc. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Morbi tempus iaculis urna id volutpat lacus laoreet. Facilisi morbi tempus iaculis urna id volutpat lacus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada fames ac turpis. Mattis enim ut tellus elementum sagittis. Enim ut tellus elementum sagittis vitae et leo. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Habitant morbi tristique senectus et netus et malesuada. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Turpis nunc eget lorem dolor sed. Eget nulla facilisi etiam dignissim. Purus sit amet luctus venenatis lectus magna.
                
                Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sit amet massa vitae tortor. Id semper risus in hendrerit gravida rutrum quisque non tellus. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Vestibulum morbi blandit cursus risus at ultrices. Morbi tincidunt ornare massa eget egestas purus viverra. Euismod lacinia at quis risus sed. Pretium viverra suspendisse potenti nullam ac. Et tortor consequat id porta nibh venenatis cras. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
                
                Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Enim nunc faucibus a pellentesque. Risus nec feugiat in fermentum. Tellus cras adipiscing enim eu. Dictum non consectetur a erat nam. Eros donec ac odio tempor orci dapibus ultrices in. Sed velit dignissim sodales ut eu. Nisl nunc mi ipsum faucibus vitae. Lectus sit amet est placerat. Faucibus et molestie ac feugiat sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Habitasse platea dictumst vestibulum rhoncus est. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Felis imperdiet proin fermentum leo vel orci porta.`,
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
