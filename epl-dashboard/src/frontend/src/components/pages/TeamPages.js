import{ React,useEffect,useState} from 'react'
import MatchSmallCard from './MatchSmallCard'
//import MatchDetails from './MatchDetails';
import { useParams } from 'react-router-dom';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';


function TeamPages() {
    const {teamName}=useParams();
    const [team,setTeam]=useState({matches:[]});
    const [season,setSeason]=useState([]);
    let totalMatches=team.totalMatches;
    let totalWin=team.totalWin;
    let totalDraw=team.totalDraws;
    let totalLost=totalMatches-(totalDraw+totalWin);
   
     useEffect(
        () => {

       const getMatches=async()=>{
         let response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
         let data=await response.json();
         

         let response1=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/seasons/${teamName}`);
         let data2=await response1.json();
        
         setTeam(data)
         setSeason(data2)
        };


        getMatches(); 
        
      }, [teamName]);
        return (
        <div className="TeamPages">
            
        <div className='team-name'>
            <h1 className='t-name'>{team.name}</h1>
            <h4>Latest Matches ({season[season.length-1]})</h4>
        </div>
        <div className='win-losses'>
         Win/losses
         <PieChart
  data={[
    { title: 'win', value: totalWin, color: 'darkgreen'},
    { title: 'Lost', value: totalLost, color: 'darkred' },
    { title: 'Draw', value: totalDraw, color: 'darkgray' },
  ]}
/>
        </div>
       
   

         

      
        {team.matches.map(match=><MatchSmallCard key={match.id} match={match}/>)}
        <div className='more-link'>


            <Link to={`${teamName}/matches/${season[season.length-1]}`}>more</Link>
        </div>
       
        </div>
    )

  


}

export default TeamPages
