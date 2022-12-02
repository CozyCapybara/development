
import './App.css';
import { useState } from "react";
import players from "./assets/players.json";
import { PlayerCard } from "./components/player"
import { filter } from 'dom-helpers';
import { updateFilters } from "./components/filterHandler"
import { CheckBoxes } from './components/CheckBoxes';



players.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});




function App() {

  // all states
  //const [filteredData, setFilteredData] = useState(players);
  const [favPlayers, setFavPlayers] = useState([]);
  const [mins, setMins] = useState(0);
  const [positionFilters, setPositionFilters] = useState([]);
  const [countryFilters, setCountryFilters] = useState([]);
  //const [favoriteFilter, setFavoriteFilter] = useState(false);
  const [sortNum, setSortNum] = useState(false);
  const [sortMin, setSortMin] = useState(false);

  // const sortTypes = ["None", "Minutes", "Number"];

  /*
  const updateFavorites = (uid) => {
    let newGroup = favPlayers;
    if (newGroup[uid]) {
      newGroup[uid] +=1;
    } else {
      newGroup[uid] = 1;
    }
    setFavPlayers({...newGroup});
  }

  */
  //const positionFilterCategories = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
  //const countryFilterCategories = ["England", "Brazil", "Japan", "Switzerland", "Egypt", "Belgium", "France", "Ukraine", "United States", "Portugal", "Ghana", "Scotland"];

  // filters for each type of filter

  //position filters
  function addPositionFilter(position) {
    setPositionFilters([...positionFilters, position]);
  }

  const removePositionFilter = position => { 
    setPositionFilters(positionFilters.filter(addPositionFilter => addPositionFilter !== position));
  }

  const filterByPosition = item => {
    if (positionFilters.length === 0) {
      return true;
    }
    return positionFilters.includes(item.position);
  }

  

  //country filters
  function addCountryFilter(country) {
    setCountryFilters([...countryFilters, country]);
  }

  const removeCountryFilter = country => {
    setCountryFilters(countryFilters.filter(addCountryFilter => addCountryFilter !== country));
  }

  const filterByCountry = item => {
    if (countryFilters.length === 0) {
      return true;
    }
    return countryFilters.includes(item.country);
  }


  // sorting functinos 
  const sortNumber = (a,b) => {
    return a.number - b.number;
  }

  const sortMinutes = (a,b) => {
    return b.minutes - a.minutes;
  }


  const changeSortNum = (a,b) => {
    if (sortNum) {
      return sortNumber(a,b);
    } else {
      randomSort(a,b);
    }
  }

  const changeSortMin = (a,b) => {
    if (sortMin) {
      return sortMinutes(a,b);
    } else {
      randomSort(a,b);
    }
  }


  const randomSort = (a,b) => {
    return -1;
  }
 

  


  function addFavorite(item) {
    if (!favPlayers.includes(item.name)){
      setFavPlayers([...favPlayers, item.name])
      setMins(mins+item.minutes);
    }
    
  }

  function removeFavorite(item) { 
    if (favPlayers.includes(item.name)) {
      const tempFavs = favPlayers;
      const index = tempFavs.indexOf(item.name);
      tempFavs.splice(index, 1);
      setFavPlayers(tempFavs);
      setMins(mins-item.minutes);
    }
  }

  function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
      .forEach(el => el.checked = false);
  }


  function resetData() {
    setFavPlayers([]);
    setMins(0);
    setCountryFilters([]);
    setPositionFilters([]);
    uncheckAll();
  }

  //<CheckBoxes addCountryFilter={addCountryFilter} addPositionFilter={addPositionFilter} removeCountryFilter={removeCountryFilter} removePostionFilter={removePositionFilter}/>

  

  const filteredArray = players.filter(item => filterByCountry(item)).filter(item => filterByPosition(item));
  filteredArray.sort((a,b) => changeSortNum(a,b));
  // filteredArray.sort((a,b) => changeSortMin(a,b));

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

      <div id="favorites">

        <p>List of Favorites:</p> 
        {favPlayers.map((name) => {
          return(<p className="favorites-names">{name}</p>)
        })}
        <p>Total Minutes of Favorites: {mins}</p>
        
      </div>



 
      <div className="main-container">
        

        <div className="main-grid">
          <div className="sidebar">
            <CheckBoxes addCountryFilter={addCountryFilter} addPositionFilter={addPositionFilter} removeCountryFilter={removeCountryFilter} removePositionFilter={removePositionFilter}/>
            <button onClick={() => setSortNum(!sortNum)}>Sort by Number</button>
          </div>

          <div className="item-grid">
            {filteredArray.map((item, index) => {
              return (<PlayerCard key={index} item={item} addFavorite={addFavorite} removeFavorite={removeFavorite}/>)
            })}
          </div>
        </div>

      </div>


    </div>

    
  );
}

export default App;
