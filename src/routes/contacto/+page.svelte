<script lang="ts">
    import '../../lib/styles/travelgo.css';
    import LazyImage from '$lib/components/LazyImage.svelte';
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

<style>
    /* Ocultar el footer global en esta página */
    :global(.global-footer) {
        display: none !important;
    }
    
    /* El color de fondo verde de las pills (#A5C89E) */
    :global(body) {
        background-color: #2E6F5E !important;
        margin: 0;
        padding: 0;
    }

    /* Estilos del header nav para esta página */
    .contact-nav {
        background-color: transparent !important;
        border-bottom: none !important;
        padding-top: 30px;
        max-width: 1300px;
        margin: 0 auto;
    }

    /* Layout Principal */
    .contact-page-wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #2E6F5E;
        font-family: 'Inter', sans-serif;
    }

    .contact-layout {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 60px 40px;
        align-items: center;
    }

    /* Left Side */
    .contact-info-section {
        padding-right: 40px;
        color: #1a1a1a;
    }

    .main-heading {
        font-family: 'Inter', sans-serif;
        font-size: 46px;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 24px;
        color: #ffffff;
    }

    .main-desc {
        font-size: 18px;
        line-height: 1.6;
        color: #ffffff;
        margin-bottom: 50px;
        font-weight: 400;
    }

    .info-heading {
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 600;
                color: #ffffff;

        margin-bottom: 24px;
    }

    .info-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
                color: #ffffff;

    }

    .info-item {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
    }

    .info-item svg {
        opacity: 0.8;
    }

    /* Right Side (Form Card) */
    .contact-form-section {
        display: flex;
        justify-content: flex-end;
    }

    .form-card {
        background-color: #DEE4CD; /* Color beige/verdoso claro idéntico a la imagen */
        border-radius: 24px;
        padding: 50px;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    }

    .form-heading {
        font-family: 'Inter', sans-serif;
        font-size: 28px;
        font-weight: 800;
        color: #1a1a1a;
        margin-bottom: 8px;
    }

    .form-desc {
        font-size: 15px;
        color: #333;
        margin-bottom: 40px;
        font-weight: 500;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .input-group input {
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 8px 0;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        color: #1a1a1a;
        outline: none;
        transition: border-color 0.3s;
    }

    .input-group input::placeholder {
        color: #4a5043;
        font-weight: 500;
    }

    .input-group input:focus {
        border-bottom-color: #1a1a1a;
    }

    .input-hint {
        font-size: 11px;
        color: #4a5043;
        margin-top: 6px;
    }

    .submit-btn {
        background-color: #1a1a1a;
        color: white;
        border: none;
        border-radius: 50px;
        padding: 16px 0;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 20px;
    }

    .submit-btn:hover {
        background-color: #333;
    }

    /* Responsive */
    @media (max-width: 1px) {
        .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 20px;
        }

        .contact-info-section {
            padding-right: 0;
            text-align: center;
        }

        .info-list {
            align-items: center;
        }

        .contact-form-section {
            justify-content: center;
        }

        .main-heading {
            font-size: 36px;
        }
    }
</style>

<div class="contact-page-wrapper">
    <!-- Header Especial Contacto -->
    <div class="nav-container contact-nav">
        <a class="brand-link" href="/">
            <LazyImage class="brand-logo" src={gmtLogo} alt="Grand Mayan Travel" priority={true} />
            <span class="logo" style="color: #1a1a1a;">Grand Mayan Travel</span>
        </a>
        
        <div class="nav-pills">
            <a class="nav-pill blue" href="/faq">
                <div class="nav-pill-text">¿Quienes Somos?</div>
            </a>
            <a class="nav-pill red" href="/blog" data-sveltekit-reload>
                <div class="nav-pill-text">Blog</div>
            </a>
            <div class="nav-pill purple" style="background: rgba(0,0,0,0.05);">
                <div class="nav-pill-text" style="font-weight: 600;">Contacto</div>
            </div>
            <div class="nav-pill green">
                <div class="nav-pill-text">Nuestros socios</div>
            </div>
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

    <!-- Contact Content Layout -->
    <main class="contact-layout">
        <!-- Left Side -->
        <div class="contact-info-section">
            <h1 class="main-heading">Solicita tu acceso como Socio Mayorista</h1>
            <p class="main-desc">Este es el primer paso de una gran decisión.<br>Cuéntanos un poco más sobre tu solicitud<br>En unos minutos nos pondremos en contacto contigo para darte acceso a nuestra plataforma.</p>
            
            <h3 class="info-heading">Nuestro Contacto</h3>
            
            <div class="info-list">
                <div class="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>contacto@gmtmayorista.com</span>
                </div>
                <div class="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>+52 9993886600</span>
                </div>
                <div class="info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Mérida, Yucatán</span>
                </div>
            </div>
        </div>

        <!-- Right Side (Form Card) -->
        <div class="contact-form-section">
            <div class="form-card">
                <h2 class="form-heading">Solicita tu acceso</h2>
                <p class="form-desc">¡Ponte en contacto con nosotros y comencemos a trabajar juntos!</p>

                <form class="contact-form" onsubmit={(e) => e.preventDefault()}>
                    <div class="input-group">
                        <input type="text" placeholder="Escribe el nombre de tu negocio" required minlength="3" />
                    </div>
                    
                    <div class="input-group">
                        <input type="tel" placeholder="Escribe tu número de teléfono" required pattern="[0-9]{10,14}" title="Por favor ingresa un número válido (ej. 10 dígitos)" />
                        <span class="input-hint">Ingresa tu teléfono a 10 dígitos.</span>
                    </div>

                    <div class="input-group">
                        <input type="email" placeholder="Escribe tu correo electrónico" required />
                    </div>

                    <div class="input-group">
                        <input type="text" placeholder="Escribe tu solicitud" required minlength="10" />
                    </div>

                    <button type="submit" class="submit-btn">Enviar</button>
                </form>
            </div>
        </div>
    </main>
</div>
