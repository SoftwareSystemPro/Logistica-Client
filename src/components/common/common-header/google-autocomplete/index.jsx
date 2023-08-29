// import React from "react";
// import Geosuggest from "react-geosuggest";

// const AddressAutocomplete = () => {
//   const handleSelect = (suggest) => {
//     if (suggest) {
//       console.log("Selected address:", suggest.label);
//       console.log("Latitude:", suggest.location.lat);
//       console.log("Longitude:", suggest.location.lng);
//     }
//   };

//   return (
//     <div>
//       <Geosuggest onSuggestSelect={handleSelect} types={["address"]} />
//     </div>
//   );
// };

// export default AddressAutocomplete;

import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const AddressAutocomplete = () => {
  const [address, setAddress] = useState("");

  const handleSelect = (selectedAddress) => {
    setAddress(selectedAddress);
    console.log("Selected address:", selectedAddress);
  };

  const handleChange = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Enter address" })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const { id, active, description } = suggestion;
                return (
                  <div
                    key={id}
                    {...getSuggestionItemProps(suggestion, {
                      className: active ? "active" : "",
                    })}
                  >
                    {description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AddressAutocomplete;
