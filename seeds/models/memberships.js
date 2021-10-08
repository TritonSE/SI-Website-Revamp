const Memberships = require("../../db/models/memberships");

module.exports = async () => {
    await Promise.all([
        Memberships.create(
            {
                fName: "First_Name",
                mName: "r",
                lName: "Last_NAME",
                phone: "0123456789",
                email: "First_Name@Last_Name.com",
                address: "United States",
                isNewMember: true,
                affiliatedOrgs: "ORG",
                membershipType: "1",
                totalPaid: 20.1,
                payPalTransactionId: "03",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Membership");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Membership: ${err}`);
        });
};
