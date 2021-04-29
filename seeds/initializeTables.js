module.exports = () => {
   
    Promise.all([
        require("./models/sample")(),
        
        // add new seeds here

    ]).then(() => {
        console.log("Done!")
    }).catch((err) => {
        console.error(err);
    })
}