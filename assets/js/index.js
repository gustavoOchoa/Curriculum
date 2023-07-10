window.addEventListener('load', function() {
    resizeHome();
    observer.observe(document.querySelector('.profile'));
    observer.observe(document.querySelector('.selfie'));
    let cards = document.querySelectorAll('.edu-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    let bars = document.querySelectorAll('.skill-bar');
    bars.forEach(bar => {
        barFill.observe(bar);
    });
});

window.visualViewport.addEventListener("resize", () => {
    resizeHome();
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.classList.contains('profile')){ /*** profile info */
                addDeleteClass('add', ['animate__animated', 'animate__flipInX', 'animate__slow'], entry);
            }
            if(entry.target.classList.contains('selfie')){ /*** long text */
                addDeleteClass('add', ['animate__animated', 'animate__fadeIn', 'animate__slow', 'animate__delay-1s'], entry);
            }
            if(entry.target.classList.contains('edu-card')){ /*** card */
                addDeleteClass('add', ['animate__animated', 'animate__flipInY', 'animate__slow', 'animate__delay-1s'], entry);
            }
        }
        else{
            if(entry.target.classList.contains('profile')){ /*** profile info */
                addDeleteClass('del', ['animate__animated', 'animate__flipInX', 'animate__slow'], entry);
            }
            if(entry.target.classList.contains('selfie')){ /*** long text */
                addDeleteClass('del', ['animate__animated', 'animate__fadeIn', 'animate__slow', 'animate__delay-1s'], entry);
            }
            if(entry.target.classList.contains('edu-card')){ /*** card */
                addDeleteClass('del', ['animate__animated', 'animate__flipInY', 'animate__slow', 'animate__delay-1s'], entry);
            }
        }
    });
}, { threshold: [0] });

const barFill = new IntersectionObserver(bars => {
    bars.forEach(bar => {
        let width = bar.target.getAttribute('aria-describedby');
        let children = [...bar.target.children];

        if (bar.isIntersecting){
            children.forEach(item => {
                if(item.classList.contains('colored')){
                    item.classList.add('i'+width);
                }
            });
        }
        else{
            children.forEach(item => {
                if(item.classList.contains('colored')){
                    item.classList.remove('i'+width);
                }
            });
        }
        
        
    });
}, { threshold: [0] });

function resizeHome() {
    let height = this.window.innerHeight;
    let sectionHome = this.document.getElementById('home');
    sectionHome.style.height = height+'px';
}

function addDeleteClass(type, classes, entity){
    if(type === 'add'){
        entity.target.classList.remove('noShow');
        entity.target.classList.add('show');
        classes.forEach(element => {
            entity.target.classList.add(element);
        });
    }
    else{
        entity.target.classList.add('noShow');
        entity.target.classList.remove('show');
        classes.forEach(element => {
            entity.target.classList.remove(element);
        });
    }
}