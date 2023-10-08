import './main.css';
export let longitudes: number[];
export let latitudes: number[];
export let riskLevels: number[];
export let currentRiskLevel: number;

function IntroPageUI() {
  function fetchCoordinate() {
    fetch('', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        latitudes = data.latitudes;
        longitudes = data.longitudes;
        riskLevels = data.riskLevels;
      })
      .catch(error => console.log(error));
  }
  function postCoordinate(latitude: number, longitude: number) {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: String(latitude),
        longitude: String(longitude),
      }),
    })
      .then(response => response.json())
      .then(data => {})
      .catch(error => console.log(error));
  }

  function fetchRiskLevel() {
    fetch('', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        currentRiskLevel = data.riskLevel;
      })
      .catch(error => console.log(error));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>AntiIgnition</h1>
      </header>
    </div>
  );
}
export default IntroPageUI;
