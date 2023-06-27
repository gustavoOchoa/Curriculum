window.addEventListener('load', function() {
    resizeHome();
});

window.visualViewport.addEventListener("resize", () => {
    resizeHome();
});

function resizeHome() {
    let height = this.window.innerHeight;
    let sectionHome = this.document.getElementById('home');
    sectionHome.style.height = height+'px';
}