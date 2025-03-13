import { Team, BoatType } from './game';

export type Direction = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

export interface Weather {
  windSpeed: number;  // knots
  windDirection: Direction;
}

export interface GameState {
  currentRound: number;
  teams: Team[];
  weather: Weather;
  goalPosition: { x: number; y: number };
} 