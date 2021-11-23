/**
 * This file adds dummy data to the Newsletters table with various Newsletter objects.
 *
 * @summary   Populates the Newsletters table.
 * @author    Dhanush Nanjunda Reddy
 */

const Newsletters = require("../../db/models/newsletters");

module.exports = async () => {
    await Promise.all([
        // make dummy data, and make sure to disable logging to reduce clutter
        Newsletters.create(
            {
                volume: 2,
                number: 1,
                year: 1991,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2-1-1991.pdf",
                imageLink:
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 2,
                number: 2,
                year: 1991,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2-2-1991.pdf",
                imageLink:
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 3,
                number: 1,
                year: 1992,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/3-1-1992.pdf",
                imageLink:
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 3,
                number: 2,
                year: 1992,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/3-2-1992.pdf",
                imageLink:
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 4,
                number: 1,
                year: 1993,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/4-1-1993.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 4,
                number: 2,
                year: 1993,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/4.2.1993.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 5,
                number: 1,
                year: 1994,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/5.1.1994.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 5,
                number: 2,
                year: 1994,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/5.2.1994.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 6,
                number: 1,
                year: 1995,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/6.1.1995.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 6,
                number: 2,
                year: 1995,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/6.2.1995.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 7,
                number: 1,
                year: 1996,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/7.1.1996.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 7,
                number: 2,
                year: 1996,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/7.2.1996.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 8,
                number: 1,
                year: 1997,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/8.1.1997.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 8,
                number: 2,
                year: 1997,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/8.2.1997.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 9,
                number: 1,
                year: 1998,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/9.1.1998.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 10,
                number: 1,
                year: 1999,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/10.1.1999.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 11,
                number: 1,
                year: 2000,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/11-1-2000.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/xzkjmvy0ck06n9j/newsletter-11-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 11,
                number: 2,
                year: 2000,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/11.2.2000.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 12,
                number: 1,
                year: 2002,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/12.1.2002.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 12,
                number: 2,
                year: 2002,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/12.2.2002.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 13,
                number: 1,
                year: 2002,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/12.3.2002.pdf",
                imageLink: 
                    "https://www.invaluable.com/blog/wp-content/uploads/2019/03/buddhist-art-hero.jpg",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 13,
                number: 2,
                year: 2003,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/13-2-2003.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/dyca9g6emf12086/newsletter-13-2.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 14,
                number: 1,
                year: 2004,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/14-1-2004.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/2e4zlktqfoh3hvf/newsletter-14-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 15,
                number: 1,
                year: 2006,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/15-1-2006.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/7cip4yozbao8rci/newsletter-15-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 15,
                number: 2,
                year: 2006,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/15-2-2006.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/l2oy9f9xdzxt74d/newsletter-15-2.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 16,
                number: 1,
                year: 2007,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/16-1-2007.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/imxazfuvx7r6jqi/newsletter-16-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 16,
                number: 2,
                year: 2008,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/16-2-2008.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/li73nmxp6m64ea2/newsletter-16-2.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 18,
                number: 1,
                year: 2009,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/18-1-2009.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/kis7gahk7pstsw6/newsletter-18-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 19,
                number: 1,
                year: 2010,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/19.1-2010.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/9ekoa0zzyhhdoen/newsletter-19-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 20,
                number: 1,
                year: 2011,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/20-1-2011.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/nqnyyi61ej8zqyd/newsletter-20-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 21,
                number: 1,
                year: 2012,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/21-1-2012.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/sec4nkz918j4q6n/newsletter-21-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 22,
                number: 1,
                year: 2013,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/22-1-2013.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/rp85ew0r6xm2o9g/newsletter-22-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 23,
                number: 1,
                year: 2014,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/23-1-2014.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/a65nnx3s2xua7ua/newsletter-23-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 24,
                number: 1,
                year: 2015,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/24-1-2015.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/lqcaacheqy7a1s4/newsletter-24-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 25,
                number: 1,
                year: 2016,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2016%20Sakyadhita%20Newsletter.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/vkkmfisysdyu6i1/newsletter-25-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 26,
                number: 1,
                year: 2017,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2017%20Sakyadhita%20Newsletter.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/vzeb8p2ivwjuvdd/newsletter-26-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 27,
                number: 1,
                year: 2018,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2018%20Sakyadhita%20Newsletter.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/8kdrddepwau0ttc/newsletter-27-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 28,
                number: 1,
                year: 2019,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2019%20Sakyadhita%20Newsletter.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/ej11k9guuraw3xg/newsletter-28-1.png?raw=1",
            },
            { logging: false }
        ),
        Newsletters.create(
            {
                volume: 29,
                number: 1,
                year: 2021,
                pdfLink:
                    "https://sakyadhita.org/docs/resources/newsletters/2021%20Sakyadhita%20Newsletter%20Vol.%2029.pdf",
                imageLink: 
                    "https://www.dropbox.com/s/znd3z49zu2jydhg/newsletter-29-1.png?raw=1",
            },
            { logging: false }
        ),
    ])
        .then(() => {
            // successfull population
            console.log("Finished Newsletter");
        })
        .catch((err) => {
            // some error occurred
            console.error(`Newsletter: ${err}`);
        });
};
