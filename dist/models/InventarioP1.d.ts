import type { EquipoData, Estado } from "../interfaces/EquipoData.js";
export declare class Inventario {
    private static instancia;
    private equipos;
    private constructor();
    static obtenerInstancia(): Inventario;
    agregarEquipo(nombre: string, tipo: string, estado: Estado): void;
    listarEquipos(): EquipoData[];
}
//# sourceMappingURL=InventarioP1.d.ts.map