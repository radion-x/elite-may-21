// Animated favicon with browser tab title cycling
(function() {
    const tabTitles = [
        'Cosmetic smile work',
        'Dental implants',
        'Invisalign treatment',
        'Zoom whitening',
        'Emergency dental care',
        'Root canal treatment',
        'Smile design',
        'General dental care'
    ];

    // Animated favicon with browser tab title cycling (no text inside the icon)
    (function() {
        const tabTitles = [
            'Cosmetic Smile Work',
            'Dental Implants',
            'Invisalign Treatment',
            'Zoom Whitening',
            'Emergency Dental Care',
            'Root Canal Treatment',
            'Smile Design',
            'General Dental Care'
        ];

        const baseTitle = 'Elite Dentistry Neutral Bay';
        const faviconSize = 192;
        const accentColor = '#c88b5a';
        const rotationPeriod = 4000; // ms for full rotation (gentle)
        const faviconUpdateInterval = 120; // ms between favicon updates (keeps animation noticeable but not busy)
        const titleInterval = 3000; // ms between tab title changes

        let lastFaviconUpdate = 0;
        let lastTitleUpdate = 0;
        let titleIndex = 0;

        function drawFavicon(ctx, time) {
            const center = faviconSize / 2;
            const rotation = ((time % rotationPeriod) / rotationPeriod) * Math.PI * 2;

            // Background
            const bg = ctx.createLinearGradient(0, 0, faviconSize, faviconSize);
            bg.addColorStop(0, '#101820');
            bg.addColorStop(1, '#121d29');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, faviconSize, faviconSize);

            // Rotating accent ring (bold but slow)
            ctx.save();
            ctx.translate(center, center);
            ctx.rotate(rotation * 0.65);
            ctx.strokeStyle = accentColor;
            ctx.lineWidth = Math.max(6, Math.round(faviconSize * 0.05));
            ctx.globalAlpha = 0.92;
            ctx.beginPath();
            ctx.arc(0, 0, Math.round(faviconSize * 0.32), -0.2, Math.PI * 1.45);
            ctx.stroke();

            ctx.globalAlpha = 0.28;
            ctx.beginPath();
            ctx.arc(0, 0, Math.round(faviconSize * 0.32), Math.PI * 1.6, Math.PI * 2.05);
            ctx.stroke();
            ctx.restore();

            // Pulsing central tooth (white)
            const pulse = 1 + Math.sin(rotation * 2.2) * 0.06;
            ctx.save();
            ctx.translate(center, center);
            ctx.scale(pulse, pulse);
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(0, -26);
            ctx.bezierCurveTo(16, -18, 18, 4, 10, 28);
            ctx.bezierCurveTo(6, 18, 2, 6, 0, 2);
            ctx.bezierCurveTo(-2, 6, -6, 18, -10, 28);
            ctx.bezierCurveTo(-18, 4, -16, -18, 0, -26);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            // Three orbiting dots
            ctx.fillStyle = accentColor;
            ctx.globalAlpha = 0.95;
            const dotR = Math.max(3, Math.round(faviconSize * 0.035));
            for (let i = 0; i < 3; i++) {
                const angle = rotation + i * (Math.PI * 2 / 3);
                const x = center + Math.cos(angle) * (faviconSize * 0.38);
                const y = center + Math.sin(angle) * (faviconSize * 0.38);
                ctx.beginPath();
                ctx.arc(x, y, dotR, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function setFaviconFromCanvas(canvas) {
            try {
                const dataUrl = canvas.toDataURL('image/png');

                // Remove existing favicon links to force browsers to reload
                const selectors = ["link[rel='icon']", "link[rel='shortcut icon']", "link[rel*='icon']"];
                document.querySelectorAll(selectors.join(',')).forEach(n => n.parentNode && n.parentNode.removeChild(n));

                const link = document.createElement('link');
                link.rel = 'icon';
                link.type = 'image/png';
                link.sizes = `${faviconSize}x${faviconSize}`;
                link.href = dataUrl;
                document.head.appendChild(link);

                const link2 = document.createElement('link');
                link2.rel = 'shortcut icon';
                link2.type = 'image/png';
                link2.href = dataUrl;
                document.head.appendChild(link2);
            } catch (e) {
                // fail silently if canvas.toDataURL not allowed
                console.warn('favicon update failed', e);
            }
        }

        let offscreenCanvas = null;
        function maybeUpdateFavicon(time) {
            if (!offscreenCanvas) offscreenCanvas = document.createElement('canvas');
            offscreenCanvas.width = faviconSize;
            offscreenCanvas.height = faviconSize;
            const ctx = offscreenCanvas.getContext('2d');
            if (!ctx) return;
            if (!lastFaviconUpdate || (time - lastFaviconUpdate) >= faviconUpdateInterval) {
                drawFavicon(ctx, time);
                setFaviconFromCanvas(offscreenCanvas);
                lastFaviconUpdate = time;
            }
        }

        function maybeUpdateTitle(time) {
            if (!lastTitleUpdate) {
                lastTitleUpdate = time;
                document.title = `${tabTitles[titleIndex]} · ${baseTitle}`;
                return;
            }
            if ((time - lastTitleUpdate) >= titleInterval) {
                lastTitleUpdate = time;
                titleIndex = (titleIndex + 1) % tabTitles.length;
                document.title = `${tabTitles[titleIndex]} · ${baseTitle}`;
            }
        }

        function animate(time) {
            maybeUpdateFavicon(time);
            maybeUpdateTitle(time);
            requestAnimationFrame(animate);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(animate));
        } else {
            requestAnimationFrame(animate);
        }
    })();
})();
