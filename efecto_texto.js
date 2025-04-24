function consultar() {
    const pregunta = document.getElementById('pregunta').value;
    if (!pregunta.trim()) {
        alert('Por favor, escribe una pregunta');
        return;
    }
    
    // Obtener la respuesta de la predicción
    const respuesta = advancedPredictor(pregunta);
    
    // Limpiar el contenedor de respuesta
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    
    // Reproducir AMBOS sonidos simultáneamente
    try {
        // Sonido de susurros
        const susurro = new Audio('./sound/susurros.wav');
        susurro.volume = 0.8; // Ajusta el volumen según necesidad
        susurro.play().catch(e => console.log('Error al reproducir susurros:', e));
        
        // Sonido godpower
        const poder = new Audio('./sound/godpower.wav');
        poder.volume = 0.2; // Ajusta el volumen según necesidad
        poder.play().catch(e => console.log('Error al reproducir godpower:', e));
        
    } catch (error) {
        console.log('Error con los audios:', error);
    }
    
    // Efecto de letras tipo agua fluido
    mostrarRespuestaAcuosaFluida(respuesta.prediction, resultadoDiv);
}

function mostrarRespuestaAcuosaFluida(texto, contenedor) {
    // Añadir un contenedor para el texto
    const textoContainer = document.createElement('div');
    textoContainer.classList.add('agua-text');
    contenedor.appendChild(textoContainer);
    
    // Añadir el texto completo al contenedor
    const parrafo = document.createElement('div');
    parrafo.classList.add('parrafo-agua');
    textoContainer.appendChild(parrafo);
    
    // Dividir el texto en palabras
    const palabras = texto.split(' ');
    
    // Añadir todas las palabras al contenedor inmediatamente
    palabras.forEach((palabra, index) => {
        const palabraContainer = document.createElement('span');
        palabraContainer.classList.add('palabra-agua');
        
        // Añadir cada letra de la palabra
        for (let j = 0; j < palabra.length; j++) {
            const span = document.createElement('span');
            span.textContent = palabra[j];
            span.classList.add('letra-agua');
            
            // Calcular un retraso basado en la posición general en el texto
            const globalIndex = calcularIndiceGlobal(palabras, index, j);
            const delay = globalIndex * 30; // Retraso más corto para mayor fluidez
            
            span.style.animationDelay = `${delay}ms`;
            palabraContainer.appendChild(span);
        }
        
        parrafo.appendChild(palabraContainer);
        
        // Añadir espacio después de cada palabra excepto la última
        if (index < palabras.length - 1) {
            const espacio = document.createElement('span');
            espacio.innerHTML = '&nbsp;';
            parrafo.appendChild(espacio);
        }
    });
}

// Función para calcular un índice global para cada letra en el texto completo
function calcularIndiceGlobal(palabras, indicePalabra, indiceLetra) {
    let indiceGlobal = 0;
    
    // Sumar la longitud de las palabras anteriores más los espacios
    for (let i = 0; i < indicePalabra; i++) {
        indiceGlobal += palabras[i].length + 1; // +1 por el espacio
    }
    
    // Añadir el índice dentro de la palabra actual
    indiceGlobal += indiceLetra;
    
    return indiceGlobal;
}

// Añadir estilos CSS directamente desde JavaScript
const estilosAguaFluido = document.createElement('style');
estilosAguaFluido.textContent = `
    .respuesta {
        background-color: var(--secundario-color);
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .agua-text {
        font-family: 'Trajan Pro', 'Times New Roman', serif;
        font-size: 2rem;
        line-height: 1.8;
        color: #E1C78F;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 20px;
    }
    
    .parrafo-agua {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
    
    .palabra-agua {
        display: inline-flex;
        margin-bottom: 5px;
        white-space: nowrap;
    }
    
    .letra-agua {
        display: inline-block;
        opacity: 0;
        transform: translateY(15px);
        color: #E1C78F;
        text-shadow: 0 0 10px rgba(225, 199, 143, 0.7);
        animation: emerger-agua-fluido 1.2s forwards ease-out;
        will-change: transform, opacity;
    }
    
    @keyframes emerger-agua-fluido {
        0% {
            opacity: 0;
            transform: translateY(15px) scaleY(0.9);
            filter: blur(6px);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scaleY(1);
            filter: blur(0);
        }
    }
    
    /* Sutil brillo dorado en el contenedor */
    .respuesta::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(ellipse at center, 
            rgba(225, 199, 143, 0.1) 0%, 
            rgba(63, 79, 68, 0) 70%);
        pointer-events: none;
        animation: sutil-brillo 8s infinite ease-in-out;
        z-index: 1;
        opacity: 0.3;
    }
    
    @keyframes sutil-brillo {
        0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
        }
        50% {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.4;
        }
    }
`;
document.head.appendChild(estilosAguaFluido);