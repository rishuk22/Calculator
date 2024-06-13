document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    const trigButtons = document.querySelector('.trig-buttons');
    const toggleTrigButton = document.querySelector('.toggle-trig');
    let displayValue = '';
  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
  
            switch (value) {
                case 'AC':
                    displayValue = '';
                    break;
                case 'DEL':
                    displayValue = displayValue.slice(0, -1);
                    break;
                case '=':
                    try {
                        displayValue = eval(displayValue).toString();
                    } catch {
                        displayValue = 'Error';
                    }
                    break;
                case 'sin':
                    displayValue = Math.sin(parseFloat(displayValue) * Math.PI / 180).toString();
                    break;
                case 'cos':
                    displayValue = Math.cos(parseFloat(displayValue) * Math.PI / 180).toString();
                    break;
                case 'tan':
                    displayValue = Math.tan(parseFloat(displayValue) * Math.PI / 180).toString();
                    break;
                default:
                    displayValue += value;
            }
  
            display.value = displayValue;
        });
    });
  
    toggleTrigButton.addEventListener('click', () => {
        trigButtons.style.display = trigButtons.style.display === 'none' ? 'grid' : 'none';
    });
  });