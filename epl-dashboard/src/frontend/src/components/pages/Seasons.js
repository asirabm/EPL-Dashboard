import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'




function Seasons({s}) {
   // let a=`/teams/${teamName}/matches/${s}`;
  //  console.log(a);
 let {teamName}=useParams();


    return (
        <div>
           <Link to={`/teams/${teamName}/matches/${s}`}>{s}</Link> 
        </div>
    )
}

export default Seasons
