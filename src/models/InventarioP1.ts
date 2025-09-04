import type { EquipoData, Estado } from "../interfaces/EquipoData.js";

export class Inventario {
  private static instancia: Inventario;
  private equipos: EquipoData[] = [];

  private constructor() {}

  public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: Estado): void {
    this.equipos.push({ nombre, tipo, estado });
  }

  public listarEquipos(): EquipoData[] {
    return this.equipos;
  }
}
