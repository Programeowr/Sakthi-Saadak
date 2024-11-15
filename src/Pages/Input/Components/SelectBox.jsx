import Data from '../Data.jsx'
import Output from './Output.jsx'

function SelectBox(){

    function handleButtonClick(){
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

    return(
        <>
            <h2 id="input-energy-h2">INPUT YOUR ENERGY USAGE</h2>
            <div id="input-sel" >
                <div className="app">
                    <label htmlFor="Appliance">Appliance</label>
                    <select name="Appliance" id="Appliance" defaultValue=""required onChange={Data}>
                        <option value="" disabled>Select an Appliance</option>
                        <option value="Refrigerator">Refrigerator</option>
                        <option value="Microwave">Microwave</option>
                        <option value="Washing Machine">Washing Machine</option>
                        <option value="Electric Stove">Electric Stove</option>
                        <option value="Water Heater">Water Heater</option>
                        <option value="Dishwasher">Dishwasher</option>
                        <option value="Kettle">Electric Kettle</option>
                        <option value="Fan">Fans</option>
                        <option value="Television">Television</option>
                        <option value="Vacuum">Vacuum cleaner</option>
                        <option value="Blender">Blender</option>
                        <option value="Iron">Iron</option>
                        <option value="Light">Tube Light</option>
                        <option value="Computer">Computer</option>
                    </select>
                </div>

                <div className="Company">
                    <label htmlFor="Company">Company</label>
                    <select id="Company" name="Company" defaultValue =""disabled required>
                        <option value="" disabled>Select a Company</option>
                    </select>
                </div>

                <div className="Time">
                    <label htmlFor="Time">Time</label>
                    <select name="Time" id="Time" defaultValue=""disabled required>
                    <option value="" disabled>Amount of Time Used</option>   
                    </select>
                </div>

                <div className="Freq">
                    <label htmlFor="Freq">Frequency</label>
                    <select name="Freq" id="Freq" defaultValue="" required>
                        <option value="" disabled>Usage Frequency</option>
                        <option value="Once a week">Once a week</option>
                        <option value="Twice a week">Twice a week</option>
                        <option value="3-4 times a week">3-4 times a week</option>
                        <option value="More than 4 times a week">More than 4 times a week</option>
                        <option value="Everyday">Everyday</option>
                    </select>
                </div>

                <div className="Rating">
                    <label htmlFor="Rating">Rating</label>
                    <select name="Rating" id="Rating" defaultValue="" disabled required>
                        <option value="" disabled>Select the Power Rating</option>
                    </select>
                </div>
                
            </div>

            <button id="Input" onClick={handleButtonClick}>Submit</button>
        </>
    );
}

export default SelectBox
