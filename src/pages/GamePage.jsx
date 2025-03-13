import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { BoatType } from '../constants/game';
import { Directions } from '../constants/gameState';

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(51, 20px);
  grid-template-rows: repeat(36, 20px);
  gap: 1px;
  background-color: #1a5f7a;
  padding: 1px;
  border-radius: 4px;
`;

const GridCell = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.hasTeam ? '#2e8b57' : '#e6f7ff'};
  border-radius: 2px;
  position: relative;
`;

const ControlPanel = styled.div`
  min-width: 300px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
`;

const TeamControls = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
`;

const WeatherInput = styled.div`
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2e8b57;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #3cb371;
  }
`;

const RoundInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;

const TeamList = styled.div`
  margin: 20px 0;
`;

const TeamCard = styled.div`
  background-color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  strong {
    color: #1a5f7a;
  }
`;

const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    currentRound: 1,
    teams: location.state?.teams || [],
    weather: {
      windSpeed: 10,
      windDirection: 'N'
    },
    goalPosition: { x: 25, y: 0 }
  });

  const [teamDirections, setTeamDirections] = useState({});

  useEffect(() => {
    if (!location.state?.teams) {
      navigate('/setup');
    }
  }, [location.state, navigate]);

  const handleDirectionChange = (teamId, direction) => {
    setTeamDirections(prev => ({
      ...prev,
      [teamId]: direction
    }));
  };

  const handleWeatherChange = (field, value) => {
    setGameState(prev => ({
      ...prev,
      weather: {
        ...prev.weather,
        [field]: value
      }
    }));
  };

  const calculateNewPositions = () => {
    // This will be implemented later with the actual movement calculations
    // based on boat type, weather, and chosen direction
    console.log('Calculating new positions...');
  };

  const handleStartRound2 = () => {
    setGameState(prev => ({
      ...prev,
      currentRound: 2
    }));
  };

  return (
    <PageContainer>
      <GameGrid>
        {Array.from({ length: 36 }, (_, y) =>
          Array.from({ length: 51 }, (_, x) => {
            const hasTeam = gameState.teams.some(
              team => team.position.x === x && team.position.y === y
            );
            return <GridCell key={`${x}-${y}`} hasTeam={hasTeam} />;
          })
        )}
      </GameGrid>

      <ControlPanel>
        <RoundInfo>Round 1: Initial Setup</RoundInfo>

        <WeatherInput>
          <h3>Set Initial Weather Conditions</h3>
          <label>
            Wind Speed (knots):
            <input
              type="number"
              value={gameState.weather.windSpeed}
              onChange={(e) => handleWeatherChange('windSpeed', parseInt(e.target.value))}
              min="0"
              max="50"
            />
          </label>
          <label>
            Wind Direction:
            <Select
              value={gameState.weather.windDirection}
              onChange={(e) => handleWeatherChange('windDirection', e.target.value)}
            >
              {['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'].map(dir => (
                <option key={dir} value={dir}>{dir}</option>
              ))}
            </Select>
          </label>
        </WeatherInput>

        <TeamList>
          <h3>Participating Teams</h3>
          {gameState.teams.map(team => (
            <TeamCard key={team.id}>
              <strong>{team.name}</strong> - {team.boatType}
              <div>Starting Position: (37, 32)</div>
            </TeamCard>
          ))}
        </TeamList>

        <Button onClick={handleStartRound2}>
          Start Round 2
        </Button>
      </ControlPanel>
    </PageContainer>
  );
};

export default GamePage; 