import { EquipoBase } from "./EquipoBaseP2.js";

export class Servidor extends EquipoBase {
  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}
