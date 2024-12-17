/* ------------------------------------------Splash Screen pg--------------------------------------- */
window.onload = function() {
    setTimeout(function() {
        document.getElementById("splash-screen").style.display = "none"; 
        document.body.style.overflow = "auto"; 
        const nav = document.querySelector('nav');
        nav.style.display = "flex";
    }, 3000); 
};
