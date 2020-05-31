import axios from 'axios';
const url = "https://covid19.mathdro.id/api";

export const Fetchdata = async (country) => {
    let changeurl = url;
    if(country){
        changeurl= `${url}/countries/${country}`  
      }
    try {
    const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeurl);
    return {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
    }
    catch(error){

    console.log("err.")
    }   
}

export const Fetchdailydata = async() =>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        const dailynedd = data.map(d=>({
            
                confirmed: d.confirmed.total
                ,deaths: d.deaths.total
                ,date: d.reportDate
            })
        );

        return dailynedd;

    }
    catch(error){

    }
}

export const Countrydata= async()=>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        
        const updateddata= countries.map((c)=>c.name)
        return updateddata;

    }
    catch(error){

    }
}






