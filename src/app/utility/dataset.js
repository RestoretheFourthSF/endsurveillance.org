//For Testing in Node
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Politician() {
	this.score =0;
	this.score_criteria =[];
}

Politician.prototype.shortenState = function(state) {

	var STATES = {
	    'AL': 'Alabama',
	    'AK': 'Alaska',
	    'AZ': 'Arizona',
	    'AR': 'Arkansas',
	    'CA': 'California',
	    'CO': 'Colorado',
	    'CT': 'Connecticut',
	    'DE': 'Delaware',
	    'FL': 'Florida',
	    'GA': 'Georgia',
	    'HI': 'Hawaii',
	    'ID': 'Idaho',
	    'IL': 'Illinois',
	    'IN': 'Indiana',
	    'IA': 'Iowa',
	    'KS': 'Kansas',
	    'KY': 'Kentucky',
	    'LA': 'Louisiana',
	    'ME': 'Maine',
	    'MD': 'Maryland',
	    'MA': 'Massachusetts',
	    'MI': 'Michigan',
	    'MN': 'Minnesota',
	    'MS': 'Mississippi',
	    'MO': 'Missouri',
	    'MT': 'Montana',
	    'NE': 'Nebraska',
	    'NV': 'Nevada',
	    'NH': 'New Hampshire',
	    'NJ': 'New Jersey',
	    'NM': 'New Mexico',
	    'NY': 'New York',
	    'NC': 'North Carolina',
	    'ND': 'North Dakota',
	    'OH': 'Ohio',
	    'OK': 'Oklahoma',
	    'OR': 'Oregon',
	    'PA': 'Pennsylvania',
	    'RI': 'Rhode Island',
	    'SC': 'South Carolina',
	    'SD': 'South Dakota',
	    'TN': 'Tennessee',
	    'TX': 'Texas',
	    'UT': 'Utah',
	    'VT': 'Vermont',
	    'VA': 'Virginia',
	    'WA': 'Washington',
	    'WV': 'West Virginia',
	    'WI': 'Wisconsin',
	    'WY': 'Wyoming',
	};


        for (var key in STATES)
            if (STATES.hasOwnProperty(key))
                if (STATES[key] == state)
                    return key;
    }

Politician.prototype.populateFromGoogle = function(spreadsheet_entry) {

	var normalize_field = function(field) {
		return spreadsheet_entry['gsx$' + field]['$t'].trim();
	};

	this["first_name"] = normalize_field('first');
	this["last_name"] = normalize_field('name');
	this["image"] = normalize_field('imagepleasedontedit');
	this["bioguide"] = normalize_field('bioguide');
	this["email"] = normalize_field('email');
	this["phone"] = normalize_field('phone');
	this["organization"] = normalize_field('organization');
	this["state"] = normalize_field('state');
	this["state_short"] = this.shortenState(normalize_field('state'));
	this["twitter"] = normalize_field('twitter');
	this["party"] = normalize_field('partyaffiliation');
	this["office1"] = normalize_field('office1');
	this["office1phone"] = normalize_field('office1phone');
	this["office1geo"] = normalize_field('office1geo');
	this["office2"] = normalize_field('office2');
	this["office2phone"] = normalize_field('office2phone');
	this["office2geo"] = normalize_field('office2geo');


	this["office3"] = normalize_field('office3');
	this["office3phone"] = normalize_field('office3phone');
	this["office3geo"] = normalize_field('office3geo');
	this["office4"] = normalize_field('office4');
	this["office4phone"] = normalize_field('office4phone');
	this["office4geo"] = normalize_field('office4geo');
	this["office5"] = normalize_field('office5');
	this["office5phone"] = normalize_field('office5phone');
	this["office5geo"] = normalize_field('office5geo');
	this["office6"] = normalize_field('office6');
	this["office6phone"] = normalize_field('office6phone');
	this["office6geo"] = normalize_field('office6geo');
	this["office7"] = normalize_field('office7');
	this["office7phone"] = normalize_field('office7phone');
	this["office7geo"] = normalize_field('office7geo');
	this["office8"] = normalize_field('office8');
	this["office8phone"] = normalize_field('office8phone');
	this["office8geo"] = normalize_field('office8geo');

	this["vote_usaf"] = normalize_field('voteusaf');
	this["vote_tempreauth"] = normalize_field('votetempreauth');
	this["fisa_courts_reform_act"] = normalize_field('fisacourtsreformact');
	this["s_1551_iosra"] = normalize_field('s1551iosra');
	this["fisa_improvements_act"] = normalize_field('fisaimprovementsact');
	this["fisa_transparency_and_modernization_act"] = normalize_field('fisatransparencyandmodernizationact');
	this["surveillance_state_repeal_act"] = normalize_field('surveillancestaterepealact');
	this["usa_freedom_prior_to_20140518"] = normalize_field('usafreedompriorto2014-05-18');
	this["voted_for_conyers_amash_amendment"] = normalize_field('votedforconyersamashamendment');
	this["voted_for_house_version_of_usa_freedom_act_2014"] = normalize_field('votedforhouseversionofusafreedomact2014');
	this["voted_for_massie_lofgren_amendment_2014"] = normalize_field('votedformassielofgrenamendment2014');
	this["whistleblower_protection_for_ic_employees_contractors"] = normalize_field('whistleblowerprotectionforicemployeescontractors');
	this["first_usaf_cloture_vote"] = normalize_field('stusafcloturevote');
	this["straight_reauth"] = normalize_field('straightreauth');
	this["fisa_reform_act"] = normalize_field('fisareformact');
	this["amendment_1449_data_retention"] = normalize_field('amendment1449dataretention');
	this["amendment_1450_extend_implementation_to_1yr"] = normalize_field('amendment1450extendimplementationto1yr');
	this["amendment_1451_gut_amicus"] = normalize_field('amendment1451gutamicus');
	this["final_passage_usaf"] = normalize_field('finalpassageusaf');
	this["s_702_reforms"] = normalize_field('reforms');
	this["massie_lofgren_amendment_to_hr2685_defund_702"] = normalize_field('massielofgrenamendmenttohr2685defund702');
	this["massie_lofgren_amendment_to_hr4870_no_backdoors"] = normalize_field('massielofgrenamendmenttohr4870nobackdoors');

};


Politician.prototype.doScore = function() {

	var score = 0;
	var score_criteria = [];

	if (this['fisa_courts_reform_act'] == 'X') {
	    var inc = 3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the FISA Courts Reform Act'
	    });
	    score += inc;
	}
	if (this['s_1551_iosra'] == 'X') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the Intelligence Oversight and Surveillance Reform Act'
	    });
	    score += inc;
	}
	if (this['fisa_improvements_act'] == 'X') {
	    var inc = -4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the FISA Improvements Act'
	    });
	    score += inc;
	}
	if (this['fisa_transparency_and_modernization_act'] == 'X') {
	    var inc = -4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the FISA Transparency and Modernization Act'
	    });
	    score += inc;
	}
	if (this['surveillance_state_repeal_act'] == 'X') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the Surveillance State Repeal Act'
	    });
	    score += inc;
	}
	if (this['usa_freedom_prior_to_20140518'] == 'X') {
	    var inc = 2;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the original USA Freedom Act (prior to May 18th, 2014)'
	    });
	    score += inc;
	}
	if (this['voted_for_conyers_amash_amendment'] == 'X') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted for Conyers Amash Amendment'
	    });
	    score += inc;
	}
	if (this['voted_for_house_version_of_usa_freedom_act_2014'] == 'X') {
	    var inc = -2;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted for gutted House version of USA Freedom Act of 2014'
	    });
	    score += inc;
	}
	if (this['voted_for_massie_lofgren_amendment_2014'] == 'X') {
	    var inc = 3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted for Massie-Lofgren Amendment (2014)'
	    });
	    score += inc;
	}
	if (this['whistleblower_protection_for_ic_employees_contractors'] == 'X') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported whistleblower protection measures for Intelligence employees and contractors'
	    });
	    score += inc;
	}
	if (this['first_usaf_cloture_vote'] == 'GOOD') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on reauthorizing the PATRIOT Act *and* NO on cloture for the first Senate USA Freedom Act'
	    });
	    score += inc;
	}
	else if (this['first_usaf_cloture_vote'] == 'OK') {
	    var inc = 1;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on reauthorizing the PATRIOT Act *and* YES on cloture for the first Senate USA Freedom Act'
	    });
	    score += inc;
	}
	else if (this['first_usaf_cloture_vote'] == 'BAD') {
	    var inc = -4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on reauthorizing the PATRIOT Act and NO on the first USA Freedom Act cloture vote'
	    });
	    score += inc;
	}
	if (this['straight_reauth'] == 'GOOD') {
	    var inc = 3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on reauthorizing the PATRIOT Act'
	    });
	    score += inc;
	}
	else if (this['straight_reauth'] == 'BAD') {
	    var inc = -3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on reauthorizing the PATRIOT Act'
	    });
	    score += inc;
	}
	if (this['fisa_reform_act'] == 'X') {
	    var inc = -3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported the FISA Reform Act'
	    });
	    score += inc;
	}
	if (this['amendment_1449_data_retention'] == 'GOOD') {
	    var inc = 1;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on USA Freedom data retention amendment (1449)'
	    });
	    score += inc;
	}
	else if (this['amendment_1449_data_retention'] == 'BAD') {
	    var inc = -3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on USA Freedom data retention amendment (1449)'
	    });
	    score += inc;
	}
	if (this['amendment_1450_extend_implementation_to_1yr'] == 'GOOD') {
	    var inc = 1;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on amendment 1450 extending implementation of USA Freedom Act by 1 year'
	    });
	    score += inc;
	}
	else if (this['amendment_1450_extend_implementation_to_1yr'] == 'BAD') {
	    var inc = -2;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on amendment 1450 extending implementation of USA Freedom Act by 1 year'
	    });
	    score += inc;
	}
	if (this['amendment_1451_gut_amicus'] == 'GOOD') {
	    var inc = 1;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on amendment 1451 to gut amicus proceedings'
	    });
	    score += inc;
	}
	else if (this['amendment_1451_gut_amicus'] == 'BAD') {
	    var inc = -3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on amendment 1451 to gut amicus proceedings'
	    });
	    score += inc;
	}
	if (this['final_passage_usaf'] == 'GOOD') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on USA Freedom Act (final passage)'
	    });
	    score += inc;
	}
	else if (this['final_passage_usaf'] == 'OK') {
	    var inc = 1;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on USA Freedom Act (final passage)'
	    });
	    score += inc;
	}
	else if (this['final_passage_usaf'] == 'BAD') {
	    var inc = -4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on USA Freedom Act (final passage) and YES on extending the PATRIOT Act'
	    });
	    score += inc;
	}
	if (this['s_702_reforms'] == 'X') {
	    var inc = 4;
	    score_criteria.push({
	        score:  inc,
	        info:   'Supported bills reforming Section 702 of FISA'
	    });
	    score += inc;
	}
	if (this['massie_lofgren_amendment_to_hr2685_defund_702'] == 'GOOD') {
	    var inc = 3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on Massie-Lofgren Amendment to HR2685: Defund Section 702 surveillance'
	    });
	    score += inc;
	}
	else if (this['massie_lofgren_amendment_to_hr2685_defund_702'] == 'BAD') {
	    var inc = -3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on Massie-Lofgren Amendment to HR2685: Defund Section 702 surveillance'
	    });
	    score += inc;
	}
	if (this['massie_lofgren_amendment_to_hr4870_no_backdoors'] == 'GOOD') {
	    var inc = 3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted YES on Massie-Lofgren Amendment to HR4870: Ban encryption backdoors'
	    });
	    score += inc;
	}
	else if (this['massie_lofgren_amendment_to_hr4870_no_backdoors'] == 'BAD') {
	    var inc = -3;
	    score_criteria.push({
	        score:  inc,
	        info:   'Voted NO on Massie-Lofgren Amendment to HR4870: Ban encryption backdoors'
	    });
	    score += inc;
	}

	this.score = score;
	this.score_criteria = score_criteria;
};


function getDataFromGoogle(callback) {



	var SPREADSHEET_URL = 'https://spreadsheets.google.com/feeds/list/1rTzEY0sEEHvHjZebIogoKO1qfTez2T6xNj0AScO6t24/default/public/values?alt=json';


	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {

			// for (prop in xhr){
			// 	console.log(prop);

			// }

			var res = JSON.parse(xhr.responseText);

			var politicians =[]

			for (var i = 0; i < res.feed.entry.length; i++) {
				var entry = res.feed.entry[i];
				var politician = new Politician();
				politician.populateFromGoogle(entry);
				politician.doScore();
				politicians.push(politician);
			}

		if (callback != undefined){
			callback(politicians);
		}
	}
	};
	xhr.open("get", SPREADSHEET_URL, true);
	xhr.send();
}

module.exports ={};
module.exports.getDataFromGoogle = getDataFromGoogle;