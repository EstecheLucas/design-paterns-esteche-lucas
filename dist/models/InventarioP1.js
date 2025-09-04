export class Inventario {
    static instancia;
    equipos = [];
    constructor() { }
    static obtenerInstancia() {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }
    agregarEquipo(nombre, tipo, estado) {
        this.equipos.push({ nombre, tipo, estado });
    }
    listarEquipos() {
        return this.equipos;
    }
}
//# sourceMappingURL=InventarioP1.js.map