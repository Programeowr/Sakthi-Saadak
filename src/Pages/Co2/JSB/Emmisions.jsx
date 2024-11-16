import axios from 'axios'

async function Emmisions(token) {

    try {
        const response = await axios.get('https://sakthi-saadak-backend.onrender.com/get-appliance', {
            headers: {
                Authorization: token,
                Accept : 'application/json'
            }
        });
        console.log(response);

        const userData = response.data; 

        if (!Array.isArray(userData)) {
            console.error("Expected an array but received:", userData);
            return;
        }

        const inputCO2 = document.getElementById('calculation');
        inputCO2.innerHTML = '';

        let totalPower = 0;

        userData.forEach(data => {
            const { appliance, company, time, frequency, rating } = data; 
            const powerConsumption = rating * time;

            totalPower += powerConsumption;
        });

        let emmision = (totalPower * 0.82) / 1000;

        inputCO2.textContent = `${emmision.toFixed(2)} tons`;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default Emmisions