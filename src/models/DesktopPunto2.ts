import { EquipoBase } from "./EquipoBaseP2.js";

export class Desktop extends EquipoBase {
  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}
