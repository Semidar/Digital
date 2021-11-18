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

});

