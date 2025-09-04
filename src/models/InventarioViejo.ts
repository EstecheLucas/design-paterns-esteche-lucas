import type { Estado } from "../interfaces/EquipoData.js";

export class InventarioViejo {
  private items: { nombre: string; tipo: string; estado: Estado }[] = [];

  public agregarItem(item: { nombre: string; tipo: string; estado: Estado }) {
    this.items.push(item);
  }

  public getItems() {
    return this.items;
  }
}
