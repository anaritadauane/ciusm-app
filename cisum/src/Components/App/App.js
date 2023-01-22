import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { TiThMenu} from "react-icons/ti";

function App() {
  return (
    <div>
      <div class="screen">
        <h1>cisum</h1>
        <p class="greetings" >Morning @chinesechin!</p>
        <button class="menuBtn"><TiThMenu/></button>
      </div>
      <div class="App">
        {/* greetings */}
        {/* <h1 class="greetings">Hello @username!</h1> */}
        <SearchBar/>
        <div class="App-results">
        {/* Results */}
        </div>
      </div>
    </div>
  );
}

export default App;
