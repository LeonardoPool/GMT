<script lang="ts">
    import '../../lib/styles/travelgo.css';

    let showRegistroDropdown = false;

    function toggleRegistroDropdown() {
        showRegistroDropdown = !showRegistroDropdown;
    }

    function closeDropdown() {
        showRegistroDropdown = false;
    }

    let expandedFAQ: number | null = null;

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
</script>

<div class="main-wrapper">
    <div class="content-wrapper">
        <!-- Navegación -->
        <div class="nav-container">
            <a class="logo" href="/">Grand Mayan Travel</a>
            
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
                            <a href="https://operadores.gmtmayorista.com/" target="_blank" rel="noreferrer" class="dropdown-item" on:click={closeDropdown}>Registro Operador de viaje</a>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section" style="padding: 60px 40px; max-width: 900px; margin: 0 auto;">
        <div class="faq-header" style="text-align: center; margin-bottom: 50px;">
            <h1 style="font-size: 48px; font-weight: bold; margin-bottom: 20px; color: #1a1a1a;">Preguntas Frecuentes</h1>
            <p style="font-size: 18px; color: #666; max-width: 600px; margin: 0 auto;">Encuentra respuestas a las preguntas más comunes sobre GMT Mayorista</p>
        </div>

        <div class="faq-container">
            {#each faqs as faq, index (index)}
                <div class="faq-item" style="border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
                    <button 
                        class="faq-question"
                        on:click={() => toggleFAQ(index)}
                        style="width: 100%; padding: 20px; background-color: {expandedFAQ === index ? '#f5f5f5' : '#fff'}; border: none; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 16px; font-weight: 600; color: #1a1a1a; transition: background-color 0.3s ease;"
                    >
                        <span>{faq.question}</span>
                        <span style="font-size: 20px; transition: transform 0.3s ease; transform: rotate({expandedFAQ === index ? 180 : 0}deg);">▾</span>
                    </button>
                    {#if expandedFAQ === index}
                        <div class="faq-answer" style="padding: 0 20px 20px 20px; background-color: #fafafa; color: #555; line-height: 1.6; font-size: 15px;">
                            {faq.answer}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <!-- Footer Section -->
    <div class="footer-section" style="margin-top: 80px;">
        <div class="footer-top">
            <div class="footer-left">
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
                        <div class="footer-nav-text">Contacto</div>
                    </div>
                </div>
            </div>

            <div class="footer-right">
                <div class="footer-contact">
                    <div class="email-icon">
                        <div class="email-icon-fill"></div>
                    </div>
                    <div class="email-text">contacto@gmtmayorista.com</div>
                </div>
            </div>
        </div>

        <div class="footer-logo">GMT</div>
    </div>
</div>

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

    .faq-section {
        background-color: #fff;
    }

    .faq-header {
        margin-bottom: 40px;
    }

    .faq-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .faq-item {
        background-color: #fff;
    }

    .faq-question {
        width: 100%;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
        transition: all 0.3s ease;
    }

    .faq-question:hover {
        background-color: #f9f9f9;
    }

    .faq-answer {
        padding: 0 20px 20px 20px;
        background-color: #fafafa;
        color: #555;
        line-height: 1.6;
        font-size: 15px;
        animation: slideDown 0.3s ease;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
