window.addEventListener('load', function() {
    resizeHome();
});

window.visualViewport.addEventListener("resize", () => {
    resizeHome();
});

function resizeHome() {
    let height = this.window.innerHeight;
    console.log(height);
    let sectionHome = this.document.getElementById('home');
    console.log('--');
    sectionHome.style.height = height+'px';
}