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
                    "https://www.dropbox.com/s/ua1uo8ywpwd0ijz/2-1-1991.pdf?raw=1",
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
                    "https://www.dropbox.com/s/7myiaq8wdrf1hw6/2-2-1991.pdf?raw=1",
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
                    "https://www.dropbox.com/s/u1hpgaw3ge4iofi/3-1-1992.pdf?raw=1",
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
                    "https://www.dropbox.com/s/xz21emuver8q8nh/3-2-1992.pdf?raw=1",
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
                    "https://www.dropbox.com/s/nkcnhndn8ae2bbz/4-1-1993.pdf?raw=1",
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
                    "https://www.dropbox.com/s/sd0c6uz0e7xtboy/4.2.1993.pdf?raw=1",
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
                    "https://www.dropbox.com/s/3i1odplabugvhbb/5.1.1994.pdf?raw=1",
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
                    "https://www.dropbox.com/s/n4v5jh298hqa87w/5.2.1994.pdf?raw=1",
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
                    "https://www.dropbox.com/s/hmkonihw5r1wyag/6.1.1995.pdf?raw=1",
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
                    "https://www.dropbox.com/s/1wl6aezsjxt7uah/6.2.1995.pdf?raw=1",
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
                    "https://www.dropbox.com/s/5zsr9dx14f26e45/7.1.1996.pdf?raw=1",
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
                    "https://www.dropbox.com/s/ltmjarae7u2r2j8/7.2.1996.pdf?raw=1",
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
                    "https://www.dropbox.com/s/a0udoc7r5b1pn95/8.1.1997.pdf?raw=1",
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
                    "https://www.dropbox.com/s/dzoyw6psqc65cl6/8.2.1997.pdf?raw=1",
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
                    "https://www.dropbox.com/s/f72i2xrfswf0yz6/9.1.1998.pdf?raw=1",
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
                    "https://www.dropbox.com/s/bwcochepvr42yot/10.1.1999.pdf?raw=1",
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
                    "https://www.dropbox.com/s/yzl0oltsp5ioz04/11-1-2000.pdf?raw=1",
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
                    "https://www.dropbox.com/s/zy8p400h5ee2uf9/11.2.2000.pdf?raw=1",
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
                    "https://www.dropbox.com/s/5qbwerlsiazbd2o/12.1.2002.pdf?raw=1",
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
                    "https://www.dropbox.com/s/hi5i1f15kun8wty/12.2.2002.pdf?raw=1",
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
                    "https://www.dropbox.com/s/vpdk71c1bljmjip/12.3.2002.pdf?raw=1",
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
                    "https://www.dropbox.com/s/xp6487e9i13t2sm/13-2-2003.pdf?raw=1",
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
                    "https://www.dropbox.com/s/4ix8nzagxmtem4y/14-1-2004.pdf?raw=1",
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
                    "https://www.dropbox.com/s/2vtgwmeqk6lcl4x/15-1-2006.pdf?raw=1",
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
                    "https://www.dropbox.com/s/qb6jwg53ywv9qsx/15-2-2006.pdf?raw=1",
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
                    "https://www.dropbox.com/s/wz2ahgobpbvf5xl/16-1-2007.pdf?raw=1",
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
                    "https://www.dropbox.com/s/fic43ov63aa6la0/16-2-2008.pdf?raw=1",
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
                    "https://www.dropbox.com/s/35py6cls00801j7/18-1-2009.pdf?raw=1",
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
                    "https://www.dropbox.com/s/z4cbnl5fg71qcsn/19.1-2010.pdf?raw=1",
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
                    "https://www.dropbox.com/s/snsc08we8hm1r24/20-1-2011.pdf?raw=1",
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
                    "https://www.dropbox.com/s/w406bzxglpktu4d/21-1-2012.pdf?raw=1",
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
                    "https://www.dropbox.com/s/hva6azhswyhckgd/22-1-2013.pdf?raw=1",
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
                    "https://www.dropbox.com/s/rianxewnx3tnz0z/23-1-2014.pdf?raw=1",
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
                    "https://www.dropbox.com/s/8wx68xlitx7e88l/24-1-2015.pdf?raw=1",
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
                    "https://www.dropbox.com/s/erqyss8rcdnv9rr/2016%20Sakyadhita%20Newsletter.pdf?raw=1",
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
                    "https://www.dropbox.com/s/pe9lqa4gkdybk18/2017%20Sakyadhita%20Newsletter.pdf?raw=1",
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
                    "https://www.dropbox.com/s/63te4qys8ukas8m/2018%20Sakyadhita%20Newsletter.pdf?raw=1",
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
                    "https://www.dropbox.com/s/2uiagjxoozz96gg/2019%20Sakyadhita%20Newsletter.pdf?raw=1",
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
                    "https://www.dropbox.com/s/2o4pv6kpvnogv7m/2021%20Sakyadhita%20Newsletter%20Vol.%2029.pdf?raw=1",
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
