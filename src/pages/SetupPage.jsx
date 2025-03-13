import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #1a5f7a;
  margin-bottom: 30px;
`;

const TeamForm = styled.form`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2e8b57;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3cb371;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const TeamList = styled.div`
  margin-top: 30px;
`;

const TeamCard = styled.div`
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const StartRoundButton = styled(Button)`
  margin-top: 30px;
  background-color: #1a5f7a;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const SetupPage = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [selectedBoat, setSelectedBoat] = useState('IMOCA');

  const handleAddTeam = (e) => {
    e.preventDefault();
    
    if (!teamName.trim()) return;

    const newTeam = {
      id: Date.now().toString(),
      name: teamName,
      boatType: selectedBoat,
      position: { x: 37, y: 32 } // Starting position for all teams
    };

    setTeams([...teams, newTeam]);
    setTeamName('');
    setSelectedBoat('IMOCA');
  };

  const handleDeleteTeam = (teamId) => {
    setTeams(teams.filter(team => team.id !== teamId));
  };

  const handleStartRound = () => {
    navigate('/game', { state: { teams } });
  };

  return (
    <PageContainer>
      <Title>Round 1: Team Setup</Title>
      
      <TeamForm onSubmit={handleAddTeam}>
        <Input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <Select
          value={selectedBoat}
          onChange={(e) => setSelectedBoat(e.target.value)}
        >
          <option value="IMOCA">IMOCA</option>
          <option value="V65">V65</option>
          <option value="CLIPPER">CLIPPER</option>
        </Select>
        <Button type="submit" disabled={!teamName.trim()}>
          Add Team
        </Button>
      </TeamForm>

      <TeamList>
        {teams.map(team => (
          <TeamCard key={team.id}>
            <div>
              <strong>{team.name}</strong> - {team.boatType}
            </div>
            <DeleteButton onClick={() => handleDeleteTeam(team.id)}>
              Delete
            </DeleteButton>
          </TeamCard>
        ))}
      </TeamList>

      {teams.length > 0 && (
        <StartRoundButton onClick={handleStartRound}>
          Start Round 1
        </StartRoundButton>
      )}
    </PageContainer>
  );
};

export default SetupPage; 