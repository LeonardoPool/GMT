<script lang="ts">
    import { onMount } from 'svelte';
    import LazyImage from '$lib/components/LazyImage.svelte';
    
    // Import images from assets
    import imgMay from '$lib/assets/images/MAY.jpg';
    import imgCen from '$lib/assets/images/CEN.jpg';
    import imgTul from '$lib/assets/images/TUL.jpg';
    import imgPal from '$lib/assets/images/PAL.jpg';
    import imgYuc from '$lib/assets/images/yuc.jpg';
    import imgMer from '$lib/assets/images/MER.jpg';
    import imgChia from '$lib/assets/images/CHIA.jpg';
    import gmtLogo from '$lib/assets/images/GMT LOGO.jpeg';

    // Animation observer logic
    let observer: IntersectionObserver;
    
    onMount(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => {
            if (observer) observer.disconnect();
        };
    });
</script>

<svelte:head>
    <title>Blog | El Mundo Maya - Grand Mayan Travel</title>
    <meta name="description" content="Descubre por qué elegimos el Mundo Maya y la gran experiencia que es conocer su cultura, historia y maravillas naturales." />
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&display=swap" rel="stylesheet">
</svelte:head>

<div class="blog-wrapper">
    <!-- Header Minimalista -->
    <header class="blog-header">
        <a href="/" class="back-link">
            <span class="arrow">←</span> Volver al Inicio
        </a>
        <div class="brand">
            <LazyImage src={gmtLogo} alt="GMT Logo" class="brand-logo" />
            <span>Grand Mayan Travel</span>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg">
            <LazyImage src={imgMay} alt="Ruinas del Mundo Maya" class="hero-img" priority={true} />
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content animate-on-scroll">
            <h2 class="subtitle">NUESTRO ORIGEN</h2>
            <h1 class="title">El Mundo Maya</h1>
            <p class="description">Un viaje a través del tiempo, la naturaleza salvaje y los ecos de una de las civilizaciones más fascinantes de la historia.</p>
        </div>
        <div class="scroll-indicator">
            <span>Descubre Más</span>
            <div class="scroll-line"></div>
        </div>
    </section>

    <!-- ¿Por qué lo elegimos? -->
    <section class="section why-maya">
        <div class="container">
            <div class="grid-2-cols align-center">
                <div class="content-text animate-on-scroll">
                    <h2 class="section-title">¿Por qué elegimos el <span>Mundo Maya</span>?</h2>
                    <p class="body-text">
                        No fue una elección al azar. El Mundo Maya no es solo un destino, es una <strong>experiencia viva</strong>. Elegimos esta región porque guarda un equilibrio perfecto entre misticismo, arquitectura monumental, y una biodiversidad inigualable que no se encuentra en ningún otro lugar del planeta.
                    </p>
                    <p class="body-text">
                        En Grand Mayan Travel, creemos que el verdadero viaje transforma. Queremos que nuestros viajeros conecten con la raíz profunda de la tierra, que sientan la energía de los templos milenarios y escuchen la selva respirar. El Mundo Maya lo tiene todo: playas turquesas, ciudades coloniales vibrantes, comunidades indígenas que preservan su lengua y selvas exuberantes que ocultan secretos milenarios.
                    </p>
                    <div class="stats-row">
                        <div class="stat-item">
                            <span class="stat-num">5</span>
                            <span class="stat-label">Estados<br>Mexicanos</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-num">+40</span>
                            <span class="stat-label">Zonas<br>Arqueológicas</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-num">∞</span>
                            <span class="stat-label">Historias por<br>Descubrir</span>
                        </div>
                    </div>
                </div>
                <div class="content-image animate-on-scroll delay-1">
                    <div class="image-stack">
                        <LazyImage src={imgPal} alt="Palenque" class="stack-img img-back" />
                        <LazyImage src={imgTul} alt="Tulum" class="stack-img img-front" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- La Gran Experiencia -->
    <section class="section experience-section dark-bg">
        <div class="container">
            <div class="text-center animate-on-scroll">
                <h2 class="section-title light-text">La Gran Experiencia</h2>
                <p class="body-text mx-auto light-text" style="max-width: 800px; margin-bottom: 3rem;">
                    Conocer el Mundo Maya es despertar los sentidos. Es sumergirse en aguas cristalinas que los antiguos mayas consideraban portales al inframundo, y caminar por calzadas de piedra blanca (sacbeob) que conectaban imperios bajo el dosel de la selva.
                </p>
            </div>

            <div class="masonry-grid">
                <div class="card animate-on-scroll">
                    <div class="card-img-wrapper">
                        <LazyImage src={imgCen} alt="Cenotes" class="card-img" />
                        <div class="card-overlay"></div>
                    </div>
                    <div class="card-content">
                        <h3>Los Cenotes Sagrados</h3>
                        <p>Ojos de agua cristalina ocultos en la selva, perfectos para un baño místico y refrescante.</p>
                    </div>
                </div>

                <div class="card animate-on-scroll delay-1" style="transform: translateY(40px);">
                    <div class="card-img-wrapper">
                        <LazyImage src={imgChia} alt="Selva de Chiapas" class="card-img" />
                        <div class="card-overlay"></div>
                    </div>
                    <div class="card-content">
                        <h3>Naturaleza Indomable</h3>
                        <p>Las cascadas y ríos turquesas que cruzan la selva Lacandona te reconectan con la vida en su estado más puro.</p>
                    </div>
                </div>

                <div class="card animate-on-scroll delay-2">
                    <div class="card-img-wrapper">
                        <LazyImage src={imgMer} alt="Arquitectura colonial" class="card-img" />
                        <div class="card-overlay"></div>
                    </div>
                    <div class="card-content">
                        <h3>Legado Colonial</h3>
                        <p>Ciudades como Mérida funden la historia prehispánica con la elegancia colonial europea.</p>
                    </div>
                </div>

                <div class="card animate-on-scroll delay-3" style="transform: translateY(40px);">
                    <div class="card-img-wrapper">
                        <LazyImage src={imgYuc} alt="Gastronomía Yucateca" class="card-img" />
                        <div class="card-overlay"></div>
                    </div>
                    <div class="card-content">
                        <h3>Sabores Milenarios</h3>
                        <p>La cochinita pibil, los panuchos y la sopa de lima. Una explosión de sabores que relatan historia en cada bocado.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer CTA -->
    <section class="section cta-section">
        <div class="cta-bg">
            <LazyImage src={imgTul} alt="Tulum atardecer" class="cta-bg-img" />
            <div class="cta-overlay"></div>
        </div>
        <div class="container relative z-10 text-center animate-on-scroll">
            <h2 class="cta-title">¿Listo para vivir la magia?</h2>
            <p class="cta-desc">Déjanos diseñar el viaje de tus sueños al corazón del Mundo Maya.</p>
            <a href="/" class="btn-primary">Empieza tu viaje</a>
        </div>
    </section>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #FAFAFA;
    }

    .blog-wrapper {
        font-family: 'Outfit', sans-serif;
        color: #1a1f1c;
        overflow-x: hidden;
        background: #FAFAFA;
    }

    /* Typography */
    h1, h2, h3 {
        font-family: 'Playfair Display', serif;
        margin: 0;
    }

    .body-text {
        font-size: 1.125rem;
        line-height: 1.8;
        color: #4a5550;
        margin-bottom: 1.5rem;
    }

    .light-text {
        color: #f0f4f2 !important;
    }

    /* Layout */
    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .section {
        padding: 8rem 0;
        position: relative;
    }

    .grid-2-cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .align-center {
        align-items: center;
    }

    .text-center {
        text-align: center;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .relative {
        position: relative;
    }
    
    .z-10 {
        z-index: 10;
    }

    /* Header */
    .blog-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
        backdrop-filter: blur(2px);
        box-sizing: border-box;
    }

    .back-link {
        color: white;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        transition: transform 0.3s ease;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .back-link:hover {
        transform: translateX(-5px);
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: white;
        font-weight: 700;
        font-size: 1.1rem;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    :global(.brand-logo) {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }

    /* Hero Section */
    .hero {
        height: 100vh;
        min-height: 600px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        overflow: hidden;
    }

    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%; /* Para parallax sutil */
        z-index: 1;
    }

    :global(.hero-img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.05);
        animation: slowZoom 20s ease-out infinite alternate;
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(10, 25, 19, 0.7) 0%, rgba(0,0,0,0.4) 100%);
    }

    .hero-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        padding: 0 2rem;
    }

    .subtitle {
        font-family: 'Outfit', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #A5C89E;
        margin-bottom: 1.5rem;
    }

    .title {
        font-size: 5.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 2rem;
        text-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    .description {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.6;
        opacity: 0.9;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        color: white;
        font-size: 0.875rem;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .scroll-line {
        width: 1px;
        height: 60px;
        background: rgba(255,255,255,0.3);
        position: relative;
        overflow: hidden;
    }

    .scroll-line::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: white;
        animation: scrollLine 2s ease-in-out infinite;
    }

    /* Why Maya Section */
    .section-title {
        font-size: 3.5rem;
        color: #0a1913;
        margin-bottom: 2rem;
        line-height: 1.2;
    }

    .section-title span {
        color: #A5C89E;
        font-style: italic;
    }

    .stats-row {
        display: flex;
        gap: 3rem;
        margin-top: 3rem;
        padding-top: 3rem;
        border-top: 1px solid rgba(0,0,0,0.1);
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .stat-num {
        font-family: 'Playfair Display', serif;
        font-size: 3rem;
        font-weight: 800;
        color: #A5C89E;
        line-height: 1;
    }

    .stat-label {
        font-size: 0.875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #828a86;
    }

    .image-stack {
        position: relative;
        height: 600px;
        width: 100%;
    }

    :global(.stack-img) {
        position: absolute;
        border-radius: 1rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    :global(.img-back) {
        width: 70%;
        height: 70%;
        top: 0;
        right: 0;
        z-index: 1;
    }

    :global(.img-front) {
        width: 65%;
        height: 65%;
        bottom: 0;
        left: 0;
        z-index: 2;
        border: 10px solid #FAFAFA;
    }

    .image-stack:hover :global(.img-back) {
        transform: translate(-10px, 10px) rotate(-2deg);
    }

    .image-stack:hover :global(.img-front) {
        transform: translate(10px, -10px) rotate(2deg);
    }

    /* Experience Section */
    .dark-bg {
        background-color: #0a1913;
        color: white;
    }

    .masonry-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 4rem;
    }

    .card {
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.05);
        border-radius: 1.5rem;
        overflow: hidden;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        backdrop-filter: blur(10px);
    }

    .card:hover {
        transform: translateY(-10px) !important;
        box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    }

    .card-img-wrapper {
        position: relative;
        width: 100%;
        height: 350px;
        overflow: hidden;
    }

    :global(.card-img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s ease;
    }

    .card:hover :global(.card-img) {
        transform: scale(1.08);
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(to top, #0a1913 0%, rgba(10,25,19,0) 100%);
    }

    .card-content {
        padding: 2.5rem;
    }

    .card-content h3 {
        font-size: 2rem;
        color: #A5C89E;
        margin-bottom: 1rem;
    }

    .card-content p {
        color: #d1d9d6;
        font-size: 1.125rem;
        line-height: 1.6;
        margin: 0;
    }

    /* CTA Section */
    .cta-section {
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0;
    }

    .cta-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    :global(.cta-bg-img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cta-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 25, 19, 0.85);
        backdrop-filter: blur(4px);
    }

    .cta-title {
        font-size: 4rem;
        color: white;
        margin-bottom: 1rem;
    }

    .cta-desc {
        font-size: 1.25rem;
        color: #d1d9d6;
        margin-bottom: 3rem;
    }

    .btn-primary {
        display: inline-block;
        background: #A5C89E;
        color: #0a1913;
        font-family: 'Outfit', sans-serif;
        font-weight: 600;
        font-size: 1.125rem;
        padding: 1rem 3rem;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 10px 20px rgba(165, 200, 158, 0.3);
    }

    .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(165, 200, 158, 0.4);
        background: white;
    }

    /* Animations */
    @keyframes slowZoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.1); }
    }

    @keyframes scrollLine {
        0% { top: -50%; }
        100% { top: 100%; }
    }

    .animate-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        will-change: opacity, transform;
    }

    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .delay-1 { transition-delay: 0.2s; }
    .delay-2 { transition-delay: 0.4s; }
    .delay-3 { transition-delay: 0.6s; }

    /* Responsive */
    @media (max-width: 1024px) {
        .title { font-size: 4.5rem; }
        .grid-2-cols { gap: 2rem; }
        .image-stack { height: 500px; }
    }

    @media (max-width: 768px) {
        .title { font-size: 3.5rem; }
        .section-title { font-size: 2.5rem; }
        .grid-2-cols { grid-template-columns: 1fr; }
        
        .masonry-grid { 
            grid-template-columns: 1fr; 
            gap: 2rem;
        }
        
        .card.delay-1, .card.delay-3 {
            transform: translateY(0) !important;
        }
        
        .image-stack { 
            height: 400px; 
            margin-top: 3rem;
        }
        
        .stats-row {
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .cta-title { font-size: 2.5rem; }
    }
</style>
