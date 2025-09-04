import type { Estado } from "./EquipoData.js";

export interface Observador {
  notificar(equipo: any, nuevoEstado: Estado): void;
}
