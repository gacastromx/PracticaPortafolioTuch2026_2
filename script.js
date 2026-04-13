document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');

    // Diccionario de comandos
    const commands = {
        'help': 'Comandos disponibles: info, stack, gaming, clear',
        'info': 'Estudiante de 5to Semestre en UTVCH. Especialista en automatización y ciberseguridad.',
        'stack': 'Sistemas: Fedora, Kali Linux. DB: MySQL. Web: JS, HTML, CSS.',
        'gaming': 'Ragnarok Online (Thunder Online Expert) | League of Legends: Diamond II Rank.',
        'clear': 'limpiar'
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.toLowerCase().trim();
            const response = document.createElement('div');
            
            // Lógica de respuesta
            if (command === 'clear') {
                output.innerHTML = 'Terminal limpia. Escribe "help"...';
            } else if (commands[command]) {
                response.innerHTML = `<span class="user-cmd">> ${command}</span><br>${commands[command]}`;
                output.appendChild(response);
            } else {
                response.innerHTML = `<span class="user-cmd">> ${command}</span><br>Comando no reconocido. Prueba con 'help'.`;
                output.appendChild(response);
            }

            input.value = ''; // Limpiar input
            output.scrollTop = output.scrollHeight; // Auto-scroll al final
        }
    });
});