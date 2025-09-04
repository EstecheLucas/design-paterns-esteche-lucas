import { InventarioViejo } from "./InventarioViejo.js";
export class AdaptadorInventario {
    inventarioViejo;
    constructor(inventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }
    agregarEquipo(nombre, tipo, estado) {
        this.inventarioViejo.agregarItem({ nombre, tipo, estado });
    }
    listarEquipos() {
        return this.inventarioViejo.getItems();
    }
}
//# sourceMappingURL=AdaptadorInventario.js.map