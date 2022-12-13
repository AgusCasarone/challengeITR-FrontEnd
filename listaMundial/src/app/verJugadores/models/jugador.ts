import { Position } from "@angular/compiler";
import { Posicion } from "./reqResResponse";

export class Jugador {


    constructor(public id: number,
        public name: string,
        public lastName: string,
        public age: number,
        public team: string,
        public number: number,
        public posicion: Position[]) { }

}
