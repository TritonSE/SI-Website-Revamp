/**
 * File populates Publications table with book names.
 * EPubFilters is static and likely won't be changed after this.
 *
 * @summary   Populates Publications table.
 * @author    Amrit Singh
 */

const Publications = require("../../db/models/publications");

module.exports = async () => {
    await Promise.all([
        Publications.create(
            {
                title: "It",
                author: "Stefen King",
                feature: false,
                description: "Scary Clown.",
                pdfLink: "https://www.google.com/",
                imageLink:
                    "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Twilight",
                author: "Stephanie Meyer",
                feature: true,
                description: "Disco Vampire.",
                pdfLink: "https://www.google.com/",
                imageLink:
                    "https://stepheniemeyer.com/wp-content/uploads/2008/08/breaking-dawn-book-cover-678x1024.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "The Hunger Games",
                author: "Suzzane Collins",
                feature: false,
                description: "Adults with too much time on their hands.",
                pdfLink: "https://www.google.com/",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Percy Jackson: The Lightning Thief",
                author: "Rick Riordan",
                feature: false,
                description: "Dyslexic kid discovers water powers.",
                pdfLink: "https://www.google.com/",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Percy Jackson: The Sea of Monsters",
                author: "Rick Riordan",
                feature: false,
                description:
                    "Dyslexic kid must compete with cyclops for absent father's affections.",
                pdfLink: "https://www.google.com/",
                imageLink:
                    "https://i2.wp.com/books.disney.com/content/uploads/2013/09/9780786856862.jpg?fit=405%2C612&ssl=1",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "The Little Mermaid",
                author: "Christopher Handerson",
                feature: false,
                description: "Hot, mute girl turns into bubbles after rejection.",
                pdfLink: "https://www.google.com/",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Little Women",
                author: "Louise Alcott",
                feature: true,
                description: "Period piece. Male lead will annoy you.",
                pdfLink: "https://www.google.com/",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/A1WWhjM1+eL.jpg",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Publications");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Publications: ${err}`);
        });
};
