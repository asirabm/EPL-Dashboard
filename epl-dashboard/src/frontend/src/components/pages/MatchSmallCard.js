import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function MatchSmallCard({match}) {
   const HomeLinkRount=`/teams/${match.homeTeam}`;
   const AwayLinkRoute=`/teams/${match.awayTeam}`;
   let clr="";
   const{teamName}=useParams();

   if(teamName===match.homeTeam){
    
     if(match.fthg>match.ftag){
         clr="green";
     }
     else if(match.ftag===match.fthg){
        clr="yellow";
     }
     else{
       
        clr="red";
       
     }
 }

 else if(teamName===match.awayTeam){
   
    if(match.fthg>match.ftag){
        clr="red";
    }
    else if(match.ftag===match.fthg){
       clr="yellow";
    }
    else {
       clr="green";
    }
}








    return (
        <div className={clr}>
            <h5><Link to={HomeLinkRount}>{match.homeTeam}</Link>({match.fthg}) 
            <span className='vs'>vs</span>
            <Link to={AwayLinkRoute}>{match.awayTeam}</Link>({match.ftag})</h5>
            <h6>{match.dateTime}</h6>
        </div>
    )
}

export default MatchSmallCard
