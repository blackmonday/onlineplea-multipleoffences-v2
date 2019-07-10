const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

/* ********** */
/* ********** */
/* ********** */
/* START PAGE */
router.post('/map/start-page', function (req, res) {
    
    /* DEFENDANTS DETAILS */
    req.session.data['defendant-first-name'] = "Sam"
    req.session.data['defendant-last-name'] = "Smith"
    req.session.data['defendant-address-line-1'] = "38A Baker Street"
    req.session.data['defendant-address-line-2'] = "London"
    req.session.data['defendant-address-line-3'] = ""
    req.session.data['defendant-address-line-4'] = ""
    req.session.data['defendant-address-line-5'] = ""
    req.session.data['defendant-address-postcode'] = "W1 7SX"
    /*
    req.session.data['home-telephone'] = "0123456789"
    req.session.data['mobile'] = "0123456789"
    req.session.data['additional-number'] = "0123456789"
    req.session.data['email-1'] = "abc@xyz.com"
    req.session.data['email-2'] = "xyz@abc.com"
    */
    req.session.data['dob-day'] = "23"
    req.session.data['dob-month'] = "8"
    req.session.data['dob-year'] = "1988"
    /*
    req.session.data['nin'] = "AB 12 34 56 C"
    */
    
    /* ********* */
    /* ********* */
    /* OFFENCE 1 */
    req.session.data['offence-1-title'] = "Driving without insurance"
    req.session.data['offence-1-wording-1'] = "On 07/03/2019 the defendant was the driver of an Audi A4 VRM N15 REP, on a road, or other public place, namely Lordship Lane, Lower Broughton, when there was no insurance in force covering use of that vehicle."
    req.session.data['offence-1-wording-3'] = "This offence carries penalty points"
    
    /* ********* */
    /* ********* */
    /* OFFENCE 2 */
    req.session.data['offence-2-title'] = "Failed to produce certificate of insurance"
    req.session.data['offence-2-wording-1'] = "On being so required by a constable, the driver failed to produce for examination the relevant certificate of insurance or security under Part VI of the Road Traffic Act 1988. The defendant was issued with HORT1 requesting production of documents to a nominated police station within 7 days. After this time period had expired the defendant was issued with a Conditional Offer of Fixed Penalty. Payment and licence were not received within the time constraints."
    req.session.data['offence-1-wording-2'] = "Contrary to section 143 of the Road Traffic Act 1988 and Schedule 2 of the Road Traffic Offenders Act 1988"
    req.session.data['offence-2-wording-3'] = ""

    /* ********* */
    /* ********* */
    /* OFFENCE 3 */
    req.session.data['offence-3-title'] = "Speeding - exceed 30 mph on restricted road - manned equipment"
    req.session.data['offence-3-wording-1'] = "On 07/03/2019 at BEESTON drove a motor vehicle, namely passenger carrying vehicle Audi A4 VRM N15 REP, on a restricted road, namely Lordship Lane, Lower Broughton, at a speed exceeding 30 miles per hour."
    req.session.data['offence-3-wording-2'] = "**SPEED RECORDED 37MPH**"
    req.session.data['offence-3-wording-3'] = "Contrary to section 14, 15(2) and 15(4) of the Road Traffic Regulation Act 1984"
    req.session.data['offence-3-wording-4'] = "This offence carries penalty points"
                            
    req.session.data['i-made-it-to-check-your-answers'] = "No"
    
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
        
    var are_these_details_correct = req.session.data['are-these-details-correct']
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
        
    if (are_these_details_correct == "Yes") {
        
        if (check_your_answers == "Yes") {
            res.redirect('/map/cya')
        } else if (check_your_answers == "No") {
            res.redirect('/map/enter-other-details')
        }        
        
    } else if (are_these_details_correct == "No") {
        res.redirect('/map/changes-to-your-name-and-address')
    } else if (are_these_details_correct == "") {
        res.redirect('/map/check-your-name-and-address')
    }
            
});

/* ******************************** */
/* ******************************** */
/* ******************************** */
/* CHANGES TO YOUR NAME AND ADDRESS */
router.post('/map/changes-to-your-name-and-address', function (req, res) {
        
    var new_defendant_first_name = req.session.data['new-defendant-first-name']
    var new_defendant_last_name = req.session.data['new-defendant-last-name']
    var new_defendant_address_line_1 = req.session.data['new-defendant-address-line-1']
    var new_defendant_address_line_2 = req.session.data['new-defendant-address-line-2']
    var new_defendant_address_line_3 = req.session.data['new-defendant-address-line-3']
    var new_defendant_address_line_4 = req.session.data['new-defendant-address-line-4']
    var new_defendant_address_line_5 = req.session.data['new-defendant-address-line-5']
    var new_defendant_address_postcode = req.session.data['new-defendant-address-postcode']
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']

    if (new_defendant_first_name != "") {
        req.session.data['defendant-first-name'] = new_defendant_first_name
    }
    if (new_defendant_last_name != "") {
        req.session.data['defendant-last-name'] = new_defendant_last_name
    }
    if (new_defendant_address_line_1 != "") {
        req.session.data['defendant-address-line-1'] = new_defendant_address_line_1
    }
    if (new_defendant_address_line_2 != "") {
        req.session.data['defendant-address-line-2'] = new_defendant_address_line_2
    }
    if (new_defendant_address_line_3 != "") {
        req.session.data['defendant-address-line-3'] = new_defendant_address_line_3
    }
    if (new_defendant_address_line_4 != "") {
        req.session.data['defendant-address-line-4'] = new_defendant_address_line_4
    }
    if (new_defendant_address_line_5 != "") {
        req.session.data['defendant-address-line-5'] = new_defendant_address_line_5
    }
    if (new_defendant_address_postcode != "") {
        req.session.data['defendant-address-postcode'] = new_defendant_address_postcode
    }
    
    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if (check_your_answers == "No") {
        res.redirect('/map/enter-other-details')
    }        
        
});

/* ******************* */
/* ******************* */
/* ******************* */
/* ENTER OTHER DETAILS */
router.post('/map/enter-other-details', function (req, res) {
    
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
        
    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if (check_your_answers == "No") {
        res.redirect('/map/driving-license-number')
    }        
        
});

/* ********************** */
/* ********************** */
/* ********************** */
/* DRIVING LICENSE NUMBER */
router.post('/map/driving-license-number', function (req, res) {
        
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
        
    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if (check_your_answers == "No") {
        res.redirect('/map/your-plea')
    }        
        
});

/* ********* */
/* ********* */
/* ********* */
/* YOUR PLEA */
router.post('/map/your-plea', function (req, res) {
        
    var offence_1_plea = req.session.data['offence-1-plea']
    var offence_2_plea = req.session.data['offence-2-plea']
    var offence_3_plea = req.session.data['offence-3-plea']
    
    // RESET GUILTY COME TO COURT
    //req.session.data['guilty-come-to-court'] = ""
        
    if ((offence_1_plea == "Not guilty") || (offence_2_plea == "Not guilty") || (offence_3_plea == "Not guilty")) {
        res.redirect('/map/not-guilty-plea')
    }
    
    if ((offence_1_plea == "Guilty") && (offence_2_plea == "Guilty") && (offence_3_plea == "Guilty")) {
        res.redirect('/map/guilty-plea')
    }
    
    //res.redirect('/map/guilty-plea')
        
});

/* *************** */
/* *************** */
/* *************** */
/* NOT GUILTY PLEA */
router.post('/map/not-guilty-plea', function (req, res) {
    
    var offence_1_plea = req.session.data['offence-1-plea']
    var offence_2_plea = req.session.data['offence-2-plea']
    var offence_3_plea = req.session.data['offence-3-plea']
        
    if ((offence_1_plea == "Guilty") || (offence_2_plea == "Guilty") || (offence_3_plea == "Guilty")) {
        req.session.data['guilty-come-to-court'] = "Yes"
        res.redirect('/map/guilty-plea-mitigation')
    }     
        
    res.redirect('/map/your-court-hearing')
        
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
        
    var guilty_come_to_court = req.session.data['guilty-come-to-court']
    
    if (guilty_come_to_court == "Yes") {
        res.redirect('/map/your-court-hearing')
    } if (guilty_come_to_court == "No") {
        res.redirect('/map/your-finances')
    } 
    
    /*
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']

    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if (check_your_answers == "No") {
        res.redirect('/map/your-court-hearing')
    }
    */
    
});

/* ****************** */
/* ****************** */
/* ****************** */
/* YOUR COURT HEARING */
router.post('/map/your-court-hearing', function (req, res) {
        
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
        
    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if (check_your_answers == "No") {
        res.redirect('/map/your-finances')
    }        
        
});

/* ************ */
/* ************ */
/* YOUR FINANCE */
router.post('/map/your-finances', function (req, res) {
        
    var give_us_income_or_benefits_details = req.session.data['give-us-income-or-benefits-details']
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
        
    if (give_us_income_or_benefits_details == "Yes") {
        res.redirect('/map/your-income')
    } else if (check_your_answers == "No") {
        if (check_your_answers == "Yes") {
            res.redirect('/map/cya')
        } else if (check_your_answers == "No") {
            res.redirect('/map/your-outgoings')
        }        
    }        
    
    
    
    
    
    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if ((check_your_answers == "No") || (check_your_answers == "I have no income")) {
        res.redirect('/map/your-income')
    }        
            
});

/* *********** */
/* *********** */
/* *********** */
/* YOUR INCOME */
router.post('/map/your-income', function (req, res) {
    
    var employment_status = req.session.data['employment-status']
    
    if ((employment_status == "Employed (full or part-time)") || (employment_status == "Self-employed")) {
        res.redirect('/map/deductions-from-earnings')
    }

    res.redirect('/map/your-benefits')
        
});

/* ************************ */
/* ************************ */
/* ************************ */
/* DEDUCTIONS FROM EARNINGS */
router.post('/map/deductions-from-earnings', function (req, res) {
    
    var deduct_from_earnings = req.session.data['deduct-from-earnings'];
    
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
    
    if (deduct_from_earnings == "Yes") {
        res.redirect('/map/your-employment')
    } else if (deduct_from_earnings == "No") {
        
        if (check_your_answers == "Yes") {
            res.redirect('/map/cya')
        } else if (check_your_answers == "No") {
            res.redirect('/map/your-outgoings')
        }        
        
    }
        
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
        
    var are_you_claiming_benefits = req.session.data['are-you-claiming-benefits'];
    
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
    
    if (are_you_claiming_benefits == "Yes") {
        res.redirect('/map/deduct-from-your-benefits')
    } else if (are_you_claiming_benefits == "No") {
        
        if (check_your_answers == "Yes") {
            res.redirect('/map/cya')
        } else if (check_your_answers == "No") {
            res.redirect('/map/your-outgoings')
        }        
        
    }
    
    
    
    
    
    
    
    

    
    
    
    
    
    
        
});

/* ************************* */
/* ************************* */
/* ************************* */
/* DEDUCT FROM YOUR BENEFITS */
router.post('/map/deduct-from-your-benefits', function (req, res) {
        
    var check_your_answers = req.session.data['i-made-it-to-check-your-answers']
    
    if (check_your_answers == "Yes") {
        res.redirect('/map/cya')
    } else if (check_your_answers == "No") {
        res.redirect('/map/your-outgoings')
    }        
                
});

/* *************** */
/* *************** */
/* *************** */
/* YOUR OUTGOINGS */
router.post('/map/your-outgoings', function (req, res) {
        
    var give_details_of_monthly_bills = req.session.data['give-details-of-monthly-bills'];
    
    if (give_details_of_monthly_bills == "Yes") {
        res.redirect('/map/your-monthly-outgoings')
    } else if (give_details_of_monthly_bills == "No") {
        req.session.data['i-made-it-to-check-your-answers'] = "Yes"
        res.redirect('/map/cya')
    }
        
});

/* ********************** */
/* ********************** */
/* ********************** */
/* YOUR MONTHLY OUTGOINGS */
router.post('/map/your-monthly-outgoings', function (req, res) {
    
    var any_other_expenses = req.session.data['any-other-expenses'];
    
    if (any_other_expenses == "Yes") {
        var total = 
            Number(req.session.data['accomodation']) + 
            Number(req.session.data['council-tax']) + 
            Number(req.session.data['household-bills']) + 
            Number(req.session.data['travel-expenses']) + 
            Number(req.session.data['child-maintenance']) + 
            Number(req.session.data['amount-of-other-expenses'])
    } else {
        var total = 
            Number(req.session.data['accomodation']) + 
            Number(req.session.data['council-tax']) + 
            Number(req.session.data['household-bills']) + 
            Number(req.session.data['travel-expenses']) + 
            Number(req.session.data['child-maintenance'])
    }

    req.session.data['total-amount-of-all-expenses'] = parseFloat(total).toFixed(2)
    
    req.session.data['i-made-it-to-check-your-answers'] = "Yes"
   
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

    var declaration = req.session.data['declaration'];
    
    if (declaration == "I confirm") {
        req.session.data['declaration-query'] = ""
        res.redirect('/map/confirmation')
        
    } else {
        req.session.data['declaration-query'] = "error"
        res.redirect('/map/declaration')
        
    }
    
    //res.redirect('/map/confirmation')
        
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
