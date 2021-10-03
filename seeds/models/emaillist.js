const EmailList = require("../../db/models/emailList");

module.exports = async () => {
    await Promise.all([
        EmailList.create(
            {
                fName: "john",
                mName: "r",
                lName: "doe",
                phone: "1234567890",
                email: "gmail@gmail.com",
                address: "United States",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished EmailList");
        })
        .catch((err) => {
            // some error occurred
            console.error(`EmailList: ${err}`);
        });
};
