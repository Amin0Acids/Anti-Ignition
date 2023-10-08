import './main.css';
function IntroPageUI(props){
  let longitudes: number[];
  let latitudes: number[];
  let riskLevels: number[];

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


}
