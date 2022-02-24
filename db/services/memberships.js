/**
 * This file provides functions to modify the memberships DB.
 * Allows for create capability.
 *
 * @summary   Services for emailList --> addUser.
 * @author    Thomas Garry
 */
 const memberships = require("../models/memberships");
 const MembershipTypes = require("../models/membershipTypes");
 
 /**
  * Creates Memberships data.
  *
  * @param {object} data -
  * @returns {object} - A single Member or null.
  */
 async function addMember(data) {
     const memberTypeCount = await MembershipTypes.count({});
     
     if (data.membershipType > 0 && data.membershipType < memberTypeCount) {
         // had to redefine the name
         data["membersType"] = data.membershipType;
         return memberships.create(data);
     }
 
     return null;
 }
 
 /**
  * Update the PayPal status of a particular entry. This should 
  * really only be called by the paypal/ipn-listener route for payment
  * verification. 
  *
  * @param {string} payPalTransactionId - Entries unique paypal transaction id 
  * @returns {object} - A single Member or null.
  */
  async function retrieveEntryByItsPayPalTransactionId(payPalTransactionId) {
     return memberships.findOne({
         where: {
             payPalTransactionId
         }
     });
 }
 
 /**
  * Update the PayPal status of a particular entry. This should 
  * really only be called by the paypal/ipn-listener route for payment
  * verification. 
  *
  * @param {string} payPalTransactionId - Entries unique paypal transaction id 
  * @param {string} status - Updated payment status from PayPal
  * @returns {object} - A single Member or null.
  */
  async function updatePayPalStatus(payPalTransactionId, status) {
      
     console.log(`PayPalTransactionId: ${payPalTransactionId} --> ${status}`);
 
     return memberships.update({ payPalStatus: status}, {
         where: {
             payPalTransactionId,
         },
     });
 }
 
 module.exports = {
     addMember,
     retrieveEntryByItsPayPalTransactionId,
     updatePayPalStatus
 };
 