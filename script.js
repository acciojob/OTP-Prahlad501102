document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');
    const codeContainer = document.querySelector('.code-container');

   
    codeContainer.addEventListener('input', (e) => {
        const target = e.target;
        
        // Ensure only digits are stored (maxlength="1" helps, but doesn't prevent paste)
        if (target.value.length > 1) {
             target.value = target.value.slice(0, 1);
        }

        // Check if a value was entered and move focus to the next field
        if (target.value !== '' && target.nextElementSibling && target.nextElementSibling.classList.contains('code')) {
            target.nextElementSibling.focus();
        }
    });

    codeContainer.addEventListener('keydown', (e) => {
        const target = e.target;
        
        if (e.key === 'Backspace') {
            
            if (target.value !== '') {
                target.value = ''; // Clear the current field
            } 
            else if (target.previousElementSibling && target.previousElementSibling.classList.contains('code')) {
                e.preventDefault(); 
                
                target.previousElementSibling.focus();
                
                target.previousElementSibling.value = '';
            }
        }
    });

    codes.forEach(code => {
        code.addEventListener('focus', (e) => {
            e.target.select();
        });
    });
});