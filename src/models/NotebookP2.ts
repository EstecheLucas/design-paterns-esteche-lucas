import { EquipoBase } from "./EquipoBaseP2.js";

export class Notebook extends EquipoBase {
  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}
