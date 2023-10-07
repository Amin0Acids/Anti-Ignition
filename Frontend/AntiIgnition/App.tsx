import bello from "./app/reactSample";
import frontPage from "./app/frontPage";

let testing = false;

let App = () => {
  if(testing) return bello();
  else return frontPage();

}

export default App;
