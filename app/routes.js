const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

/* ********** */
/* ********** */
/* ********** */
/* START PAGE */
router.post('/map/start-page', function (req, res) {
        
    res.redirect('/map/find-your-case')
        
});

/* ************** */
/* ************** */
/* ************** */
/* FIND YOUR CASE */
router.post('/map/find-your-case', function (req, res) {
        
    res.redirect('/map/check-your-name-and-address')
        
});

/* *************************** */
/* *************************** */
/* *************************** */
/* CHECK YOUR NAME AND ADDRESS */
router.post('/map/check-your-name-and-address', function (req, res) {
        
    var are_these_details_correct = req.session.data['are-these-details-correct'];
        
    if (are_these_details_correct == "Yes") {
        res.redirect('/map/enter-other-details')
    } else if (are_these_details_correct == "No") {
        res.redirect('/map/changes-to-your-name-and-address')
    }
    
    
        
});

/* ******************************** */
/* ******************************** */
/* ******************************** */
/* CHANGES TO YOUR NAME AND ADDRESS */
router.post('/map/changes-to-your-name-and-address', function (req, res) {
        
    res.redirect('/map/enter-other-details')
        
});

/* ******************* */
/* ******************* */
/* ******************* */
/* ENTER OTHER DETAILS */
router.post('/map/enter-other-details', function (req, res) {
        
    res.redirect('/map/driving-license-number')
        
});

/* ********************** */
/* ********************** */
/* ********************** */
/* DRIVING LICENSE NUMBER */
router.post('/map/driving-license-number', function (req, res) {
        
    res.redirect('/map/your-plea')
        
});

/* ********* */
/* ********* */
/* ********* */
/* YOUR PLEA */
router.post('/map/your-plea', function (req, res) {
        
    res.redirect('/map/guilty-plea')
        
});

/* *********** */
/* *********** */
/* *********** */
/* GUILTY PLEA */
router.post('/map/guilty-plea', function (req, res) {
        
    res.redirect('/map/guilty-plea-mitigation')
        
});

/* ********************** */
/* ********************** */
/* ********************** */
/* GUILTY PLEA MITIGATION */
router.post('/map/guilty-plea-mitigation', function (req, res) {
        
    res.redirect('/map/not-guilty-plea')
        
});

/* *************** */
/* *************** */
/* *************** */
/* NOT GUILTY PLEA */
router.post('/map/not-guilty-plea', function (req, res) {
        
    res.redirect('/map/your-court-hearing')
        
});

/* *************** */
/* *************** */
/* *************** */
/* NOT GUILTY PLEA */
router.post('/map/your-court-hearing', function (req, res) {
        
    res.redirect('/map/your-finances')
        
});

/* ************ */
/* ************ */
/* YOUR FINANCE */
router.post('/map/your-finances', function (req, res) {
        
    res.redirect('/map/your-income')
        
});

/* *********** */
/* *********** */
/* *********** */
/* YOUR INCOME */
router.post('/map/your-income', function (req, res) {
        
    res.redirect('/map/deductions-from-earnings')
        
});

/* ************************ */
/* ************************ */
/* ************************ */
/* DEDUCTIONS FROM EARNINGS */
router.post('/map/deductions-from-earnings', function (req, res) {
        
    res.redirect('/map/your-employment')
        
});

/* *************** */
/* *************** */
/* *************** */
/* YOUR EMPLOYMENT */
router.post('/map/your-employment', function (req, res) {
        
    res.redirect('/map/your-benefits')
        
});

/* ************* */
/* ************* */
/* ************* */
/* YOUR BENEFITS */
router.post('/map/your-benefits', function (req, res) {
        
    res.redirect('/map/deduct-from-your-benefits')
        
});

/* ************************* */
/* ************************* */
/* ************************* */
/* DEDUCT FROM YOUR BENEFITS */
router.post('/map/deduct-from-your-benefits', function (req, res) {
        
    res.redirect('/map/your-outgoings')
        
});

/* *************** */
/* *************** */
/* *************** */
/* YOUR OUTGOINGS */
router.post('/map/your-outgoings', function (req, res) {
        
    res.redirect('/map/your-monthly-outgoings')
        
});

/* ********************** */
/* ********************** */
/* ********************** */
/* YOUR MONTHLY OUTGOINGS */
router.post('/map/your-monthly-outgoings', function (req, res) {
        
    res.redirect('/map/cya')
        
});

/* ****************** */
/* ****************** */
/* ****************** */
/* CHECK YOUR ANSWERS */
router.post('/map/cya', function (req, res) {
        
    res.redirect('/map/declaration')
        
});

/* *********** */
/* *********** */
/* *********** */
/* DECLARATION */
router.post('/map/declaration', function (req, res) {
        
    res.redirect('/map/confirmation')
        
});

/* ************ */
/* ************ */
/* ************ */
/* CONFIRMATION */
router.post('/map/confirmation', function (req, res) {
        
    res.redirect('/map/the-end')
        
});

/* ************ */
/* ************ */
/* ************ */
/* THE END */
router.post('/map/the-end', function (req, res) {
        
    res.redirect('../prototype-admin/clear-data')
        
});
