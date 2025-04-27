

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
    clima:[
      "Las nubes se disipan, pero el sol aún no se asoma.",
      "El viento susurra secretos de cambios inminentes.",
      "La lluvia puede ser bendición o tormenta, según el corazón que la reciba.",
      "a veces quieres ver el sol, pero la lluvia es necesaria.",
      "puede ser que el clima sea el que quieres, ten cuidado con lo que deseas."
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
      "Podrias elegir viajar o podrias elegir quedarte, el medio en el que lo hagas no importa.",
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
      "Todo es probable, pero tu... que piensas?",
      "algunas preguntas no tienen respuesta.",
      "Las estrellas titilan, pero su mensaje es un eco distante.",
      "Las sombras del destino son caprichosas y juegan al escondite.",
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
  const enhancedKeywords = {
    clima: ['mañana','lloverá','clima', 'tiempo', 'lluvia', 'sol', 'nieve', 'tormenta', 'viento', 'calor', 'frío', 'humedad', 'pronóstico', 'meteorología', 'temperatura', 'cielo', 'atmosfera'],
    
    amor: ['amor', 'pareja', 'relación', 'novio', 'novia', 'matrimonio', 'boda', 'romance', 'enamorado', 'corazón', 'sentimiento', 'pasión', 'amoroso', 'romántico', 'flechazo', 'amante', 'crush', 'ex', 'divorcio', 'romper'],
    
    salud: ['salud', 'enfermedad', 'dolor', 'sanar', 'médico', 'hospital', 'bienestar', 'dolencia', 'recuperación', 'cuerpo', 'medicina', 'tratamiento', 'síntoma', 'malestar', 'saludable', 'virus', 'físico', 'mental', 'curar', 'enfermo'],
    
    dinero: ['baloto', 'dinero', 'riqueza', 'fortuna', 'finanzas', 'económico', 'inversión', 'negocio', 'ahorro', 'ganancia', 'prosperidad', 'abundancia', 'capital', 'billete', 'precio', 'compra', 'venta', 'deuda', 'préstamo', 'lotería', 'herencia', 'banco', 'millonario', 'pagar', 'cobrar', 'ganar'],
    
    trabajo: ['trabajo', 'empleo', 'profesión', 'carrera', 'laboral', 'jefe', 'ascenso', 'empresa', 'oficina', 'proyecto', 'ocupación', 'puesto', 'sueldo', 'profesional', 'curriculum', 'entrevista', 'compañeros', 'despido', 'contrato', 'habilidades', 'experiencia'],
    
    futuro: ['dejará', 'preparar', 'anticipar', 'planear', 'proyectar', 'intentaré', 'correré', 'volaré', 'lograré', 'futuro', 'destino', 'porvenir', 'mañana', 'camino', 'rumbo', 'suerte', 'vida', 'plan', 'adelante', 'próximo', 'después', 'predecir', 'adivinar', 'años', 'tiempo', 'pronóstico', 'vaticinio', 'presagio', 'profecía', 'augurio'],
    
    muerte: ['tumbas','muertos','muerto','destruira', 'destruir', 'nostradamus', 'acabará', 'mundo', 'muerte', 'morir', 'fallecimiento', 'funeral', 'más allá', 'fin', 'descanso eterno', 'tumba','tumbas', 'luto', 'pérdida', 'duelo', 'trascender', 'final', 'despedida', 'cementerio', 'alma', 'espíritu', 'vida eterna', 'fantasma', 'reencarnación', 'cometa', 'asteroide', 'meteoro', 'apocalipsis', 'cataclismo', 'impacto', 'colisión', 'extinción', 'desastre', 'catástrofe', 'calamidad', 'devastación', 'aniquilación', 'desolación', 'ruinas', 'cenizas', 'entierro'],

    viajes: ['corren','vuelan','viaje', 'mudanza', 'país', 'extranjero', 'aventura', 'destino', 'turismo', 'vacaciones', 'explorar', 'camino', 'recorrido', 'mapa', 'traslado', 'visitar', 'lejos', 'cerca', 'frontera', 'pasaporte', 'maleta', 'hotel', 'vuelo', 'avión', 'tren', 'viajar', 'conocer', 'descubrir'],
    
    familia: ['familia', 'hijo', 'hija', 'padre', 'madre', 'hermano', 'hermana', 'pariente', 'hogar', 'casa', 'adopción', 'embarazo', 'padres', 'abuelos', 'nietos', 'herencia familiar', 'apellido', 'tradición', 'linaje', 'descendencia', 'familiar', 'consanguíneo', 'parentesco'],
    
    decisiones: ['decidir', 'elección', 'opción', 'camino', 'dilema', 'duda', 'alternativa', 'escoger', 'elegir', 'indecisión', 'consecuencia', 'encrucijada', 'resolver', 'determinar', 'preferir', 'seleccionar', 'incertidumbre', 'crisis', 'decisión', 'definir', 'deliberar', 'evaluar', 'considerar', 'valorar'],

    educacion: ['titulo','estudiar','estudio', 'universidad', 'semestre', 'carrera', 'escuela', 'aprender', 'título', 'examen', 'aprobar', 'maestro', 'alumno', 'conocimiento', 'sabiduría', 'curso', 'materia', 'academia', 'graduación', 'tesis', 'máster', 'doctorado', 'beca', 'libro', 'lección', 'enseñanza', 'aprendizaje', 'educación', 'estudiar']
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
function detectCategory(question) {
  if (!question || typeof question !== 'string' || question.trim() === '') {
      return "ambigua"; // Categoría predeterminada si la pregunta es inválida.
  }
  
  const normalized = normalizeText(question);
  const scores = {};

  // Calcular puntajes por categoría
  for (const [category, keywords] of Object.entries(enhancedKeywords)) {
      scores[category] = keywords.reduce((acc, keyword) => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'i');
          const match = normalized.match(regex);
          
          if (match) {
              let score = 2; // Puntaje base
              // Bonus por posición (inicio/final de la pregunta)
              if (match.index < 3 || match.index > normalized.length - keyword.length - 3) {
                  score += 1;
              }
              return acc + score;
          }
          return acc; // Si no hay coincidencia, retornar acumulador sin cambios.
      }, 0);
  }

  // Asignar peso adicional a categorías específicas
  for (const category in scores) {
      if (category !== "ambigua") {
          scores[category] += 1; // Incrementar el puntaje de categorías no ambiguas.
      }
  }

  // Determinar categoría dominante
  let maxCategory = "ambigua";
  let maxScore = 0;

  for (const [category, score] of Object.entries(scores)) {
      if (score > maxScore) {
          maxScore = score;
          maxCategory = category;
      } else if (category !== "ambigua" && score >= maxScore * 0.8) {
          // Priorizar categorías con puntaje cercano al máximo
          maxCategory = category;
      }
  }

  // Threshold dinámico según longitud de la pregunta
  const wordCount = normalized.split(/\s+/).filter(w => w.length > 0).length;
  const threshold = wordCount <= 4 ? 2 : 3;

  // Determinar categoría final
  const finalCategory = maxScore >= threshold ? maxCategory : "ambigua";

  // Añadir aquí el console.log para depuración
  console.log(`Categoría detectada: ${finalCategory}, Puntajes:`, scores);

  return finalCategory; // Retorna la categoría final
}

function generatePrediction(category, options = {}) {
    const config = {
        specialPhraseChance: 0.1,
        combinedPhraseChance: 0.3,
        mysticalLevel: 2,
        currentMoonPhase: null,
        currentDate: new Date(),
        ...options
    };

    // Frase especial con probabilidad configurable
    if (Math.random() < config.specialPhraseChance) {
        return getRandomElement(specialPhrases);
    }

    // Obtener frase base según categoría
    const categoryPhrases = categories[category] || categories.ambigua;
    let prediction = getRandomElement(categoryPhrases);

    // Posible frase ambigua complementaria
    if (Math.random() < config.combinedPhraseChance) {
        prediction += " " + getRandomElement(categories.ambigua);
    }

    // Elementos místicos según nivel
    if (config.mysticalLevel >= 2 && Math.random() < 0.3) {
        prediction += " " + getRandomElement(mysticalElements.standard);
    }
    
    if (config.mysticalLevel >= 3 && Math.random() < 0.2) {
        prediction += " " + getRandomElement(mysticalElements.cosmic);
    }

    return prediction;
}

function processPrediction(question, options = {}) {
    const detectedCategory = detectCategory(question);
    const category = options.category || detectedCategory;
    
    return {
        question,
        prediction: generatePrediction(category, options),
        category,
        detectedCategory,
        timestamp: new Date().toISOString(),
        mysticalLevel: options.mysticalLevel || 1,
        moonPhase: options.currentMoonPhase || "desconocida"
    };
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