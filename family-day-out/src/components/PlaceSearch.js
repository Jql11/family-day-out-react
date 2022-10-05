import Button from './Button';
import DateSelect from './DateSelect';
import React from 'react';
import PlacesAutocomplete, {
    //geocodeByAddress, 
    //getLatLng,
  } from "react-places-autocomplete";
  

const PlaceSearch = () => {

const [address, setAddress] = React.useState("");
  const handleSelect = async value => {
    // const results = await geocodeByAddress(value);
    // console.log(results);
  }
  
  //click on suggestion to show address
  const handleClick = (suggestion) => {
    const input = document.getElementById('id_address_autocomplete');
    input.blur();
    setAddress(suggestion)
  }

    return (
        <div>
          <PlacesAutocomplete 
          value={address} 
          onChange={setAddress} 
          onSelect={handleSelect}>
            
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input id="id_address_autocomplete" {...getInputProps({ placeholder: "Search Places" })} />
              <Button />
              <DateSelect />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) =>{
                 const style = suggestion.active
                 ? { backgroundColor: '#41b6e6', cursor: 'pointer' }
                 : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (<div key={index}  {...getSuggestionItemProps(suggestion, { style })} onClick={() => handleClick(suggestion.description)}>
                  {suggestion.description}</div>
                );
                
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      
    </div>
    );
  }
  export default PlaceSearch