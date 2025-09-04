import type { Observador } from "../interfaces/Observador.js";
import type { Estado } from "../interfaces/EquipoData.js";
import type { Equipo } from "./EquipoP3.js";

export class Soporte implements Observador {
  notificar(equipo: Equipo, nuevoEstado: Estado): void {
    console.log(
      `Soporte notificado: ${equipo.getNombre()} ha cambiado su estado a ${nuevoEstado}.`
    );
  }
}
