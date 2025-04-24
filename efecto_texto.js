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
    
    // Reproducir sonido
    try {
        const sonido = new Audio('./sound/susurros.wav');
        sonido.volume = 0.7; // Ajustar volumen (opcional)
        sonido.play().catch(e => console.log('Error al reproducir el sonido:', e));
    } catch (error) {
        console.log('Error con el audio:', error);
    }
    
    // Efecto de letras tipo agua
    mostrarRespuestaAcuosa(respuesta.prediction, resultadoDiv);
}

function mostrarRespuestaAcuosa(texto, contenedor) {
    // Añadir un contenedor para el texto
    const textoContainer = document.createElement('div');
    textoContainer.classList.add('agua-text');
    contenedor.appendChild(textoContainer);
    
    // Añadir el fondo de agua
    const aguaFondo = document.createElement('div');
    aguaFondo.classList.add('agua-fondo');
    contenedor.appendChild(aguaFondo);
    
    // Dividir el texto en palabras
    const palabras = texto.split(' ');
    
    // Mostrar cada palabra completa
    let i = 0;
    
    // Crear un div para el contenedor flexible
    let flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');
    textoContainer.appendChild(flexContainer);
    
    const mostrarSiguientePalabra = () => {
        if (i < palabras.length) {
            const palabra = palabras[i];
            
            // Crear un contenedor para la palabra completa
            const palabraContainer = document.createElement('span');
            palabraContainer.classList.add('palabra-agua');
            
            // Añadir cada letra de la palabra con efecto
            for (let j = 0; j < palabra.length; j++) {
                const span = document.createElement('span');
                span.textContent = palabra[j];
                span.classList.add('letra-agua');
                
                // Añadir un retraso ligeramente aleatorio para efecto más orgánico
                const delay = j * 80 + Math.random() * 100;
                span.style.animationDelay = `${delay}ms`;
                
                palabraContainer.appendChild(span);
            }
            
            // Añadir la palabra completa al contenedor
            flexContainer.appendChild(palabraContainer);
            
            // Avanzar a la siguiente palabra
            i++;
            
            // Programar la siguiente palabra con un tiempo basado en la longitud
            setTimeout(mostrarSiguientePalabra, palabra.length * 60 + 100);
        }
    };
    
    // Comenzar el proceso
    mostrarSiguientePalabra();
}

// Añadir estilos CSS directamente desde JavaScript
const estilosAgua = document.createElement('style');
estilosAgua.textContent = `
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
    }
    
    .agua-fondo {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(ellipse at center, rgba(29, 45, 60, 0.5) 0%, rgba(29, 45, 60, 0.8) 100%);
        background-size: cover;
        opacity: 0.4;
        z-index: 1;
        animation: mover-agua 15s infinite linear;
        pointer-events: none;
    }
    
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
    }
    
    .palabra-agua {
        display: inline-flex;
        margin-bottom: 5px;
        white-space: nowrap;
    }
    
    .letra-agua {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px) translateZ(0);
        color: #E1C78F;
        text-shadow: 0 0 10px rgba(225, 199, 143, 0.7);
        animation: emerger-agua 1.5s forwards;
    }
    
    @keyframes emerger-agua {
        0% {
            opacity: 0;
            transform: translateY(20px) scaleY(0.8) translateZ(0);
            filter: blur(10px);
        }
        30% {
            opacity: 0.3;
            transform: translateY(15px) scaleY(1.2) translateZ(0);
            filter: blur(5px);
        }
        60% {
            opacity: 0.7;
            transform: translateY(5px) scaleY(0.9) translateZ(0);
            filter: blur(2px);
        }
        80% {
            opacity: 0.9;
            transform: translateY(2px) scaleY(1.05) translateZ(0);
            filter: blur(1px);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scaleY(1) translateZ(0);
            filter: blur(0);
        }
    }
    
    @keyframes mover-agua {
        0% {
            transform: rotate(0deg) scale(1);
        }
        50% {
            transform: rotate(180deg) scale(1.2);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }
    
    /* Añadir un efecto de ondulación al contenedor */
    .respuesta::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(ellipse at center, 
                rgba(161, 123, 92, 0.1) 0%, 
                rgba(63, 79, 68, 0) 70%);
        pointer-events: none;
        animation: ondular 8s infinite ease-in-out;
        z-index: 1;
    }
    
    @keyframes ondular {
        0%, 100% {
            transform: scale(1);
            opacity: 0.3;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(estilosAgua);