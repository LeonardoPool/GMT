<script lang="ts">
    import gmtLogo from '$lib/assets/images/GMT LOGO.jpeg';
</script>

<footer class="global-footer">
    <div class="footer-container">
        <div class="footer-grid">
            <!-- Brand Column -->
            <div class="footer-col-brand">
                <div class="brand-header">
                    <img src={gmtLogo} alt="GMT Mayorista" class="brand-logo" />
                    <span class="brand-name">GMT Mayorista</span>
                </div>
                <p class="brand-desc">
                    Wanderlust meets wander well – Experience seamless travel with our Servicios.
                </p>
                <div class="contact-info">
                    <p>contacto@gmtmayorista.com</p>
                    <p>9993886600</p>
                </div>
            </div>

            <!-- Company Column -->
            <div class="footer-col">
                <h4 class="col-title">Company</h4>
                <ul class="col-links">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/">Customers</a></li>
                    <li><a href="/">Packages</a></li>
                    <li><a href="/">Community</a></li>
                </ul>
            </div>

            <!-- Help Column -->
            <div class="footer-col">
                <h4 class="col-title">Help</h4>
                <ul class="col-links">
                    <li><a href="/">Support</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="/">Refund Policy</a></li>
                </ul>
            </div>

            <!-- Follow Us Column -->
            <div class="footer-col">
                <h4 class="col-title">Follow Us</h4>
                <ul class="col-links social-links">
                    <li>
                        <a href="/">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
            <p class="copyright">2026 GMT Mayorista. All right reserved. HANDCRAFTED</p>
            <div class="bottom-links">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Service</a>
                <a href="/">Cookies Settings</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .global-footer {
        width: 100%;
        background-color: #0b1c14; /* Color verde oscuro elegante */
        color: #d1d9d6;
        padding: 60px 0 30px;
        margin-top: auto;
        font-family: 'Inter', sans-serif;
    }

    .footer-container {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 40px;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 60px;
        margin-bottom: 60px;
    }

    /* Brand Column */
    .brand-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
    }

    .brand-logo {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .brand-name {
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #4ED27C; /* Verde acento que usaban antes, o blanco */
        letter-spacing: 0.5px;
    }

    .brand-desc {
        font-size: 14px;
        line-height: 1.6;
        color: #a8b8b0;
        margin-bottom: 24px;
        max-width: 320px;
    }

    .contact-info p {
        font-size: 14px;
        color: #a8b8b0;
        margin: 4px 0;
    }

    /* Columns */
    .col-title {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 24px;
        margin-top: 0;
    }

    .col-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .col-links a {
        color: #a8b8b0;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.2s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .col-links a:hover {
        color: #4ED27C;
    }

    .social-links svg {
        opacity: 0.8;
    }

    /* Bottom Section */
    .footer-divider {
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.1);
        margin-bottom: 30px;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .copyright {
        font-size: 13px;
        color: #82928a;
        margin: 0;
    }

    .bottom-links {
        display: flex;
        gap: 30px;
    }

    .bottom-links a {
        color: #82928a;
        text-decoration: none;
        font-size: 13px;
        transition: color 0.2s ease;
    }

    .bottom-links a:hover {
        color: #ffffff;
        text-decoration: underline;
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr;
        }
        
        .footer-col:last-child {
            grid-column: span 3;
            margin-top: -20px;
        }
    }

    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
        }

        .footer-col:last-child {
            grid-column: span 1;
            margin-top: 0;
        }

        .footer-bottom {
            flex-direction: column;
            text-align: center;
            justify-content: center;
        }

        .bottom-links {
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
</style>
