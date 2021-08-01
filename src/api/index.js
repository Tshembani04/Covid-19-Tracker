//Is used to make api requests
import axios from "axios";

// we then need the url of the api
const url = "https://covid19.mathdro.id/api";

//create a function called fetchData that will fetch data using the modern way called async-await
export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        //Gather data
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        // response.data this is the desired data that we need fron the api
        
        return { confirmed, recovered, deaths, lastUpdate, };
    } catch(error){
        console.log(error);

    }
}

export const fetchDailyData = async()=>{
    try{
        const { data } = await axios.get (` ${url}/daily`);

        const modifiedData = data.map((dailyData) =>({
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,
         date: dailyData.reportDate,
     }))   

     return modifiedData;
    }catch (error) {

    }
}

export const fetchCountries = async() => {
    try{
        const {data: {countries} } = await axios.get(`  ${url}/countries`)
        return countries.map((country) => country.name)
    }catch(error){
        console.log(error);
    }
}