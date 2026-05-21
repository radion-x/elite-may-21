(function() {
    const treatmentGroups = [
        {
            heading: 'General Dentistry',
            path: '/general-dentistry/',
            links: [
                { label: 'Tooth Coloured Fillings', path: '/tooth-coloured-fillings/' },
                { label: 'Root Canals', path: '/root-canals-endodontics/' },
                { label: 'Tooth Extractions', path: '/tooth-extractions/' },
                { label: 'Wisdom Teeth Removal', path: '/wisdom-teeth-removal/' },
                { label: 'Periodontal Gum Care', path: '/periodontal-gum-care/' },
                { label: 'Dental Hygienists', path: '/dental-hygienists/' }
            ]
        },
        {
            heading: 'Cosmetic Dentistry',
            path: '/cosmetic-dentistry/',
            links: [
                { label: 'Porcelain Veneers', path: '/porcelain-veneers/' },
                { label: 'Dental Crowns', path: '/dental-crowns/' },
                { label: 'Dental Bridges', path: '/dental-bridges/' },
                { label: 'Zoom Teeth Whitening', path: '/zoom-teeth-whitening/' }
            ]
        },
        {
            heading: 'Dental Implants',
            path: '/dental-implants/',
            links: [
                { label: 'Bone Grafts', path: '/bone-grafts/' },
                { label: 'Guided Bone & Tissue Regeneration', path: '/guided-bone-tissue-regeneration/' },
                { label: 'Sinus Lifts', path: '/sinus-lifts/' },
                { label: 'All on 4 Implants', path: '/all-on-4-implants/' }
            ]
        },
        {
            heading: 'Orthodontics',
            path: '/invisalign/',
            links: [
                { label: 'Invisalign', path: '/invisalign/' },
                { label: 'Braces', path: '/braces/' },
                { label: 'ClearCorrect', path: '/clearcorrect/' },
                { label: 'Tru-Line', path: '/tru-line/' }
            ]
        },
        {
            heading: 'Patient Care',
            path: '/emergency-dental-appointments/',
            links: [
                { label: 'Emergency Appointments', path: '/emergency-dental-appointments/' },
                { label: 'Sleep Dentistry', path: '/sleep-dentistry/' },
                { label: 'Sedation', path: '/sedation/' },
                { label: 'Forms', path: '/forms/' }
            ]
        }
    ];

    const footerGroups = [
        {
            title: 'Explore',
            links: [
                { label: 'Home', path: '/' },
                { label: 'Treatments', path: '/treatments/' },
                { label: 'Offers', path: '/offers/' },
                { label: 'Forms', path: '/forms/' },
                { label: 'Contact', path: '/contact/' }
            ]
        },
        {
            title: 'About',
            links: [
                { label: 'About Elite Dentistry', path: '/about/' },
                { label: 'Our Team', path: '/about/our-team-2/' },
                { label: 'Our Neutral Bay Clinic', path: '/about/our-neutral-bay-dental-clinic/' },
                { label: 'Refer a Friend', path: '/refer-a-friend/' },
                { label: 'Privacy Policy', path: '/privacy-policy/' }
            ]
        },
        {
            title: 'Popular Treatments',
            links: [
                { label: 'General Dentistry', path: '/general-dentistry/' },
                { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry/' },
                { label: 'Dental Implants', path: '/dental-implants/' },
                { label: 'Invisalign', path: '/invisalign/' },
                { label: 'Emergency Dental Appointments', path: '/emergency-dental-appointments/' }
            ]
        }
    ];

    function renderTreatmentDropdown() {
        return `
            <div class="dropdown-menu mega-menu">
                ${treatmentGroups.map(group => `
                    <div class="mega-col">
                        <a class="mega-heading" href="${group.path}">${group.heading}</a>
                        <ul class="mega-links">
                            ${group.links.map(link => `<li><a href="${link.path}">${link.label}</a></li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderHeader(config) {
        const phone = config.phone || '02 8350 5840';
        const bookingUrl = config.bookingUrl || '/contact/#appointment-form';
        const siteName = config.siteName || 'Elite Dentistry';
        const tagline = config.tagline || 'Premium dentistry, designed around confidence.';

        return `
            <header class="site-header">
                <div class="container nav-shell">
                    <a class="brand-mark" href="/" aria-label="${siteName} home">
                        <img src="/images/Asset-1.png" alt="${siteName} Logo" class="brand-logo" />
                    </a>
                    <ul class="nav-links">
                        <li><a class="nav-link" href="/" data-nav-match="/">Home</a></li>
                        <li class="nav-item-dropdown">
                            <a href="/treatments/" data-nav-match="/treatments">Treatments</a>
                            ${renderTreatmentDropdown()}
                        </li>
                        <li class="nav-item-dropdown">
                            <a href="/about/" data-nav-match="/about">About</a>
                            <div class="dropdown-menu">
                                <div class="dropdown-column">
                                    <ul class="dropdown-links">
                                        <li><a href="/about/">About Elite Dentistry</a></li>
                                        <li><a href="/about/our-team-2/">Our Team</a></li>
                                        <li><a href="/about/our-neutral-bay-dental-clinic/">Our Neutral Bay Clinic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a class="nav-link" href="/offers/" data-nav-match="/offers">Offers</a></li>
                        <li><a class="nav-link" href="/forms/" data-nav-match="/forms">Forms</a></li>
                        <li><a class="nav-link" href="/contact/" data-nav-match="/contact">Contact</a></li>
                    </ul>
                    <div class="nav-actions">
                        <a class="nav-phone" data-site-phone-link href="tel:${phone.replace(/[^\d+]/g, '')}">${phone}</a>
                        <a class="button" href="${bookingUrl}">Book appointment</a>
                        <button class="mobile-menu-toggle" aria-label="Open navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }

    function renderFooter(config) {
        const phone = config.phone || '02 8350 5840';
        const email = config.publicEmail || 'reception@elitedentistry.com.au';
        const address = config.address || '20 Young Street, Neutral Bay, North Sydney NSW 2089';
        const siteName = config.siteName || 'Elite Dentistry';

        return `
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-card">
                            <div class="stack">
                                <div>
                                    <div class="eyebrow">Elite Dentistry</div>
                                    <h3 style="color: var(--color-text-inverse);">A calmer, more considered dental experience in Neutral Bay.</h3>
                                </div>
                                <p>Modern general, cosmetic, implant and Invisalign care with thoughtful communication, refined surroundings and a team focused on confidence-building dentistry.</p>
                                <div class="button-row">
                                    <a class="button" href="/contact/#appointment-form">Book appointment</a>
                                    <a class="button-outline" href="/treatments/">See treatments</a>
                                </div>
                            </div>
                        </div>
                        ${footerGroups.map(group => `
                            <div class="footer-card">
                                <div class="small-caps" style="color: rgba(249, 247, 242, 0.56); margin-bottom: 1rem;">${group.title}</div>
                                <ul class="footer-links">
                                    ${group.links.map(link => `<li><a href="${link.path}">${link.label}</a></li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    <div class="footer-bottom footer-meta">
                        <div>${siteName} · <a data-site-phone-link href="tel:${phone.replace(/[^\d+]/g, '')}" style="color: inherit;">${phone}</a> · <a data-site-email-link href="mailto:${email}" style="color: inherit;">${email}</a></div>
                        <div>${address} · <span data-current-year></span></div>
                    </div>
                </div>
            </footer>
        `;
    }

    async function loadConfig() {
        if (window.ClientConfig) return window.ClientConfig;
        try {
            const response = await fetch('/api/client-config');
            if (!response.ok) throw new Error('config');
            const config = await response.json();
            window.ClientConfig = config;
            return config;
        } catch (error) {
            return {
                siteName: 'Elite Dentistry',
                tagline: 'Premium dentistry, designed around confidence.',
                phone: '02 8350 5840',
                publicEmail: 'reception@elitedentistry.com.au',
                address: '20 Young Street, Neutral Bay, North Sydney NSW 2089',
                bookingUrl: '/contact/#appointment-form'
            };
        }
    }

    async function renderShell() {
        const config = await loadConfig();
        const headerTarget = document.querySelector('[data-site-header]');
        const footerTarget = document.querySelector('[data-site-footer]');

        if (headerTarget) {
            headerTarget.outerHTML = renderHeader(config);
        }

        if (footerTarget) {
            footerTarget.outerHTML = renderFooter(config);
        }

        document.dispatchEvent(new CustomEvent('site:shell-ready'));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderShell);
    } else {
        renderShell();
    }
})();