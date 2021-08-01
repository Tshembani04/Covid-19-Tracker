import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

function CountryPicker({handleCountryChange}) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl} >
        <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="global">Global</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)} 
        </NativeSelect>
    </FormControl>
    
      // <h2 className={styles.font}>Global Stats</h2>
   
  );
}

export default CountryPicker;