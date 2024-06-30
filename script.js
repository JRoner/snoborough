

document.getElementById('terminal-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target.value;
        const terminalContent = document.getElementById('terminal-content');
        const newLine = document.createElement('div');
        newLine.classList.add('line');
        newLine.textContent = '> ' + input;

        // Get the input container
        const inputContainer = document.getElementById('terminal-input');
        
        // Insert the new line before the input container
        terminalContent.insertBefore(newLine, inputContainer);

        event.target.value = '';

        // Reset cursor position
        this.style.setProperty('--cursor-pos', 0);

        // Scroll to the bottom
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }
});