
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

const initialTeam = [{
  name: "",
  surname:"",
  email: "",
  role: "",
}];

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [appearance, setAppearance] = useState(true);
  function updateTeam(formValues) {
    setTeam([...team, formValues])
  }
  return (
    
    <div className="container">
      
      <h1 className="title">Team Builder</h1>
    <Form 
    setAppearance={setAppearance}
    formDegerleriniAl={updateTeam}
    /> 
 
    {appearance && (
        <div className="member-container">
          <h1 className="team-title">Team Members:</h1>
          {team.map((member) => {
            return <p> name:{member.name} 
            surname: {member.surname} 
            email: {member.email} 
            role: {member.role} </p>
              
              
              
           
          })}
    </div>
    )}
    </div>
  );
}

export default App;
