import React, { useState } from 'react';
import Data from '../Data.jsx';
import { Loader2 } from 'lucide-react';

function Output() {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddAppliance = async () => {
        setIsAdding(true);
        const addButton = document.getElementById('add-appliance-button');
        const handleAddButtonClick = addButton.onclick;
        await handleAddButtonClick();
        setIsAdding(false);
    };

    return (
        <div id="input-output-section">
            <h2 id="input-output-h2">OUTPUT </h2>
            <div id="input-total-consumption">
                <h3 id="input-output-h2">TOTAL POWER CONSUMPTION</h3>
                <p id="input-total-power"></p>
            </div>

            <h2>APPLIANCE SPECIFIC DETAILS</h2>

            <div className="input-stats-container">
                <div className="input-stat-card">
                    <h3>Energy Used</h3>
                    <p id="input-energy-used">0 W-h</p>
                    <span className="input-stat-description">Total energy consumed by your appliances</span>
                </div>
                <div className="input-stat-card">
                    <h3>Threshold Energy</h3>
                    <p id="input-threshold-energy">0 W-h</p>
                    <span className="input-stat-description">Average energy consumption benchmark</span>
                </div>
                <div className="input-stat-card">
                    <h3>Cost</h3>
                    <p id="input-cost-value">₹ 0</p>
                    <span className="input-stat-description">Estimated cost based on current usage</span>
                </div>
            </div>

            <button 
                className="input-add-appliance-btn" 
                id="add-appliance-button"
                onClick={handleAddAppliance}
                disabled={isAdding}
            >
                {isAdding ? (
                    <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Adding...
                    </>
                ) : (
                    'Add Appliance to Reports'
                )}
            </button>

            <div className="input-suggestions">
                <h3 id="input-output-h3">Suggestions:</h3>
                <h4 style={{ color: '#00c2ff', display: 'flex' }} id="Threshold"></h4>
                <ul id="input-suggestion-list"></ul>
            </div>
        </div>
    );
}

export default Output;