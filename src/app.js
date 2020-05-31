import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Cards from './Component/cards/card';
import Charts from './Component/charts/charts';
import Countrypic from './Component/country picker/country';
import {Fetchdata} from './api/index'
import {FaGithubSquare} from 'react-icons/fa';
import './app.css';


export default class App extends Component {
    state = {
        data : {},
        country: '',
    }


    async componentDidMount(){
     const fetcheddata = await Fetchdata();
     this.setState({
         data: fetcheddata
     }) 
            
    }
    handlecountry= async(coun)=>{
        const fetcheddata = await Fetchdata(coun);
        //console.log(fetcheddata);
        
        this.setState({data: fetcheddata})
        this.setState({country: coun})

}
    
    


    render(){
       const {data, country}= this.state;

        return(
            <div >
                
                <Cards data={data}/>
                <Countrypic handlecountry={this.handlecountry}/>
                  
                <Charts data={data} country={country} />
                <div className='credits'>
                <div className='a'>C-19 Global App</div>
                <div className='x'><FaGithubSquare size='35'/></div>
                <div><a className='b' href='https://github.com/omansh22/react-corona-app'>@Omansh22</a></div>
                <div className='c'>Data is accessed by John Hopkins</div>
                </div>
                
            </div>
        );
    }
}