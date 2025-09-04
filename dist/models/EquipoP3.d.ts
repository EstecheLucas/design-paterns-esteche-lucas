import type { Estado } from "../interfaces/EquipoData.js";
import type { Observador } from "../interfaces/Observador.js";
export declare class Equipo {
    private nombre;
    private tipo;
    private estado;
    private observadores;
    constructor(nombre: string, tipo: string, estado: Estado);
    getNombre(): string;
    agregarObservador(obs: Observador): void;
    cambiarEstado(nuevoEstado: Estado): void;
    private notificarObservadores;
}
//# sourceMappingURL=EquipoP3.d.ts.map