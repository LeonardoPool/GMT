<script lang="ts">
    import LazyImage from '$lib/components/LazyImage.svelte';
    import LazyVideo from '$lib/components/LazyVideo.svelte';
    import { page } from '$app/stores';
    import camp from '$lib/assets/images/camp.jpg';
    import pr from '$lib/assets/images/PR.jpg';
    import yuc from '$lib/assets/images/yuc.jpg';
    import cen from '$lib/assets/images/CEN.jpg';
    import chia from '$lib/assets/images/CHIA.jpg';
    import cr from '$lib/assets/images/CR.jpg';
    import gua from '$lib/assets/images/GUA.jpg';
    import hon from '$lib/assets/images/HON.jpg';
    import may from '$lib/assets/images/MAY.jpg';
    import mer from '$lib/assets/images/MER.jpg';
    import pal from '$lib/assets/images/PAL.jpg';
    import tul from '$lib/assets/images/TUL.jpg';
    import belz from '$lib/assets/images/BELZ.jpg';
    import tlum from '$lib/assets/images/TLUM.jpg';
    import art from '$lib/assets/images/ART.jpg';
    import ai from '$lib/assets/images/AI.jpg';
    import tech from '$lib/assets/images/TECH.jpg';
    import concept from '$lib/assets/images/CONCEPT.jpg';
    import interfaceVid from '$lib/assets/images/UX.mp4';
    import fasterVid from '$lib/assets/images/automatizacion.mp4';
    import productividadVid from '$lib/assets/images/Catalogo.mp4';
    import supportVid from '$lib/assets/images/Control.mp4';
    import image from '$lib/assets/images/image.png';
    import headerLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';
    import heroLogo from '$lib/assets/Logos/LOGOCONLETRAS.jpeg';
    import BlurText from '$lib/components/BlurText.svelte';
    import StarBorder from '$lib/components/StarBorder.svelte';

    import mexicoFlag from '$lib/assets/images/banderas/mexico.png';
    import guateFlag from '$lib/assets/images/banderas/guate.png';
    import honduFlag from '$lib/assets/images/banderas/hondu.png';
    import salvaFlag from '$lib/assets/images/banderas/salva.png';
    import beliFlag from '$lib/assets/images/banderas/beli.png';

    const heroImagesLeft = [camp, cen, chia, cr, gua, hon];
    const heroImagesRight = [tul, pal, may, belz, tlum, belz];

    type DestinationCard = {
        name: string;
        img: string;
        flag?: string;
    };

    const destinationCards: DestinationCard[] = [
        { name: 'Yucatán', img: yuc, flag: mexicoFlag },
        { name: 'Guatemala', img: gua, flag: guateFlag },
        { name: 'Campeche', img: camp, flag: mexicoFlag },
        { name: 'Honduras', img: hon, flag: honduFlag },
        { name: 'Quintana Roo', img: tul, flag: mexicoFlag },
        { name: 'Belice', img: cr, flag: beliFlag },
        { name: 'Chiapas', img: chia, flag: mexicoFlag },
        { name: 'El Salvador', img: may, flag: salvaFlag },
        { name: 'Tabasco', img: pal, flag: mexicoFlag },
    ];

    const featuredCarouselCards = [...destinationCards, ...destinationCards];
    const operatorRegisterUrl = 'https://operadores.gmtmayorista.com/registro';
    const agencyRegisterUrl = 'https://search-engine-gmt.vercel.app/screens/registro';
    const operatorLoginUrl = 'https://operadores.gmtmayorista.com';
    const platformLoginUrl = 'https://search-engine-gmt.vercel.app/';

    type DropdownMode = 'login' | 'register';

    let activeDropdown = $state<DropdownMode | null>(null);
    const HOVER_CLOSE_DELAY = 700;
    let closeDropdownTimer: number | null = null;

    function clearCloseDropdownTimer() {
        if (closeDropdownTimer !== null) {
            window.clearTimeout(closeDropdownTimer);
            closeDropdownTimer = null;
        }
    }

    function openDropdown(mode: DropdownMode) {
        clearCloseDropdownTimer();
        activeDropdown = mode;
    }

    function scheduleCloseDropdown() {
        clearCloseDropdownTimer();
        closeDropdownTimer = window.setTimeout(() => {
            activeDropdown = null;
            closeDropdownTimer = null;
        }, HOVER_CLOSE_DELAY);
    }

    function closeDropdown() {
        clearCloseDropdownTimer();
        activeDropdown = null;
    }
</script>

<style>
    :global(a.logo) {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    :global(.nav-pill) {
        text-decoration: none;
    }

    :global(.nav-pill a) {
        text-decoration: none;
    }

    :global(.nav-container) {
        position: relative;
        z-index: 60;
        overflow: visible;
    }

    :global(.nav-links) {
        position: relative;
        z-index: 61;
        overflow: visible;
    }

    :global(.dropdown-container) {
        z-index: 62;
    }

    :global(.dropdown-menu) {
        width: max-content;
        max-width: min(320px, calc(100vw - 24px));
    }
</style>

<div class="main-wrapper">
    <div class="content-wrapper">
        <!-- Navegación -->
        <div class="nav-container">
            <a class="brand-link" href="/">
                <LazyImage class="brand-logo" src={headerLogo} alt="Grand Mayan Travel" priority={true} />
                <span class="logo">Grand Mayan Travel</span>
            </a>
            
            <div class="nav-pills">
                <StarBorder
                    as="a"
                    class="nav-pill green {$page.url.pathname === '/' ? 'is-active' : ''}"
                    href="/"
                    color={$page.url.pathname === '/' ? '#2E6F5E' : '#ffffff'}
                    speed="6s"
                    thickness={2}
                >
                    <div class="nav-pill-text">Inicio</div>
                </StarBorder>
                <StarBorder
                    as="a"
                    class="nav-pill blue {$page.url.pathname.startsWith('/faq') ? 'is-active' : ''}"
                    href="/faq"
                    color={$page.url.pathname.startsWith('/faq') ? '#2E6F5E' : '#ffffff'}
                    speed="6s"
                    thickness={2}
                >
                    <div class="nav-pill-text">¿Quienes Somos?</div>
                </StarBorder>
                <StarBorder
                    as="a"
                    class="nav-pill red {$page.url.pathname.startsWith('/blog') ? 'is-active' : ''}"
                    href="/blog"
                    data-sveltekit-reload
                    color={$page.url.pathname.startsWith('/blog') ? '#2E6F5E' : '#ffffff'}
                    speed="6s"
                    thickness={2}
                >
                    <div class="nav-pill-text">Blog</div>
                </StarBorder>
                <StarBorder
                    as="a"
                    class="nav-pill purple {$page.url.pathname.startsWith('/contacto') ? 'is-active' : ''}"
                    href="/contacto"
                    color={$page.url.pathname.startsWith('/contacto') ? '#2E6F5E' : '#ffffff'}
                    speed="6s"
                    thickness={2}
                >
                    <div class="nav-pill-text">Contacto</div>
                </StarBorder>
            </div>
            
            <div class="nav-links">
                <div
                    class="nav-link dropdown-container"
                    role="presentation"
                    onmouseenter={() => openDropdown('login')}
                    onmouseleave={scheduleCloseDropdown}
                    onfocusin={() => openDropdown('login')}
                    onfocusout={scheduleCloseDropdown}
                >
                    <button
                        type="button"
                        class="nav-link-btn"
                        onclick={(event) => {
                            event.stopPropagation();
                            openDropdown('login');
                        }}
                    >
                        Iniciar Sesión
                        <span class="dropdown-arrow">▾</span>
                    </button>
                    <div
                        class="dropdown-menu dropdown-menu--compact"
                        role="presentation"
                        class:open={activeDropdown === 'login'}
                        onmouseenter={clearCloseDropdownTimer}
                        onmouseleave={scheduleCloseDropdown}
                        onfocusin={clearCloseDropdownTimer}
                        onfocusout={scheduleCloseDropdown}
                    >
                        <div style="padding:5px 12px; font-weight:700; font-size:13px;">Operador de viajes</div>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Hotelero</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Tour Operador</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Operador de circuitos</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de villas</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de autos</a>

                        <div style="padding:5px 12px; font-weight:700; margin-top:6px; font-size:13px;">Agencia de viajes</div>
                        <a href={platformLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Agencia de viaje</a>

                        <div style="padding:5px 12px; font-weight:700; margin-top:6px; font-size:13px;">Operadora mayorista</div>
                        <a href={platformLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Operadora mayorista</a>
                    </div>
                </div>
                <div
                    class="nav-link dropdown-container"
                    role="presentation"
                    onmouseenter={() => openDropdown('register')}
                    onmouseleave={scheduleCloseDropdown}
                    onfocusin={() => openDropdown('register')}
                    onfocusout={scheduleCloseDropdown}
                >
                    <button
                        type="button"
                        class="nav-link-btn"
                        onclick={(event) => {
                            event.stopPropagation();
                            openDropdown('register');
                        }}
                    >
                        Solicitar Acceso
                        <span class="dropdown-arrow">▾</span>
                    </button>
                    <div
                        class="dropdown-menu dropdown-menu--compact"
                        role="presentation"
                        class:open={activeDropdown === 'register'}
                        onmouseenter={clearCloseDropdownTimer}
                        onmouseleave={scheduleCloseDropdown}
                        onfocusin={clearCloseDropdownTimer}
                        onfocusout={scheduleCloseDropdown}
                    >
                        <div style="padding:5px 12px; font-weight:700; font-size:13px;">Operador de viajes</div>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Hotelero</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Tour Operador</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Operador de circuitos</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de villas</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de autos</a>

                        <div style="padding:5px 12px; font-weight:700; margin-top:6px; font-size:13px;">Agencia de viajes</div>
                        <a href={agencyRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Agencia de viaje</a>

                        <div style="padding:5px 12px; font-weight:700; margin-top:6px; font-size:13px;">Operadora mayorista</div>
                        <a href="/contacto/operadora-mayorista" class="dropdown-item" onclick={closeDropdown}>Operadora mayorista</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sección Hero con imágenes -->
        <div class="hero-section">
            <!-- Galería izquierda -->
            <div class="gallery">
                <div class="gallery-row">
                    <LazyImage class="gallery-img" style="width: 180px; height: 180px;" src={heroImagesLeft[0]} alt="" />
                    <LazyImage class="gallery-img" style="width: 137px; height: 137px;" src={heroImagesLeft[1]} alt="" />
                    <LazyImage class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesLeft[2]} alt="" />
                    
                    <LazyImage class="gallery-img mobile-only" style="width: 180px; height: 180px;" src={heroImagesLeft[0]} alt="" />
                    <LazyImage class="gallery-img mobile-only" style="width: 137px; height: 137px;" src={heroImagesLeft[1]} alt="" />
                    <LazyImage class="gallery-img mobile-only" style="width: 96px; height: 96px;" src={heroImagesLeft[2]} alt="" />
                </div>
                <div class="gallery-row">
                    <LazyImage class="gallery-img" style="width: 180px; height: 180px;" src={heroImagesLeft[3]} alt="" />
                    <LazyImage class="gallery-img" style="width: 137px; height: 137px;" src={heroImagesLeft[4]} alt="" />
                    <LazyImage class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesLeft[5]} alt="" />
                    
                    <LazyImage class="gallery-img mobile-only" style="width: 180px; height: 180px;" src={heroImagesLeft[3]} alt="" />
                    <LazyImage class="gallery-img mobile-only" style="width: 137px; height: 137px;" src={heroImagesLeft[4]} alt="" />
                    <LazyImage class="gallery-img mobile-only" style="width: 96px; height: 96px;" src={heroImagesLeft[5]} alt="" />
                </div>
            </div>
            
            <!-- Contenido central -->
            <div class="hero-content">
                <div class="orbit-system">
                    <!-- Logo central -->
                    <LazyImage src={heroLogo} alt="GMT Logo" class="hero-logo-circle" priority={true} />

                    <!-- Texto curvo animado que rodea el logo -->
                    <svg class="orbit-svg" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <defs>
                            <path id="circle-text-path" d="M 210,40 A 170,170 0 1,1 209.9,40" />
                        </defs>
                        <text class="orbit-text-svg">
                            <textPath href="#circle-text-path" startOffset="0%" text-anchor="start">
                                Hoteles &nbsp;&bull;&nbsp; Tours &nbsp;&bull;&nbsp; Transporte &nbsp;&bull;&nbsp; Villas &nbsp;&bull;&nbsp; Circuitos &nbsp;&bull;&nbsp; Hoteles &nbsp;&bull;&nbsp; Tours &nbsp;&bull;&nbsp; Transporte &nbsp;&bull;&nbsp; Villas &nbsp;&bull;&nbsp; Circuitos &nbsp;&bull;&nbsp; Hoteles &nbsp;&bull;&nbsp; Tours &nbsp;&bull;&nbsp; Transporte &nbsp;&bull;&nbsp; Villas &nbsp;&bull;&nbsp; Circuitos &nbsp;&bull;&nbsp;
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
            
            <!-- Galería derecha (espejo) -->
            <div class="gallery mirrored">
                <div class="gallery-row">
                    <LazyImage class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesRight[2]} alt="" />
                    <LazyImage class="gallery-img mirrored-img" style="width: 137px; height: 137px;" src={heroImagesRight[1]} alt="" />
                    <LazyImage class="gallery-img gallery-img--top-right" style="width: 180px; height: 180px;" src={heroImagesRight[0]} alt="" />
                    
                    <LazyImage class="gallery-img mobile-only" style="width: 96px; height: 96px;" src={heroImagesRight[2]} alt="" />
                    <LazyImage class="gallery-img mirrored-img mobile-only" style="width: 137px; height: 137px;" src={heroImagesRight[1]} alt="" />
                    <LazyImage class="gallery-img gallery-img--top-right mobile-only" style="width: 180px; height: 180px;" src={heroImagesRight[0]} alt="" />
                </div>
                <div class="gallery-row">
                    <LazyImage class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesRight[5]} alt="" />
                    <LazyImage class="gallery-img mirrored-img" style="width: 137px; height: 137px;" src={heroImagesRight[4]} alt="" />
                    <LazyImage class="gallery-img gallery-img--bottom-right" style="width: 180px; height: 180px;" src={heroImagesRight[3]} alt="" />
                    
                    <LazyImage class="gallery-img mobile-only" style="width: 96px; height: 96px;" src={heroImagesRight[5]} alt="" />
                    <LazyImage class="gallery-img mirrored-img mobile-only" style="width: 137px; height: 137px;" src={heroImagesRight[4]} alt="" />
                    <LazyImage class="gallery-img gallery-img--bottom-right mobile-only" style="width: 180px; height: 180px;" src={heroImagesRight[3]} alt="" />
                </div>
            </div>
        </div>

        <!-- Texto descriptivo centrado debajo del hero -->
        <div style="text-align: center; padding: 0px 20px 40px; margin-top: -20px;">
            <BlurText
                text="La plataforma B2B especializada en el Mundo Maya y México."
                delay={280}
                animateBy="words"
                direction="top"
                style="font-size: 32px; color: #000; font-family: 'Poppins', sans-serif; font-weight: 700; letter-spacing: 0.2px; line-height: 1.35; margin-bottom: 12px; justify-content: center; width: 100%; text-align: center;"
            />
            <p style="font-size: 18px; color: #666; font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.5; max-width: 800px; margin: 0 auto;">
                GMT Mayorista integra tecnología, conectividad y experiencia turística para simplificar la operación de agencias, operadores y aliados estratégicos.
            </p>
        </div>
    </div>

    <!-- Sección Destinos -->
    <div class="featured-section" id="destinos">
        <div class="featured-header" style="justify-content: center; width: 100%;">
            <div class="featured-header-left" style="max-width: 100%; text-align: center; align-items: center;">
                <BlurText
                    as="h2"
                    text="Destinos que conectan culturas, experiencias y negocios"
                    class="featured-title"
                    delay={280}
                    animateBy="words"
                    direction="top"
                    style="justify-content: center; width: 100%; text-align: center;"
                />
                <p class="featured-subtitle"></p>
            </div>

        </div>

        <div class="featured-carousel featured-carousel--auto" aria-live="polite">
            <div class="featured-track featured-track--auto">
                {#each featuredCarouselCards as dest}
                    <article class="featured-card">
                        {#if dest.flag}
                            <img src={dest.flag} alt="{dest.name} flag" style="position: absolute; top: 16px; left: 16px; width: 36px; height: 26px; border-radius: 4px; object-fit: cover; z-index: 3; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" />
                        {/if}
                        <LazyImage class="featured-card-image" src={dest.img} alt={dest.name} />
                        <div class="featured-card-shade"></div>
                        <div class="featured-card-overlay featured-card-overlay--minimal">
                            <div class="featured-card-location">{dest.name}</div>
                        </div>
                    </article>
                {/each}
            </div>
        </div>

        <div class="featured-pagination" aria-hidden="true">
            <span class="active"></span>
            <span></span>
        </div>


    </div>

    <!-- Explore the World Section -->
    <div class="explore-section">
        <div class="explore-row">
            <div class="explore-text">
                <div class="explore-title">Explora un mundo de posibilidades</div>
                <div class="explore-description">En GMT Mayorista ofrecemos una plataforma diseñada para operadores turísticos, DMC’s y agencias de viaje que buscan simplificar su operación y ampliar su alcance comercial. Centraliza tours, traslados, hoteles y servicios en un solo sistema, optimizando la gestión, la venta y el control de tu negocio turístico. Somos tu aliado tecnológico para crecer, automatizar procesos y adaptarte a las nuevas demandas del mercado.</div>
            </div>  
            <div class="explore-images">
                <LazyImage class="explore-img" style="width: 435px; height: 249px;" src={art} alt="Explore Art" />
                <LazyImage class="explore-img" style="width: 346px; height: 249px;" src={ai} alt="Explore AI" />
            </div>
        </div>
        <div class="explore-row">
            <div class="explore-images">
                <LazyImage class="explore-img" style="width: 511px; height: 249px;" src={tech} alt="Explore Tech" />
                <LazyImage class="explore-img" style="width: 303px; height: 249px;" src={concept} alt="Explore Concept" />
            </div>
            <div class="explore-text" style="width: 446px;">
                <div class="explore-title" style="font-size: 24px; line-height: 33.60px; width: 100%;">Eleva el alcance de tu negocio!</div>
                <div class="explore-description" style="width: 100%;">GMT no es solo una mayorista de viajes, es una plataforma que impulsa el crecimiento de tu negocio turístico. Accede a un catálogo amplio de servicios, mejora tu capacidad de venta y gestiona cada operación con mayor control y visibilidad. Más que un proveedor, somos tu socio estratégico para escalar de forma ordenada y rentable.</div>
            </div>
        </div>
    </div>

    <!-- Making Your Travel Dreams Section -->
    <div class="dreams-section" id="plataforma">
        <div class="dreams-header">
            <div class="dreams-title-section">
                <div class="dreams-title">Conoce nuestra Plataforma</div>
                <div class="dreams-subtitle">En GMT vivimos el turismo con pasión, y esa misma energía nos inspiró a crear una herramienta tecnológica diseñada por nosotros y pensada especialmente para ti.</div>
            </div>
            <div class="dreams-tags">
                <div class="tag"><div class="tag-text">Flexible</div></div>
                <div class="tag"><div class="tag-text">Intuitiva</div></div>
                <div class="tag"><div class="tag-text">Soporte 24/7</div></div>
                <div class="tag"><div class="tag-text">Ágil</div></div>
                <div class="tag"><div class="tag-text">AI Powered</div></div>
            </div>
        </div>

        <!-- Cards Grid -->
        <div class="cards-grid feature-cards">
            <div class="destination-card">
                <LazyVideo class="card-image" src={interfaceVid} autoplay={true} loop={true} muted={true} playsinline={true} />
                <div class="card-content">
                    <div class="card-title">Nueva experiencia de usuario</div>
                    <div class="card-description">Ahorra tiempo gestionando tours y servicios desde una sola plataforma. Cotiza, crea itinerarios y confirma reservas de forma ágil y desde cualquier dispositivo.</div>
                </div>
            </div>

            <div class="destination-card">
                <LazyVideo class="card-image" src={fasterVid} autoplay={true} loop={true} muted={true} playsinline={true} />
                <div class="card-content">
                    <div class="card-title">Automatización inteligente</div>
                    <div class="card-description">Flujos asistidos para cotizar, comparar y confirmar servicios más rápido. Menos procesos manuales, más cierres efectivos.</div>
                </div>
            </div>

            <div class="destination-card">
                <LazyVideo class="card-image" src={productividadVid} autoplay={true} loop={true} muted={true} playsinline={true} />
                <div class="card-content">
                    <div class="card-title">Catálogo unificado</div>
                    <div class="card-description">Integra tours, traslados, hoteles y actividades en un solo sistema con reglas de negocio flexibles para tu operación.</div>
                </div>
            </div>

            <div class="destination-card">
                <LazyVideo class="card-image" src={supportVid} autoplay={true} loop={true} muted={true} playsinline={true} />
                <div class="card-content">
                    <div class="card-title">Reportes y control</div>
                    <div class="card-description">Controla presupuestos, órdenes y facturación con trazabilidad completa. Analiza tu desempeño y mejora tus márgenes.</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Journey Section -->
    <div class="journey-section">
        <div class="journey-header">
            <div class="journey-title">TIENES ALGÚN NEGOCIO TURÍSTICO?</div>
            <div class="journey-text">
                <div class="journey-subtitle">Inicia tu registro en GMT</div>
                <div class="journey-description">GMT está diseñado para operadores de tours, agencias de viaje minoristas y DMC’s que buscan una solución profesional para gestionar y vender sus servicios turísticos. Ya sea que operes experiencias locales, tours privados o servicios especializados, nuestra plataforma se adapta a tu modelo de negocio.</div>

                <div class="journey-actions">
                    <button type="button" class="btn-link" onclick={closeDropdown} aria-disabled="true" style="opacity:0.85; cursor:default;">Registro Agencia de viajes</button>
                    <a class="btn-link secondary" href="https://operadores.gmtmayorista.com/registro" target="_blank" rel="noreferrer">Registro Operador de viaje</a>
                </div>
            </div>
        </div>

        <div class="journey-events">
            <div class="nav-arrow">
                <div style="width: 32px; height: 32px;"></div>
            </div>

            <div class="events-container">
                <div class="event-card">
                    <div class="event-month">Publica tus tours</div>
                    <div class="event-info">
                        <div class="event-title">📢</div>
                        <div class="event-description">Crea y administra tus experiencias turísticas con precios, disponibilidad y reglas claras en un solo sistema.</div>
                    </div>
                </div>

                <div class="event-card center">
                    <div class="event-month">Cotiza y confirma rápido</div>
                    <div class="event-info center">
                        <div class="event-title">🔥</div>
                        <div class="event-description">Reduce tiempos operativos con flujos inteligentes para cotizar, comparar y confirmar servicios sin procesos manuales.</div>
                    </div>
                </div>

                <div class="event-card right">
                    <div class="event-month">Controla tu operación</div>
                    <div class="event-info right">
                        <div class="event-title">🎖️</div>
                        <div class="event-description">Visualiza ventas, reservas y reportes en tiempo real para tomar mejores decisiones de negocio.</div>
                    </div>
                </div>
            </div>

            <div class="nav-arrow rotated">
                <div style="width: 32px; height: 32px;"></div>
            </div>
        </div>

        <div class="journey-watermark">GMT</div>
    </div>



</div>
