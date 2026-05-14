<script lang="ts">
    import LazyImage from '$lib/components/LazyImage.svelte';
    
    // Import images
    import imgMay from '$lib/assets/images/MAY.jpg';
    import gmtLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';

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
</script>

<div class="main-wrapper" style="background: white;">
    <div class="content-wrapper" style="padding-bottom: 0;">
        <!-- Header Global -->
        <div class="nav-container" style="background: white; border-bottom: 1px solid #f0f0f0;">
            <a class="brand-link" href="/">
                <LazyImage class="brand-logo" src={gmtLogo} alt="Grand Mayan Travel" priority={true} />
                <span class="logo" style="color: #1a1a1a;">Grand Mayan Travel</span>
            </a>
            
            <div class="nav-pills">
                <a class="nav-pill blue" href="/faq">
                    <div class="nav-pill-text">¿Quienes Somos?</div>
                </a>
                <a class="nav-pill red" href="/blog" data-sveltekit-reload>
                    <div class="nav-pill-text" style="font-weight: 600;">Blog</div>
                </a>
                <a class="nav-pill purple" href="/contacto">
                    <div class="nav-pill-text">Contacto</div>
                </a>
            </div>
            
            <div class="nav-links">
                <div class="nav-link dropdown-container">
                    <button type="button" class="nav-link-btn" style="color: #1a1a1a;" onclick={(e) => { e.stopPropagation(); toggleDropdown('login'); }}>
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
                    <button type="button" class="nav-link-btn" style="color: #1a1a1a;" onclick={(e) => { e.stopPropagation(); toggleDropdown('register'); }}>
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
                        <a href="/contacto" class="dropdown-item" onclick={closeDropdown}>Operadora mayorista</a>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- Cierre del content-wrapper del header -->

    <!-- Hero Blog Section (FULL WIDTH) -->
    <section class="blog-hero">
        <div class="hero-bg-wrapper">
            <LazyImage src={imgMay} alt="Mundo Maya" class="hero-bg-img" priority={true} />
            <div class="hero-overlay"></div>
        </div>
        
        <div class="blog-hero-content">
            <h1 class="blog-hero-title">Mundo Maya: 5 Países, 9 Destinos y una Historia que Sigue Viva</h1>
            <h2 class="blog-hero-subtitle">El Mundo Maya no es únicamente un destino turístico.</h2>
            <div class="blog-hero-meta">
                <span class="meta-author">by GMT Mayorista</span>
                <span class="meta-divider">—</span>
                <span class="meta-icon">⏱</span>
                <span>12 minute read</span>
                <span class="meta-divider">—</span>
                <span class="meta-icon">👁</span>
                <span>2.5K views</span>
            </div>
        </div>
    </section>

    <!-- Main Content Wrapper -->
    <div class="content-wrapper" style="padding-top: 0;">
        <!-- Main Content -->
        <section class="blog-main">
            <div class="blog-grid">
                
                <!-- Left Sidebar (Stats) -->
                <aside class="sidebar-left">
                    <div class="stat-block">
                        <svg class="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect></svg>
                        <span class="stat-label">views</span>
                        <span class="stat-value">2.5K</span>
                    </div>

                    <div class="stat-block" style="margin-top: 30px;">
                        <svg class="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        <span class="stat-label">shares</span>
                        <span class="stat-value">996K</span>
                    </div>

                    <div class="social-vertical">
                        <div class="social-icon-row">
                            <a href="/" class="s-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <span class="s-count">125</span>
                        </div>
                        <div class="social-icon-row">
                            <a href="/" class="s-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                            <span class="s-count"></span>
                        </div>
                        <div class="social-icon-row">
                            <a href="/" class="s-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></a>
                            <span class="s-count">425</span>
                        </div>
                    </div>
                </aside>

                <!-- Article Content -->
                <article class="article-content">
                    <p class="intro">Es una de las civilizaciones más fascinantes de la historia, una red cultural viva que conecta selvas, playas, ciudades coloniales, volcanes, sitios arqueológicos y comunidades que aún conservan tradiciones milenarias.</p>

                    <p>Hoy, el legado maya sigue extendiéndose a través de cinco países: México, Guatemala, Belice, Honduras y El Salvador.</p>

                    <p>En GMT Mayorista creemos que el turismo debe conectar culturas, personas y experiencias auténticas.</p>

                    <p>Por eso nace nuestra visión: integrar el Mundo Maya en una sola gran plataforma turística para agencias de viajes, operadores y profesionales del sector.</p>

                    <h3>5 Países, 9 Destinos Imperdibles</h3>
                    <p>A continuación, te presentamos algunos de los destinos más representativos del Mundo Maya, donde historia, naturaleza y cultura se unen de forma extraordinaria.</p>

                    <div class="destination-block">
                        <h4>1. Yucatán — Tradición, Cultura y Gastronomía Maya</h4>
                        <p>El corazón cultural del Mundo Maya moderno.</p>
                        <p>Aquí conviven ciudades coloniales, haciendas, cenotes y zonas arqueológicas impresionantes.</p>
                        <p>Destacan experiencias como:</p>
                        <ul>
                            <li>Chichén Itzá</li>
                            <li>Los cenotes de la región</li>
                            <li>La gastronomía yucateca</li>
                            <li>Las ciudades mágicas y pueblos tradicionales</li>
                        </ul>
                        <p>Yucatán representa el equilibrio perfecto entre historia ancestral y hospitalidad contemporánea.</p>
                    </div>

                    <div class="destination-block">
                        <h4>2. Campeche — Selva, Historia y Ciudades Amuralladas</h4>
                        <p>Campeche es uno de los secretos mejor guardados de México.</p>
                        <p>Su riqueza arqueológica y natural lo convierten en una joya del turismo cultural.</p>
                        <p>Imperdibles:</p>
                        <ul>
                            <li>Calakmul</li>
                            <li>La ciudad amurallada de San Francisco de Campeche</li>
                            <li>Reservas naturales y comunidades mayas</li>
                        </ul>
                        <p>Calakmul fue una de las ciudades mayas más poderosas jamás construidas.</p>
                    </div>

                    <div class="destination-block">
                        <h4>3. Quintana Roo — Caribe Maya</h4>
                        <p>Playas turquesa, cultura ancestral y turismo internacional.</p>
                        <p>Algunos de sus destinos más emblemáticos:</p>
                        <ul>
                            <li>Cancún</li>
                            <li>Tulum</li>
                            <li>Bacalar</li>
                            <li>Cobá</li>
                        </ul>
                        <p>El Caribe Maya ofrece una mezcla única entre lujo, aventura y conexión cultural.</p>
                    </div>

                    <div class="destination-block">
                        <h4>4. Chiapas — Naturaleza y Misticismo</h4>
                        <p>Uno de los estados con mayor riqueza cultural y natural de México.</p>
                        <p>Experiencias destacadas:</p>
                        <ul>
                            <li>Palenque</li>
                            <li>San Cristóbal de las Casas</li>
                            <li>Cascadas y selvas tropicales</li>
                            <li>Comunidades indígenas vivas</li>
                        </ul>
                        <p>Chiapas conecta profundamente con el lado espiritual y ancestral del Mundo Maya.</p>
                    </div>

                    <div class="destination-block">
                        <h4>5. Tabasco — La Puerta del Mundo Maya</h4>
                        <p>Tabasco es historia, agua y selva.</p>
                        <p>Aquí se encuentran algunos de los vestigios más antiguos de Mesoamérica.</p>
                        <p>Destacan:</p>
                        <ul>
                            <li>Comalcalco</li>
                            <li>Rutas de cacao y chocolate</li>
                            <li>Ríos y reservas ecológicas</li>
                        </ul>
                        <p>Una región con enorme potencial turístico y cultural.</p>
                    </div>

                    <div class="destination-block">
                        <h4>6. Guatemala — El Alma Arqueológica del Mundo Maya</h4>
                        <p>Guatemala conserva algunos de los tesoros arqueológicos más impresionantes del planeta.</p>
                        <p>Sitios imperdibles:</p>
                        <ul>
                            <li>Tikal</li>
                            <li>Antigua Guatemala</li>
                            <li>Lago de Atitlán</li>
                        </ul>
                        <p>Tikal, rodeada por selva tropical, sigue siendo una de las ciudades mayas más impactantes del mundo.</p>
                    </div>

                    <div class="destination-block">
                        <h4>7. Belice — Naturaleza, Mar y Cultura Maya</h4>
                        <p>Belice combina el legado maya con el Caribe y la aventura ecológica.</p>
                        <p>Experiencias recomendadas:</p>
                        <ul>
                            <li>San Pedro</li>
                            <li>Caye Caulker</li>
                            <li>Great Blue Hole</li>
                            <li>Sitios arqueológicos mayas en la selva</li>
                        </ul>
                        <p>Un destino ideal para viajeros que buscan experiencias auténticas y exclusivas.</p>
                    </div>

                    <div class="destination-block">
                        <h4>8. Honduras — La Grandeza de Copán</h4>
                        <p>Honduras alberga una de las joyas arqueológicas más importantes de toda la civilización maya.</p>
                        <p>El gran protagonista:</p>
                        <ul>
                            <li>Copán</li>
                        </ul>
                        <p>Sus esculturas y estelas son consideradas de las más avanzadas del mundo maya clásico.</p>
                    </div>

                    <div class="destination-block">
                        <h4>9. El Salvador — Cultura, Volcanes y Herencia Ancestral</h4>
                        <p>Aunque menos explorado turísticamente, El Salvador guarda importantes raíces mayas.</p>
                        <p>Destinos destacados:</p>
                        <ul>
                            <li>Joya de Cerén</li>
                            <li>Ruta de volcanes</li>
                            <li>Pueblos tradicionales y gastronomía local</li>
                        </ul>
                        <p>Un país con enorme potencial para el turismo cultural y de aventura.</p>
                    </div>

                    <div class="article-divider"></div>

                    <h3>El Futuro del Turismo en el Mundo Maya</h3>
                    <p>El Mundo Maya representa una oportunidad extraordinaria para conectar destinos, culturas y experiencias en una sola región turística internacional.</p>
                    <p>En GMT Mayorista trabajamos para construir una plataforma moderna, profesional y especializada que permita a agencias de viajes y operadores turísticos acceder a:</p>
                    <ul>
                        <li>Hoteles</li>
                        <li>DMC's</li>
                        <li>Circuitos regionales</li>
                        <li>Experiencias culturales</li>
                        <li>Transporte</li>
                        <li>Tours multidestino</li>
                        <li>Conectividad B2B</li>
                    </ul>

                    <div class="vision-quote">
                        Nuestra visión es clara:<br>
                        Convertirnos en el gran integrador turístico del Mundo Maya.<br>
                        Porque el Mundo Maya no es solamente historia…<br>
                        es el futuro del turismo cultural en América Latina.
                    </div>

                    <div class="article-footer-brand">
                        <br><br>
                        <strong>GMT Mayorista</strong><br>
                        Grand Mayan Travel<br>
                        5 Países | 9 Destinos | Una sola conexión con el Mundo Maya
                    </div>
                </article>

                <!-- Right Sidebar (Follow & Sub) -->
                <aside class="sidebar-right">
                    <div class="widget">
                        <h4 class="widget-title">Follow Us</h4>
                        <div class="follow-grid">
                            <div class="follow-item">
                                <a href="/" class="f-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                <span class="f-count">10</span>
                            </div>
                            <div class="follow-item">
                                <a href="/" class="f-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                                <span class="f-count">69k</span>
                            </div>
                            <div class="follow-item">
                                <a href="/" class="f-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                                <span class="f-count">45</span>
                            </div>
                            <div class="follow-item">
                                <a href="/" class="f-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg></a>
                                <span class="f-count">69k</span>
                            </div>
                            <div class="follow-item">
                                <a href="/" class="f-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg></a>
                                <span class="f-count">69k</span>
                            </div>
                        </div>
                    </div>

                    <div class="widget">
                        <h4 class="widget-title">Subscription</h4>
                        <p class="widget-desc">Subscribe to our newsletter and receive a selection of cool articles every weeks</p>
                        <form class="sub-form" onsubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </aside>

            </div>
        </section>
    </div>
</div>

<style>
    /* Hero Section */
    .blog-hero {
        position: relative;
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
    }

    .hero-bg-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    :global(.hero-bg-img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); /* Transparent dark overlay */
    }

    .blog-hero-content {
        position: relative;
        z-index: 2;
        max-width: 900px;
        padding: 70px;
        color: white;
        text-align: left;
    }

    .blog-hero-title {
        font-family: 'Inter', sans-serif;
        font-size: 38px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 12px;
        line-height: 1.2;
        color: white !important;
    }

    .blog-hero-subtitle {
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 30px;
        color: white !important;
    }

    .blog-hero-meta {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        color: rgba(255, 255, 255, 0.9);
    }

    .meta-author {
        font-weight: 500;
        color: white;
    }

    .meta-divider {
        opacity: 0.6;
    }

    .meta-icon {
        margin-right: 4px;
    }

    /* Main Grid */
    .blog-main {
        background: #ffffff;
        padding: 80px 20px;
    }

    .blog-grid {
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 80px 1fr 300px;
        gap: 60px;
    }

    /* Left Sidebar */
    .sidebar-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
    }

    .stat-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #1a1a1a;
        margin-bottom: 30px;
    }

    .stat-icon {
        margin-bottom: 4px;
        color: #1a1a1a;
    }

    .stat-label {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        color: #1a1a1a;
        margin-bottom: 2px;
    }

    .stat-value {
        font-family: 'Inter', sans-serif;
        font-size: 13px;
        font-weight: 400;
        color: #1a1a1a;
    }

    .social-vertical {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    .social-icon-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
    }

    .s-icon {
        color: #1a1a1a;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
    }

    .s-icon:hover {
        opacity: 0.7;
    }

    .s-count {
        font-size: 12px;
        color: #1a1a1a;
        font-family: 'Inter', sans-serif;
    }

    /* Article Content */
    .article-content {
        font-family: 'Inter', sans-serif;
        color: #333;
        line-height: 1.8;
    }

    .intro {
        font-size: 15px;
        color: #1a1a1a;
        margin-bottom: 24px;
    }

    .article-content p {
        margin-bottom: 24px;
        font-size: 15px;
    }

    .article-content h3 {
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #1a1a1a;
        margin: 40px 0 20px;
    }

    .article-content h4 {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 30px 0 16px;
    }

    .article-content ul {
        margin: 0 0 24px 20px;
        padding: 0;
    }

    .article-content li {
        margin-bottom: 8px;
        font-size: 15px;
    }

    .article-divider {
        height: 1px;
        background: transparent;
        margin: 40px 0;
    }

    .destination-block {
        margin-bottom: 30px;
    }

    .vision-quote {
        margin: 40px 0;
        font-size: 15px;
        color: #1a1a1a;
        line-height: 1.8;
    }

    .article-footer-brand {
        margin-top: 40px;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        color: #333;
        line-height: 1.6;
    }

    /* Right Sidebar */
    .sidebar-right {
        padding-top: 10px;
    }

    .widget {
        margin-bottom: 50px;
    }

    .widget-title {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 20px;
    }

    .follow-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }

    .follow-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    .f-icon {
        background: #1a1a1a;
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
    }

    .f-icon:hover {
        opacity: 0.8;
    }

    .f-count {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 400;
        color: #1a1a1a;
    }

    .widget-desc {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: #1a1a1a;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .sub-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .sub-form input {
        padding: 14px 16px;
        border: 1px solid #eaeaea;
        border-radius: 2px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        outline: none;
        background: #fafafa;
    }

    .sub-form input:focus {
        border-color: #1a1a1a;
    }

    .sub-form button {
        background: #1a1a1a;
        color: white;
        border: none;
        padding: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 2px;
        cursor: pointer;
        transition: background 0.3s;
        border-radius: 2px;
    }

    .sub-form button:hover {
        background: #333;
    }
    /* Responsive */
    @media (max-width: 1px) {
        .blog-grid {
            grid-template-columns: 1fr 300px;
            gap: 40px;
        }
        .sidebar-left {
            display: none;
        }
    }

    @media (max-width: 1px) {
        .hero-title {
            font-size: 28px;
        }
        .hero-subtitle {
            font-size: 18px;
        }
        .blog-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
