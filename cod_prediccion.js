
const categories = { 
    amor: [ 
      "El corazón danza al compás de un destino incierto.", 
      "Una unión florece bajo la luna menguante.", 
      "El lazo de los sentimientos puede tensarse o soltarse.", 
      "Un susurro nocturno trae promesas de pasión o desvelo.",
      "Dos almas entrelazadas crean patrones que ni los astros pueden descifrar.",
      "La llama del afecto se aviva con el soplo de la sinceridad.",
      "El jardín del amor requiere paciencia antes de revelar sus más bellas flores.",
      "Como las mareas, los sentimientos fluyen y reflujen en ciclos impredecibles."
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
      "El oro brilla, pero su fulgor puede cegar.", 
      "La fortuna llega como la marea: impredecible y cambiante.", 
      "El esfuerzo sembrado hoy dará frutos inciertos mañana.", 
      "Riquezas o austeridad, ambas son caras de la misma moneda.",
      "Las monedas danzan entre los dedos de quien sabe contar sus pasos.",
      "La prosperidad material es el reflejo de un río más profundo y caudaloso.",
      "La abundancia busca a quien no la persigue con desesperación.",
      "Las semillas de la riqueza florecen en terrenos inesperados."
    ], 
    trabajo: [
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
    decisiones: [
      "En la encrucijada, a veces el camino menos visible conduce a los tesoros más grandes.",
      "La balanza del destino oscila según el peso de nuestras elecciones y omisiones.",
      "Elegir es renunciar, pero también es abrazar posibilidades aún no manifestadas.",
      "Los dados del destino ya están lanzados, pero tu mano puede modificar su caída.",
      "El laberinto de opciones solo confunde a quien ha olvidado su verdadero norte.",
      "Detrás de cada puerta cerrada hay un universo paralelo de lo que pudo ser.",
      "La decisión más importante no es qué elegir, sino cómo habitar la elección realizada.",
      "Las consecuencias de tus elecciones dibujan mapas estelares en el firmamento de tu destino."
    ],
    ambigua: [ 
      "El horizonte se curva, revelando y ocultando a la vez.", 
      "Las respuestas están en las estrellas, pero se esconden tras nubes.", 
      "Lo que buscas está cerca, aunque parezca lejano.", 
      "El destino es un lienzo pintado con tonos inciertos.",
      "Entre la luz y la sombra, se esconde la verdad que anhelas.",
      "El universo habla en susurros que solo escuchan los pacientes.",
      "Lo visible y lo invisible tejen una danza eterna en torno a tu pregunta.",
      "Las ruedas del cosmos giran indiferentes a nuestras pequeñas dudas.",
      "La verdad tiene muchas caras, todas ellas veladas por la percepción.",
      "El enigma se resuelve cuando dejas de intentar descifrarlo."
    ] 
  };
  
  /**
   * Keywords para detectar la categoría de la pregunta
   * Palabras clave organizadas por categoría para identificar el tema de la consulta
   * Incluye nuevas palabras clave para las categorías añadidas
   */
  const categoryKeywords = {
    amor: ['amor', 'pareja', 'relación', 'novio', 'novia', 'matrimonio', 'boda', 'romance', 'enamorado', 'corazón', 'sentimiento', 'pasión', 'amoroso', 'romántico', 'flechazo', 'amante', 'crush', 'ex', 'divorcio', 'romper'],
    
    salud: ['salud', 'enfermedad', 'dolor', 'sanar', 'médico', 'hospital', 'bienestar', 'dolencia', 'recuperación', 'cuerpo', 'medicina', 'tratamiento', 'síntoma', 'malestar', 'saludable', 'virus', 'físico', 'mental', 'curar', 'enfermo'],
    
    dinero: ['dinero', 'riqueza', 'fortuna', 'finanzas', 'económico', 'inversión', 'negocio', 'ahorro', 'ganancia', 'prosperidad', 'abundancia', 'capital', 'billete', 'precio', 'compra', 'venta', 'deuda', 'préstamo', 'lotería', 'herencia', 'banco', 'millonario', 'pagar', 'cobrar'],
    
    trabajo: ['trabajo', 'empleo', 'profesión', 'carrera', 'laboral', 'jefe', 'ascenso', 'negocio', 'empresa', 'oficina', 'proyecto', 'ocupación', 'puesto', 'sueldo', 'profesional', 'curriculum', 'entrevista', 'compañeros', 'despido', 'contrato', 'habilidades', 'experiencia'],
    
    futuro: ['dejará','preparar','anticipar','planear','proyectar','planear','intentaré','correré','volaré','lograré','futuro', 'destino', 'porvenir', 'mañana', 'camino', 'rumbo', 'suerte', 'vida', 'plan', 'adelante', 'próximo', 'después', 'predecir', 'adivinar', 'anticipar', 'años', 'tiempo', 'pronóstico', 'vaticinio', 'presagio', 'profecía', 'augurio'],
    
    muerte: ['destruira','destruir','nostradamus','acabará','mundo','muerte', 'morir', 'fallecimiento', 'funeral', 'más allá', 'fin', 'descanso eterno', 'tumba', 'luto', 'pérdida', 'duelo', 'trascender', 'final', 'despedida', 'cementerio', 'alma', 'espíritu', 'vida eterna', 'fantasma', 'reencarnación','cometa', 'asteroide', 'meteoro', 'apocalipsis', 'fin del mundo',
             'cataclismo', 'destrucción total', 'impacto', 'colisión', 'extinción', 'desastre', 'catástrofe', 'calamidad', 'devastación', 'aniquilación', 'desolación', 'ruinas', 'cenizas'],

    viajes: ['viaje', 'mudanza', 'país', 'extranjero', 'aventura', 'destino', 'turismo', 'vacaciones', 'explorar', 'camino', 'recorrido', 'mapa', 'traslado', 'visitar', 'lejos', 'cerca', 'frontera', 'pasaporte', 'maleta', 'hotel', 'vuelo', 'avión', 'tren', 'viajar', 'conocer', 'descubrir'],
    
    familia: ['familia', 'hijo', 'hija', 'padre', 'madre', 'hermano', 'hermana', 'pariente', 'hogar', 'casa', 'adopción', 'embarazo', 'padres', 'abuelos', 'nietos', 'herencia familiar', 'apellido', 'tradición', 'linaje', 'descendencia', 'familiar', 'consanguíneo', 'matrimonio', 'parentesco'],
    
    educacion: ['estudio', 'universidad', 'semestre', 'carrera', 'escuela', 'aprender', 'título', 'examen', 'aprobar', 'maestro', 'alumno', 'conocimiento', 'sabiduría', 'curso', 'materia', 'academia', 'graduación', 'tesis', 'máster', 'doctorado', 'beca', 'libro', 'lección', 'enseñanza', 'aprendizaje', 'educación', 'estudiar'],
    
    decisiones: ['decidir', 'elección', 'opción', 'camino', 'dilema', 'duda', 'alternativa', 'escoger', 'elegir', 'indecisión', 'consecuencia', 'encrucijada', 'resolver', 'determinar', 'preferir', 'seleccionar', 'incertidumbre', 'crisis', 'decisión', 'definir', 'deliberar', 'evaluar', 'considerar', 'valorar']
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
    return arr[Math.floor(Math.random() * arr.length)]; 
  }
  
  /**
   * Detector de categoría según palabras clave en la pregunta
   * @param {string} question - La pregunta del usuario
   * @return {string} - La categoría detectada
   */
// Mejora del detector de categorías
function detectCategory(question) {
    if (!question || question.trim() === '') return "ambigua";
    
    const normalized = question.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Elimina acentos
        .replace(/[¿?¡!.,;:]/g, '');

        const apocalypticWords = ['cometa', 'asteroide', 'fin del mundo', 'destruir', 'apocalipsis'];
        const hasApocalyptic = apocalypticWords.some(word => normalized.includes(word));
        
        if (hasApocalyptic) {
            return "muerte"; // Fuerza esta categoría para preguntas apocalípticas
        }

    // Palabras clave mejoradas con sinónimos
    const enhancedKeywords = {
        amor: ['amor', 'enamorar', 'pareja', 'novio', 'novia', 'esposo','esposa', 'matrimonio', 'boda', 'romance', 'relación', 'sentimientos'],
        trabajo: ['trabajo', 'empleo', 'jefe', 'contrato', 'sueldo', 'oficina', 'profesión', 'carrera', 'entrevista', 'trabajar'],
        dinero: ['dinero', 'finanzas', 'banco', 'pago', 'deuda', 'ahorro', 'inversión', 'rico', 'pobre', 'comprar', 'vender'],
        salud: ['salud', 'enfermo', 'doctor', 'hospital', 'dolor', 'cuerpo', 'mente', 'medicina', 'curar', 'enfermedad'],
        futuro: ['futuro', 'destino', 'mañana', 'proximo', 'año', 'mes', 'semana', 'tiempo', 'venir', 'después'],
        educacion: ['estudiar', 'examen', 'universidad', 'escuela', 'profesor', 'aprender', 'clase', 'materia', 'nota', 'curso'],
        viajes: ['visita', 'visitarnos','visitaran','viajar', 'vacaciones', 'destino', 'aeropuerto', 'tren', 'bus', 'hotel', 'maleta', 'pasaporte', 'turismo', 'viajare'],
        familia: ['familia', 'padre', 'madre', 'hermano', 'hermana', 'hijo', 'hija', 'abuelo', 'abuela', 'pariente', 'hogar', 'tio', 'tia'],
        decisiones: ['decidir', 'elección', 'opción', 'camino', 'dilema', 'duda', 'alternativa', 'resolver', 'elegir', 'indecisión']
    };

    // Ponderación por categoría
    const scores = {};
    for (const [category, keywords] of Object.entries(enhancedKeywords)) {
        scores[category] = keywords.reduce((acc, keyword) => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            return acc + (normalized.match(regex) ? keyword.length : 0);
        }, 0);
    }

    // Determinar categoría dominante
    let maxCategory = "ambigua";
    let maxScore = 0;
    
    for (const [category, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxCategory = category;
        }
    }

    return maxScore >= 3 ? maxCategory : "ambigua";
}
  
  /**
   * Generador de predicciones mejorado
   * @param {string} category - Categoría de la predicción
   * @param {Object} options - Opciones adicionales
   * @return {string} - La predicción generada
   */
  function generatePrediction(category, options = {}) {
    // Configuración por defecto
    const config = {
      specialPhraseChance: 0.02,   // 2% de probabilidad para frases especiales
      combinedPhraseChance: 0.5,   // 50% de probabilidad para frases combinadas
      mysticalLevel: 1,            // Nivel de misticismo (1-3)
      currentMoonPhase: null,      // Fase lunar actual (opcional)
      currentDate: new Date()      // Fecha actual
    };
    
    // Combinar con opciones personalizadas
    Object.assign(config, options);
    
    // Ajustar la probabilidad de frase especial según la fase lunar si está disponible
    if (config.currentMoonPhase === "luna nueva" || config.currentMoonPhase === "luna llena") {
      config.specialPhraseChance += 0.01; // 1% adicional en lunas especiales
    }
    
    // Frase especial con probabilidad configurable
    if (Math.random() < config.specialPhraseChance) {
      return getRandomElement(specialPhrases);
    }
  
    // Obtener frases según categoría (o ambigua si no existe)
    const categoryPhrases = categories[category] || categories.ambigua;
    const selectedPhrase = getRandomElement(categoryPhrases);
    
    // Determinar si añadir una frase ambigua complementaria
    if (Math.random() < config.combinedPhraseChance) {
      const ambiguousPhrase = getRandomElement(categories.ambigua);
      return `${selectedPhrase} ${ambiguousPhrase}`;
    }
    
    // Añadir elementos místicos según nivel configurado
    let prediction = selectedPhrase;
    
    if (config.mysticalLevel >= 2) {
      if (Math.random() < 0.3) {
        prediction += " " + getRandomElement(mysticalElements.standard);
      }
    }
    
    if (config.mysticalLevel >= 3) {
      if (Math.random() < 0.2) {
        prediction += " " + getRandomElement(mysticalElements.cosmic);
      }
    }
    
    return prediction;
  }
  
  /**
   * Procesador principal de preguntas
   * @param {string} question - La pregunta del usuario
   * @param {Object} options - Opciones de configuración
   * @return {Object} - Resultado con predicción y metadatos
   */
  function processPrediction(question, options = {}) {
    // Detectar categoría automáticamente
    const detectedCategory = detectCategory(question);
    
    // Si se proporciona una categoría explícita, usar esa en su lugar
    const category = options.category || detectedCategory;
    
    // Generar la predicción con las opciones proporcionadas
    const prediction = generatePrediction(category, options);
    
    // Retornar resultado completo con metadatos útiles
    return {
      question,
      prediction,
      category,
      detectedCategory,
      timestamp: new Date().toISOString(),
      mysticalLevel: options.mysticalLevel || 1,
      moonPhase: options.currentMoonPhase || "desconocida"
    };
  }
  
  /**
   * Función para serializar y guardar el historial de predicciones
   * @param {Array} history - Array de predicciones previas
   * @param {string} storageKey - Clave para almacenamiento local
   * @return {boolean} - Éxito de la operación
   */
  function saveHistory(history, storageKey = "predictor_history") {
    try {
      // Limitar el historial a las últimas 50 predicciones
      const limitedHistory = history.slice(-50);
      
      // Si estamos en un entorno con localStorage (navegador)
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(storageKey, JSON.stringify(limitedHistory));
        return true;
      }
      
      // Si estamos en un entorno con FileSystem (Node.js)
      if (typeof require === 'function') {
        try {
          const fs = require('fs');
          fs.writeFileSync(`${storageKey}.json`, JSON.stringify(limitedHistory, null, 2));
          return true;
        } catch (fsError) {
          console.error("Error al guardar en archivo:", fsError);
          return false;
        }
      }
      
      return false;
    } catch (error) {
      console.error("Error al guardar historial:", error);
      return false;
    }
  }
  
  /**
   * Función para cargar el historial de predicciones
   * @param {string} storageKey - Clave para almacenamiento local
   * @return {Array} - Historial de predicciones o array vacío
   */
  function loadHistory(storageKey = "predictor_history") {
    try {
      // Si estamos en un entorno con localStorage (navegador)
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [];
      }
      
      // Si estamos en un entorno con FileSystem (Node.js)
      if (typeof require === 'function') {
        try {
          const fs = require('fs');
          if (fs.existsSync(`${storageKey}.json`)) {
            const data = fs.readFileSync(`${storageKey}.json`, 'utf8');
            return JSON.parse(data);
          }
        } catch (fsError) {
          console.error("Error al cargar desde archivo:", fsError);
        }
      }
      
      return [];
    } catch (error) {
      console.error("Error al cargar historial:", error);
      return [];
    }
  }
  
  /**
   * Analizador avanzado de la pregunta para mejorar la detección
   * @param {string} question - Pregunta del usuario
   * @return {Object} - Análisis de sentimiento y temas
   */
  function analyzeQuestion(question) {
    // Normalizar el texto
    const text = question.toLowerCase();
    
    // Análisis simple de sentimiento
    const sentimentWords = {
      positive: ['bien', 'bueno', 'excelente', 'feliz', 'alegre', 'éxito', 'ganar', 'positivo', 'favorable', 'mejor'],
      negative: ['mal', 'malo', 'terrible', 'triste', 'fracaso', 'perder', 'negativo', 'desfavorable', 'peor', 'miedo'],
      neutral: ['será', 'es', 'pasará', 'ocurrirá', 'sucederá', 'cuando', 'cómo', 'dónde', 'por qué']
    };
    
    // Contar palabras por sentimiento
    const sentimentCounts = { positive: 0, negative: 0, neutral: 0 };
    
    for (const [sentiment, words] of Object.entries(sentimentWords)) {
      for (const word of words) {
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        if (regex.test(text)) {
          sentimentCounts[sentiment]++;
        }
      }
    }
    
    // Determinar sentimiento predominante
    let predominantSentiment = 'neutral';
    if (sentimentCounts.positive > sentimentCounts.negative && 
        sentimentCounts.positive > sentimentCounts.neutral) {
      predominantSentiment = 'positive';
    } else if (sentimentCounts.negative > sentimentCounts.positive && 
               sentimentCounts.negative > sentimentCounts.neutral) {
      predominantSentiment = 'negative';
    }
    
    // Detectar si es pregunta temporal
    const isTemporalQuestion = /\bcuándo\b|\bfecha\b|\btiempo\b|\bdía\b|\bmes\b|\baño\b/i.test(text);
    
    // Detectar si es pregunta de sí/no
    const isYesNoQuestion = /\b(seré|será|tendré|tendrá|puedo|puede|debo|debe|voy|va|es|son|están)\b/i.test(text);
    
    return {
      sentiment: predominantSentiment,
      isTemporal: isTemporalQuestion,
      isYesNo: isYesNoQuestion,
      wordCount: text.split(/\s+/).length,
      characters: text.length
    };
  }
  
  /**
   * Versión avanzada del predictor con más funcionalidad
   * @param {string} question - Pregunta del usuario
   * @param {Object} options - Opciones de configuración
   * @return {Object} - Resultado detallado
   */
  // Función principal refactorizada
function advancedPredictor(question, userOptions = {}) {
    // Validación inicial de parámetros
    if (typeof question !== 'string' || question.trim() === '') {
        throw new Error('La pregunta debe ser un texto válido');
    }

    // Análisis de la pregunta
    const analysis = analyzeQuestion(question);
    const detectedCategory = detectCategory(question);
    const category = userOptions.category || detectedCategory;

    // Configuración con valores por defecto
    const defaultOptions = {
        mysticalLevel: 1,
        specialPhraseChance: 0.02,
        combinedPhraseChance: 0.5,
        yesNoResponse: []
    };

    // Fusionar opciones del usuario con las predeterminadas
    const options = { ...defaultOptions, ...userOptions };

    // Ajustar nivel místico basado en análisis
    const mysticalLevel = adjustMysticalLevel(analysis, options.mysticalLevel);

    // Manejo de respuestas Sí/No
    if (analysis.isYesNo) {
        options.yesNoResponse = generateYesNoResponse(analysis);
    }

    // Procesar predicción principal
    const result = processPrediction(question, { 
        ...options, 
        mysticalLevel, 
        category 
    });

    // Enriquecer resultado
    return enrichPredictionResult(result, analysis, options);
}

// Funciones auxiliares refactorizadas
function adjustMysticalLevel(analysis, baseLevel) {
    let level = baseLevel;
    if (analysis.wordCount > 15) level = Math.min(level + 1, 3);
    if (analysis.sentiment === 'negative') level = Math.max(level - 1, 1);
    return level;
}

function generateYesNoResponse(analysis) {
    const yesProbability = calculateYesProbability(analysis.sentiment);
    const isYes = Math.random() < yesProbability;
    
    return isYes ? [
        "Los signos apuntan a que sí",
        "Las energías se alinean favorablemente",
        "El destino susurra una afirmación"
    ] : [
        "Los augurios sugieren cautela",
        "El cosmos muestra resistencia",
        "Las estrellas aconsejan buscar alternativas"
    ];
}

function calculateYesProbability(sentiment) {
    const probabilities = {
        positive: 0.7,
        neutral: 0.5,
        negative: 0.3
    };
    return probabilities[sentiment] || 0.5;
}

function enrichPredictionResult(result, analysis, options) {
    // Agregar metadatos de análisis
    result.analysis = analysis;
    result.timestamp = new Date().toISOString();

    // Construir respuesta final
    let finalPrediction = result.prediction;

    if (options.temporalReference) {
        finalPrediction = `${finalPrediction} ${options.temporalReference}.`;
    }

    if (options.yesNoResponse?.length > 0) {
        const yesNoPhrase = getRandomElement(options.yesNoResponse);
        finalPrediction = `${yesNoPhrase}. ${finalPrediction}`;
    }

    return {
        ...result,
        prediction: finalPrediction,
        version: '2.1'
    };
}

// Exportación (si es módulo)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        advancedPredictor,
        // ... otras exportaciones
    };
}