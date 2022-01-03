import {React,useEffect,useState} from 'react'
//import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import MatchDetails from './MatchDetails';
//import MatchSmallCard from './MatchSmallCard';
import { useParams } from 'react-router-dom';
import './MatchPage.scss';
import SeasonSelector from './SeasonSelector';

function MatchPage() {

const [matchs, setMatch] = useState([])
//const teamName="Arsenal";
//const season="2000-01";
const {teamName,season}=useParams();


    useEffect(() => {
   const getMatches=async()=>{
    const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?season=${season}`);    
    let data=await response.json();
    setMatch(data);
   
    }
    getMatches();
 }, [season,teamName])


 let t;
 let booleanCheck=false;

 /*function capitalizeFirstLetter(string) {
    t=string.charAt(0).toUpperCase() + string.slice(1);
    return t;
  }
  */


 if(matchs.length===0){
   booleanCheck=true;
}






    return (
        <div className='MatchPage'>
           <div className='season-selector'>
               <SeasonSelector/> </div>
            
    <div>
        {booleanCheck?(<h1>{teamName} did not played in {season} season</h1>):(
        
        
        <div>
          <div>
            <h1>Match Page</h1>
            <h3>{t}</h3>
            <h4>{season}</h4>
            {matchs.map(match=><MatchDetails teamName={teamName} match={match}/>)}
            </div>
            
        
        
        
        
        </div>)}



    </div>

           

          
        </div>
    )
}

export default MatchPage
