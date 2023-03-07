
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

const initialTeam = {
  name: " ",
  surname:" ",
  email: " ",
  role: " ",
};

function App() {
  const [currentTeam, setCurrentTeam] = useState(initialTeam);
  const [team, setTeam] = useState([]);
  const [appearance, setAppearance] = useState(false);
  
  return (
    
    <div className="container">
      
      <h1 className="title">Team Builder</h1>
    <Form 
    setAppearance={setAppearance}
    initialTeam={initialTeam}
    setTeam={setTeam}
    team={team}
    currentTeam={currentTeam}
    setCurrentTeam={setCurrentTeam}/> 
 
    {appearance && (
        <div className="member-container">
          <h1 className="team-title">Team Members:</h1>
          {team.map((member,index) => {
          
            return (<Member key={index} member={member} />);
          })}
    </div>
    )}
    </div>
  );
}

export default App;
