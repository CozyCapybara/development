
import './App.css';
import { useState } from "react";
import players from "./assets/players.json";
import {PlayerCard} from "./components/player"
import {filter} from 'dom-helpers';
import {updateFilters} from "./components/filterHandler"


players.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});




function App() {

  // all states
  //const [filteredData, setFilteredData] = useState(players);
  const [favPlayers, setFavPlayers] = useState({});
  const [mins, setMins] = useState(0);
  const [positionFilters, setPositionFilters] = useState([]);
  const [countryFilters, setCountryFilters] = useState([]);
  const [sortType, setSortType] = useState("Increasing Minutes");

  const sortTypes = ["Increasing Minutes", "Decreasing Minutes", "Increasing Number", "Decreasing Number"];


  const positionFilterCategories = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
  const countryFilterCategories = ["England", "Brazil", "Japan", "Switzerland", "Egypt", "Belgium", "France", "Ukraine", "United States", "Portugal", "Ghana", "Scotland"];

  
  // filter handler for checkboxes, passes on to filterHandler which 
  // updates the data and cards
  function handleFilterInput(type, filterCategory, filterOn) {
    if (type === "None") {
      // reset or something
      setFilteredData(players);
      setSortType("Increasing Number");
      setFilterTypes([]);
    } else if (type === "position") {
      filterPosition(filterCategory,  filterOn);
    } else if (type === "country") {
      updateFilters(filterCategory, filterOn);
    } else if (type === "favorites") {
      updateFilters(filterCategory, filterOn);
    }
  }

  function removeFilter(currentFilterTypes) {
    if (currentFilterTypes !== []){
      for (let i = 0; i < currentFilterTypes.length; i++){
        const type = currentFilterTypes[i];
        if (positionFilterCategories.indexOf(type) !== -1){
          filterPosition(type, false);
        }
      }
    }
  }


  function filterPosition(position, filterOn){
    if (filterOn) {

      // set the data we are working with based on the filters already applied
      if (filterTypes === []) {
        let temp = [...players];
        setFilterTypes([position]);
        // filter current data set 
        setFilteredData(temp.filter((playercard) => {
          return playercard.position.includes(position);
        }))
      } else {
        let temp = [...filteredData];
        setFilterTypes([...filterTypes, position]);
        // filter current data set 
        setFilteredData(temp.filter((playercard) => {
          return playercard.position.includes(position);
        }))
      }

    // filter is being removed
    } else { 
      setFilterTypes(filterTypes.filter(type => type !== position));
      setFilteredData()
    }
  }


  function filterCountry(country, filterOn){

  }

  function filterFavorites(favorite, filterOn){

  }

  function updateFilters(toUpdate, filterOn) {
    // if filter got toggled so that now it is applied 
    
  
  }

  // handles sorting input for the two sort options, passes to 
  // sortHandler which updates the data and cards 
  function handleSortInput(type) {
    setSortType(type)
  }

  return (
    <div className="App">

      <div className="header">
        <div className="arsenal-logo">

        </div>
        <div className="title">
          Arsenal Football Club Roster
        </div>
        <div className="desc">
          We are winning the league 
        </div>
      </div>


      <div id="root">
        <div className="main-container">
          

          <div className="main-grid">
            <div className="sidebar">

            </div>

            <div className="item-grid">

            </div>
          </div>

        </div>
      </div>


    </div>

    
  );
}

export default App;
