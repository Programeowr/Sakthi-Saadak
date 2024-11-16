import axios from 'axios'
import { getEnergyRecommendations } from './InputGemini.ts';

function Data(){
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
        'Fan': ['Havells', 'Orient', 'Crompton', 'Usha', 'Bajaj', 'V-Guard', 'Luminous'],
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
        'Fan': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS', 'All Day'],
        'Television': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
        'Vacuum': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Blender': ['0-10 Mins', '10-20 Mins', '20-30 Mins', '30-40 Mins', '40-50 Mins', '50-60 Mins', 'More than 1 HR'],
        'Iron': ['0-15 Mins', '15-30 Mins', '30-45 Mins', '45-60 Mins', '60-90 Mins', '90-120 Mins', 'More than 2 HRS'],
        'Light': ['Less than 2 HRS', '2-4 HRS', '4-6 HRS', '6-8 HRS', '8-10 HRS', '10-12 HRS', 'More than 12 HRS'],
        'Computer': ['Less than 1 HR', '1-2 HRS', '2-3 HRS', '3-4 HRS', '4-5 HRS', '5-6 HRS', '6-8 HRS', '8-10 HRS', 'More than 10 HRS'],
    }

    let selectedAppliance, selectedCompany, selectedTime, selectedRating, selectedFreq;

    selectedAppliance = appSelect.value;
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

        compSelect.onchange = function() {
        selectedCompany = compSelect.value;
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
    };

    rateSelect.onchange = function() {
        const ratingString = rateSelect.value;
        selectedRating = parseFloat(ratingString);
    };

    freqSelect.onchange= function() {
        const freqString = freqSelect.value;
        selectedFreq = convertFreqToFloat(freqString);
    }
    
    let energyUsed, energyCost;
    let sAppliance, sCompany, sTime, sFreq, sRating;

    const handleButtonClick = async () => {
        if (!validateForm()) {
            return;
        }

        const token = localStorage.getItem('token');
        ({ energyUsed, energyCost } = await displayInputCards(selectedAppliance, selectedRating, selectedTime, token));

        sAppliance = selectedAppliance;
        sCompany = selectedCompany;
        sTime = selectedTime;
        sFreq = selectedFreq;
        sTime = selectedTime;
        sRating = selectedRating;

        selectedAppliance = '';
        selectedCompany = '';
        selectedTime = '';
        selectedFreq = '';
        selectedRating = '';
        
        const target = document.getElementById('input-energy-used');        
        target.scrollIntoView({ behavior: 'smooth' });

        return { energyUsed, energyCost };
    };

    const handleAddButtonClick = async () => {
        if(!validateForm()){
            return;
        }

        console.log(sAppliance, sCompany, sTime, sFreq, sTime);
        await saveApplianceData(sAppliance, sCompany, sTime, sFreq, sRating);
        await savePowerCost(energyUsed, energyCost);
    };

    const addButton = document.getElementById('add-appliance-button');
    if (addButton) {
        addButton.removeEventListener('click', handleAddButtonClick);

        addButton.addEventListener('click', handleAddButtonClick);
    } else {
        console.error('Element not found');
    }

    const button = document.getElementById('Input');
    if (button) {
        button.removeEventListener('click', handleButtonClick);

        button.addEventListener('click', handleButtonClick);
    } else {
        console.error('Element not found');
    }

}

function validateForm() {
    const appSelect = document.getElementById('Appliance');
    const compSelect = document.getElementById('Company');
    const timeSelect = document.getElementById('Time');
    const freqSelect = document.getElementById('Freq');
    const rateSelect = document.getElementById('Rating');

    if (!appSelect.value) {
        alert('Please select an appliance.');
        appSelect.focus();
        return false;
    }
    if (!compSelect.value) {
        alert('Please select a company.');
        compSelect.focus();
        return false;
    }
    if (!timeSelect.value) {
        alert('Please select the amount of time used.');
        timeSelect.focus();
        return false;
    }
    if (!freqSelect.value) {
        alert('Please select the frequency.');
        freqSelect.focus();
        return false;
    }
    if (!rateSelect.value) {
        alert('Please select the power rating.');
        rateSelect.focus();
        return false;
    }
    
    return true; 
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
        'Kettle' : {
            'Philips': ['1000W', '1500W', '1800W'],
            'Prestige': ['1200W', '1500W', '1800W'],
            'Bajaj': ['1200W', '1500W', '1800W'],
            'Butterfly': ['1000W', '1200W', '1500W'],
            'Pigeon': ['1000W', '1200W', '1500W'],
            'Havells': ['1200W', '1500W', '1800W'],
            'Kent': ['1000W', '1500W', '1800W'],
        },
        'Fan' : {
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
        'Vacuum' : {
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

function convertFreqToFloat(freqString) {
    const freqMapping = {
        'Once a week' : 1,
        'Twice a week' : 2,
        '3-4 times a week' : 3.5,
        'More than 4 times a week' : 5,
        'Everyday' : 7
    };

    return freqMapping[freqString] || 0;
}

function convertFloatToFreq(selectedFreq){
    const freqMapping = {
        1 : 'Once a week',
        2 : 'Twice a week',
        3.5 : '3-4 times a week',
        5 : 'More than 4 times a week',
        7 : 'Everyday'
    };

    return freqMapping[selectedFreq] || '';
}

function badSuggestion(appliance, threshold){
    const inputThreshold = document.getElementById('Threshold');
    inputThreshold.textContent = "You are using the appliances more than average people. Follow these steps:" 

    if(appliance === 'Refrigerator'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Adjust the Temperature: Adjust the refrigerator to 3-4 °C, and the freezer to -18 °C to chill perfectly.',
            'Do Not Overload: Do not overload the chamber since that reduces air circulation and overworks the compressor.',
            'Let a gap at the back of the fridge for proper air circulation and dissipation of heat.',
            'Defrost Often: If it\'s not frost-free, then defrost the freezer regularly for better efficiency.',
            'Energy-Efficient Models: Upgrade to BEE 5-star rated fridge because it saves 20-30% of your electricity being consumed for this purpose.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Microwave'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Use Microwave for Quick Jobs: Microwave is much handier for quick little jobs than the oven.',
            'We can cook in batches so that it does not get overheated.',
            'Use microwave-safe cookware: The proper cookware hastens the process and reduces energy consumption.',
            'Turn off and unplug: Switch off standby power by unplugging the microwave.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Washing Machine'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Use Cold Water: Run your dishwasher cycles using cold water to save on heating costs.',
            'Wash only full loads : Maximum efficiency through full loads.',
            'Energy-Saving Appliances: An alternative option is a front-load machine that consumes less energy and water.',
            'Energy-Saving Appliances: An alternative option is a front-load machine that consumes less energy and water.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Electric Stove'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Use the right size cookware: always use cookware size that corresponds to the heating element to reduce waste.',
            'Lid On When Cooking: Put on pots lid to keep heat retained and not take longer time in cooking.',
            'Preheat only if it is needed to conserve energy.',
            'Switch Off Early Switch off just in time before food gets done so that one can use residual heat.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Water Heater'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Set the Thermostat: to around 50°C; seldom needed for most applications.',
            'Take shorter showers. Install a low-flow showerhead optionally.',
            'Turn Off After Use: Switch off the heater to prevent constant re- warming.',
            'Insulate water pipes for them to retain the heat longer without their need to reheat again.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Dishwasher'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Run only Full Loads. Run your dishwasher only when its full.',
            'Air-dry instead of heat-drying. Switch off the heat-drying option to reduce energy consumption.',
            'Use the Eco Setting: If an eco-setting is available then use this since it conserves water and energy.',
            'Scour rather than flush Scour off food rather than pre-washing in hot water.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Kettle'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Boil Only What You Need Boil only what you need.',
            'Regular Descale: Ensures frequent descaling improves efficiency.',
            'Lid Usage Lid retains the heat that was trapped in the process of boiling.',
            'Turn It Off at Once: Switch off once the water starts boiling.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Fan'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Fan Speed: Keep this as low as possible.',
            'When not in use: Switch off the fan while leaving a room.',
            'Upgrade to the latest 5-star models from BEE, which consume much less power.',
            'It rotates counterclockwise and clockwise at low speed in winters and in summers it rotates.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Television'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Use Energy-Saving Mode: Activate energy-saving or eco-mode.',
            'Off, not on stand-by: Switch off the television completely instead of leaving it on a stand-by.',
            'Screen Brightness Control Dimmed the brightness a bit to save energy.',
            'Smart TV Options: Upgrade to a smart, energy-efficient television, if your model is older.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Vacuum'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Vacate only if necessary: Vacate only if absolutely necessary or less often.',
            'Upgrade to an energy-efficient model and upgrade to a high Energy Star rating model.',
            'Maintain Filters: For optimal operation and minimum power consumption, keep the filters clean.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Blender'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Use less pulsating pulses: Run it intermittently, rather than continuously.',
            'Right Size for the Task: Used just the right size containers and combined only just enough.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Iron'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Iron of Bulk: Iron clothes in bulk to reduce heating frequency.',
            'Then, Use Appropriate Temperature: temperature differs from fabric type.',
            'Off Before Finished: Shut off a few minutes before finished in order to use any remaining heat.',
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Light'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Turn off lights when leaving a room. TURN OFF WHEN NOT IN USE.',
            'Switch- Most lights remain ON in rooms. Use sensors in such places.',
            'Use natural light to the fullest and minimize the use of artificial light.',
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

    if(appliance === 'Computer'){
        const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Enable Power Saving Mode: Sleep the computer when idle.',
            'Shutdown of Devices: Each device must be shut down in case it is idle.',
            'Transition to a Laptop: Use laptop as an alternative for daily use.',
            'Power settings: Allows your desktop to automatically shut down following a certain time of inactivity.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
    }

}


function goodSuggestion(appliance){
    const inputThreshold = document.getElementById('Threshold');
    inputThreshold.textContent = "Very Good! You're using energy conservatively. Here are some tips anyways:";

    const inputSuggestions = document.getElementById('input-suggestion-list');
        inputSuggestions.innerHTML = '';

        const suggestions = [
            'Use appliances during off-peak hours: High-power appliances should be used during cheaper off-peak hours.',
            'Ungroup appliances: remove standby power by unplugging appliances when not in use.',
            'Routine Maintenance: Appliances must be cleaned regularly, and serviced for optimal performance.'
        ];

        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            inputSuggestions.appendChild(listItem);
        });
}

function evaluatePowerConsumption(appliance, time, rating){
    const thresholds = {
        'Refrigerator': 150 * 24,
        'Microwave': 1000 * 0.5,
        'Washing Machine': 700 * 0.5,
        'Electric Stove': 1500 * 1,
        'Water Heater': 2000 * 0.5,
        'Dishwasher': 1500 * 1,
        'Kettle': 1500 * 0.5,
        'Fan': 70 * 8,
        'Television': 120 * 4,
        'Vacuum': 1000 * 0.5,
        'Blender': 500 * 0.2,
        'Iron': 1500 * 0.5,
        'Light': 20 * 8,
        'Computer': 250 * 4
    };

    return (rating * time) > thresholds[appliance];
}

function getSuggestions(appliance, company, time, freq, rating){
    if (evaluatePowerConsumption(appliance, time, rating)) {
        badSuggestion(appliance, rating*time);
    } else {
        goodSuggestion(appliance);
    }
}

async function getLocation(token) {
    try {
        const response = await axios.get('http://localhost:5000/get-location', {
            headers: {
                Authorization: token,
                Accept: 'application/json'
            }
        });

        const location = response.data.location;

        return location;

    } catch (error) {
        console.error("Error fetching location:", error);
        return null; 
    }
}


async function savePowerCost(energyUsed, energyCost) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }
        
        const currentDate = new Date().toISOString().split('T')[0];
        
        const response = await axios.post(
            'http://localhost:5000/save-power', 
            { 
                power: energyUsed,
                cost: energyCost,
                date: currentDate
            },  
            {
                headers: {
                    'Authorization': token 
                }
            }
        );

        console.log('Power data saved:', response.data);
    } catch (error) {
        console.error('Error saving power data:', error.response ? error.response.data : error.message);
    }
}

async function displayInputCards(selectedAppliance, selectedRating, selectedTime, token){

    const thresholds = {
        'Refrigerator': 150 * 24,
        'Microwave': 1000 * 0.5,
        'Washing Machine': 700 * 0.5,
        'Electric Stove': 1500 * 1,
        'Water Heater': 2000 * 0.5,
        'Dishwasher': 1500 * 1,
        'Kettle': 1500 * 0.5,
        'Fan': 70 * 8,
        'Television': 120 * 4,
        'Vacuum': 1000 * 0.5,
        'Blender': 500 * 0.2,
        'Iron': 1500 * 0.5,
        'Light': 20 * 8,
        'Computer': 250 * 4
    };

    const costs = {
        'Andhra Pradesh' : 6,
        'Arunachal Pradesh' : 5.5,
        'Assam' : 5.75,
        'Bihar' : 6.75,
        'Chhattisgarh' : 5,
        'Goa' : 3.75,
        'Gujarat' : 5.25,
        'Haryana' : 6.25,
        'Himachal Pradesh' : 4.25,
        'Jharkhand' : 6.25,
        'Karnataka' : 5.5,
        'Kerala' : 4.25,
        'Madhya Pradesh' : 7,
        'Maharashtra' : 6.5,
        'Manipur' : 5.75,
        'Meghalaya' : 4.75,
        'Mizoram' : 5.5,
        'Nagaland' : 5.5,
        'Odisha' : 5.5,
        'Punjab' : 5,
        'Rajasthan' : 6,
        'Sikkim' : 4.5,
        'Tamil Nadu' : 5.25,
        'Telangana' : 6.25,
        'Tripura' : 5,
        'Uttar Pradesh' : 6.5,
        'Uttarakhand' : 4.75,
        'West Bengal' : 6,
        'Andaman and Nicobar Islands' : 7.5,
        'Chandigarh' : 5,
        'Dadra and Nagar Haveli and Daman and Diu' : 4.5,
        'Lakshadweep' : 5,
        'Delhi' : 4.5,
        'Puducherry' : 4.5,
        'Ladakh' : 6.25,
        'Jammu and Kashmir' : 6.25
    };

    const location = await getLocation(token);

    let energyUsed = (selectedRating * selectedTime);
    let energyCost =  energyUsed * (costs[location]) / 1000;
    let energyThreshold = thresholds[selectedAppliance];

    const inputEnergy = document.getElementById('input-energy-used');
    const inputThreshold = document.getElementById('input-threshold-energy');
    const inputCost = document.getElementById('input-cost-value');
    const suggestionsList = document.getElementById('input-suggestion-list');
    const thresholdText = document.getElementById('Threshold');

    inputEnergy.innerHTML = '';
    inputThreshold.innerHTML = '';
    inputCost.innerHTML='';

    inputEnergy.textContent = `${energyUsed} W-h`;
    inputThreshold.textContent = `${energyThreshold} W-h`;
    inputCost.textContent = `₹ ${energyCost.toFixed(2)}`;

    try {
        const recommendations = await getEnergyRecommendations(energyUsed, energyThreshold, selectedAppliance);
        
        // Update the suggestions list
        suggestionsList.innerHTML = '';
        recommendations.forEach(recommendation => {
            const li = document.createElement('li');
            li.textContent = recommendation;
            suggestionsList.appendChild(li);
        });

        const efficiency = ((energyUsed - energyThreshold) / energyThreshold) * 100;
        console.log(efficiency);
        thresholdText.textContent = efficiency > 0 
            ? `Your energy usage is ${Math.abs(efficiency.toFixed(1))}% above average` 
            : `Your energy usage is ${Math.abs(efficiency.toFixed(1))}% below average`;
        thresholdText.style.color = efficiency > 0 ? '#ff4444' : '#44ff44';
    } catch (error) {
        console.error('Error getting AI recommendations:', error);
    }

    return { energyUsed, energyCost };
}

async function saveApplianceData(sAppliance, sCompany, sTime, sFreq, sRating) {
    try {
        const token = localStorage.getItem('token');
        const currentDate = new Date().toISOString().split('T')[0]; 
        
        const response = await axios.post('http://localhost:5000/save-appliance', {
            userId: '',
            appliance: sAppliance,
            company: sCompany,
            time: sTime,
            frequency: sFreq,
            rating: sRating,
            date: currentDate 
        },  

        {
            headers: {
                Authorization: token 
            },
        });

        console.log('Data saved:', response.data);
    } catch (error) {
        console.error('Error saving data:', error.response ? error.response.data : error.message);
    }
}

export default Data