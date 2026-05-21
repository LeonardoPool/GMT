<script lang="ts">
    import LazyImage from '$lib/components/LazyImage.svelte';
    import gmtLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';
    import { page } from '$app/stores';

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
</script>

<header class="contact-header">
    <div class="nav-container contact-nav">
        <a class="brand-link" href="/">
            <LazyImage class="brand-logo" src={gmtLogo} alt="Grand Mayan Travel" priority={true} />
            <span class="logo">Grand Mayan Travel</span>
        </a>

        <div class="nav-pills">
            <a class="nav-pill green" href="/" class:is-active={($page.url.pathname === '/') }>
                <div class="nav-pill-text">Inicio</div>
            </a>
            <a class="nav-pill blue" href="/faq" class:is-active={($page.url.pathname.startsWith('/faq'))}>
                <div class="nav-pill-text">¿Quienes Somos?</div>
            </a>
            <a class="nav-pill red" href="/blog" data-sveltekit-reload class:is-active={($page.url.pathname.startsWith('/blog'))}>
                <div class="nav-pill-text">Blog</div>
            </a>
            <a class="nav-pill purple" href="/contacto" class:is-active={($page.url.pathname.startsWith('/contacto'))}>
                <div class="nav-pill-text" style="font-weight: 600;">Contacto</div>
            </a>
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
</header>

<style>
    .contact-header {
        background: #ffffff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .contact-nav :global(.nav-link-btn) {
        color: #1a1a1a;
    }
</style>