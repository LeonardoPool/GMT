<script lang="ts">
    import LazyImage from '$lib/components/LazyImage.svelte';
    import LazyVideo from '$lib/components/LazyVideo.svelte';
    import gmtLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';
    import { page } from '$app/stores';
    import StarBorder from '$lib/components/StarBorder.svelte';
    
    import camp from '$lib/assets/images/camp.jpg';
    import yuc from '$lib/assets/images/yuc.jpg';
    import tul from '$lib/assets/images/TUL.jpg';
    import misionVideo from '$lib/assets/images/FAQ/mision.mp4';
    import visionVideo from '$lib/assets/images/FAQ/vision.mp4';

    const operatorRegisterUrl = 'https://operadores.gmtmayorista.com/registro';
    const agencyRegisterUrl = 'https://search-engine-gmt.vercel.app/screens/registro';
    const operatorLoginUrl = 'https://operadores.gmtmayorista.com/';
    const platformLoginUrl = 'https://search-engine-gmt.vercel.app/screens/login';

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

    let expandedFAQ: number | null = $state(null);

    function toggleFAQ(index: number) {
        expandedFAQ = expandedFAQ === index ? null : index;
    }

    const faqs = [
        {
            question: "¿Qué es GMT Mayorista?",
            answer: "GMT Mayorista es una plataforma B2B diseñada para operadores turísticos, DMC's y agencias de viaje que buscan simplificar su operación, gestionar servicios y ampliar su alcance comercial."
        },
        {
            question: "¿Cómo me registro en GMT?",
            answer: "Puedes registrarte visitando https://operadores.gmtmayorista.com/ y completar el formulario de registro como operador de viaje o agencia de viajes."
        },
        {
            question: "¿Qué servicios puedo gestionar en la plataforma?",
            answer: "En GMT puedes gestionar tours, traslados, hoteles, actividades y otros servicios turísticos desde un único sistema centralizado."
        },
        {
            question: "¿La plataforma es fácil de usar?",
            answer: "Sí, GMT fue diseñada con una interfaz intuitiva y flexible que se adapta a tu modelo de negocio. Además, contamos con soporte 24/7 para ayudarte."
        },
        {
            question: "¿Qué soporte técnico ofrecen?",
            answer: "Ofrecemos soporte técnico 24/7 para ayudarte con cualquier pregunta o inconveniente que tengas con la plataforma."
        },
        {
            question: "¿Puedo automatizar procesos en GMT?",
            answer: "Sí, GMT incluye automatización inteligente con flujos asistidos para cotizar, comparar y confirmar servicios de forma más rápida y eficiente."
        }
    ];

    const values = [
        {
            title: 'Compromiso',
            text: 'Trabajamos con responsabilidad y pasión para generar valor real a agencias, proveedores y aliados comerciales.'
        },
        {
            title: 'Innovación',
            text: 'Desarrollamos soluciones tecnológicas que modernizan y simplifican la comercialización turística.'
        },
        {
            title: 'Confianza',
            text: 'Construimos relaciones sólidas y transparentes con nuestros clientes, socios y proveedores.'
        },
        {
            title: 'Especialización',
            text: 'Conocemos profundamente el Mundo Maya, sus destinos, cultura y oportunidades turísticas.'
        },
        {
            title: 'Profesionalismo',
            text: 'Operamos con altos estándares de calidad, atención y servicio en cada proceso.'
        },
        {
            title: 'Conectividad',
            text: 'Integramos destinos, empresas y personas para fortalecer el ecosistema turístico regional.'
        },
        {
            title: 'Pasión por el Turismo',
            text: 'Creemos en el turismo como motor de desarrollo económico, cultural y humano.'
        }
    ];
</script>

<div class="main-wrapper">
    <div class="content-wrapper">
        <!-- Navegación idéntica a index.svelte -->
        <div class="nav-container">
            <a class="brand-link" href="/">
                <LazyImage class="brand-logo" src={gmtLogo} alt="Grand Mayan Travel" priority={true} />
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
                    <div class="nav-pill-text" style="font-weight: 600;">¿Quiénes Somos?</div>
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
                    <button type="button" class="nav-link-btn" onclick={(e) => { e.stopPropagation(); openDropdown('login'); }}>
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
                        <div class="dropdown-header">Operador de viajes</div>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Hotelero</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Tour Operador</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Operador de circuitos</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de villas</a>
                        <a href={operatorLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de autos</a>

                        <div class="dropdown-header">Agencia de viajes</div>
                        <a href={platformLoginUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Agencia de viaje</a>

                        <div class="dropdown-header">Operadora mayorista</div>
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
                    <button type="button" class="nav-link-btn" onclick={(e) => { e.stopPropagation(); openDropdown('register'); }}>
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
                        <div class="dropdown-header">Operador de viajes</div>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Hotelero</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Tour Operador</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Operador de circuitos</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de villas</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de autos</a>

                        <div class="dropdown-header">Agencia de viajes</div>
                        <a href={agencyRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Agencia de viaje</a>

                        <div class="dropdown-header">Operadora mayorista</div>
                        <a href="/contacto" class="dropdown-item" onclick={closeDropdown}>Operadora mayorista</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 1: About Us Hero (similar a la imagen) -->
        <section class="about-hero-section">
            <div class="about-container">
                <div class="about-content">
                    <span class="about-subtitle"></span>
                    <h1 class="about-title">Quiénes somos</h1>
                    <div class="about-text">
                        <p><strong class="brand-emphasis">GMT Mayorista — Grand Mayan Travel</strong> es más que una plataforma turística B2B: somos una agencia mayorista respaldada por un equipo con más de 25 años de experiencia en la industria. Integramos y distribuimos servicios turísticos en México y el Mundo Maya, comprendiendo a fondo las necesidades operativas, comerciales y tecnológicas de agencias de viajes, operadores, hoteles, DMCs y aliados estratégicos.</p>
                    </div>
                  
                </div>
                
                <div class="about-visuals">
                    <div class="about-img-box img-top">
                        <LazyImage src={camp} alt="Naturaleza Mundo Maya" class="about-img" />
                    </div>
                    <div class="about-img-box img-middle">
                        <LazyImage src={tul} alt="Tulum Costa" class="about-img" />
                    </div>
                    <div class="about-img-box img-bottom">
                        <LazyImage src={yuc} alt="Aventura Selva" class="about-img" />
                        
                        <div class="experience-badge">
                            <div class="badge-num">25+</div>
                            <div class="badge-text">Años Exp.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Mission & Vision Combined -->
        <section class="mision-vision-section">
            <div class="mission-vision-container">
                <div class="mv-row">
                    <div class="mv-videos">
                        <LazyVideo src={misionVideo} class="mv-video" />
                    </div>
                    <div class="mv-text">
                        <div class="mv-kicker">Misión — GMT Mayorista</div>
                        <h2 class="mv-title">Conectar agencias de viajes con el Mundo Maya y México</h2>
                        <p class="mv-description">Conectar agencias de viajes con los mejores productos y experiencias turísticas del Mundo Maya y México, mediante una plataforma tecnológica moderna, eficiente y especializada, ofreciendo soluciones B2B confiables para impulsar el crecimiento de nuestros socios comerciales.</p>
                    </div>
                </div>

                <div class="mv-row">
                    <div class="mv-text">
                        <div class="mv-kicker">Visión — GMT Mayorista</div>
                        <h2 class="mv-title">Ser la operadora mayorista líder del Mundo Maya</h2>
                        <p class="mv-description">Convertirnos en la operadora mayorista y plataforma de distribución turística líder del Mundo Maya, reconocida internacionalmente por nuestra innovación, conectividad, especialización regional y excelencia comercial, expandiendo nuestra presencia en México, Centroamérica y Latinoamérica.</p>
                    </div>
                    <div class="mv-videos">
                        <LazyVideo src={visionVideo} class="mv-video" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Values -->
        <section class="values-section">
            <div class="values-container">
                <div class="values-header">
                    <div class="section-kicker">Valores — GMT Mayorista</div>
                    <h2 class="values-heading">Principios que guían nuestra operación</h2>
                </div>

                <div class="values-grid">
                    {#each values as value, index}
                        <article class="value-card">
                            <span class="value-number">{String(index + 1).padStart(2, '0')}</span>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </article>
                    {/each}
                </div>
            </div>
        </section>

        <!-- Section 5: FAQ Section -->
        <section class="faq-section">
            <div class="faq-header">
                <h2>Preguntas Frecuentes</h2>
                <p>Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma y servicios.</p>
            </div>

            <div class="faq-list">
                {#each faqs as faq, index}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div class="faq-item" class:active={expandedFAQ === index} onclick={() => toggleFAQ(index)}>
                        <div class="faq-question">
                            <h3>{faq.question}</h3>
                            <div class="faq-icon">
                                {#if expandedFAQ === index}
                                    <span class="icon-minus">−</span>
                                {:else}
                                    <span class="icon-plus">+</span>
                                {/if}
                            </div>
                        </div>
                        {#if expandedFAQ === index}
                            <div class="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </section>
    </div>
</div>

<style>
    /* Section 1: About Hero */
    .about-hero-section {
        width: 100%;
        /*padding: 56px 20px 40px;*/
        background: #ffffff;
    }

    .about-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        align-items: center;
    }

    .about-content {
        max-width: 430px;
    }

    .about-subtitle {
        color: #D84C40; /* Color rojo de pill */
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 16px;
        display: block;
    }

    .about-title {
        font-family: 'Poppins', sans-serif;
        font-size: 48px;
        font-weight: 800;
        color: #1a1a1a;
        margin-bottom: 24px;
        line-height: 1.1;
    }

    .about-text {
        color: #666;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        line-height: 1.7;
        margin-bottom: 40px;
    }

    .about-text p {
        margin-bottom: 16px;
    }

    .brand-emphasis {
        color: #0c555f;
        font-weight: 800;
    }

    .about-visuals {
        display: grid;
        grid-template-columns: 180px 220px;
        grid-template-rows: 128px 128px;
        gap: 10px;
        align-items: stretch;
        width: fit-content;
        min-height: 266px;
        width: 100%;
        justify-content: center;
    }

    .about-img-box {
        position: relative;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        min-height: 0;
    }

    :global(.about-img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .img-top {
        grid-column: 1;
        grid-row: 1 / span 2;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .img-middle {
        grid-column: 2;
        grid-row: 1;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .img-bottom {
        grid-column: 2;
        grid-row: 2;
        width: 100%;
        height: 100%;
        z-index: 3;
    }

    .experience-badge {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: #2e6f5e;
        color: white;
        padding: 10px 16px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 10px 20px rgba(58, 155, 196, 0.3);
    }

    .badge-num {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
    }

    .badge-text {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 500;
    }

    /* Section 2: Mission & Vision */
    .mision-vision-section {
        background: #ffffff;
        /* padding: 44px 20px 72px; */
        width: 100%;
    }

    .mission-vision-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .mv-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        margin-bottom: 48px;
    }

    .mv-text {
        display: flex;
        flex-direction: column;
    }

    .mv-kicker {
        color: #0c555f;
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 1.8px;
        margin-bottom: 14px;
        text-transform: uppercase;
    }

    .mv-title {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(32px, 4vw, 44px);
        font-weight: 800;
        color: #1a1a1a;
        line-height: 1.1;
        margin: 0 0 20px 0;
    }

    .mv-description {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #555;
        line-height: 1.7;
        margin: 0;
    }

    .mv-videos {
        width: 100%;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 16px 40px rgba(12, 85, 95, 0.12);
    }

    :global(.mv-video) {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 14px;
    }

    :global(.mv-video) {
        width: 100%;
        height: auto;
        border-radius: 14px;
    }

    .values-heading {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(28px, 4vw, 42px);
        font-weight: 800;
        line-height: 1.1;
        color: #1a1a1a;
        margin: 0;
    }

    .values-section {
        background: #f7faf8;
        padding: 92px 20px 104px;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
    }

    .values-container {
        max-width: 1120px;
        margin: 0 auto;
    }

    .values-header {
        max-width: 720px;
        margin: 0 auto 44px;
        text-align: center;
    }

    .values-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
    }

    .value-card {
        background: #fff;
        border: 1px solid rgba(12, 85, 95, 0.1);
        border-radius: 8px;
        min-height: 210px;
        padding: 24px;
        box-shadow: 0 14px 36px rgba(12, 85, 95, 0.06);
    }

    .value-number {
        display: block;
        color: #0c555f;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 800;
        margin-bottom: 18px;
    }

    .value-card h3 {
        color: #1a1a1a;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 12px;
    }

    .value-card p {
        color: #626262;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        line-height: 1.65;
        margin: 0;
    }

    /* Section 5: FAQ */
    .faq-section {
        padding: 100px 20px;
        max-width: 900px;
        margin: 0 auto;
    }

    .faq-header {
        text-align: center;
        margin-bottom: 50px;
    }

    .faq-header h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 16px;
    }

    .faq-header p {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #666;
    }

    .faq-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .faq-item {
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .faq-item:hover {
        border-color: #d0d0d0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    .faq-item.active {
        border-color: #2e6f5e;
        box-shadow: 0 4px 15px #2e6f5e33;
    }

    .faq-question {
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }

    .faq-question h3 {
        margin: 0;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #1a1a1a;
    }

    .faq-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: #f8f9fa;
        border-radius: 50%;
        transition: background 0.3s ease;
    }

    .faq-item.active .faq-icon {
        background: #2e6f5e;
    }

    .icon-plus, .icon-minus {
        font-size: 20px;
        line-height: 1;
        color: #666;
    }

    .faq-item.active .icon-minus {
        color: #3A9BC4;
    }

    .faq-answer {
        padding: 0 24px 24px;
        background: #fff;
    }

    .faq-answer p {
        margin: 0;
        font-size: 15px;
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #666;
    }

    /* Responsive adjustments */
    @media (max-width: 900px) {
        .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
        }

        .about-hero-section {
            padding-bottom: 32px;
        }

        .about-content {
            max-width: 100%;
            text-align: center;
        }

        .about-visuals {
            min-height: 400px;
        }

        .mv-row {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 32px;
        }

        .values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .img-top,
        .img-middle,
        .img-bottom {
            min-height: 0;
        }
    }

    @media (max-width: 640px) {
        .about-title { font-size: 36px; }
        .mv-title { font-size: 28px; }
        .values-heading { font-size: 28px; }
        .faq-header h2 { font-size: 28px; }

        .about-visuals {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 150px);
            min-height: unset;
        }

        .img-top,
        .img-middle,
        .img-bottom {
            grid-column: auto;
            grid-row: auto;
            height: 150px;
        }

        .mision-vision-section,
        .values-section,
        .faq-section {
            padding-left: 16px;
            padding-right: 16px;
        }

        .values-grid {
            grid-template-columns: 1fr;
        }

        .value-card {
            min-height: auto;
        }
    }
</style>
