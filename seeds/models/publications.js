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
        // bibliographies
        Publications.create(
            {
                title: "Biographies, Profiles and Interviews",
                author: "Kate Crosby, Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/qhbmay8z8liapiy/bibligraphies-biographies%2Bprofiles%2Binterviews.pdf?dl=0",
                imageLink:
                    "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Contemprary Regional, Ethnographic, and Anthropological Studies",
                author: "Kate Crosby, Karma Tsomo",
                feature: true,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/6uy6ubuiwbh889e/bibligraphies-contemporary%2Bregional%2Bethnographic%2Banthropological.pdf?dl=0",
                imageLink:
                    "https://stepheniemeyer.com/wp-content/uploads/2008/08/breaking-dawn-book-cover-678x1024.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "General and Miscellaneous",
                author: "Kate Crosby, Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/9agrd720x8sl9na/bibligraphies-general%2Bmisc.pdf?dl=0",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Historical",
                author: "Kate Crosby, Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/0fmejgutizk09e3/bibligraphies-historical.pdf?dl=0",
                imageLink: "https://images-na.ssl-images-amazon.com/images/I/91RQ5d-eIqL.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Textual Studies",
                author: "Kate Crosby, Karma Tsomo",
                feature: false,
                description:
                    "Description",
                pdfLink: "https://www.dropbox.com/s/a7wsf6553zaoaox/bibligraphies-textualstudies.pdf?dl=0",
                imageLink:
                    "https://i2.wp.com/books.disney.com/content/uploads/2013/09/9780786856862.jpg?fit=405%2C612&ssl=1",
            },
            { logging: false }
        ),

        // conferences
        Publications.create(
            {
                title: "11th Sakyadhita International Conference",
                author: "Sakyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://sakyadhita.org/conferences/11th-si-con.html",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "12th Sakyadhita International Conference",
                author: "Sakyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://sakyadhita.org/conferences/12th-si-con.html",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "13th Sakyadhita International Conference",
                author: "Sakyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://sakyadhita.org/conferences/13th-si-con.html",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "14th Sakyadhita International Conference",
                author: "Sakyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://sakyadhita.org/conferences/14th-si-con.html",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Bridging Worlds",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/6xij29j8ru9yd90/Tsomo%20Bridging%20Worlds.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Buddhist Women in a Global Multicultural Community",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/f6anxpbk6a2fdly/BuddhistWomenInAMulticulturalCommunity-Sakyadhita2009.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Bridging Worlds: Buddhist Women’s Voices Across Generations",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/6xij29j8ru9yd90/Tsomo%20Bridging%20Worlds.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Eminent Buddhist Women",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.sunypress.edu/p-5853-eminent-buddhist-women.aspx",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Buddhist Women in a Global Multicultural Community",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.amazon.com/Buddhist-Women-Global-Multicultural-Community/dp/B005FHW8A8/ref=sr_1_1?s=books&ie=UTF8&qid=1381809952&sr=1-1&keywords=Buddhist+Women+in+a+Global+Multicultural+Community",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Out of the Shadows",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.amazon.com/Out-Shadows-Socially-Bibliotheca-Indio-Buddhica/dp/8170308496/ref=sr_1_26?s=books&ie=UTF8&qid=1381809693&sr=1-26&keywords=karma+lekshe+tsomo",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Buddhist Women and Social Justice",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.sunypress.edu/p-4016-buddhist-women-and-social-justi.aspx",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Innovative Women in Buddhism",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.amazon.com/Innovative-Buddhist-Women-Swimming-Routledge/dp/0700712534",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Buddhist Women Across Cultures",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.sunypress.edu/p-2949-buddhist-women-across-cultures.aspx",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Sisters in Solitude",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.sunypress.edu/p-2429-sisters-in-solitude.aspx",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Buddhism Through American Women's Eyes",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.shambhala.com/buddhism-through-american-women-s-eyes-1.html",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Sakyadhita: Daughters of the Buddha",
                author: "Karma Tsomo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.amazon.com/Sakyadhita-Daughters-Karma-Lekshe-Tsomo/dp/0937938726/ref=sr_1_1?s=books&ie=UTF8&qid=1381810826&sr=1-1&keywords=sakyadhita",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),

        // brochures
        Publications.create(
            {
                title: "Bahasa Indonesia",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/p48tpviqd64n1yj/Indonesia-sak-brochure2010-sm.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Bangla",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/kuirm655byzhx7h/Bangla-SI-mbrshp-brochure2011.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Chinese (Simplified)",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/qdbfy3wfu3ovmfj/SimplfiedChns-SakBroch.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Chinese (Traditional)",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/eh1anb10ji0fm7v/French-SI-mbership-brochure-2011.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "English",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/iqzykm67tgrw175/TradChns-SakBroch-2010-sm.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "French",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/hlry1dhoi2slvyf/English-sakyadhitabrochure2011.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Japanese",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/n7k6inwrqcjz8y8/Japanese-brochure2010sm.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Korean",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/eos0n85xtvhe7sp/Korean-sakbrochure2011.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Mongolian",
                author: "Sakhyadhita",
                feature: false,
                description: "Description",
                pdfLink: "https://www.dropbox.com/s/8fmsit8sx9sh47a/Mongolian-Sakyadhita-brochure.pdf?dl=0",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),

        // Chinese translations
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Bhikkhu Analaayo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.buddhismuskunde.uni-hamburg.de/fileadmin/pdf/analayo/publications.htm",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),

        // English translations
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Agama Research Group",
                feature: false,
                description: "Description",
                pdfLink: "http://agamaresearch.ddbc.edu.tw/?page_id=138",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Alliance for Bhikkhunis",
                feature: false,
                description: "Description",
                pdfLink: "http://www.bhikkhuni.net/library/",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Bikkhunis Thubten Chodron",
                feature: false,
                description: "Description",
                pdfLink: "http://thubtenchodron.org/BuddhistNunsMonasticLife/index.html",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Dhammadharini",
                feature: false,
                description: "Description",
                pdfLink: "http://www.dhammadharini.net/dhamma/dhamma-dana-e-books",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Network of Buddhist Women in Europe",
                feature: false,
                description: "Description",
                pdfLink: "http://www.dhammadharini.net/dhamma/dhamma-dana-e-books",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Attitudes Towards Nuns – A Case Study of the Nandakovāda in the Light of its Parallels",
                author: "Bhikku Analaayo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/attitudes-towards-nuns.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "The Bahudhātuka-sutta and its Parallels on Women’s Inabilities",
                author: "Bhikku Analaayo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/bahudhatuka.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "The Legality of Bhikkhunī Ordination",
                author: "Bhikku Analaayo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/legality.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Theories on the Foundation of the Nuns' Order - A Critical Evaluation",
                author: "Bhikku Analaayo",
                feature: false,
                description: "Description",
                pdfLink: "https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/theories-foundation.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Amazing Transformations of Arahant Theri Uppalavanna",
                author: "Bhikkuni Tathaaloka",
                feature: false,
                description: "Description",
                pdfLink: "http://www.academia.edu/6046712/Amazing_Transformations_of_Arahant_Theri_Uppalavanna",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Lasting Inspiration: A Look into the Guiding and Determining Mental and Emotional States of Liberated Arahant Women in Their Path of Practice and its Fulfillment as Expressed in the Sacred Biographies of the Theri Apadana",
                author: "Bhikkuni Tathaaloka",
                feature: false,
                description: "Description",
                pdfLink: "http://www.academia.edu/5827376/Lasting_Inspiration_A_Look_into_the_Guiding_and_Determining_Mental_and_Emotional_States_of_Liberated_Arahant_Women_in_Their_Path_of_Practice_and_its_Fulfillment_as_Expressed_in_the_Sacred_Biographies_of_the_Theri_Apadana",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Saffron and Green in the Clear Forest Pool: The Environmental Practices of American Buddhist Monastic Communities",
                author: "Bhikkuni Tathaaloka",
                feature: false,
                description: "Description",
                pdfLink: "https://www.academia.edu/6108350/Saffron_and_Green_in_the_Clear_Forest_Pool_The_Environmental_Practices_of_American_Buddhist_Monastic_Communities",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Buddhist Nuns in South India as Reflected in the Andhakatthakatha and in Vajirabuddhi's Anuganthipada",
                author: "Petra Kieffer-Pülz",
                feature: false,
                description: "Description",
                pdfLink: "http://www.academia.edu/5589567/Petra_Kieffer-Pulz_Buddhist_Nuns_in_South_India_as_Reflected_in_the_Andhaka_hakatha_and_in_Vajirabuddhis_Anuga_hipada",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Presuppositions for a Valid Ordination with Respect to the Restoration of the Bhikhuni Ordination in the Mulasarvastivada Tradition",
                author: "Petra Kieffer-Pülz",
                feature: false,
                description: "Description",
                pdfLink: "http://www.academia.edu/5605493/Petra_Kieffer-Pulz_Presuppositions_for_a_Valid_Ordination_with_Respect_to_the_Restoration_of_the_Bhik_u_i_Ordination_in_the_Mulasarvastivada_Tradition_",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Women's Monasteries",
                author: "Petra Kieffer-Pülz",
                feature: false,
                description: "Description",
                pdfLink: "http://www.academia.edu/5676402/Petra_Kieffer-Pulz_Womens_Monasteries_",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),

        // French translations
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Network of Buddhist Women in Europe",
                feature: false,
                description: "Description",
                pdfLink: "http://www.buddhistwomen.eu/FR/index.php/Documentation/Textes",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),

        // German translations
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Network of Buddhist Women in Europe",
                feature: false,
                description: "Description",
                pdfLink: "http://www.buddhistwomen.eu/DE/index.php/Dokumente/Texte",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Die Rechtmäßigkeit der Bhikkhunī Ordination",
                author: "Bhikkhu Analaayo",
                feature: false,
                description: "Description",
                pdfLink: "http://www.buddhismuskunde.uni-hamburg.de/fileadmin/pdf/analayo/LegalityGerman.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Nonnenordination das eis Scheint Gebrochen!",
                author: "Bhikkhuni Jampa Tsedroen (Carola Roloff)",
                feature: false,
                description: "Description",
                pdfLink: "http://www.info-buddhismus.de/PDF/Tsedroen_2013_Eis_gebrochen_TiBu105.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Die Nonnen Brauchen eine Lobby",
                author: "Bhikkhuni Jampa Tsedroen (Carola Roloff)",
                feature: false,
                description: "Description",
                pdfLink: "http://www.buddhistwomen.eu/DE/uploads/Dokumente/TiBu-2012-2_Tsedroen_Lobby.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Die Wiedereinrichtung des Nonnenordens in der Theraväda-Tradition",
                author: "Petra Kieffer-Pülz",
                feature: false,
                description: "Description",
                pdfLink: "http://www.buddhismuskunde.uni-hamburg.de/fileadmin/pdf/digitale_texte/Bd11-K03KiefferPuelz.pdf",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Voraussetzungen für eine gültige Ordination im Hinblick auf die Einführung einer Bhikhuni-Ordination in der Mulasarvastivada-Tradition",
                author: "Petra Kieffer-Pülz",
                feature: false,
                description: "Description",
                pdfLink: "http://www.academia.edu/5605538/Petra_Kieffer-Pulz_Voraussetzungen_fur_eine_gultige_Ordination_im_Hinblick_auf_die_Einfuhrung_einer_Bhik_u_i-Ordination_in_der_Mulasarvastivada-Tradition_",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),
        Publications.create(
            {
                title: "Das Patriarchat ist zu Ende",
                author: "Sylvia Wetzel",
                feature: false,
                description: "Description",
                pdfLink: "https://drive.google.com/file/d/0B7Xpe-gp2em7SDNhTGZDeDFMa0U/edit?usp=sharing",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
            },
            { logging: false }
        ),

        // Spanish Translations
        Publications.create(
            {
                title: "Assorted Articles",
                author: "Dhammadharini",
                feature: false,
                description: "Description",
                pdfLink: "http://www.dhammadharini.net/resources-for-bhikkhuni-sangha-and-women-in-buddhism/espanol/articulos-de-interes",
                imageLink: "https://images.booksense.com/images/248/357/9781408357248.jpg",
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
