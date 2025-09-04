import type { Estado } from "../interfaces/EquipoData.js";
import { InventarioViejo } from "./InventarioViejo.js";

export class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  public agregarEquipo(nombre: string, tipo: string, estado: Estado) {
    this.inventarioViejo.agregarItem({ nombre, tipo, estado });
  }

  public listarEquipos() {
    return this.inventarioViejo.getItems();
  }
}