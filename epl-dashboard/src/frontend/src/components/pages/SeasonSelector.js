import {React} from 'react'
import Seasons from './Seasons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function SeasonSelector() {

  //  const [seasons,setseasons] = useState([]);
   let [season,setSeason]=useState([]);
    let {teamName}=useParams();
   // let a=`${process.env.REACT_APP_API_ROOT_URL}/team/seasons/${teamName}`;

useEffect(
    () => {
    let asir=async ()=>{
    let response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/seasons/${teamName}`);

    let seasonData=await response.json();
    //console.log(seasonData+" "+"seasonData");
    setSeason(seasonData);
        
  }
  asir();
    
}, [teamName])





    return (
        <div>
            <h4>Select Season</h4>
         
           {season.map(s=><Seasons s={s}/>)} 
        </div>
    )
}

export default SeasonSelector

