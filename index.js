/* function themeNuitJour() {
console.log("Hello");
    
const date = new Date()
const hour = date.getHours()

if (hour < 5 || hour < 20) {

    document.documentElement.style.setProperty('--main-bg-color','black')
    document.documentElement.style.setProperty('--second-color','white')
    
} else{

    document.documentElement.style.setProperty('--main-bg-color','white')
    document.documentElement.style.setProperty('--second-color','black')
}
}

themeNuitJour()   */


/* Bouton Mode Nuit  */
const toggleSwitch = document.querySelector('.toggle_switch input[type="checkbox"]');



toggleSwitch.addEventListener('click', () => {
    const body = document.body;
    const arrow = document.getElementById('year');


    if (body.classList.contains('light')) {

        body.classList.remove('light');
        body.classList.add('dark');
        document.documentElement.style.setProperty('--main-bg-color', 'black')
        document.documentElement.style.setProperty('--second-color', 'white')
        arrow.src = './style/assets/ui/Arrow_high_white.png'
        console.log("Hello");

    } else if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        document.documentElement.style.setProperty('--main-bg-color', 'white')
        document.documentElement.style.setProperty('--second-color', 'black')
        console.log("apagnan");
    }
});
/* --------------- */

/* Projet , hover image  */

const projects = document.querySelector(".projects");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview-img");

let isInside = false;

const projectImages = {
    p1: "./media/images/5.jpg",
    p2: "./media/images/Logo_FTP.png",
    p3: "./media/images/App_web.jpg",
    p4: "./media/images/portfolio.jpg",
    p5: "./media/images/Site_vitrine.png",
};

const isMouseInsideContainer = (e) => {
    const containerRect = projects.getBoundingClientRect();
    const scrollY = window.scrollY;
    const containerTop = containerRect.top + scrollY;
    const containerBottom = containerRect.bottom + scrollY;
    return (
        e.pageX >= containerRect.left &&
        e.pageX <= containerRect.right &&
        e.pageY >= containerTop &&
        e.pageY <= containerBottom
    );
};

const moveProject = (e) => {
    const previewRect = preview.getBoundingClientRect();
    const offsetX = previewRect.width / 2;
    const offsetY = previewRect.height / 2;

    preview.style.left = e.pageX - offsetX + "px";
    preview.style.top = e.pageY - offsetY + "px";
};

const moveProjectImg = (project) => {
    const projectId = project.id;
    const imageURL = projectImages[projectId];

    if (imageURL) {
        previewImg.style.backgroundImage = `url(${imageURL})`;
    }
};

const resizePreviewImg = (scaleValue) => {
    gsap.to(previewImg, 0.3, { scale: scaleValue });
};

const moveStuff = (e) => {
    const mouseInside = isMouseInsideContainer(e);

    if (mouseInside !== isInside) {
        isInside = mouseInside;
        if (isInside) {
            gsap.to(preview, 0.3, { scale: 1 });
        } else {
            gsap.to(preview, 0.3, { scale: 0 });
        }
    }
};

const modalProjet = document.querySelector('.modal_projet');

Array.from(projects.children).forEach((project) => {
    project.addEventListener("mousemove", moveProject);
    project.addEventListener("mousemove", moveProjectImg.bind(null, project));
    project.addEventListener("mouseenter", () => resizePreviewImg(0.8));
    project.addEventListener("mouseleave", () => resizePreviewImg(1));
    project.addEventListener('click', () => {
        modalProjet.style.display = "block";
    });

});

window.addEventListener("mousemove", moveStuff);


/* fermeture modal */

const arrow = document.querySelector('.arrow_back');

arrow.onclick = function() {
    modalProjet.style.display = "none";
  }


  /* Différentes modal  */

  // Sélectionne les éléments déclencheurs pour chaque projet
const projectTriggers = document.querySelectorAll('.project');



// Ajoute un gestionnaire d'événements pour chaque élément déclencheur
projectTriggers.forEach(project => {
    project.addEventListener('click', () => {
        // Affiche la modal correspondante
        modalProjet.style.display = "block";
        
        // Met à jour le contenu de la modal avec les détails du projet
        updateModalContent(project.id);
    });
});

// Fonction pour mettre à jour le contenu de la modal en fonction du projet sélectionné
function updateModalContent(projectId) {
    const modalTitle = document.querySelector('.titre_modal h1');
    const modalSubtitle = document.querySelector('.titre_modal h3');
    const modalDate = document.querySelector('.titre_modal p');
    const modalLink = document.querySelector('.link_modal a');
    const modalImages = document.querySelector('.img_modal');
    const modalObjectif = document.querySelector('.objectif_modal p');
    const modalRole = document.querySelector('.role_modal p');
    const modalMissions = document.querySelector('.missions_modal p');
    const modalSkills = document.querySelector('.skills_modal p');
    const modalOutils = document.querySelector('.outils_modal');

    // Exemple de contenu à remplacer
    modalTitle.textContent = "Titre du projet";
    modalSubtitle.textContent = "Sous-titre du projet";
    modalDate.textContent = "Date du projet";
    modalLink.href = "lien-vers-github";

    /* contenu fonction de projectId */ 
   if (projectId === "p1") {
        modalTitle.textContent = "Boutique en Ligne";
        modalSubtitle.textContent = "Marketing";
        modalDate.textContent = "2022";
        modalLink.textContent = "Instagram";
        modalLink.href = "https://www.instagram.com/toutoune_shop/";
        modalLink.target = "_blank";

        
        modalImages.innerHTML = `
            <img src="./media/images/Boutique_1.jpg" alt="" class="pic" width="300px" height="400px">
            <img src="./media/images/Boutique_2.jpg" alt="" class="pic" width="300px" height="400px">
            <img src="./media/images/Boutique_3.jpg" alt="" class="pic" width="300px" height="400px">
            <img src="./media/images/Boutique_4.jpg" alt="" class="pic" width="300px" height="400px">
            <img src="./media/images/photo_passions2.jpg" alt="" class="pic" width="300px" height="400px">

        `;
        modalObjectif.textContent = "Ouvrir ma propre boutique en ligne de vêtements/Sneakers exclusives sur Instagram";
        modalRole.textContent = "Créateur";
        modalMissions.textContent = "Sortir de nouvelles exclusivités, satisfaire les besoins des clients, réaliser du bénéfice, fonder une communauté";
        modalSkills.textContent = "Négociation, Implication, Comptabilité";
        
        modalOutils.innerHTML = `
        <h2>Outils</h2>
            <img src="./style/assets/ui/icons8-instagram-96.png" alt="Logo Instagram">
            <p>Instagram</p>

            <img src="./style/assets/ui/icons8-tic-tac-100.png" alt="Logo Tiktok">
            <p>TitTok</p>

            <img src="./style/assets/ui/icons8-application-canva-96.png" alt="Logo Canva">
            <p>Canva</p>
            
        `;
    } else if (projectId === "p2") {
        modalTitle.textContent = "Fabrik Ta Pépite";
        modalSubtitle.textContent = "Gestion de projet";
        modalDate.textContent = "2023";
        modalLink.textContent = "Linkedin";
        modalLink.href = "https://www.linkedin.com/posts/benech_fabriktapaezpite-prix-prix-activity-7173606746517585920-YdoD?utm_source=share&utm_medium=member_desktop";
        modalLink.target = "_blank";
       /*  modalLink.textContent = "Iut Lannion";
        modalLink.href = "https://iut-lannion.univ-rennes.fr/laureats-la-finale-regionale-fabrik-ta-pepite"
        modalLink.target = "_blank" */

        modalImages.innerHTML = `
            <img src="./media/images/8.png" alt="" class="pic" width="800px" height="400px">
            <img src="./media/images/9.png" alt="" class="pic" width="800px" height="400px">
            <img src="./media/images/10.png" alt="" class="pic" width="800px" height="400px">
            <img src="./media/images/12.png" alt="" class="pic" width="800px" height="400px">
            <img src="./media/images/14.png" alt="" class="pic" width="800px" height="400px">

        `;
        modalObjectif.textContent = "L'objectif est de trouver une idée innovante, tester son potentiel, construire un business model, réaliser un prototype, Développer sa communication sur le terrain, se challenger devant un jury d'experts";
        modalRole.textContent = "Concepteur, Designer";
        modalMissions.textContent = "Réaliser une charte graphique cohérente, coordonner les actions du projet";
        modalSkills.textContent = "Créativité, Esprit d'initiative, Pouvoir de conviction";
        modalOutils.innerHTML = `
        <h2>Outils</h2>

            <img src="./style/assets/ui/icons8-concepteur-d'affinité-96.png" alt="Logo Affinity Designer">
            <p>Affinity Designer</p>

            <img src="./style/assets/ui/icons8-application-canva-96.png" alt="Logo Canva">
            <p>Canva</p>

            
           
        `;
    } else if (projectId === "p3") {
        modalTitle.textContent = "Application Web ";
        modalSubtitle.textContent = "Développement web";
        modalDate.textContent = "2023";
        modalLink.textContent = "GitHub";
        modalLink.href = "https://github.com/Ethanol410/Application_web_Pokemon";
        modalLink.target = "_blank";

        modalImages.innerHTML = `
        <img src="./media/images/App_web.jpg" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/App_web_2.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/App_web_3.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/App_web_4.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/App_web_5.png" alt="" class="pic" width="800px" height="400px">
        `;
        modalObjectif.textContent = "Développer une application Web simulant (et simplifiant !) la capture de Pokemon. Ainsi que la gestion d'une collection de Pokemon par un dresseur unique";
        modalRole.textContent = "Créateur";
        modalMissions.textContent = "Développer une application autonome, Concevoir des wireframes, Elaborer une maquette, et pour finir le développement";
        modalSkills.textContent = "Esprit d'initiatie, Réactivité et Rapidité d'Exécution";
        modalOutils.innerHTML = `
        <h2>Outils</h2>

            <img src="./style/assets/ui/icons8-html-100.png" alt="Logo HTML">
            <p>HTML</p>

            <img src="./style/assets/ui/icons8-css-100.png" alt="Logo CSS">
            <p>CSS</p>

            <img src="./style/assets/ui/icons8-php-100.png" alt="Logo PHP">
            <p>PHP</p>
            
            <img src="./style/assets/ui/icons8-figma-96.png" alt="Logo Figma">
        <p>Figma</p>

        <img src="./style/assets/ui/icons8-visual-studio-100.png" alt="Logo Vsc">
        <p>VSC</p>
        `;
    }  else if (projectId === "p4") {
        modalTitle.textContent = "Portfolio";
        modalSubtitle.textContent = "Développement web";
        modalDate.textContent = "2023";
        modalLink.href = "https://github.com/Ethanol410/Ethan-Portfolio";
        modalLink.target = "_blank";
        modalImages.innerHTML = `
        <img src="./media/images/Portfolio.jpg" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Portfolio_2.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Portfolio_3.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Portfolio_4.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Portfolio_5.png" alt="" class="pic" width="800px" height="400px">
        `;
        modalObjectif.textContent = "Elaborer un portfolio web permettant de montrer nos compétences ainsi que d'améliorer notre personnal branding";
        modalRole.textContent = "Créateur, Concepteur";
        modalMissions.textContent = "Optimiser notre e-reputation, Exploiter différents langages (structure/algorithmique)";
        modalSkills.textContent = "Autonomie, Sens du détail, Introspection, Réflexivité";
        modalOutils.innerHTML = `
        <h2>Outils</h2>

        <img src="./style/assets/ui/icons8-html-100.png" alt="Logo HTML">
        <p>HTML</p>

        <img src="./style/assets/ui/icons8-css-100.png" alt="Logo CSS">
        <p>CSS</p>

        <img src="./style/assets/ui/icons8-javascript-100.png" alt="Logo Javascript">
        <p>JavaScript</p>

        <img src="./style/assets/ui/icons8-visual-studio-100.png" alt="Logo Vsc">
        <p>VSC</p>

        `;
    } else if (projectId === "p5") {
        modalTitle.textContent = "Site Vitrine";
        modalSubtitle.textContent = "Développement web";
        modalDate.textContent = "2022";
        modalLink.href = "https://github.com/Ethanol410/Site-SportKoh";
        modalLink.target = "_blank";

        modalImages.innerHTML = `
        <img src="./media/images/Site_vitrine.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Site_vitrine_2.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Site_vitrine_3.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Site_vitrine_4.png" alt="" class="pic" width="800px" height="400px">
        <img src="./media/images/Site_vitrine_5.png" alt="" class="pic" width="800px" height="400px">
        `;
        modalObjectif.textContent = "Réaliser un site vitrine pour une entreprise dédié aux séjours sportifs";
        modalRole.textContent = "Chef de projet, Concepteur, Développeur";
        modalMissions.textContent = "Analyser les besoins clients, Concevoir la charte graphique, Développer le site web";
        modalSkills.textContent = "Esprit d'équipe, Pédagogie, Adaptabilité";
        modalOutils.innerHTML = `
        <h2>Outils</h2>

        <img src="./style/assets/ui/icons8-html-100.png" alt="Logo HTML">
        <p>HTML</p>

        <img src="./style/assets/ui/icons8-css-100.png" alt="Logo CSS">
        <p>CSS</p>

        <img src="./style/assets/ui/icons8-javascript-100.png" alt="Logo Javascript">
        <p>JavaScript</p>

        <img src="./style/assets/ui/icons8-figma-96.png" alt="Logo Figma">
        <p>Figma</p>

        <img src="./style/assets/ui/icons8-visual-studio-100.png" alt="Logo Vsc">
        <p>VSC</p>

        `;
    }

    
  
}


  /* ------------ */



/* Scroll TOP */

function scrollToTop(){
    window.scrollTo(0, 0);
}

/* ------ */


/* Scrol reveal  */

ScrollReveal({ 
    reset: true,
    distance:'50px',
    duration:'2000',
    delay: 30
 });

 ScrollReveal().reveal('.section-passion_container, .logo_ec' , { origin:'top' });
 ScrollReveal().reveal('.section_titre, .section-apropos_links, .section-contact-links', { origin:'bottom' });
 ScrollReveal().reveal('.photo-accueil, .section-apropos_img, .section-contact-mail, .logo', { origin:'left' });
 ScrollReveal().reveal('.bio-accueil, .section-apropos_info, footer, .nav-links', { origin:'right' });
 ScrollReveal().reveal('', { origin:'bottom' });

/* --------- */