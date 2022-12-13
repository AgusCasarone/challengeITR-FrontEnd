export interface ReqResResponse {
    [x: string]: any;
    id:       number;
    name:     string;
    lastName: string;
    age:      number;
    team:     string;
    number:   number;
    posicion: Posicion[];
}

export enum Posicion {
  Arquero = "ARQUERO",
  Delantero = "DELANTERO",
  Volante = "VOLANTE",
  Defensor = "DEFENSOR",
  getPosicion = "getPosicion",
  posicion = "posicion",
  posiciones = "posiciones"
}
