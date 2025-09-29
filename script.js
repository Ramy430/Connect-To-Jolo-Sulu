// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        alert('Welcome to Connect To Jolo Sulu! Registration feature would be implemented here.');
    });
    
    // Add hover effect to features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #b21f1f, #fdbb2d)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #1a2a6c, #b21f1f)';
        });
    });
    
    // Add animation to social icons on hover
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Typewriter effect for tagline
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            tagline.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
});