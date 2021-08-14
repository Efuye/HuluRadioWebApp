import MainPage from "./Pages/MainPage";
import "./App.css";
import "./Styles/AllStyles.css";
import Store from "./Store/Store";


function App() {
  return (
    <div className="App">
      <Store>
        <MainPage />
      </Store>
    </div>
  );
}

export default App;
