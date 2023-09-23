function switchForm() {
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('sign-up-form');
    
    if (signInForm.classList.contains('active')) {
        signInForm.classList.remove('active');
        signInForm.classList.add('leaving', 'to-right');
        
        signUpForm.classList.add('active', 'entering', 'from-left');
        
        setTimeout(() => {
            signInForm.classList.remove('leaving', 'to-right');
            signUpForm.classList.remove('entering', 'from-left');
        }, 500); 
    } else {
        signUpForm.classList.remove('active');
        signUpForm.classList.add('leaving', 'to-left');
        
        signInForm.classList.add('active', 'entering', 'from-right');
        
        setTimeout(() => {
            signUpForm.classList.remove('leaving', 'to-left');
            signInForm.classList.remove('entering', 'from-right');
        }, 500);
    }
}