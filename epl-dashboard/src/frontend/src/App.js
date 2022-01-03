
import './App.css';
import TeamPages from './components/pages/TeamPages';
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
import MatchPage from './components/pages/MatchPage';
import HomePages from './components/pages/HomePages';
require('dotenv').config()


function App() {
  return (
    <div className="App">
     <div className='header-section'>
   
     
     </div>


         <Router>
         
         <Link to="/"><h2>English Premier League Dashboard</h2></Link>

           <Switch>

          
           <Route path="/teams/:teamName/matches/:season" >
            <MatchPage></MatchPage> 
            </Route>


            <Route path="/teams/:teamName">
            <TeamPages></TeamPages> 
            </Route>


            <Route path="/">
            <HomePages></HomePages> 
            </Route>

            
            </Switch>
         </Router>
    </div>
  );
}

export default App;
