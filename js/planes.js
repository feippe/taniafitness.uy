let planes = [
    {
        id: 1,
        nombre: "Plan Standard Online",
        precios: ['<small>$</small>1.890<small> x 1 mes</small>', '<small>$</small>3.900<small> x 3 meses</small>'],
        descripcion: `
            <i class="fa-regular fa-circle-check"></i> Rutinas con videos explicativos<br/>
            <i class="fa-regular fa-circle-check"></i> Plan de alimentación por la nutricionista<br/>
            <i class="fa-regular fa-circle-check"></i> Acceso a mi canal con info exclusiva<br/>
            <i class="fa-regular fa-circle-check"></i> Guia para entrenar en el mundo online<br/>
            <i class="fa-regular fa-circle-check"></i> Soporte a través de Whatsapp<br/>
            <i class="fa-regular fa-circle-check"></i> Grupo de Whatsapp<br/>
            <i class="fa-regular fa-circle-check"></i> Chequeo mensual
        `,
        imagen: "./images/gallery/pso-400x400.jpeg",
        link: "./servicios/plan-standard-online",
        estrellas: 80
    },
    {
        id: 2,
        nombre: "Plan Premium Online",
        precios: ['<small>$</small>2.890<small> x 1 mes</small>', '<small>$</small>6.900<small> x 3 meses</small>'],
        descripcion: `
            <i class="fa-regular fa-circle-check"></i> Rutinas con videos explicativos<br/>
            <i class="fa-regular fa-circle-check"></i> Plan de alimentación por la nutricionista<br/>
            <i class="fa-regular fa-circle-check"></i> Plan opción vegana o sin glúten<br/>
            <i class="fa-regular fa-circle-check"></i> Acceso a mi canal con info exclusiva<br/>
            <i class="fa-regular fa-circle-check"></i> Guia para entrenar en el mundo online<br/>
            <i class="fa-regular fa-circle-check"></i> Soporte a través de Whatsapp<br/>
            <i class="fa-regular fa-circle-check"></i> Grupo de Whatsapp<br/>
            <i class="fa-regular fa-circle-check"></i> Chequeo mensual<br/>
            <i class="fa-regular fa-circle-check"></i> Seguimiento semanal y ajuste del plan<br/>
            <i class="fa-regular fa-circle-check"></i> Videollamada x dudas y asesoramiento<br/>
            <i class="fa-regular fa-circle-check"></i> 15% Off en siguiente plan online
        `,
        imagen: "./images/gallery/ppo-400x400.jpeg",
        link: "./servicios/plan-premium-online",
        estrellas: 100
    },
    {
        id: 3,
        nombre: "Plan Mini GYM",
        precios: ['<small>$</small>2.300<small> 2 veces x semana</small>', '<small>$</small>3.500<small> 3 veces x semana</small>', '<small>$</small>5.500<small> 5 veces x semana</small>'],
        descripcion: `
            <i class="fa-regular fa-circle-check"></i> Atención totalmente personalizada<br/>
            <i class="fa-regular fa-circle-check"></i> Adaptado a tus objetivos<br/>
            <i class="fa-regular fa-circle-check"></i> Entrenamiento con pesas y máquinas<br/>
            <i class="fa-regular fa-circle-check"></i> Opción a incluir funcional<br/>
            <i class="fa-regular fa-circle-check"></i> Frecuencia: 2, 3 o 5 veces por semana<br/>
            <i class="fa-regular fa-circle-check"></i> Ambiente íntimo y sin distracciones<br/>
            <i class="fa-regular fa-circle-check"></i> Grupos reducidos<br/>
            <i class="fa-regular fa-circle-check"></i> Comunidad de mujeres<br/>
            <i class="fa-regular fa-circle-check"></i> 🔥 Primera clase GRATIS
        `,
        imagen: "./images/gallery/pmg-400x400.jpeg",
        link: "./servicios/plan-mini-gym",
        estrellas: 100
    }
];


function cargarDatosDelPlan() {
    const urlParams = new URLSearchParams(window.location.search);
    const planId = urlParams.get('plan');

    if (planId) {
        const plan = planes.find(p => p.id === parseInt(planId));
        if (plan) {
            document.getElementById('plan-nombre').textContent = plan.nombre;
            document.getElementById('bread-name').textContent = plan.nombre;
            document.getElementById('nombre-plan-header').textContent = plan.nombre;
            document.querySelector('title').textContent = plan.nombre + " - Tania Fitness";
            document.getElementById('imgGallery').src = plan.imagen;
            document.getElementById('imgGallery').alt = plan.nombre;
            document.getElementById('imgZoom').href = plan.imagen;
            document.getElementById('estrellas').style.width = plan.estrellas + "%";
            plan.precios.forEach(precio => {
                document.getElementById('product-price').innerHTML += `<ins>${precio}</ins> <br>`;
            });
            document.getElementById('product-description').innerHTML = plan.descripcion;
        }
    }
}

cargarDatosDelPlan();