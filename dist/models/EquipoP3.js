export class Equipo {
    nombre;
    tipo;
    estado;
    observadores = [];
    constructor(nombre, tipo, estado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
    getNombre() {
        return this.nombre;
    }
    agregarObservador(obs) {
        this.observadores.push(obs);
    }
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    notificarObservadores() {
        for (const obs of this.observadores) {
            obs.notificar(this, this.estado);
        }
    }
}
//# sourceMappingURL=EquipoP3.js.map