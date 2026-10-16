function toggleMenu(){document.getElementById("menu").classList.toggle("open")}
const info={
motor:["Motor","Uno de los grandes sistemas de la motocicleta. En los capítulos siguientes se profundiza en sus piezas y en el ciclo de funcionamiento."],
admision:["Admisión y combustible","Comprende los elementos que suministran y preparan el aire y el combustible que necesita el motor."],
refrigeracion:["Refrigeración","Mantiene el motor dentro de su rango térmico mediante soluciones como refrigeración por aire, aire/aceite o líquida."],
lubricacion:["Lubricación","El aceite reduce fricción y desgaste, ayuda a transportar calor, mantiene superficies limpias y protege contra corrosión."],
encendido:["Encendido","En los motores de gasolina, el sistema de encendido participa en la generación de la chispa que inicia la combustión."],
transmision:["Transmisión","El recorrido de la fuerza puede entenderse como: motor → embrague → caja → piñón → cadena → corona → rueda."],
chasis:["Chasis","Forma parte de la estructura que integra y soporta los diferentes componentes de la motocicleta."],
direccion:["Dirección","Permite orientar la motocicleta y forma parte del conjunto que conecta el control del piloto con la rueda delantera."],
suspension:["Suspensión","Resortes y amortiguación gestionan el movimiento de la suspensión. El SAG ayuda a distribuir el recorrido disponible."],
ruedas:["Ruedas y neumáticos","Son el punto de contacto con la superficie. Su presión y estado deben seguir las especificaciones del fabricante."],
frenos:["Frenos","El sistema puede utilizar disco o tambor. En motos modernas también puede incorporar CBS, ABS y sistemas avanzados."],
electrico:["Sistema eléctrico/electrónico","Incluye batería, arranque, generación, regulación, fusibles, ECU y otras arquitecturas electrónicas según el modelo."],
escape:["Escape","Conduce los gases de escape. El sistema puede incluir colectores, catalizador, silenciador y elementos de unión."],
instrumentacion:["Instrumentación y seguridad","Incluye tablero, testigos y elementos destinados a informar al piloto y apoyar la seguridad."]
};
function showInfo(k){const p=document.getElementById("info");p.hidden=false;p.innerHTML=`<h3>${info[k][0]}</h3><p>${info[k][1]}</p>`;p.scrollIntoView({behavior:"smooth",block:"center"})}
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>document.getElementById("menu").classList.remove("open")));