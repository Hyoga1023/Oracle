

const categories = { 
    amor: [ 
        "Ten cuidado con lo que deseas, a veces se obtiene lo que se quiere.",  
        "El amor es un laberinto donde cada giro trae sorpresas.",
        "El corazón danza al compás de un destino incierto.", 
        "Una unión florece bajo la luna menguante.", 
        "El lazo de los sentimientos puede tensarse o soltarse.", 
        "Un susurro nocturno trae promesas de pasión o desvelo.",
        "Dos almas entrelazadas crean patrones que ni los astros pueden descifrar.",
        "La llama del afecto se aviva con el soplo de la sinceridad.",
        "El jardín del amor requiere paciencia antes de revelar sus más bellas flores.",
        "Como las mareas, los sentimientos fluyen en ciclos impredecibles."
    ], 
    salud: [ 
        "El cuerpo es templo y guerrero en su propia batalla.", 
        "La vitalidad fluye como el río; calma o tempestad acechan.", 
        "El espíritu vigoroso supera dolencias pasajeras.", 
        "Una brisa renovadora puede traer fortaleza o debilidad.",
        "El equilibrio del ser es frágil como cristal, pero resistente como el diamante.",
        "La sanación se esconde en los rincones menos explorados del alma.",
        "Las células guardan memoria de bienestar que buscan recuperar constantemente.",
        "El árbol de la vida se nutre de raíces invisibles pero poderosas."
    ], 
    dinero: [ 
        "Ten cuidado con lo que deseas, a veces se obtiene lo que se quiere.",
        "El oro brilla, pero su fulgor puede cegar.", 
        "La fortuna llega como la marea: impredecible y cambiante.", 
        "El esfuerzo sembrado hoy dará frutos inciertos mañana.", 
        "Riquezas o austeridad, ambas son caras de la misma moneda.",
        "Las monedas danzan entre los dedos de quien sabe contar sus pasos.",
        "La prosperidad material es el reflejo de un río más profundo y caudaloso.",
        "La abundancia busca a quien no la persigue con desesperación.",
        "Las semillas de la riqueza florecen en terrenos inesperados."
    ], 
    clima:[
        "Las nubes se disipan, pero el sol aún no se asoma.",
        "El viento susurra secretos de cambios inminentes.",
        "La lluvia puede ser bendición o tormenta, según el corazón que la reciba.",
        "A veces quieres ver el sol, pero la lluvia es necesaria.",
        "Puede ser que el clima sea el que quieres, ten cuidado con lo que deseas."
    ],
    trabajo: [
        "Quien siembra sin rendirse cosecha frutos jugosos.",
        "El camino profesional se ilumina con la antorcha de la perseverancia.",
        "Nuevos horizontes laborales se asoman tras la niebla de la incertidumbre.",
        "Las semillas del esfuerzo germinarán en terrenos inesperados.",
        "La rueda del oficio gira con ritmos que solo el tiempo desvela.",
        "El reconocimiento busca a quien no lo persigue con afán desmedido.",
        "Tus talentos ocultos serán descubiertos por ojos que sabrán valorarlos.",
        "La disciplina silenciosa construye torres que ninguna tormenta derrumba.",
        "El trabajo es un lienzo donde pintas con colores que solo tú puedes mezclar."
    ],
    futuro: [ 
        "Ten cuidado con lo que deseas, a veces se obtiene lo que se quiere.",  
        "Los astros murmuran secretos que aún no se desvelan.", 
        "Caminos bifurcados esperan pasos decididos o dubitativos.", 
        "Lo que está por venir se oculta tras el velo del tiempo.", 
        "Las sombras del porvenir pueden traer claridad o penumbra.",
        "El mañana es un tapiz que se teje con los hilos invisibles del presente.",
        "Cada paso hacia el horizonte revela nuevos paisajes, oculta otros.",
        "El destino no es un camino trazado sino un bosque de senderos infinitos.",
        "Lo que sueñas hoy se convertirá en semilla del mañana."
    ], 
    muerte: [ 
        "La última puerta aguarda, pero su llave es un misterio.", 
        "Los ecos del más allá cantan melodías incomprensibles.", 
        "El final es un comienzo velado por sombras.", 
        "La transición eterna no distingue entre días o noches.",
        "El ciclo de la existencia continúa más allá de lo que los ojos mortales perciben.",
        "Lo que termina aquí, florece en dimensiones que no podemos comprender.",
        "La barca que cruza el río final navega bajo estrellas desconocidas.",
        "Las huellas de tu existencia permanecen cuando el cuerpo ya se ha ido."
    ], 
    viajes: [
        "Podrías elegir viajar o podrías elegir quedarte, el medio en el que lo hagas no importa.",
        "Los caminos se bifurcan en mil posibilidades, pero solo uno guarda tus pasos.",
        "Horizontes lejanos te llaman con voces solo audibles para el corazón inquieto.",
        "El explorador que vive en ti anhela tierras donde tu sombra nunca se ha proyectado.",
        "La brújula del destino señala hacia lugares que tus ojos aún no conocen.",
        "Un viaje físico es, a menudo, reflejo de un peregrinaje interior más profundo.",
        "Atravesar fronteras visibles te llevará a cruzar límites invisibles en tu interior.",
        "El equipaje más ligero es el que permite al alma volar más alto durante la travesía.",
        "Las estrellas que te guían brillan con intensidad variable según el camino elegido.",
        "Podría llegar a darse ese viaje sin embargo... hay que tener cuidado con lo que se desea."
    ],
    familia: [
        "Las raíces familiares se extienden más allá de lo que la memoria alcanza.",
        "El árbol genealógico florece con secretos que solo el tiempo revela.",
        "Los lazos de sangre son ríos que fluyen por cauces impredecibles.",
        "El hogar es un refugio cuyas puertas se abren hacia adentro y hacia afuera.",
        "La herencia más valiosa no se encuentra en testamentos ni documentos legales.",
        "Las generaciones se entrelazan como hilos de un tapiz ancestral.",
        "El nido familiar puede estrecharse o expandirse según los vientos del destino.",
        "Las voces de los ancestros susurran consejos en el silencio de la introspección."
    ],
    educacion: [
        "El conocimiento es un océano cuya profundidad solo descubren los navegantes persistentes.",
        "Los libros son puertas, pero las llaves están forjadas con la aleación de tu curiosidad.",
        "La mente que se expande nunca regresa a sus dimensiones originales.",
        "Las semillas del aprendizaje germinan en tiempos que el maestro no siempre presencia.",
        "La sabiduría verdadera reconoce la diferencia entre información y transformación.",
        "El pergamino más valioso está escrito con la tinta invisible de la experiencia.",
        "Cada lección aprendida es un faro que ilumina territorios aún inexplorados.",
        "El estudioso paciente descubre que algunas preguntas son más valiosas que sus respuestas."
    ],
    amistad: [
        "La amistad verdadera es un refugio donde el alma se siente en casa.",
        "Los amigos son estrellas que iluminan la oscuridad de nuestros días más grises.",
        "Un amigo es la familia que elegimos para caminar juntos en este viaje llamado vida.",
        "La amistad no se mide en tiempo, sino en momentos compartidos.",
        "Los amigos son los pilares invisibles que sostienen nuestra felicidad.",
        "La confianza en la amistad es un lazo invisible pero indestructible.",
        "En los buenos y malos momentos, un verdadero amigo está allí, en silencio pero presente.",
        "La lealtad de un amigo es el regalo más precioso que la vida puede ofrecer."
    ],
    espiritualidad: [
        "El alma encuentra paz en la quietud, cuando el ego se desvanece.",
        "La fe no se trata de ver lo que está frente a ti, sino de confiar en lo que no ves.",
        "El viaje espiritual es hacia adentro, donde reside la verdad más profunda.",
        "La meditación es la llave que abre la puerta hacia el conocimiento interior.",
        "La energía que compartimos con el mundo es la misma que el universo nos ofrece.",
        "Cuando la mente se calma, el espíritu despierta.",
        "La conexión con el cosmos es una danza silenciosa que trasciende las palabras.",
        "La iluminación no se alcanza con el conocimiento, sino con la comprensión profunda del ser."
    ],
    
    tecnología: [
        "La tecnología no solo cambia el mundo, sino también la forma en que vivimos en él.",
        "El futuro se teje con hilos invisibles de datos y algoritmos.",
        "Cada innovación tecnológica es una puerta hacia lo desconocido.",
        "La tecnología es el espejo del pensamiento humano, reflejando nuestras creaciones y limitaciones.",
        "Los avances tecnológicos no son solo máquinas, son extensiones de nuestra imaginación.",
        "El verdadero poder de la tecnología radica en la forma en que mejora nuestra humanidad.",
        "En el futuro, las máquinas no serán solo herramientas, sino compañeros de nuestro viaje.",
        "La tecnología evoluciona constantemente, y nosotros con ella, adaptándonos a cada cambio."
    ],
    
    arte_creatividad: [
        "El arte es el lenguaje del alma, expresado a través de colores, formas y sonidos.",
        "La creatividad es la chispa que enciende el fuego de la innovación.",
        "Cada obra de arte es una ventana hacia el mundo interior del creador.",
        "La imaginación no tiene límites, y el arte es su mejor reflejo.",
        "La belleza del arte está en su capacidad para hacer que lo invisible se vuelva tangible.",
        "La creatividad fluye como un río que no se puede detener, solo dirigir.",
        "El arte no solo se observa, se siente, se vive, se respira.",
        "Un pincel en las manos de un artista es como una varita mágica que transforma el lienzo en sueños."
    ],
    
    deporte: [
        "El deporte no solo forja el cuerpo, también fortalece el espíritu.",
        "Cada entrenamiento es una pequeña victoria sobre nuestras propias limitaciones.",
        "El verdadero deporte no es solo competencia, es superación constante.",
        "En el deporte, la mente es tan importante como el cuerpo, ya que ambos deben estar en sincronía.",
        "La victoria no siempre se mide en trofeos, sino en el esfuerzo invertido.",
        "El verdadero campeón es aquel que nunca deja de luchar, incluso cuando la meta parece lejana.",
        "El deporte es un lenguaje universal que une a las personas más allá de cualquier barrera.",
        "La pasión por el deporte es lo que convierte un simple juego en una experiencia trascendental."
    ],
    decisiones: [
        "El camino que se elija definirá el destino",
        "Ante la duda, se debe escuchar al corazón pero no ignorar la razón",
        "Cada decisión abre unas puertas y cierra otras",
        "La sabiduría está en sopesar las consecuencias",
        "A veces no elegir también es una decisión",
        "Las decisiones son como semillas, algunas florecen y otras marchitan",
        "El futuro es incierto, pero cada elección lo moldea",
        "Las decisiones son espejos que reflejan nuestras prioridades y valores",
        "Cada elección es un paso hacia lo desconocido, pero también hacia el crecimiento",
        "Tener cuidado con lo que se elige es fundamental, ya que puede cambiar el rumbo de la vida",
    ],  
    naturaleza: [
        "La naturaleza es un espejo que refleja nuestro interior",
        "La tierra habla en susurros, pero pocos saben escuchar",
        "Cada hoja caída es un recordatorio de la impermanencia",
    ],
    sueños: [
        "Los sueños son el eco de lo que anhelas en lo profundo de tu ser",
        "Cada sueño es una estrella que ilumina el camino hacia tu destino",
        "Los sueños son la brújula que guía tu viaje por la vida",
        "La realización de un sueño comienza con el primer paso",
        "Los sueños son semillas que florecen con dedicación y esfuerzo",
        "Cada sueño es un reflejo de tus deseos más profundos",
        "Los sueños son el lenguaje del alma, hablando en susurros y visiones",
        "La magia de los sueños reside en su capacidad para inspirar y transformar"
    ],
    misterio: [ 
        "El dia de la revelación está cerca, pero no es hoy.",
        "Las sombras del misterio se ciernen sobre la verdad oculta.",
        "Seres sobrenaturales inevitablemente vendran y descubrirán la verdad.",
        "El velo entre los mundos se espesa, algo se acerca.",
        "espiritus y sombras danzan en la penumbra de lo desconocido.",
        "una sombra se cierne sobre el horizonte, pero no es el momento de revelarse.",
        "En rincones poco comunes, la verdad se oculta tras un velo que el ojo común no ve.",
        "desde la oscuridad una entidad nos indica que aún no es el momento de revelar la verdad.",
        "El universo guarda misterios que desafían la comprensión humana.",
        "ojos brillantes en la oscuridad observan cada movimiento."
    ],    
    ambigua: [
        "Los astros no están alineados claramente",
        "El universo guarda silencio por ahora",
        "La respuesta se revelará en el momento adecuado",
        "El destino es incierto y cambiante",
        "Las sombras del futuro son confusas",
        "Las cartas están en la mesa, pero el juego aún no ha comenzado",
        "El oráculo no tiene una respuesta clara en este momento",
        "Las estrellas titilan, pero no revelan su secreto",
        "El tiempo es un río que fluye, y los peces nadan en direcciones inciertas"
    ]            
  };
  
  /**
   * Keywords para detectar la categoría de la pregunta
   * Palabras clave organizadas por categoría para identificar el tema de la consulta
   * Incluye nuevas palabras clave para las categorías añadidas
   */
  const enhancedKeywords = {
    clima: ['mañana','lloverá','clima', 'tiempo', 'lluvia', 'sol', 'nieve', 'tormenta', 'viento', 'calor', 'frío', 'humedad', 'pronóstico', 'meteorología', 'temperatura', 'cielo', 'atmosfera', 'soplará', 'nevará', 'brillará'],
    
    amor: ['amor', 'pareja', 'relación', 'novio', 'novia', 'matrimonio', 'boda', 'romance', 'enamorado', 'corazón', 'sentimiento', 'pasión', 'amoroso', 'romántico', 'flechazo', 'amante', 'crush', 'ex', 'divorcio', 'romper', 'amaré', 'besaré', 'cuidaré', 'enamoraré'],
    
    salud: ['salud', 'enfermedad', 'dolor', 'sanar', 'médico', 'hospital', 'bienestar', 'dolencia', 'recuperación', 'cuerpo', 'medicina', 'tratamiento', 'síntoma', 'malestar', 'saludable', 'virus', 'físico', 'mental', 'curar', 'enfermo', 'sanaré', 'mejoraré'],
    
    dinero: ['baloto', 'dinero', 'riqueza', 'fortuna', 'finanzas', 'económico', 'inversión', 'negocio', 'ahorro', 'ganancia', 'prosperidad', 'abundancia', 'capital', 'billete', 'precio', 'compra', 'venta','venderé', 'deuda', 'préstamo', 'lotería', 'herencia', 'banco', 'millonario', 'pagar', 'cobrar', 'ganar', 'invertiré', 'compraré', 'ahorraré', 'chance'],
    
    trabajo: ['trabajo', 'empleo', 'profesión', 'carrera', 'laboral', 'jefe', 'ascenso', 'empresa', 'oficina', 'proyecto', 'ocupación', 'puesto', 'sueldo', 'profesional', 'curriculum', 'entrevista', 'compañeros', 'despido', 'contrato', 'habilidades', 'experiencia', 'trabajaré', 'ascenderé', 'contrataré'],
    
    futuro: ['podría','dejará', 'preparar', 'anticipar', 'planear', 'proyectar', 'intentaré', 'correré', 'volaré', 'lograré', 'futuro', 'destino', 'porvenir', 'mañana', 'camino', 'rumbo', 'suerte', 'vida', 'plan', 'adelante', 'próximo', 'después', 'predecir', 'adivinar', 'años', 'tiempo', 'pronóstico', 'vaticinio', 'presagio', 'profecía', 'augurio', 'veré', 'alcanzaré', 'conseguiré', 'conseguirá', 'sabré', 'saberé', 'conoceré', 'descubriré', 'encontraré', 'veré'],
    
    muerte: ['morira','tumbas','muertos','muerto','destruira', 'destruir', 'nostradamus', 'acabará', 'mundo', 'muerte', 'morir', 'fallecimiento', 'funeral', 'más allá', 'fin', 'descanso eterno', 'tumba','tumbas', 'luto', 'pérdida', 'duelo', 'trascender', 'final', 'despedida', 'cementerio', 'alma', 'espíritu', 'vida eterna', 'fantasma', 'reencarnación', 'cometa', 'asteroide', 'meteoro', 'apocalipsis', 'cataclismo', 'impacto', 'colisión', 'extinción', 'desastre', 'catástrofe', 'calamidad', 'devastación', 'aniquilación', 'desolación', 'ruinas', 'cenizas', 'entierro', 'terminaré'],
    
    viajes: ['viajara','corren','vuelan','viaje', 'mudanza', 'país', 'extranjero', 'aventura', 'destino', 'turismo', 'vacaciones', 'explorar', 'camino', 'recorrido', 'mapa', 'traslado', 'visitar', 'lejos', 'cerca', 'frontera', 'pasaporte', 'maleta', 'hotel', 'vuelo', 'avión', 'tren', 'viajar', 'conocer', 'descubrir', 'viajaré', 'exploraré', 'conoceré'],
    
    familia: ['familia', 'hijo', 'hija', 'padre', 'madre', 'hermano', 'hermana', 'pariente', 'hogar', 'casa', 'adopción', 'embarazo', 'padres', 'abuelos', 'nietos', 'herencia familiar', 'apellido', 'tradición', 'linaje', 'descendencia', 'familiar', 'consanguíneo', 'parentesco', 'cuidaré', 'amaré', 'protegeré'],
    
    decisiones: ['casará','consejos','acompañare','conocere','decidir', 'elección', 'opción', 'camino', 'dilema', 'duda', 'alternativa', 'escoger', 'elegir', 'indecisión', 'consecuencia', 'encrucijada', 'resolver', 'determinar', 'preferir', 'seleccionar', 'incertidumbre', 'crisis', 'decisión', 'definir', 'deliberar', 'evaluar', 'considerar', 'valorar', 'elegiré', 'decidiré', 'resolveré', 'deberia'],
    
    educacion: ['titulo','estudiar','estudio', 'universidad', 'semestre', 'carrera', 'escuela', 'aprender', 'título', 'examen', 'aprobar', 'maestro', 'alumno', 'conocimiento', 'sabiduría', 'curso', 'materia', 'academia', 'graduación', 'tesis', 'máster', 'doctorado', 'beca', 'libro', 'lección', 'enseñanza', 'aprendizaje', 'educación', 'estudiar', 'aprenderé', 'aprobaré', 'graduaré'],
    
    amistad: ['amistad', 'amigo', 'amiga', 'colegas', 'compañeros', 'cercanía', 'fraternidad', 'lealtad', 'confianza', 'solidaridad', 'vínculo', 'camaradería', 'hermandad', 'conexión', 'compinche', 'pana', 'parcero', 'unión', 'seré', 'apoyaré', 'ayudaré'],
    
    espiritualidad: ['espiritualidad', 'alma', 'fe', 'dios', 'religión', 'meditación', 'yoga', 'oración', 'trascendencia', 'karma', 'iluminación', 'nirvana', 'paz interior', 'guía espiritual', 'mantra', 'energía', 'universo', 'cosmos', 'espíritu', 'meditaré', 'oraré', 'encontraré'],
    
    tecnología: ['IA','tecnología', 'innovación', 'inteligencia artificial', 'internet', 'computadora', 'móvil', 'software', 'hardware', 'aplicaciones', 'redes sociales', 'ciberseguridad', 'digital', 'datos', 'sistema', 'programación', 'gadgets', 'futuro tecnológico', 'realidad virtual', 'celular','celulares','avances', 'programaré', 'desarrollaré', 'innovaré'],
    
    arte_creatividad: ['arte', 'creatividad', 'pintura', 'música', 'danza', 'literatura', 'escultura', 'dibujo', 'cine', 'fotografía', 'poema', 'inspiración', 'expresión', 'diseño', 'estética', 'imaginación', 'galería', 'artesano', 'talento', 'cultura', 'crear', 'dibujaré', 'pintaré'],
    
    deporte: ['perdera','ganara','partidos','mundial','eliminatorias','selección','deporte', 'fútbol', 'baloncesto', 'correr', 'entrenamiento', 'ejercicio', 'equipo', 'competencia', 'salud física', 'atletismo', 'partido', 'juego', 'gimnasio', 'natación', 'ciclismo', 'victoria', 'derrota', 'energía', 'rendimiento', 'yoga', 'lucha', 'correré', 'entrenaré', 'jugaré'],
    
    naturaleza: ['naturaleza', 'medio ambiente', 'planeta', 'tierra', 'árboles', 'flores', 'animales', 'ecosistema', 'clima', 'biodiversidad', 'reciclaje', 'sostenibilidad', 'contaminación', 'aire', 'agua', 'fuego', 'conservación', 'recursos', 'vida salvaje', 'bosque', 'selva', 'desierto', 'protegeré', 'preservaré'],
    
    sueños: ['sueños', 'metas', 'objetivos', 'aspiraciones', 'éxito', 'ambición', 'deseo', 'motivación', 'superación', 'logro', 'esperanza', 'ideal', 'proyecto', 'propósito', 'visión', 'empeño', 'determinación', 'alcanzar', 'sueño cumplido', 'alcanzaré', 'lograré'],
    
    misterio: ['depredadores','brujeria','entierro','asustar','asustara','susto','abducción','invadiran','misterio', 'ovnis', 'extraterrestres', 'dimensiones', 'tiempo', 'espacio', 'fenómenos', 'paranormal', 'fantasmas', 'secretos', 'incógnitas', 'enigmas', 'conspiración', 'universo', 'agujero negro', 'multiverso', 'portal', 'desconocido', 'misticismo', 'descubriré', 'exploraré', 'investigaré','alienigenas']
};
  /**
   * Frases especiales que aparecen con baja probabilidad
   * Se utilizan cuando el oráculo "no quiere" dar una respuesta clara
   */
  const specialPhrases = [
    "Ángeles del infierno y del cielo se entrecruzan, el horizonte se oscurece con bruma. Lo que es, podría ser o no. Tu respuesta será inconclusa. Los dioses prefieren que no responda.",
    "El velo entre los mundos se torna traslúcido, pero las señales celestiales se desvanecen ante mis intentos de interpretación. Esta pregunta debe permanecer sin respuesta.",
    "Las estrellas guardan silencio cuando sus secretos son demasiado profundos. El destino ha sellado esta respuesta con siete llaves de enigma.",
    "Esferas de cristal se empañan, y el oráculo suspira. Hay preguntas cuya respuesta alteraría el mismo tejido del destino. Esta es una de ellas.",
    "La niebla del tiempo se espesa, y mis visiones se nublan. Algunas verdades no están destinadas a ser reveladas en este ciclo lunar.",
    "Los antiguos guardianes del conocimiento prohibido cierran filas ante esta consulta. Hay saberes que deben permanecer ocultos.",
    "Las constelaciones forman un patrón de advertencia que me impide revelar lo que buscas. Algunos secretos protegen al buscador."
  ];
  
  /**
   * Elementos místicos para enriquecer las predicciones
   * Se utilizan según el nivel de misticismo configurado
   */
  const mysticalElements = {
    // Nivel 2 (elementos básicos)
    standard: [
      "Los astros confirman esta visión.",
      "Así lo dictan las cartas del tarot.",
      "El péndulo oscila hacia esta verdad.",
      "Las runas antiguas lo susurran en la noche.",
      "El I Ching revela este camino con claridad.",
      "El oráculo asiente ante esta revelación.",
      "Los patrones numerológicos convergen en esta dirección.",
      "El humo del incienso forma figuras que confirman esta verdad.",
      "Las piedras de adivinación se alinean en este mensaje."
    ],
    
    // Nivel 3 (elementos avanzados)
    cosmic: [
      "Mercurio retrógrado intensifica esta energía.",
      "La luna en su cuarto creciente ilumina este sendero.",
      "Venus y Marte se alinean para manifestar este augurio.",
      "El portal cósmico se abre ante esta revelación.",
      "Saturno proyecta su sombra sobre esta predicción.",
      "Las Pléyades titilan con aprobación ante lo revelado.",
      "El eclipse inminente potencia este mensaje del más allá.",
      "Neptuno y sus aguas místicas reflejan esta realidad oculta.",
      "El nodo lunar norte señala el camino de esta manifestación.",
      "La conjunción planetaria amplifica la claridad de esta visión."
    ]
  };
  
  /**
   * Función para obtener un elemento aleatorio de un array
   * @param {Array} arr - Array del que se seleccionará un elemento
   * @return {*} - Elemento aleatorio del array
   */
  function getRandomElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.error("Array inválido o vacío en getRandomElement");
        return "";
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

function normalizeText(text) {
    if (typeof text !== 'string') return '';
    return text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:]/g, '');
}

// ====================== CORE DEL PREDICTOR ======================
// Definiciones globales que deben estar disponibles para todas las funciones
const dominantKeywords = {
    viajes: ['viajara','corren','vuelan','viaje', 'mudanza', 'país', 'extranjero', 'aventura', 'destino', 'turismo', 'vacaciones', 'explorar', 'camino', 'recorrido', 'mapa', 'traslado', 'visitar', 'lejos', 'cerca', 'frontera', 'pasaporte', 'maleta', 'hotel', 'vuelo', 'avión', 'tren', 'viajar', 'conocer', 'descubrir', 'viajaré', 'exploraré', 'conoceré'],
    trabajo: ['trabajo', 'empleo', 'contrato', 'entrevista', 'sueldo', 'ascenso', 'profesión', 'curriculum', 'despido'],
    salud: ['salud', 'enfermedad', 'médico', 'hospital', 'tratamiento', 'dolor', 'síntoma', 'recuperación'],
    dinero: ['dinero', 'riqueza', 'pagar', 'deuda', 'préstamo', 'inversión', 'lotería', 'ganar', 'ahorro'],
    futuro: ['conseguirá', 'logrará', 'obtendrá', 'será', 'tendrá', 'podrá', 'encontrará', 'descubrirá'],
    amor: ['amor', 'pareja', 'matrimonio', 'novio', 'novia', 'romance', 'enamorado', 'boda', 'divorcio'],
    muerte: ['morira','muerte', 'morir', 'fallecimiento', 'funeral', 'tumba', 'cementerio', 'apocalipsis', 'extinción'],
    educacion: ['estudiar', 'universidad', 'carrera', 'examen', 'título', 'graduación', 'maestro', 'alumno'],
    decisiones: ['decidir', 'elegir', 'escoger', 'duda', 'alternativa', 'preferir', 'debería', 'opción'],
    misterio: ['brujeria','entierro','misterio', 'ovnis', 'extraterrestres', 'dimensiones', 'tiempo', 'espacio', 'fenómenos', 'paranormal', 'fantasmas', 'secretos', 'incógnitas', 'enigmas', 'conspiración', 'universo', 'agujero negro', 'multiverso', 'portal', 'desconocido', 'misticismo', 'descubriré', 'exploraré', 'investigaré']
};

function detectCategory(question) {
    // Validación mejorada con optional chaining
    if (!question?.trim()) return "ambigua";
    
    const normalized = normalizeText(question);
    const scores = {};
    const wordCount = normalized.split(/\s+/).filter(w => w.length > 0).length;

    // Cálculo optimizado de puntajes
    for (const [category, keywords] of Object.entries(enhancedKeywords)) {
        scores[category] = keywords.reduce((acc, keyword) => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            const match = normalized.match(regex);
            
            if (!match) return acc;

            let score = 2; // Puntaje base
            
            // Bonus por posición (inicio/final)
            if (match.index < 3 || match.index > normalized.length - keyword.length - 3) {
                score += 1;
            }
            
            // Bonus por palabra dominante
            if (dominantKeywords[category]?.includes(keyword)) {
                score += 3;
            }
            
            return acc + score;
        }, 0);
        
        // Peso adicional para categorías no ambiguas
        if (category !== "ambigua") scores[category] += 1;
    }

    // Determinación de categoría optimizada
    const [maxCategory, maxScore] = Object.entries(scores).reduce(
        ([currentCat, currentScore], [category, score]) => 
            score > currentScore ? [category, score] : [currentCat, currentScore],
        ["ambigua", 0]
    );

    // Threshold dinámico mejorado
    const threshold = wordCount <= 4 ? 2 : wordCount > 8 ? 5 : 3;
    const finalCategory = maxScore >= threshold ? maxCategory : "ambigua";

    console.log(`Categoría detectada: ${finalCategory}, Puntajes:`, scores);
    return finalCategory;
}

function generatePrediction(category, options = {}) {
    // Configuración con valores por defecto mejorada
    const config = {
        specialPhraseChance: 0.1,
        combinedPhraseChance: 0.3,
        mysticalLevel: 2,
        ...options
    };

    // Frase especial con probabilidad configurable
    if (Math.random() < config.specialPhraseChance) {
        return getRandomElement(specialPhrases);
    }

    // Obtener frase base según categoría con validación
    const categoryPhrases = categories[category] || categories.ambigua;
    let prediction = getRandomElement(categoryPhrases);

    // Frase complementaria con validación de existencia
    if (Math.random() < config.combinedPhraseChance && categories.ambigua?.length) {
        prediction += " " + getRandomElement(categories.ambigua);
    }

    // Elementos místicos con validación
    if (config.mysticalLevel >= 2 && mysticalElements.standard?.length) {
        prediction += " " + getRandomElement(mysticalElements.standard);
    }
    
    if (config.mysticalLevel >= 3 && mysticalElements.cosmic?.length) {
        prediction += " " + getRandomElement(mysticalElements.cosmic);
    }

    return prediction;
}

function processPrediction(question, options = {}) {
    try {
        // Validación básica pero sin lanzar errores
        if (typeof question !== 'string' || question.trim() === '') {
            question = "El silencio también es una respuesta";
        }

        // Siempre obtener una categoría, incluso si hay errores
        let category;
        try {
            category = detectCategory(question) || 'ambigua';
        } catch {
            category = 'ambigua';
        }

        // Asegurar que la categoría existe y tiene respuestas
        if (!categories[category] || categories[category].length === 0) {
            category = 'ambigua';
        }

        // Generar siempre una predicción, aunque sea ambigua
        let prediction;
        try {
            prediction = generatePrediction(category, options);
        } catch {
            prediction = getRandomElement(categories.ambigua) || 
                       "Los astros se alinean de manera misteriosa";
        }

        return {
            question: question.trim(),
            prediction,
            category,
            timestamp: new Date().toISOString(),
            mysticalLevel: options.mysticalLevel || 1
        };

    } catch {
        // Respuesta de último recurso si todo falla
        return {
            question: question,
            prediction: "El universo conspira a tu favor, aunque no lo veas ahora",
            category: 'ambigua',
            timestamp: new Date().toISOString(),
            mysticalLevel: 1
        };
    }
}

// ====================== FUNCIONES AVANZADAS ======================
function analyzeQuestion(question) {
    const text = normalizeText(question);
    
    // Análisis de sentimiento
    const sentimentWords = {
        positive: ['bien', 'bueno', 'excelente', 'feliz', 'alegre', 'éxito', 'ganar'],
        negative: ['mal', 'malo', 'terrible', 'triste', 'fracaso', 'perder', 'negativo'],
        neutral: ['será', 'es', 'pasará', 'ocurrirá', 'sucederá', 'cuando', 'cómo']
    };

    const sentimentCounts = { positive: 0, negative: 0, neutral: 0 };
    
    for (const [sentiment, words] of Object.entries(sentimentWords)) {
        sentimentCounts[sentiment] = words.reduce((count, word) => {
            return count + (new RegExp(`\\b${word}\\b`, 'i').test(text) ? 1 : 0);
        }, 0);
    }

    // Determinar sentimiento predominante
    let predominantSentiment = 'neutral';
    if (sentimentCounts.positive > sentimentCounts.negative && sentimentCounts.positive > sentimentCounts.neutral) {
        predominantSentiment = 'positive';
    } else if (sentimentCounts.negative > sentimentCounts.positive && sentimentCounts.negative > sentimentCounts.neutral) {
        predominantSentiment = 'negative';
    }

    return {
        sentiment: predominantSentiment,
        isTemporal: /\b(cuándo|fecha|tiempo|día|mes|año)\b/i.test(text),
        isYesNo: /\b(seré|será|tendré|tendrá|puedo|puede|debo|debe)\b/i.test(text),
        wordCount: text.split(/\s+/).filter(w => w.length > 0).length,
        characters: text.length
    };
}

function advancedPredictor(question, userOptions = {}) {
    // Validación
    if (typeof question !== 'string' || question.trim() === '') {
        throw new Error('La pregunta debe ser un texto válido');
    }

    const analysis = analyzeQuestion(question);
    const options = {
        mysticalLevel: 1,
        specialPhraseChance: 0.02,
        combinedPhraseChance: 0.5,
        yesNoResponse: [],
        ...userOptions
    };

    // Ajustar nivel místico
    let mysticalLevel = options.mysticalLevel;
    if (analysis.wordCount > 15) mysticalLevel = Math.min(mysticalLevel + 1, 3);
    if (analysis.sentiment === 'negative') mysticalLevel = Math.max(mysticalLevel - 1, 1);

    // Manejo de respuestas Sí/No
    if (analysis.isYesNo) {
        const yesProbability = { positive: 0.7, neutral: 0.5, negative: 0.3 }[analysis.sentiment] || 0.5;
        options.yesNoResponse = Math.random() < yesProbability ? [
            "Los signos apuntan a que sí",
            "Las energías se alinean favorablemente"
        ] : [
            "Los augurios sugieren cautela",
            "El cosmos muestra resistencia"
        ];
    }

    // Procesar y retornar resultado
    const result = processPrediction(question, { 
        ...options,
        mysticalLevel
    });

    // Enriquecer respuesta final
    let finalPrediction = result.prediction;
    if (options.yesNoResponse?.length > 0) {
        finalPrediction = `${getRandomElement(options.yesNoResponse)}. ${finalPrediction}`;
    }

    return {
        ...result,
        prediction: finalPrediction,
        version: '2.1'
    };
}

// ====================== EXPORTACIÓN ======================
if (typeof window !== 'undefined') {
    window.advancedPredictor = advancedPredictor;
    window.consultar = function() {
        const pregunta = document.getElementById('pregunta')?.value;
        if (!pregunta?.trim()) {
            alert('Por favor, escribe una pregunta');
            return;
        }
        
        try {
            const respuesta = advancedPredictor(pregunta);
            const resultadoDiv = document.getElementById('resultado');
            
            if (resultadoDiv) {
                resultadoDiv.innerHTML = '';
                mostrarRespuestaAcuosaFluida(respuesta.prediction, resultadoDiv);
                
                // Reproducir sonidos
                ['susurros.wav', 'godpower.wav'].forEach(sound => {
                    new Audio(`./sound/${sound}`)
                        .play()
                        .catch(e => console.error(`Error al reproducir ${sound}:`, e));
                });
            }
        } catch (error) {
            console.error("Error en consultar:", error);
            alert("Ocurrió un error al consultar al oráculo");
        }
    };
}