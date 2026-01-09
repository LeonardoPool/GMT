<script lang="ts">
    import '../../lib/styles/travelgo.css';
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
    import art from '$lib/assets/images/ART.jpg';
    import ai from '$lib/assets/images/AI.jpg';
    import tech from '$lib/assets/images/TECH.jpg';
    import concept from '$lib/assets/images/CONCEPT.jpg';
    import interfaceVid from '$lib/assets/images/interface.mp4';
    import fasterVid from '$lib/assets/images/faster.mp4';
    import productividadVid from '$lib/assets/images/Productividad.mp4';
    import supportVid from '$lib/assets/images/supportvid.mp4';

    const heroImagesLeft = [camp, cen, chia, cr, gua, hon];
    const heroImagesRight = [may, mer, pal, pr, tul, yuc];

    let showRegistroDropdown = false;

    function toggleRegistroDropdown() {
        showRegistroDropdown = !showRegistroDropdown;
    }

    function closeDropdown() {
        showRegistroDropdown = false;
    }
</script>

<div class="main-wrapper">
    <div class="content-wrapper">
        <!-- Navegación -->
        <div class="nav-container">
            <div class="logo">Grand Mayan Travel</div>
            
            <div class="nav-pills">
                <a class="nav-pill blue" href="#plataforma">
                    <div class="nav-pill-text">Soluciones</div>
                </a>
                <div class="nav-pill red">
                    <div class="nav-pill-text">FAQ</div>
                </div>
                <div class="nav-pill purple">
                    <div class="nav-pill-text">Sobre Nosotros</div>
                </div>
                <div class="nav-pill green">
                    <div class="nav-pill-text">Ventas</div>
                </div>
            </div>
            
            <div class="nav-links">
                <div class="nav-link">Contacto</div>
                <div class="nav-link dropdown-container">
                    <button class="nav-link-btn" on:click={toggleRegistroDropdown}>
                        Registrarse
                        <span class="dropdown-arrow">▾</span>
                    </button>
                    {#if showRegistroDropdown}
                        <div class="dropdown-menu" role="menu">
                            <a href="https://search-engine-gmt.vercel.app/screens/registro" target="_blank" rel="noreferrer" class="dropdown-item" on:click={closeDropdown}>Registro Agencia de viajes</a>
                            <a href="https://gmt-mayorista-pbuc.vercel.app/registro" target="_blank" rel="noreferrer" class="dropdown-item" on:click={closeDropdown}>Registro Operador de viaje</a>
                        </div>
                    {/if}
                </div>
            </div>
        </div>

        <!-- Sección Hero con imágenes -->
        <div class="hero-section">
            <!-- Galería izquierda -->
            <div class="gallery">
                <div class="gallery-row">
                    <img class="gallery-img" style="width: 180px; height: 180px;" src={heroImagesLeft[0]} alt="" />
                    <img class="gallery-img" style="width: 137px; height: 137px;" src={heroImagesLeft[1]} alt="" />
                    <img class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesLeft[2]} alt="" />
                </div>
                <div class="gallery-row">
                    <img class="gallery-img" style="width: 180px; height: 180px;" src={heroImagesLeft[3]} alt="" />
                    <img class="gallery-img" style="width: 137px; height: 137px;" src={heroImagesLeft[4]} alt="" />
                    <img class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesLeft[5]} alt="" />
                </div>
            </div>
            
            <!-- Contenido central -->
            <div class="hero-content">
                <h1 class="hero-title">Tu próximo negocio empieza aquí.</h1>
                
                <div class="search-container">
                    <div class="search-box">
                        <div class="search-placeholder">Plataforma B2B para operadores de tours y agencias de viaje que buscan vender más, gestionar mejor y escalar su operación desde un solo lugar.</div>
                    </div>
                    
                    <div class="tags-container">
                        <div class="tag"><div class="tag-text">Hoteles</div></div>
                        <div class="tag"><div class="tag-text">Tours</div></div>
                        <div class="tag"><div class="tag-text">Transporte</div></div>
                    </div>
                </div>
            </div>
            
            <!-- Galería derecha (espejo) -->
            <div class="gallery mirrored">
                <div class="gallery-row">
                    <img class="gallery-img" style="width: 180px; height: 180px;" src={heroImagesRight[0]} alt="" />
                    <img class="gallery-img mirrored-img" style="width: 137px; height: 137px;" src={heroImagesRight[1]} alt="" />
                    <img class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesRight[2]} alt="" />
                </div>
                <div class="gallery-row">
                    <img class="gallery-img" style="width: 180px; height: 180px;" src={heroImagesRight[3]} alt="" />
                    <img class="gallery-img mirrored-img" style="width: 137px; height: 137px;" src={heroImagesRight[4]} alt="" />
                    <img class="gallery-img" style="width: 96px; height: 96px;" src={heroImagesRight[5]} alt="" />
                </div>
            </div>
        </div>

        <!-- Logos de partners eliminados para liberar espacio debajo del hero -->
    </div>

    <!-- Explore the World Section -->
    <div class="explore-section" style="margin-top: 100px;">
        <div class="explore-row">
            <div class="explore-text">
                <div class="explore-title">Explora un mundo de posibilidades</div>
                <div class="explore-description">En GMT Mayorista ofrecemos una plataforma diseñada para operadores turísticos, DMC’s y agencias de viaje que buscan simplificar su operación y ampliar su alcance comercial. Centraliza tours, traslados, hoteles y servicios en un solo sistema, optimizando la gestión, la venta y el control de tu negocio turístico. Somos tu aliado tecnológico para crecer, automatizar procesos y adaptarte a las nuevas demandas del mercado.</div>
            </div>
            <div class="explore-images">
                <img class="explore-img" style="width: 435px; height: 249px;" src={art} alt="Explore Art" />
                <img class="explore-img" style="width: 346px; height: 249px;" src={ai} alt="Explore AI" />
            </div>
        </div>
        <div class="explore-row">
            <div class="explore-images">
                <img class="explore-img" style="width: 511px; height: 249px;" src={tech} alt="Explore Tech" />
                <img class="explore-img" style="width: 303px; height: 249px;" src={concept} alt="Explore Concept" />
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
                <div class="dreams-subtitle">En GMT nos apasiona el marcado turístico es por eso que creamos una herramienta tecnológica basada en nuestra pasión por el turísmo creada por y para ti.</div>
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
                <video class="card-image" src={interfaceVid} autoplay loop muted playsinline></video>
                <div class="card-content">
                    <div class="card-title">Nueva experiencia de usuario</div>
                    <div class="card-description">Ahorra tiempo gestionando tours y servicios desde una sola plataforma. Cotiza, crea itinerarios y confirma reservas de forma ágil y desde cualquier dispositivo.</div>
                </div>
            </div>

            <div class="destination-card">
                <video class="card-image" src={fasterVid} autoplay loop muted playsinline></video>
                <div class="card-content">
                    <div class="card-title">Automatización inteligente</div>
                    <div class="card-description">Flujos asistidos para cotizar, comparar y confirmar servicios más rápido. Menos procesos manuales, más cierres efectivos.</div>
                </div>
            </div>

            <div class="destination-card">
                <video class="card-image" src={productividadVid} autoplay loop muted playsinline></video>
                <div class="card-content">
                    <div class="card-title">Catálogo unificado</div>
                    <div class="card-description">Integra tours, traslados, hoteles y actividades en un solo sistema con reglas de negocio flexibles para tu operación.</div>
                </div>
            </div>

            <div class="destination-card">
                <video class="card-image" src={supportVid} autoplay loop muted playsinline></video>
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
                    <a class="btn-link" href="https://search-engine-gmt.vercel.app/screens/registro" target="_blank" rel="noreferrer">Registro Agencia de viajes</a>
                    <a class="btn-link secondary" href="https://gmt-mayorista-pbuc.vercel.app/registro" target="_blank" rel="noreferrer">Registro Operador de viaje</a>
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
                        <div class="event-description" style="width: 233px;">Crea y administra tus experiencias turísticas con precios, disponibilidad y reglas claras en un solo sistema.</div>
                    </div>
                </div>

                <div class="event-card center">
                    <div class="event-month">Cotiza y confirma rápido</div>
                    <div class="event-info center">
                        <div class="event-title">🔥</div>
                        <div class="event-description" style="width: 288px;">Reduce tiempos operativos con flujos inteligentes para cotizar, comparar y confirmar servicios sin procesos manuales.</div>
                    </div>
                </div>

                <div class="event-card right">
                    <div class="event-month">Controla tu operación</div>
                    <div class="event-info right">
                        <div class="event-title">🎖️</div>
                        <div class="event-description" style="width: 227px;">Visualiza ventas, reservas y reportes en tiempo real para tomar mejores decisiones de negocio.</div>
                    </div>
                </div>
            </div>

            <div class="nav-arrow rotated">
                <div style="width: 32px; height: 32px;"></div>
            </div>
        </div>

        <div class="journey-watermark">GMT</div>
    </div>

    <!-- Reviews Section -->
    <div class="reviews-section">
        <div class="review-left">
            <img class="review-image" src="https://placehold.co/341x472" alt="Traveler" />
            
            <div class="review-content-wrapper">
                <div class="review-header">
                    <div class="review-count">(4/2041) Reviews</div>
                    <div class="review-stars">
                        <div class="stars-container">
                            <div class="star"><div class="star-fill"></div></div>
                            <div class="star"><div class="star-fill"></div></div>
                            <div class="star"><div class="star-fill"></div></div>
                            <div class="star"><div class="star-fill"></div></div>
                            <div class="star"><div class="star-fill"></div></div>
                        </div>
                        <div class="review-score">4.7/5.0</div>
                    </div>
                </div>

                <div class="review-card">
                    <div class="review-text">i've always dreamed of exploring the hidden gems of Europe, and this travel agency made it happen. The personalized travel plan was perfect, and every destination was more breathtaking than the last. Thank you for an incredible journey!</div>
                    <div class="review-author">
                        <div class="author-name">Mark Timberlake.</div>
                        <div class="author-title">Word Traveller, UK</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="review-right">
            <div class="review-right-content">
                <div class="review-right-title">Inicia tu registro en GMT</div>
                <div class="review-right-text">The world is full of incredible places just waiting to be explored. Let us help you choose your next destination and plan an itinerary that's perfectly suited to your travel style.</div>
            </div>

            <div class="review-nav">
                <div class="nav-arrow">
                    <div style="width: 32px; height: 32px;"></div>
                </div>
                <div class="nav-arrow active rotated">
                    <div style="width: 32px; height: 32px;"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Section -->
    <div class="footer-section">
        <div class="footer-top">
            <div class="footer-left">
                <div class="footer-title">Tailored Travel Experiences Just for You</div>
                <div class="footer-nav">
                    <div class="footer-nav-item">
                        <div class="footer-nav-text">Nuestras soluciones</div>
                    </div>
                    <div class="footer-nav-item">
                        <div class="footer-nav-text">Sobre Nosotros</div>
                    </div>
                    <div class="footer-nav-item">
                        <div class="footer-nav-text">Ventas</div>
                    </div>
                    <div class="footer-nav-item">
                        <div class="footer-nav-text">contacto</div>
                    </div>
                </div>
            </div>

            <div class="footer-right">
                <div class="footer-right-content">
                    <div class="footer-description">Every traveler is unique, and so are our travel plans. We listen to your needs and preferences to create personalized itineraries that provide enriching and unforgettable experiences.</div>
                    <div class="cta-button">
                        <div class="cta-text">Go Traveling</div>
                        <div style="width: 20px; height: 20px;"></div>
                    </div>
                </div>

                <div class="footer-contact">
                    <div class="email-icon">
                        <div class="email-icon-fill"></div>
                    </div>
                    <div class="email-text">contacto@gmtmayorista.com</div>
                </div>
            </div>
        </div>

        <div class="footer-logo">Grand Mayan Travel</div>
    </div>
</div>
