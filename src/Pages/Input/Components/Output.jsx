import Data from '../Data.jsx'

function Output(){

    return(
        <div id="input-output-section">
            <h2 id="input-output-h2">OUTPUT </h2>
                <div id="input-total-consumption">
                    <h3 id="input-output-h2">TOTAL POWER CONSUMPTION</h3>
                    <p id="input-total-power"></p>
                </div>
            
                <h2>APPLIANCE SPECIFIC DETAILS</h2>
            <table className="input-appliance-table">
                <thead>
                    <tr>
                        <th>Appliance Name</th>
                        <th>Average Power Consumption (W-h)</th>
                        <th>Threshold</th>
                        <th>Usage Pattern</th>
                    </tr>
                </thead>
                <tbody id="input-inputValuesBody">
                
                </tbody>
            </table>
            
            <div className="input-suggestions">
                    <h3 id="input-output-h3">Suggestions:</h3>
                        <h4 style={{ color: '#00c2ff', display: 'flex' }} id="Threshold"></h4>
                    <ul id="input-suggestion-list">
                        
                    </ul>
            </div>
        </div>    
    );
}

export default Output