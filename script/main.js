window.addEventListener('load',()=>{

    // slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpead: 2000,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    // slider

    // burger menu
    let burgerBtn = document.querySelector('.burger');
    let menu = document.querySelector('.nav')

    burgerBtn.addEventListener('click',()=>{

        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
        
    });
    // burger menu

    // our gallery
    let workers = document.querySelector('.team-gallery');
    let info  = document.querySelector('.about-text');

    workers.children[0].className += ' active';
    info.className += ' active';

    addTemplate(workers.children[0].id, workers.children[0].children[1].children[2].innerHTML);

    for(let worker of workers.children){
         
        worker.addEventListener('click',()=>{

            info.className = ' about-text';

            setTimeout(change = ()=>{
                info.className += ' active';
            },200)

            for(let worker of workers.children){
                worker.checked = false;
                worker.className = ' worker';      
            }
            text = worker.children[1].children[2].innerHTML;
            worker.checked = true;
            worker.className += ' active';
            
            addTemplate(worker.id, text);
        });
        
    };
    function addTemplate(id, text){
        templateMessege = '';
        templateMessege +=`
            <p>
                ${id[0].toUpperCase()+id.substring(1)}<br>
                ${text}
            </p>
        `;
        info.innerHTML = templateMessege;
    }
    // our gallery

    // leaflet
    let map = L.map('map').setView([50.519606, 30.508938], 50);

    L.tileLayer('https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=OjmJNE1VbfupZ7eDEkWq',{
        attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    let marker = L.marker([50.519606, 30.508938]).addTo(map);
    // leaflet

    // form validation
    let error = document.querySelector('.error')
    let form = document.form;
    console.dir(form);

    let validate = (elem, pattern)=>{
        let res = elem.value.search(pattern);
        if(res == -1){
            elem.className = 'invalid';
            elem.value  = '';
            elem.placeholder = 'must be letters';
        }
        else{
            elem.className = 'valid'
        }
    }

    let validateEmail = (elem, pattern)=>{
        let res = elem.value.search(pattern);
        if(res == -1){
            elem.className = 'invalid';
            elem.value  = '';
            elem.placeholder = 'example@mail.net';
        }
        else{
            elem.className = 'valid'
        }
    }

    form[0].addEventListener('change',()=>{

        let pattern = /[a-zA-Z]/;
        validate(form[0], pattern);

    });
    form[1].addEventListener('change',()=>{

        let pattern = /[a-zA-Z]/;
        validate(form[1], pattern);

    });

    form[2].addEventListener('change',()=>{

        let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validateEmail(form[2], pattern);

    });

    form[4].addEventListener('click',(e)=>{

        for(let i = 0; i < 3; i++){
            if(form[i].value.length == 0){
                form[i].className = 'invalid';
                error.style.display = 'block';
                e.preventDefault();
            }
        }

    });
    // form validatio

});

