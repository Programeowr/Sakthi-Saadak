import Image1 from '../../../Images/enery usage.png'
import Image2 from '../../../Images/carbon footprint.png'
import Image3 from '../../../Images/material comparisons.png'
import Image4 from '../../../Images/reports nad graphs.png'
import Image5 from '../../../Images/education articles.png'
import Image6 from '../../../Images/renewable energy.png'
import { useNavigate } from 'react-router-dom';


function NavArticle(){

    const navigate = useNavigate();

    const handleCarbon = () => {
        navigate("/Carbon"); 
    };

    const handleRenewable = () => {
        navigate("/Renewable"); 
    };

    const handleArticles = () => {
        navigate("/Educational"); 
    };

    const handleComparision = () => {
        navigate("/Comparision");
    };

    const handleReports = () => {
        navigate("/Reports");
    };

    const handleEnergy = () => {
        navigate("/Input");
    };

    return (
        <>
            <div className="Nav_Articles_1">
                <div id="Usage" className="nav-item" onClick={handleEnergy}>
                    <img  src={Image1} alt="Energy Usage Icon" className="nav-logo" />
                    <h3>Energy Usage</h3>
                    <p>Know about your Energy Usage</p>
                </div>
    
                <div id="Footprint" className="nav-item" onClick={handleCarbon}>
                    <img src={Image2} alt="Carbon Footprint Icon" className="nav-icon" />
                    <h3>Calculate Carbon Footprint</h3>
                    <p>Know the Carbon Footprint you're leaving behind</p>
                </div>
    
                <div id="Material" className="nav-item" onClick={handleComparision}>
                    <img src={Image3} alt="Material Comparison Icon" className="nav-icon" />
                    <h3>Material Comparison</h3>
                    <p>Learn about the materials used to preserve Energy</p>
                </div>
            </div>
    
            <div className="Nav_Articles_2">   
                <div id="Reports" className="nav-item" onClick={handleReports} >
                    <img src={Image4} alt="Reports Icon" className="nav-icon" />
                    <h3>Reports and Graphs</h3>
                    <p>Monitor your Energy Usage</p>
                </div>
            
                <div id="Articles" className="nav-item" onClick={handleArticles}>
                    <img src={Image5} alt="Educational Articles Icon" className="nav-icon" />
                    <h3>Educational Articles</h3>
                    <p>Learn about conserving and preserving Energy</p>
                </div>
            
                <div id="RenewableEnergy" className="nav-item" onClick={handleRenewable}>
                    <img src={Image6} alt="Renewable Energy Icon" className="nav-icon" />
                    <h3>Renewable Energy</h3>
                    <p>Learn about using Renewable Energy</p>
                </div>
            </div>
        </>
    );
}

export default NavArticle