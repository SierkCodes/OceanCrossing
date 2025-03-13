export enum BoatType {
  IMOCA = 'IMOCA',
  V65 = 'V65',
  CLIPPER = 'CLIPPER'
}

export interface Team {
  id: string;
  name: string;
  boatType: BoatType;
  position: {
    x: number;
    y: number;
  };
} 