import { EquipoBase } from "./EquipoBaseP2.js";
import { Notebook } from "./NotebookP2.js";
import { Desktop } from "./DesktopPunto2.js";
import { Servidor } from "./ServidorP2.js";
export class EquipoFactory {
    crearEquipo(tipo, nombre, ram, procesador) {
        switch (tipo) {
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo no soportado");
        }
    }
}
//# sourceMappingURL=EquipoFactoryP2.js.map