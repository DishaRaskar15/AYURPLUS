import React, { useState } from 'react';

// Dummy data for remedies and purchasing links
const remedies = [
  { name: 'Ashwagandha', description: 'Helps in stress reduction and improves overall vitality.', links: { blinkit: 'https://www.blinkit.com/products/ashwagandha', flipkart: 'https://www.flipkart.com/ashwagandha', amazon: 'https://www.amazon.in/s?k=ashwagandha' } },
  { name: 'Tulsi', description: 'Boosts immunity and supports respiratory health.', links: { blinkit: 'https://www.blinkit.com/products/tulsi', flipkart: 'https://www.flipkart.com/tulsi', amazon: 'https://www.amazon.in/s?k=tulsi' } },
  { name: 'Triphala', description: 'Supports digestion and detoxification.', links: { blinkit: 'https://www.blinkit.com/products/triphala', flipkart: 'https://www.flipkart.com/triphala', amazon: 'https://www.amazon.in/s?k=triphala' } },
  { name: 'Amla', description: 'Rich in Vitamin C, boosts immunity and enhances skin health.', links: { blinkit: 'https://www.blinkit.com/products/amla', flipkart: 'https://www.flipkart.com/amla', amazon: 'https://www.amazon.in/s?k=amla' } },
  { name: 'Brahmi', description: 'Improves memory, concentration, and reduces stress.', links: { blinkit: 'https://www.blinkit.com/products/brahmi', flipkart: 'https://www.flipkart.com/brahmi', amazon: 'https://www.amazon.in/s?k=brahmi' } },
  { name: 'Shatavari', description: 'Supports female reproductive health and boosts immunity.', links: { blinkit: 'https://www.blinkit.com/products/shatavari', flipkart: 'https://www.flipkart.com/shatavari', amazon: 'https://www.amazon.in/s?k=shatavari' } },
  { name: 'Guduchi', description: 'Boosts immunity and protects against infections.', links: { blinkit: 'https://www.blinkit.com/products/guduchi', flipkart: 'https://www.flipkart.com/guduchi', amazon: 'https://www.amazon.in/s?k=guduchi' } },
  { name: 'Ginger', description: 'Aids digestion, reduces inflammation, and enhances immunity.', links: { blinkit: 'https://www.blinkit.com/products/ginger', flipkart: 'https://www.flipkart.com/ginger', amazon: 'https://www.amazon.in/s?k=ginger' } },
  { name: 'Neem', description: 'Has antibacterial properties and supports skin health.', links: { blinkit: 'https://www.blinkit.com/products/neem', flipkart: 'https://www.flipkart.com/neem', amazon: 'https://www.amazon.in/s?k=neem' } },
  { name: 'Saffron', description: 'Enhances mood and supports skin health.', links: { blinkit: 'https://www.blinkit.com/products/saffron', flipkart: 'https://www.flipkart.com/saffron', amazon: 'https://www.amazon.in/s?k=saffron' } }
];

function Medicine() {
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [userSymptoms, setUserSymptoms] = useState('');

  const handleConsultationSubmit = () => {
    // Simple logic to select remedy based on symptoms
    if (userSymptoms.toLowerCase().includes('stress')) {
      setSelectedRemedy(remedies[0]);
    } else if (userSymptoms.toLowerCase().includes('immunity')) {
      setSelectedRemedy(remedies[1]);
    } else {
      setSelectedRemedy(null);
    }
  };

  return (
    <div className="medicine-container">
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f9f4;
            color: #333;
          }

          .medicine-container {
            max-width: 1000px;
            margin: 30px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          h1 {
            color: #2f8f53;
            text-align: center;
            margin-bottom: 30px;
          }

          .consultation-input {
            margin-bottom: 30px;
            text-align: center;
          }

          .consultation-input label {
            font-size: 18px;
            margin-right: 10px;
          }

          .consultation-input input {
            padding: 10px;
            margin: 10px;
            border: 2px solid #2f8f53;
            border-radius: 5px;
          }

          .consultation-input button {
            background-color: #2f8f53;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .consultation-input button:hover {
            background-color: #248f3a;
          }

          .remedy-details {
            background-color: #e7f7e4;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
          }

          .remedy-details h2 {
            color: #2f8f53;
          }

          .remedy-details ul {
            list-style: none;
            padding: 0;
          }

          .remedy-details a {
            text-decoration: none;
            color: #2f8f53;
            font-weight: bold;
          }

          .remedy-details a:hover {
            text-decoration: underline;
          }

          .remedy-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }

          .remedy-item {
            background-color: #f0f8f4;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .remedy-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          }

          .remedy-item h4 {
            color: #2f8f53;
          }

          .remedy-item p {
            font-size: 16px;
            color: #666;
          }

          .remedy-item ul {
            list-style: none;
            padding: 0;
          }

          .remedy-item ul li a {
            color: #2f8f53;
            font-weight: bold;
            text-decoration: none;
          }

          .remedy-item ul li a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <h1>Ayurvedic Medicine Consultation</h1>
      <div className="consultation-input">
        <label>
          Enter your symptoms or condition:
          <input
            type="text"
            value={userSymptoms}
            onChange={(e) => setUserSymptoms(e.target.value)}
            placeholder="e.g., stress, immunity, etc."
          />
        </label>
        <button onClick={handleConsultationSubmit}>Get Remedy Suggestions</button>
      </div>

      {selectedRemedy ? (
        <div className="remedy-details">
          <h2>Suggested Remedy: {selectedRemedy.name}</h2>
          <p>{selectedRemedy.description}</p>
          <h3>Buy {selectedRemedy.name} from trusted stores:</h3>
          <ul>
            <li><a href={selectedRemedy.links.blinkit} target="_blank" rel="noopener noreferrer">Buy on Blinkit</a></li>
            <li><a href={selectedRemedy.links.flipkart} target="_blank" rel="noopener noreferrer">Buy on Flipkart</a></li>
            <li><a href={selectedRemedy.links.amazon} target="_blank" rel="noopener noreferrer">Buy on Amazon</a></li>
          </ul>
        </div>
      ) : (
        <p>No suggestions based on your symptoms yet. Try entering symptoms like 'stress' or 'immunity'.</p>
      )}

      <div className="remedy-list">
        <h3>Explore More Ayurvedic Remedies:<br/>
        </h3>
                {remedies.map((remedy, index) => (
          <div key={index} className="remedy-item">
            <h4>{remedy.name}</h4>
            <p>{remedy.description}</p>
            <ul>
              <li><a href={remedy.links.blinkit} target="_blank" rel="noopener noreferrer">Buy on Blinkit</a></li>
              <li><a href={remedy.links.flipkart} target="_blank" rel="noopener noreferrer">Buy on Flipkart</a></li>
              <li><a href={remedy.links.amazon} target="_blank" rel="noopener noreferrer">Buy on Amazon</a></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicine;
