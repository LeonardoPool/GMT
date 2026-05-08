<script lang="ts">
    import LazyImage from '$lib/components/LazyImage.svelte';
    import gmtLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';
    
    import camp from '$lib/assets/images/camp.jpg';
    import yuc from '$lib/assets/images/yuc.jpg';
    import tul from '$lib/assets/images/TUL.jpg';

    const operatorRegisterUrl = 'https://operadores.gmtmayorista.com/registro';
    const agencyRegisterUrl = 'https://search-engine-gmt.vercel.app/screens/registro';
    const operatorLoginUrl = 'https://operadores.gmtmayorista.com/';
    const platformLoginUrl = 'https://search-engine-gmt.vercel.app/screens/login';

    type DropdownMode = 'login' | 'register';

    let activeDropdown = $state<DropdownMode | null>(null);

    function toggleDropdown(mode: DropdownMode) {
        activeDropdown = activeDropdown === mode ? null : mode;
    }

    function closeDropdown() {
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

    const targetList = [
        "Hoteles",
        "Tours",
        "Traslados",
        "Circuitos",
        "Experiencias",
        "Servicios turísticos especializados"
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
                <a class="nav-pill blue" href="/faq" style="background: #E7F3FF;">
                    <div class="nav-pill-text" style="font-weight: 600;">¿Quienes Somos?</div>
                </a>
                <a class="nav-pill red" href="/blog">
                    <div class="nav-pill-text">Blog</div>
                </a>
                <a class="nav-pill purple" href="/contacto">
                    <div class="nav-pill-text">Contacto</div>
                </a>
                <div class="nav-pill green">
                    <div class="nav-pill-text">Nuestros socios</div>
                </div>
            </div>
            
            <div class="nav-links">
                <div class="nav-link dropdown-container">
                    <button type="button" class="nav-link-btn" onclick={(e) => { e.stopPropagation(); toggleDropdown('login'); }}>
                        Iniciar Sesión
                        <span class="dropdown-arrow">▾</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu--compact" class:open={activeDropdown === 'login'}>
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
                <div class="nav-link dropdown-container">
                    <button type="button" class="nav-link-btn" onclick={(e) => { e.stopPropagation(); toggleDropdown('register'); }}>
                        Solicitar Acceso
                        <span class="dropdown-arrow">▾</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu--compact" class:open={activeDropdown === 'register'}>
                        <div style="padding:5px 12px; font-weight:700; font-size:13px;">Operador de viajes</div>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Hotelero</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Tour Operador</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Operador de circuitos</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de villas</a>
                        <a href={operatorRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Renta de autos</a>

                        <div style="padding:5px 12px; font-weight:700; margin-top:6px; font-size:13px;">Agencia de viajes</div>
                        <a href={agencyRegisterUrl} target="_blank" rel="noreferrer" class="dropdown-item" onclick={closeDropdown}>Agencia de viaje</a>

                        <div style="padding:5px 12px; font-weight:700; margin-top:6px; font-size:13px;">Operadora mayorista</div>
                        <div class="dropdown-item" style="opacity:0.65; cursor:default; padding-top:8px; padding-bottom:8px;">Operadora mayorista</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 1: About Us Hero (similar a la imagen) -->
        <section class="about-hero-section">
            <div class="about-container">
                <div class="about-content">
                    <span class="about-subtitle"></span>
                    <h1 class="about-title">Quienes somos</h1>
                    <div class="about-text">
                        <p><strong>GMT Mayorista — Grand Mayan Travel</strong> — es una plataforma turística B2B especializada en la integración y distribución de servicios turísticos en México y el Mundo Maya.</p>
                        <p>Nacemos de más de 25 años de experiencia real dentro de la industria turística, entendiendo las necesidades operativas, comerciales y tecnológicas de agencias de viajes, operadores, hoteles, DMCs y aliados estratégicos.</p>
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

        <!-- Section 2: Modern Mission -->
        <section class="mission-section">
            <div class="mission-container">
                <h2 class="mission-heading">Nuestra Misión</h2>
                <p class="mission-lead">
                    Nuestro objetivo es modernizar la manera en que el turismo se conecta, integrando en una sola plataforma:
                </p>
                
                <div class="services-pills">
                    {#each targetList as target}
                        <div class="service-pill">{target}</div>
                    {/each}
                </div>

                <div class="mission-grid">
                    <div class="mission-block">
                        <p>GMT combina tecnología, conectividad y conocimiento del sector para ofrecer soluciones más ágiles, eficientes y escalables para el turismo B2B.</p>
                        <br>
                        <p>Actualmente trabajamos con una visión regional enfocada en el <strong>Mundo Maya: México, Guatemala, Belice, Honduras y El Salvador</strong>, promoviendo destinos, aliados comerciales y experiencias que representan la riqueza cultural, natural e histórica de nuestra región.</p>
                    </div>
                    
                    <div class="mission-block">
                        <p>Más que una operadora mayorista tradicional, buscamos convertirnos en una nueva generación de plataforma Travel Tech enfocada en conectar negocios, destinos y oportunidades turísticas en Latinoamérica.</p>
                        
                        <div class="beliefs-card">
                            <h4>Creemos en:</h4>
                            <ul>
                                <li>La innovación aplicada al turismo</li>
                                <li>Las relaciones comerciales sólidas</li>
                                <li>La evolución tecnológica del sector</li>
                                <li>El crecimiento conjunto entre aliados estratégicos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="mission-footer-text">
                    GMT Mayorista representa experiencia, evolución y visión de futuro para la industria turística.
                </div>
            </div>
        </section>

        <!-- Section 3: FAQ Section -->
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
        padding: 80px 20px;
        background: #ffffff;
    }

    .about-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
    }

    .about-content {
        max-width: 500px;
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

    .about-btn {
        background: #3A9BC4; /* Azul cian estilo la imagen de referencia */
        color: white;
        border: none;
        padding: 14px 28px;
        border-radius: 8px;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(58, 155, 196, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .about-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 25px rgba(58, 155, 196, 0.3);
    }

    .about-visuals {
        position: relative;
        height: 550px;
        width: 100%;
    }

    .about-img-box {
        position: absolute;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }

    :global(.about-img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .img-top {
        width: 80%;
        height: 180px;
        top: 0;
        right: 0;
        z-index: 1;
    }

    .img-middle {
        width: 75%;
        height: 180px;
        top: 200px;
        left: 25%;
        z-index: 2;
    }

    .img-bottom {
        width: 60%;
        height: 220px;
        bottom: 0;
        left: 0;
        z-index: 3;
    }

    .experience-badge {
        position: absolute;
        bottom: -15px;
        right: -15px;
        background: #3A9BC4;
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 10px 20px rgba(58, 155, 196, 0.3);
    }

    .badge-num {
        font-family: 'Poppins', sans-serif;
        font-size: 32px;
        font-weight: 700;
        line-height: 1;
    }

    .badge-text {
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        font-weight: 500;
    }

    /* Section 2: Mission */
    .mission-section {
        background: #FAFAFA;
        padding: 100px 20px;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
    }

    .mission-container {
        max-width: 1000px;
        margin: 0 auto;
    }

    .mission-heading {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 24px;
    }

    .mission-lead {
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        color: #444;
        line-height: 1.6;
        margin-bottom: 40px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .services-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-bottom: 60px;
    }

    .service-pill {
        background: white;
        color: #2f6df6; /* Azul pill default de travelgo */
        border: 1px solid #E7F3FF;
        padding: 10px 20px;
        border-radius: 50px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.03);
    }

    .mission-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin-bottom: 50px;
    }

    .mission-block p {
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        line-height: 1.7;
        color: #666;
    }

    .beliefs-card {
        background: white;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        margin-top: 24px;
        border-left: 4px solid #4ED27C; /* Color verde de la pill */
    }

    .beliefs-card h4 {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        margin-bottom: 12px;
        color: #1a1a1a;
    }

    .beliefs-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .beliefs-card ul li {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: #555;
        margin-bottom: 8px;
        padding-left: 20px;
        position: relative;
    }

    .beliefs-card ul li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #4ED27C;
        font-weight: bold;
    }

    .mission-footer-text {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #1a1a1a;
        margin-top: 20px;
        padding-top: 40px;
        border-top: 1px solid #eaeaea;
    }

    /* Section 3: FAQ */
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
        border-color: #3A9BC4;
        box-shadow: 0 4px 15px rgba(58, 155, 196, 0.1);
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
        background: #E7F3FF;
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

        .about-content {
            max-width: 100%;
            text-align: center;
        }
        
        .mission-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .about-visuals {
            height: 450px;
        }
        
        .img-top { height: 140px; }
        .img-middle { height: 140px; top: 160px; }
        .img-bottom { height: 180px; }
    }

    @media (max-width: 600px) {
        .about-title { font-size: 36px; }
        .mission-heading { font-size: 28px; }
        .faq-header h2 { font-size: 28px; }
    }
</style>
