// EfectoTexto.js - Módulo para manejar la interfaz del oráculo
export function initOraculo() {
    // Configuración de elementos del DOM
    const preguntaInput = document.getElementById('pregunta');
    const resultadoDiv = document.getElementById('resultado');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const consultarBtn = document.getElementById('consultarBtn') || 
                        document.querySelector('button[onclick="consultar()"]');

    // Añadir estilos dinámicos
    addWaterTextStyles();

    // Manejadores de eventos
    if (consultarBtn) {
        consultarBtn.addEventListener('click', handleConsultar);
    } else {
        console.warn('Botón de consulta no encontrado');
    }

    if (limpiarBtn) {
        limpiarBtn.addEventListener('click', limpiarConsultaYRespuesta);
    }

    // Funciones internas
    function handleConsultar() {
        const pregunta = preguntaInput.value.trim();
        if (!pregunta) {
            alert('Por favor, escribe una pregunta');
            return;
        }
        
        try {
            const respuesta = window.advancedPredictor?.(pregunta) || 
                            { prediction: "El oráculo no está disponible" };
            
            resultadoDiv.innerHTML = '';
            playSounds();
            mostrarRespuestaAcuosaFluida(respuesta.prediction, resultadoDiv);
        } catch (error) {
            console.error('Error al consultar:', error);
            mostrarError();
        }
    }

    function playSounds() {
        try {
            const sounds = [
                { src: './sound/susurros.wav', volume: 0.8 },
                { src: './sound/godpower.wav', volume: 0.2 }
            ];
            
            sounds.forEach(sound => {
                const audio = new Audio(sound.src);
                audio.volume = sound.volume;
                audio.play().catch(e => console.log(`Error con ${sound.src}:`, e));
            });
        } catch (error) {
            console.log('Error con los audios:', error);
        }
    }

    function mostrarRespuestaAcuosaFluida(texto, contenedor) {
        const textoContainer = document.createElement('div');
        textoContainer.classList.add('agua-text');
        
        const parrafo = document.createElement('div');
        parrafo.classList.add('parrafo-agua');
        
        texto.split(' ').forEach((palabra, index) => {
            const palabraContainer = document.createElement('span');
            palabraContainer.classList.add('palabra-agua');
            
            [...palabra].forEach((letra, j) => {
                const span = document.createElement('span');
                span.textContent = letra;
                span.classList.add('letra-agua');
                span.style.animationDelay = `${calcularIndiceGlobal(texto, index, j)}ms`;
                palabraContainer.appendChild(span);
            });
            
            parrafo.appendChild(palabraContainer);
            
            if (index < texto.split(' ').length - 1) {
                parrafo.appendChild(document.createTextNode(' '));
            }
        });
        
        textoContainer.appendChild(parrafo);
        contenedor.appendChild(textoContainer);
    }

    function calcularIndiceGlobal(texto, indicePalabra, indiceLetra) {
        const palabras = texto.split(' ');
        let indiceGlobal = 0;
        
        for (let i = 0; i < indicePalabra; i++) {
            indiceGlobal += palabras[i].length + 1;
        }
        
        return (indiceGlobal + indiceLetra) * 30;
    }

    function limpiarConsultaYRespuesta() {
        preguntaInput.value = '';
        resultadoDiv.innerHTML = '';
    }

    function mostrarError() {
        resultadoDiv.innerHTML = '<div class="error">El oráculo no pudo responder</div>';
    }

    function addWaterTextStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            .agua-text {
                font-family: "Dancing Script", 'Times New Roman', serif;
                font-size: 3rem;
                line-height: 1.8;
                color:rgb(116, 116, 116);
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
                margin: 0 5px;
                margin-bottom: 5px;
                white-space: nowrap;
            }
            
            .letra-agua {
                display: inline-block;
                opacity: 0;
                transform: translateY(15px);
                color: #e1c78f;
                text-shadow: 0 0 10px rgba(14, 13, 13, 0.7);
                animation: emerger-agua-fluido 1.2s forwards ease-out;
                will-change: transform, opacity;
            }
            
            @keyframes emerger-agua-fluido {
                0% { opacity: 0; transform: translateY(15px) scaleY(0.9); filter: blur(6px); }
                100% { opacity: 1; transform: translateY(0) scaleY(1); filter: blur(0); }
            }
            
            .error {
                color: #d32f2f;
                font-size: 1.5rem;
                text-align: center;
                padding: 20px;
            }
        `;
        document.head.appendChild(styles);
    }

    // Exponer funciones necesarias globalmente
    window.consultar = handleConsultar;
    window.limpiarConsultaYRespuesta = limpiarConsultaYRespuesta;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initOraculo);