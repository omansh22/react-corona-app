import React,{useEffect,useState} from 'react';
import {Countrydata} from '../../api/index';
import {NativeSelect, FormControl} from '@material-ui/core'
import './country.css'
const Countrypic = ({handlecountry}) =>{
    const [cdata,setcdata]=useState([]);
     
        

    useEffect(() => {
        const fetchapi = async () => {
            setcdata(await Countrydata());
        }
        fetchapi();
        //console.log(Fetchdata);
        
       
        


    },[setcdata]);
    
    //console.log(cdata);
    return(  <div className='pick'>
        <FormControl >
            <NativeSelect defaultValue='' onChange={(e)=>{handlecountry(e.target.value)}}>
                <option value='global'>Global</option>
    {cdata.map((cou,i)=> <option key={i} value={cou} >{cou}</option>)};
            </NativeSelect>
        </FormControl>
        </div>  );
}

export default Countrypic;