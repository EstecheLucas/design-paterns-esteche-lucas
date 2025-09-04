export abstract class EquipoBase {
  constructor(
    protected nombre: string,
    protected ram: string,
    protected procesador: string
  ) {}

  abstract detalles(): string;
}
