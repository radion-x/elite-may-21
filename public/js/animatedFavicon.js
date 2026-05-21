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

    const baseTitle = 'Elite Dentistry Neutral Bay';
    const faviconSize = 192;
    const accentColor = '#c88b5a';
    const animationDuration = 3600;
    const titleInterval = 3000;

    let currentTitleIndex = 0;
    let animationFrame = 0;
    let lastTitleUpdate = 0;

    function drawFavicon(ctx, frame) {
        const center = faviconSize / 2;
        const progress = (frame % animationDuration) / animationDuration;
        const rotation = progress * Math.PI * 2;

        const bg = ctx.createLinearGradient(0, 0, faviconSize, faviconSize);
        bg.addColorStop(0, '#101820');
        bg.addColorStop(1, '#121d29');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, faviconSize, faviconSize);

        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(rotation * 0.65);
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 10;
        ctx.globalAlpha = 0.88;
        ctx.beginPath();
        ctx.arc(0, 0, 60, 0, Math.PI * 1.4);
        ctx.stroke();

        ctx.globalAlpha = 0.26;
        ctx.beginPath();
        ctx.arc(0, 0, 60, Math.PI * 1.55, Math.PI * 2.15);
        ctx.stroke();
        ctx.restore();

        const pulse = 1 + Math.sin(rotation * 2.2) * 0.08;
        ctx.save();
        ctx.translate(center, center);
        ctx.scale(pulse, pulse);

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(0, -26);
        ctx.quadraticCurveTo(16, -18, 18, 4);
        ctx.quadraticCurveTo(20, 22, 10, 28);
        ctx.quadraticCurveTo(6, 18, 2, 6);
        ctx.quadraticCurveTo(1, 1, 0, 0);
        ctx.quadraticCurveTo(-1, 1, -2, 6);
        ctx.quadraticCurveTo(-6, 18, -10, 28);
        ctx.quadraticCurveTo(-20, 22, -18, 4);
        ctx.quadraticCurveTo(-16, -18, 0, -26);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.fillStyle = accentColor;
        ctx.globalAlpha = 0.9;
        for (let i = 0; i < 3; i++) {
            const angle = rotation + i * (Math.PI * 2 / 3);
            const x = center + Math.cos(angle) * 72;
            const y = center + Math.sin(angle) * 72;
            ctx.beginPath();
            ctx.arc(x, y, 7, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function updateFavicon() {
        const canvas = document.createElement('canvas');
        canvas.width = faviconSize;
        canvas.height = faviconSize;
        const ctx = canvas.getContext('2d');
        drawFavicon(ctx, animationFrame);

        const dataUrl = canvas.toDataURL('image/png');
        const iconLinks = Array.from(document.querySelectorAll("link[rel*='icon']"));

        if (iconLinks.length) {
            iconLinks.forEach(link => link.href = dataUrl);
        } else {
            const link = document.createElement('link');
            link.rel = 'icon';
            link.href = dataUrl;
            document.head.appendChild(link);
        }

        animationFrame += 1;
    }

    function updateTabTitle(timestamp) {
        if (timestamp - lastTitleUpdate >= titleInterval) {
            lastTitleUpdate = timestamp;
            currentTitleIndex = (currentTitleIndex + 1) % tabTitles.length;
            document.title = `${tabTitles[currentTitleIndex]} · ${baseTitle}`;
        }
    }

    function start() {
        lastTitleUpdate = performance.now();
        document.title = `${tabTitles[currentTitleIndex]} · ${baseTitle}`;
        updateFavicon();
        setInterval(updateFavicon, 50);
        requestAnimationFrame(updateTabTitle);
        function tick(time) {
            updateTabTitle(time);
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
