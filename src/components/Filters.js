import '../App.css';


export function Filters({addCountryFilter: applyCountryFilter, addPositionFilter: applyPositionFilter, removeCountryFilter, removePositionFilter}) {
  
  const handleCountryFilterChange = (event, country) => {
    if (event.target.checked === true){
      applyCountryFilter(country)
    } else {
      removeCountryFilter(country)
    }
  }

  const handlePositionFilterChange = (event, position) => {
    if (event.target.checked === true) {
      applyPositionFilter(position)
    } else {
      removePositionFilter(position)
    }
  }

  return (
    <div className="filters-wrapper">
      
      <div className="country-group">
        <p className="filter-name">Filter by Nationality</p>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "England")}/>
            England
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Brazil")}/>
            Brazil
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Japan")}/>
            Japan
          
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Switzerland")}/>
            Switzerland
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Egypt")}/>
            Egypt
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Ukraine")}/>
            Ukraine
          
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Belgium")}/>
            Belgium

        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "France")}/>
            France
        
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Portugal")}/>
            Portugal
          
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Ghana")}/>
            Ghana
          
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "Scotland")}/>
            Scotland
          
        </label>
        <label className="labels">
          <input type="checkbox" onChange={event => handleCountryFilterChange(event, "United States")}/>
            United States
          
        </label>
      </div>

      
      <div className="position-group">
        <p className="filter-name">Filter by Position</p>
        <label className='labels'>
          <input type="checkbox" onChange={event => handlePositionFilterChange(event, "Goalkeeper")}/>
            Goalkeeper
          
        </label>
        <label className='labels'>
          <input type="checkbox" onChange={event => handlePositionFilterChange(event, "Defender")}/>
            Defender
          
        </label>
        <label className='labels'>
          <input type="checkbox" onChange={event => handlePositionFilterChange(event, "Midfielder")}/>
            Midfielder
          
        </label>
        <label className='labels'>
          <input type="checkbox" onChange={event => handlePositionFilterChange(event, "Forward")}/>
            Forward
          
        </label>
        
      </div>
    </div>
  )


}

export default Filters

