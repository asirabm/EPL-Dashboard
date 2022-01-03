import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './HomePages.scss'




function HomePages() {
    
    //console.log("kjnjknkj"+process.env.REACT_APP_API_ROOT_URL);

 const [teams, setteams] = useState([]) 
useEffect(() => {
 let abc=async()=>{

    let response= await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/`
        
        
    );
    let data= await response.json();
    setteams(data);
   
 }
 
 abc();

 

}, [])




    return (
      <div className='HomePage'>
        <div className='header-section'>
           
        </div>
        <div className='team-grid'>
            
            {teams.map(team=><h3  className='team'><Link to={`teams/${team.name}`}>{team.name}</Link></h3>)}
        </div>

        </div>
    )
}

export default HomePages
