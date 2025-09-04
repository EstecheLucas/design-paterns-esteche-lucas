import type { Estado } from "../interfaces/EquipoData.js";
import type { Observador } from "../interfaces/Observador.js";

export class Equipo {
  private observadores: Observador[] = [];

  constructor(
    private nombre: string,
    private tipo: string,
    private estado: Estado
  ) {}

  public getNombre(): string {
    return this.nombre;
  }

  public agregarObservador(obs: Observador): void {
    this.observadores.push(obs);
  }

  public cambiarEstado(nuevoEstado: Estado): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    for (const obs of this.observadores) {
      obs.notificar(this, this.estado);
    }
  }
}
