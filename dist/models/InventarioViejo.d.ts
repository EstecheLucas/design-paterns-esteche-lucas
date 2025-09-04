import type { Estado } from "../interfaces/EquipoData.js";
export declare class InventarioViejo {
    private items;
    agregarItem(item: {
        nombre: string;
        tipo: string;
        estado: Estado;
    }): void;
    getItems(): {
        nombre: string;
        tipo: string;
        estado: Estado;
    }[];
}
//# sourceMappingURL=InventarioViejo.d.ts.map