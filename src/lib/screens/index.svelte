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
</script>

<div class="main-wrapper">
    <div class="content-wrapper">
        <!-- Navegación -->
        <div class="nav-container">
            <div class="logo">Grand Mayan Travel</div>
            
            <div class="nav-pills">
                <div class="nav-pill blue">
                    <div class="nav-pill-text">Soluciones</div>
                </div>
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
                <div class="nav-link">Login</div>
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
                        <div class="search-placeholder">Ofrecemos una nueva oportunidad de crecimiento</div>
                    </div>
                    
                    <div class="tags-container">
                        <div class="tag"><div class="tag-text">Agencias de viaje</div></div>
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

        <!-- Logos de partners -->
        <div class="partners-section">
            <!-- Trello -->
            <svg class="partner-logo" viewBox="0 0 100 60" width="180" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="25" height="40" fill="#0079BF" rx="4"/>
                <rect x="40" y="15" width="25" height="35" fill="#00A3E0" rx="4"/>
                <rect x="70" y="12" width="20" height="38" fill="#026AA7" rx="4"/>
                <text x="50" y="55" font-family="Arial, sans-serif" font-size="10" fill="#333" text-anchor="middle">Trello</text>
            </svg>
            
            <!-- Afterpay -->
            <svg class="partner-logo" viewBox="0 0 121 23" width="220" height="50" xmlns="http://www.w3.org/2000/svg">
                <text x="60" y="30" font-family="Arial, sans-serif" font-weight="bold" font-size="26" fill="#000" text-anchor="middle">afterpay</text>
            </svg>
            
            <!-- CodeCademy -->
            <svg class="partner-logo" viewBox="0 0 100 60" width="180" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 15 L 30 25 L 20 35 L 15 30 Z" fill="#1F2937"/>
                <path d="M 40 15 L 50 25 L 40 35 L 35 30 Z" fill="#3B82F6"/>
                <path d="M 60 15 L 70 25 L 60 35 L 55 30 Z" fill="#1F2937"/>
                <text x="50" y="58" font-family="Arial, sans-serif" font-size="11" fill="#333" text-anchor="middle">CodeCademy</text>
            </svg>
            
            <!-- Monday.com -->
            <svg class="partner-logo" viewBox="0 0 100 60" width="180" height="100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="25" r="8" fill="#FF6B35"/>
                <circle cx="35" cy="25" r="8" fill="#004E89"/>
                <circle cx="50" cy="25" r="8" fill="#1B998B"/>
                <circle cx="65" cy="25" r="8" fill="#FF6B35"/>
                <circle cx="80" cy="25" r="8" fill="#004E89"/>
                <text x="50" y="58" font-family="Arial, sans-serif" font-size="11" fill="#333" text-anchor="middle">monday.com</text>
            </svg>
            
            <!-- GumRoad -->
            <svg class="partner-logo" viewBox="0 0 100 60" width="180" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 30 15 Q 50 10 70 15 Q 70 30 50 38 Q 30 30 30 15 Z" fill="#FF0000" opacity="0.8"/>
                <text x="50" y="58" font-family="Arial, sans-serif" font-size="11" fill="#333" text-anchor="middle">Gumroad</text>
            </svg>
        </div>
    </div>

    <!-- Explore the World Section -->
    <div class="explore-section" style="margin-top: 100px;">
        <div class="explore-row">
            <div class="explore-text">
                <div class="explore-title">Explora un mundo de posibilidades</div>
                <div class="explore-description">En GMT Mayorista ofrecemos una nueva y atractiva oportunidad de negocio mediante nuestra plataforma en línea pensada para operadores turísticos, DMC´s y redes de agencias. Brindamos una solución completa que cubre todas las necesidades de viaje en una sola gestión. Como aliados tecnológicos de empresas de turismo, ocio y viajes, nuestro modelo está pensado para adaptarse a cualquier tipo de negocio dentro del sector.</div>
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
                <div class="explore-description" style="width: 100%;">GMT no solo es una mayorista de viajes sino una plataforma que elevará el alcance de tu negocio para que puedas ofrecer una grán catálogo de servicios. Ponemos a tu disposición una amplia variedad de servicios y beneficios adicionales, lo que nos posiciona como mucho más que un proveedor. Somos impulsores de oportunidades y el socio estratégico que necesitas para asegurar el éxito y el crecimiento de tu empresa.</div>
            </div>
        </div>
    </div>

    <!-- Making Your Travel Dreams Section -->
    <div class="dreams-section">
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
                    <div class="card-description">Ahorra tiempo y reserva viajes personalizados con hasta 100 servicios en un solo pago. Multi-dispositivo. Crea, planea, presupuesta y reserva.</div>
                </div>
            </div>

            <div class="destination-card">
                <video class="card-image" src={fasterVid} autoplay loop muted playsinline></video>
                <div class="card-content">
                    <div class="card-title">Automatización inteligente</div>
                    <div class="card-description">Flujos asistidos por IA para cotizar, comparar y confirmar más rápido. Menos fricción, más cierres.</div>
                </div>
            </div>

            <div class="destination-card">
                <video class="card-image" src={productividadVid} autoplay loop muted playsinline></video>
                <div class="card-content">
                    <div class="card-title">Catálogo unificado</div>
                    <div class="card-description">Integra hoteles, vuelos, traslados y actividades en una sola experiencia de compra con reglas de negocio flexibles.</div>
                </div>
            </div>

            <div class="destination-card">
                <video class="card-image" src={supportVid} autoplay loop muted playsinline></video>
                <div class="card-content">
                    <div class="card-title">Reportes y control</div>
                    <div class="card-description">Presupuestos, órdenes y facturas ordenadas con trazabilidad. Analiza desempeño y optimiza tus márgenes.</div>
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
                <div class="journey-description">Da el primer paso a una nueva oportunidad, estamos seguros de que nuestra plataforma </div>
            </div>
        </div>

        <div class="journey-events">
            <div class="nav-arrow">
                <div style="width: 32px; height: 32px;"></div>
            </div>

            <div class="events-container">
                <div class="event-card">
                    <div class="event-month">May</div>
                    <div class="event-info">
                        <div class="event-title">Ball Spirit Festival 2023</div>
                        <div class="event-description" style="width: 233px;">your ultimate guide to the mesmetizing bali Spirit festival 20-22 may 2023</div>
                    </div>
                </div>

                <div class="event-card center">
                    <div class="event-month">June</div>
                    <div class="event-info center">
                        <div class="event-title">Java Jazz Festival</div>
                        <div class="event-description" style="width: 288px;">your ultimate travel companion to the echanting Jakarta Java Jazz Fesetival 12-15 June 2023</div>
                    </div>
                </div>

                <div class="event-card right">
                    <div class="event-month">July</div>
                    <div class="event-info right">
                        <div class="event-title">Flower & Fruits Festival</div>
                        <div class="event-description" style="width: 227px;">your ultimate travel guide to the captivating Bunga dan Buah Festival 10-20 July 2023</div>
                    </div>
                </div>
            </div>

            <div class="nav-arrow rotated">
                <div style="width: 32px; height: 32px;"></div>
            </div>
        </div>

        <div class="journey-watermark">Grand Mayan Travel</div>
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
                <div class="review-right-title">What They Say About Us</div>
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
