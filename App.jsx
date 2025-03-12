import Header from "./components/Header";
import SearchBar from "./components/SearchBar.jsx";
import SelectMenu from "./components/SelectMenu.jsx";
import CountriesList from "./components/CountriesList.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
      <div className="search-filter-container">
        <SearchBar />
        <SelectMenu />
      </div>
        <CountriesList/>
      </main>
    </>
  );
};

export default App;
