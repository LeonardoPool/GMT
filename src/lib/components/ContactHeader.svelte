<script lang="ts">
    import LazyImage from '$lib/components/LazyImage.svelte';
    import gmtLogo from '$lib/assets/Logos/LOGONUEVOGMT.jpeg';
    import { page } from '$app/stores';
    import StarBorder from '$lib/components/StarBorder.svelte';

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
                <div class="nav-pill-text" style="font-weight: 600;">Contacto</div>
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