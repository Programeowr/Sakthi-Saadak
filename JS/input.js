function updateSubSelect(){
    const appSelect = document.getElementById('Appliance');
    const compSelect = document.getElementById('Company');
    const timeSelect = document.getElementById('Time');
    const freqSelect = document.getElementById('Freq');
    const rateSelect = document.getElementById('Rating');

    compSelect.innerHTML = '<option value="" disabled selected>Select a Company</option>';
    timeSelect.innerHTML = '<option value="" disabled selected>Amount of Time Used</option>';
    rateSelect.innerHTML = '<option value="" disabled selected>Select the Power Rating</option>';
    
    compSelect.disabled = false;
    timeSelect.disabled = false;

    const applianceCompanies = {
        'Refrigerator': ['LG', 'Samsung', 'Whirlpool', 'Godrej', 'Bosch', 'Haier', 'Panasonic'],
        'Microwave': ['Panasonic', 'LG', 'Samsung', 'Whirlpool', 'Godrej', 'Sharp', 'Bajaj'],
        'Washing Machine': ['LG', 'Samsung', 'Whirlpool', 'Bosch', 'Godrej', 'Haier', 'Panasonic'],
        'Electric Stove': ['Prestige', 'Samsung', 'Wonderchef', 'Pigeon', 'Whirlpool', 'Usha', 'Butterfly', 'Philips'],
        'Water Heater': ['Bajaj', 'V-Guard', 'Havells', 'Crompton', 'Usha', 'Kenstar'],
        'Dishwasher': ['Bosch', 'Whirlpool', 'Samsung', 'LG', 'Siemens'],
        'Kettle': ['Philips', 'Prestige', 'Bajaj', 'Butterfly', 'Pigeon', 'Havells', 'Kent'],
        'Fans': ['Havells', 'Orient', 'Crompton', 'Usha', 'Bajaj', 'V-Guard', 'Luminous'],
        'Television': ['Samsung', 'LG', 'Sony', 'Xiaomi', 'Oneplus', 'Panasonic', 'TCL', 'Sharp'],
        'Vacuum': ['Dyson', 'Eureka Forbes', 'Philips', 'Kent', 'Bosch', 'LG', 'Panasonic'],
        'Blender': ['Philips', 'Bajaj', 'Prestige', 'Butterfly', 'Sujata', 'Wonderchef', 'Usha', 'Preethi'],
        'Iron': ['Philips', 'Bajaj', 'Havells', 'Usha', 'Orient', 'Crompton', 'Panasonic'],
        'Light': ['Philips', 'Syska', 'Havells', 'Bajaj', 'Orient', 'Crompton', 'Wipro', 'Panasonic'],
        'Computer': ['HP', 'Dell', 'Lenovo', 'Acer', 'Asus', 'Apple', 'Intel'],
    };

    const applianceTime = {
        'Refrigerator': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Microwave': ['2-5 Mins', '5-10 Mins', '10-15 Mins', '15-20 Mins', '20-30 Mins', 'More than 30 Mins'],
        'Washing Machine': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', 'More than 1 HR'],
        'Electric Stove': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Water Heater': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Dishwasher': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Kettle': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-45 Mins', '45-60 Mins', 'More than 1 HR'],
        'Fans': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Television': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
        'Vacuum ': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Blender': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-40 Mins', '40-50 Mins', '50-60 Mins', 'More than 1 HR'],
        'Iron': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Light': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS'],
        'Computer': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
    }


    const selectedAppliance = appSelect.value;
    const companies = applianceCompanies[selectedAppliance];
    const time = applianceTime[selectedAppliance];

    if(companies){
        companies.forEach(comp => {
            const option = document.createElement('option');
            option.textContent = comp;
            compSelect.appendChild(option);
        });
    } else{
        compSelect.disabled = true;
    }

    if(time){
        time.forEach(tim => {
            const option = document.createElement('option');
            option.textContent = tim;
            timeSelect.appendChild(option);
        });
    } else{
        timeSelect.disabled = true;
    }

    let selectedTime, selectedRating, selectedFreq;

    compSelect.onchange = function() {
        const selectedCompany = compSelect.value;
        if (selectedAppliance && selectedCompany) {
            rateSelect.disabled = false;

            const uniqueRatings = getUniqueRatings(selectedAppliance, selectedCompany);
            rateSelect.innerHTML = '<option value="" disabled selected>Select the Power Rating</option>';
            uniqueRatings.forEach(rating => {
                const option = document.createElement('option');
                option.textContent = rating;
                rateSelect.appendChild(option);
            });
        } else {
            rateSelect.disabled = true;
        }
    }

    timeSelect.onchange = function() {
        const timeString = timeSelect.value;
        selectedTime = convertTimeToFloat(timeString);
        console.log("Selected Time (in hours):", selectedTime); 
    };

    rateSelect.onchange = function() {
        const ratingString = rateSelect.value;
        selectedRating = parseFloat(ratingString);
        console.log("Selected Power Rating (in watts):", selectedRating); 
    };

    freqSelect.onchange= function() {
        selectedFreq = freqSelect.value;
    }

    getSuggestions(selectedAppliance, selectedCompany, selectedTime, selectedFreq, selectedRating);
} 

function getUniqueRatings(appliance, company) {
    const applianceRating = {
        'Refrigerator' : {
            'LG': ['120W','150W','200W'],
            'Samsung': ['130W','160W','180W'],
            'Whirlpool': ['110W','140W','180W'],
            'Godrej': ['100W','130W','160W'],
            'Bosch': ['130W','180W','220W'],
            'Haier': ['90W','120W','150W'],
            'Panasonic': ['120W','160W','200W'],
        },
        'Microwave Oven' : {
            'Panasonic': ['850W','1000W','1350W'],
            'LG': ['900W','1200W','1500W'],
            'Samsung': ['800W','1000W','1200W'],
            'Whirlpool': ['700W','900W','1200W'],
            'Godrej': ['800W','1100W','1300W'],
            'Sharp': ['700W','900W','1100W'],
            'Bajaj': ['700W','900W','1000W'],
        },
        'Washing Machine' : {
            'LG': ['400W','600W','1500W'],
            'Samsung': ['500W','700W','1200W'],
            'Whirlpool': ['350W','500W','1000W'],
            'Bosch': ['500W','700W','1200W'],
            'Godrej': ['350W','500W','1000W'],
            'Haier': ['350W','550W','1200W'],
            'Panasonic': ['400W','600W','1000W'],
        },
        'Electric Stove' : {
            'Prestige': ['1200W', '1500W', '2000W'],
            'Samsung': ['1000W', '1500W', '2000W'],
            'Wonderchef': ['1000W','1400W','2000W'],
            'Pigeon': ['1000W','1600W','2000W'],
            'Whirlpool': ['1200W','1800W','2400W'],
            'Usha': ['1200W','1500W','1800W'], 
            'Butterfly': ['1200W','1600W','2000W'],
            'Philips': ['1200W','1800W','2100W'],
        },
        'Water Heater' : {
            'Bajaj': ['1500W','2000W','3000W'],
            'V-Guard': ['1500W','2000W','3000W'],
            'Havells': ['1500W','2000W','2500W'],
            'Crompton': ['1500W','2000W','3000W'],
            'Usha': ['1500W','2000W','2500W'],
            'Kenstar': ['1500W','2000W','3000W'],
        },
        'Dishwasher' : {
            'Bosch': ['1200W', '1500W', '1800W'],
            'Whirlpool': ['1200W', '1500W', '1800W'],
            'Samsung': ['1400W', '1600W', '2000W'],
            'LG': ['1400W', '1800W', '2000W'],
            'Siemens': ['1300W', '1600W', '1800W'],
        },
        'Electric Kettle' : {
            'Philips': ['1000W', '1500W', '1800W'],
            'Prestige': ['1200W', '1500W', '1800W'],
            'Bajaj': ['1200W', '1500W', '1800W'],
            'Butterfly': ['1000W', '1200W', '1500W'],
            'Pigeon': ['1000W', '1200W', '1500W'],
            'Havells': ['1200W', '1500W', '1800W'],
            'Kent': ['1000W', '1500W', '1800W'],
        },
        'Fans' : {
            'Havells': ['50W', '70W', '75W'],
            'Orient': ['50W', '70W', '75W'],
            'Crompton': ['50W', '70W', '75W'],
            'Usha': ['50W', '70W', '75W'],
            'Bajaj': ['50W', '70W', '75W'],
            'V-Guard': ['50W', '70W', '75W'],
            'Luminous': ['50W', '70W', '75W'],
        },
        'Television' : {
            'Samsung': ['80W', '120W', '150W'],
            'LG': ['70W', '100W', '130W'],
            'Sony': ['80W', '120W', '150W'],
            'Xiaomi': ['70W', '100W', '130W'],
            'Oneplus': ['70W', '100W', '130W'],
            'Panasonic': ['80W', '110W', '140W'],
            'TCL': ['70W', '100W', '130W'],
            'Sharp': ['80W', '120W', '140W'],
        },
        'Vaccuum' : {
            'Dyson': ['700W', '800W', '1200W'],
            'Eureka Forbes': ['800W', '1000W', '1200W'],
            'Philips': ['900W', '1000W', '1200W'],
            'Kent': ['1000W', '1200W', '1400W'],
            'Bosch': ['900W', '1000W', '1200W'],
            'LG': ['800W', '1000W', '1200W'],
            'Panasonic': ['700W', '1000W', '1200W'],
        },
        'Blender' : {
            'Philips': ['300W', '500W', '750W'],
            'Bajaj': ['300W', '500W', '750W'],
            'Prestige': ['350W', '550W', '750W'],
            'Butterfly': ['300W', '500W', '750W'],
            'Sujata': ['350W', '500W', '700W'],
            'Wonderchef': ['300W', '500W', '750W'],
            'Usha': ['300W', '500W', '700W'],
            'Preethi': ['300W', '500W', '700W'],
        },
        'Iron' : {
            'Philips': ['1000W', '1200W', '1800W'],
            'Bajaj': ['1000W', '1200W', '1800W'],
            'Havells': ['1000W', '1200W', '1800W'],
            'Usha': ['1000W', '1300W', '1800W'],
            'Orient': ['1000W', '1200W', '1500W'],
            'Crompton': ['1000W', '1200W', '1500W'],
            'Panasonic': ['1000W', '1200W', '1800W'],
        },
        'Light' : {
            'Philips': ['18W', '20W', '24W'],
            'Syska': ['18W', '20W', '24W'],
            'Havells': ['18W', '20W', '24W'],
            'Bajaj': ['18W', '20W', '24W'],
            'Orient': ['18W', '20W', '24W'],
            'Crompton': ['18W', '20W', '24W'],
            'Wipro': ['18W', '20W', '24W'],
            'Panasonic': ['18W', '20W', '24W'],
        },
        'Computer' : {
            'HP': ['200W', '250W', '300W'],
            'Dell': ['200W', '250W', '300W'],
            'Lenovo': ['200W', '250W', '300W'],
            'Acer': ['200W', '250W', '300W'],
            'Asus': ['200W', '250W', '300W'],
            'Apple': ['180W', '220W', '300W'],
            'Intel': ['150W', '200W', '250W'],
        }
    }

    return applianceRating[appliance][company];
}

function convertTimeToFloat(timeString) {
    const timeMapping = {
        'Less than 1 HR': 0.5,
        'Less than 2 HRS':1.75,
        '1-2 HRS': 1.5,
        '2-3 HRS': 2.5,
        '2-4 HRS': 3,
        '3-4 HRS': 3.5,
        '4-5 HRS': 4.5,
        '4-6 HRS': 5,
        '5-6 HRS': 5.5,
        '6-8 HRS': 7,
        '8-10 HRS': 9,
        '10-12 HRS': 11,
        'More than 12 HRS': 13,
        'MORE than 10 HRS': 11,
        'All Day': 24,
        '2-5 Mins': 0.05,
        '0-15 Mins':0.125,
        '15-30 Mins':0.375,
        '0-10 Mins':0.0833,
        '10-20 Mins':0.25,
        '5-10 Mins': 0.1,
        '10-15 Mins': 0.25,
        '15-20 Mins': 0.33,
        '20-30 Mins': 0.5,
        '30-45 Mins': 0.75,
        '45-60 Mins': 1,
        '60-90 Mins': 1.25,
        '90-120 Mins': 1.75,
        'More than 1 HR': 2,
        'More than 2 HRS': 3
    };
    return timeMapping[timeString] || 0; 
}

function getSuggestions(appliance, company, time, freq, rating){
    
}
