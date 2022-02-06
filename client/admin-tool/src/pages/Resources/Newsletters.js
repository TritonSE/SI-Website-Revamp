/**
 * Newsletters page containing all of Sakyadhita's newsletters. Includes
 * the ability to view, edit, and post newsletter details and thumbnail
 * photos.
 *
 * @summary     Newsletters section.
 * @author      Navid Boloorian, Elias Fang
 */

import NewsletterWrapper from "../../components/Newsletter/NewsletterWrapper";
import {
    fetchNewsletters,
    addNewsletter,
    updateNewsletter,
    deleteNewsletter,
} from "../../util/requests/Resources/Newsletters";

export default function Newsletters() {
    return (
        <NewsletterWrapper 
            pageTitle="Newsletters"
            getItemsRequestCallback={fetchNewsletters}
            addItemRequestCallback={addNewsletter}
            updateItemRequestCallback={updateNewsletter}
            deleteItemRequestCallback={deleteNewsletter}
        />
    )
}
