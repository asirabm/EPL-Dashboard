import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './MatchDetails.scss'

function MatchDetails({match}) {
  
    //console.log(m.id);
    
    const HomeLinkRount=`/teams/${match.homeTeam}`;
    const AwayLinkRoute=`/teams/${match.awayTeam}`;
    let clr="";

    const{teamName}=useParams()

   if(!match) return null;


 let t;

 function capitalizeFirstLetter(string) {
    t=string.charAt(0).toUpperCase() + string.slice(1);
    return t;
  }
  
  console.log(capitalizeFirstLetter(teamName)); // Foo

 if(t===match.homeTeam){
    console.log("Hello from home");
     if(match.fthg>match.ftag){
         clr="green";
     }
     else if(match.ftag===match.fthg){
        clr="yellow";
     }
     else{
        console.log("knvdknvk");
        clr="red";
     
     }
 }

 else if(t===match.awayTeam){
    
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


//clr="red";

    return (
    <div className='match-detail'>
            <div className={clr}>
            
            
            <h4><Link to={HomeLinkRount}>{match.homeTeam}</Link>({match.fthg}) vs <Link to={AwayLinkRoute}>{match.awayTeam}</Link>({match.ftag})</h4>
           
            <h6 className='match-date'>{match.dateTime}</h6>
        </div>
    </div>
    )
}

export default MatchDetails
