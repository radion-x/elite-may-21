// Animated Favicon with Cycling Text
(function() {
    const serviceTexts = [
        'Cosmetic',
        'Implants',
        'Invisalign',
        'Whitening',
        'Emergency',
        'Root Canals',
        'Smile Design',
        'General Care'
    ];

    let currentIndex = 0;
    let animationFrame = 0;
    const textRotationInterval = 3000; // Change text every 3 seconds
    const animationFrames = 60; // Smooth animation with 60 frames

    function generateFaviconCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = 192;
        canvas.height = 192;
        const ctx = canvas.getContext('2d');

        // Background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a2a3a');
        gradient.addColorStop(1, '#0f1820');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Animated circle
        const progress = (animationFrame % animationFrames) / animationFrames;
        const rotation = progress * Math.PI * 2;

        // Draw rotating accent ring
        ctx.strokeStyle = `rgba(200, 120, 80, ${0.5 + Math.sin(rotation) * 0.3})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 70, rotation, rotation + Math.PI * 0.6);
        ctx.stroke();

        // Draw subtle pulsing center circle
        const pulseSize = 45 + Math.sin(rotation * 0.5) * 8;
        ctx.fillStyle = '#c87850';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Center tooth icon (simple geometric tooth)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        // Simple tooth outline in center
        ctx.moveTo(canvas.width / 2, canvas.height / 2 - 25);
        ctx.lineTo(canvas.width / 2 + 8, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + 5, canvas.height / 2 + 20);
        ctx.lineTo(canvas.width / 2 - 5, canvas.height / 2 + 20);
        ctx.lineTo(canvas.width / 2 - 8, canvas.height / 2);
        ctx.closePath();
        ctx.fill();

        // Outer rotating dots
        ctx.fillStyle = `rgba(200, 120, 80, ${0.6 + Math.sin(rotation * 2) * 0.3})`;
        for (let i = 0; i < 3; i++) {
            const angle = rotation + (i * Math.PI * 2) / 3;
            const x = canvas.width / 2 + Math.cos(angle) * 85;
            const y = canvas.height / 2 + Math.sin(angle) * 85;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Text cycling
        const textIndex = Math.floor((animationFrame * animationFrames) / (animationFrames * 20)) % serviceTexts.length;
        const cycleProgress = ((animationFrame * animationFrames) % (animationFrames * 20)) / (animationFrames * 20);
        
        // Fade in/out effect for text
        const textOpacity = cycleProgress < 0.1 ? cycleProgress * 10 : (cycleProgress > 0.9 ? (1 - cycleProgress) * 10 : 1);

        ctx.fillStyle = `rgba(255, 255, 255, ${textOpacity * 0.8})`;
        ctx.font = 'bold 14px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(serviceTexts[textIndex], canvas.width / 2, canvas.height - 25);

        return canvas;
    }

    function updateFavicon() {
        const canvas = generateFaviconCanvas();
        const dataUrl = canvas.toDataURL('image/png');
        
        // Update favicon
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = dataUrl;

        animationFrame = (animationFrame + 1) % (animationFrames * 20);
    }

    // Start animation
    function startAnimation() {
        updateFavicon();
        setInterval(updateFavicon, 16); // ~60fps
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startAnimation);
    } else {
        startAnimation();
    }
})();
