import { Inventario } from "./models/InventarioP1.js";
import { EquipoFactory } from "./models/EquipoFactoryP2.js";
import { Soporte } from "./models/SoporteP3.js";
import { Equipo } from "./models/EquipoP3.js";
import { InventarioViejo } from "./models/InventarioViejo.js";
import { AdaptadorInventario } from "./models/AdaptadorInventario.js";

// punto 1
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log("Inventario Singleton:", inventario.listarEquipos());

// Punto 2
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log("Factory Method:", notebook.detalles());

// Punto 3
const soporte = new Soporte();
const equipoObs = new Equipo("Notebook HP", "Portátil", "disponible");
equipoObs.agregarObservador(soporte);
equipoObs.cambiarEstado("en reparación");

// Punto 4
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log("Adaptador:", adaptador.listarEquipos());
