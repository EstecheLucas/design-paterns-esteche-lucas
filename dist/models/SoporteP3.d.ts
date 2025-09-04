import type { Observador } from "../interfaces/Observador.js";
import type { Estado } from "../interfaces/EquipoData.js";
import type { Equipo } from "./EquipoP3.js";
export declare class Soporte implements Observador {
    notificar(equipo: Equipo, nuevoEstado: Estado): void;
}
//# sourceMappingURL=SoporteP3.d.ts.map