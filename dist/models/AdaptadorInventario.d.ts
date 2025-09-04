import type { Estado } from "../interfaces/EquipoData.js";
import { InventarioViejo } from "./InventarioViejo.js";
export declare class AdaptadorInventario {
    private inventarioViejo;
    constructor(inventarioViejo: InventarioViejo);
    agregarEquipo(nombre: string, tipo: string, estado: Estado): void;
    listarEquipos(): {
        nombre: string;
        tipo: string;
        estado: Estado;
    }[];
}
//# sourceMappingURL=AdaptadorInventario.d.ts.map