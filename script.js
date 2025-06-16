const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// TRADUCCIÓN

const translations = {
  english: {
    "inicio": "HOME",
    "explora": "EXPLORE",
    "vende": "SELL",
    "comunidad": "COMMUNITY",
    "nosotros": "ABOUT US",
    "login": "Login",
    "main-title": "TRENDS OF THE PAST,<br />ALWAYS RETURNING WITH MORE <span class=\"highlight\">STYLE</span>",
    "main-desc": "Tired of a closet full to bursting? Or never finding something to wear?<br />DeathClothe will connect you with people who want to buy or sell clothes with just one click.",
    "vende-title": "COMPLETE THE TWO STEPS,<br /><span class=\"highlight\">SEND AND DONE!</span>",
    "vende-step1": "Take photos from your mobile and try to get the best angle",
    "vende-step2": "Describe the garment (size, condition, style), so buyers can find it more easily",
    "vende-step3": "Set a price, send and that's it, it will be available for purchase",
    "vende-btn": "SELL NOW",
    "explora-desc": "Looking for something unique? Our community uploads clothes every day.<br />Explore clothes with history and give them a new beginning",
    "feature-filtros-title": "Use filters",
    "feature-filtros-desc": "By size, color, brand and style",
    "feature-favoritos-title": "Save your favorites",
    "feature-favoritos-desc": "Create your virtual closet.",
    "feature-seguridad-title": "Buy safely",
    "feature-seguridad-desc": "With included protection.",
    "feature-sugerencias-title": "Get suggestions",
    "feature-sugerencias-desc": "According to your personal style",
    "about-product-title": "Discover all the features of DeathClothe!",
    "about-product-desc": "Watch the following video and learn how to buy, sell and connect with the community.<br><span class=\"highlight\">Make circular fashion a unique experience!</span>",
    "testimonio-carla-nombre": "Carla M. – Buyer",
    "testimonio-carla-texto": "“I love knowing that every garment I buy is not only beautiful...”",
    "testimonio-diego-nombre": "Diego F. – Seller",
    "testimonio-diego-texto": "“I had a bunch of clothes I no longer used...”",
    "testimonio-lucia-nombre": "Lucía G. – Buyer and Seller",
    "testimonio-lucia-texto": "“It's the first second-hand app that really makes me feel safe...”",
    "testimonio-central": "We have an active community of over 8,000 users and more than 5,000 positive reviews. We have found a home for thousands of used garments, because our community believes that change starts in the closet. Every garment we reuse is a story that continues. Here, buyers and sellers connect with a purpose: to give clothes a second life, reduce waste, and make fashion more conscious. Join a community that not only dresses differently, but thinks differently.",
    "testimonio-rafael-nombre": "Rafael T. – Seller",
    "testimonio-rafael-texto": "“I never thought selling used clothes would be so simple...”",
    "testimonio-daniela-nombre": "Daniela A. – Buyer",
    "testimonio-daniela-texto": "“I like that everything is so transparent...”",
    "testimonio-javier-nombre": "Javier R. – Active user",
    "testimonio-javier-texto": "“DeathClothe is not just an app, it's a community...”",
    "nosotros-titulo": "DeathClothe was born to <span class=\"highlight\">change</span> the way we live fashion.",
    "nosotros-desc": "We are a platform created by young people who believe in sustainability, authentic style, and the power to give new life to every garment. More than a store, we are a community where selling, buying, and discovering unique clothing becomes a conscious experience. We believe that fashion never dies, it transforms. That's why, at DeathClothe, every garment has a new story to tell.",
    "about-team-title": "Want to know more about our purpose?",
    "footer-privacy": "Privacy Policy",
    "footer-social": "Social Networks:"
  },
  spanish: {
    "inicio": "INICIO",
    "explora": "EXPLORA",
    "vende": "VENDE",
    "comunidad": "COMUNIDAD",
    "nosotros": "NOSOTROS",
    "login": "Iniciar sesión",
    "main-title": "LA MODA QUE FUE,<br />VUELVE SIEMPRE CON MÁS <span class=\"highlight\">ESTILO</span>",
    "main-desc": "¿Cansado de tener un armario lleno hasta explotar? o ¿Nunca encontrar algo que ponerte?<br />DeathClothe te conectará a distintas personas que deseen comprarte o venderte ropa con un solo click.",
    "vende-title": "TERMINA LOS DOS PASOS,<br /><span class=\"highlight\">¡ENVÍA Y LISTO!</span>",
    "vende-step1": "Toma fotos desde tu móvil e intenta conseguir el mejor ángulo",
    "vende-step2": "Describe la prenda (talla, estado, estilo), para que los compradores puedan encontrarla más fácil",
    "vende-step3": "Ponle un precio, envía y listo, ya estará disponible para la compra",
    "vende-btn": "VENDE YA",
    "explora-desc": "¿Buscas algo único? Nuestra comunidad sube prendas cada día.<br />Explora ropa con historia y dale un nuevo comienzo",
    "feature-filtros-title": "Usa filtros",
    "feature-filtros-desc": "Por talla, color, marca y estilo",
    "feature-favoritos-title": "Guarda tus favoritos",
    "feature-favoritos-desc": "Crea tu clóset virtual.",
    "feature-seguridad-title": "Compra de forma segura",
    "feature-seguridad-desc": "Con protección incluida.",
    "feature-sugerencias-title": "Recibe sugerencias",
    "feature-sugerencias-desc": "Según tu estilo personal",
    "about-product-title": "¡Descubre todas las funciones de DeathClothe!",
    "about-product-desc": "Mira el siguiente video y aprende a comprar, vender y conectar con la comunidad.<br><span class=\"highlight\">¡Haz de la moda circular una experiencia única!</span>",
    "testimonio-carla-nombre": "Carla M. – Compradora",
    "testimonio-carla-texto": "“Me encanta saber que cada prenda que compro no solo es linda...”",
    "testimonio-diego-nombre": "Diego F. – Vendedor",
    "testimonio-diego-texto": "“Tenía un montón de ropa que ya no usaba...”",
    "testimonio-lucia-nombre": "Lucía G. – Compradora y Vendedora",
    "testimonio-lucia-texto": "“Es la primera app de segunda mano que realmente me hace sentir segura...”",
    "testimonio-central": "Contamos con una comunidad activa de más de 8000 usuarios y más de 5000 reseñas positivas. Hemos encontrado hogar a miles de prendas usadas, porque nuestra comunidad cree que el cambio empieza en el clóset. Cada prenda que reusamos es una historia que continúa. Aquí, compradores y vendedores se conectan con un propósito: darle una segunda vida a la ropa, reducir el desperdicio y hacer de la moda algo más consciente. Únete a una comunidad que no solo viste diferente, sino que piensa diferente.",
    "testimonio-rafael-nombre": "Rafael T. – Vendedor",
    "testimonio-rafael-texto": "“Nunca pensé que vender ropa usada sería tan simple...”",
    "testimonio-daniela-nombre": "Daniela A. – Compradora",
    "testimonio-daniela-texto": "“Me gusta que todo sea tan transparente...”",
    "testimonio-javier-nombre": "Javier R. – Usuario activo",
    "testimonio-javier-texto": "“DeathClothe no es solo una app, es una comunidad...”",
    "nosotros-titulo": "DeathClothe nació para <span class=\"highlight\">cambiar</span> la forma en que vivimos la moda.",
    "nosotros-desc": "Somos una plataforma creada por jóvenes que creen en la sostenibilidad, el estilo auténtico y el poder de dar nueva vida a cada prenda. Más que una tienda, somos una comunidad donde vender, comprar y descubrir ropa única se convierte en una experiencia consciente. Creemos que la moda no muere, se transforma. Por eso, en DeathClothe, cada prenda tiene una nueva historia por contar.",
    "about-team-title": "¿Quieres saber más sobre nuestro propósito?",
    "footer-privacy": "Política de privacidad",
    "footer-social": "Redes Sociales:"
  }
};

const langsLinks = document.querySelectorAll('.lang-switch a');

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = translations[lang][key];
  });
}

langsLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.lang-switch .active').classList.remove('active');
    link.classList.add('active');
    const lang = link.getAttribute('data-lang');
    setLanguage(lang);
  });
});

setLanguage('english');