window.addEventListener('load', function() {
    resizeHome();
    observer.observe(document.querySelector('.profile'));

});

window.visualViewport.addEventListener("resize", () => {
    resizeHome();
});

window.addEventListener('scroll', (event) => {

});

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.classList.contains('profile')){
                entry.target.classList.add('animate__animated');
                entry.target.classList.add('animate__flipInX');
                entry.target.classList.add('animate__delay-1s');
            }
        }
    });
});

function resizeHome() {
    let height = this.window.innerHeight;
    let sectionHome = this.document.getElementById('home');
    sectionHome.style.height = height+'px';
}

