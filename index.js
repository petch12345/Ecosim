function startSimulation() {
    // Add click animation
    const button = document.querySelector('.start-button');
    button.style.transform = 'translateY(-3px) scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = 'translateY(-3px) scale(1)';
        window.location.href = 'description.html';
    }, 150);
}

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Create more floating particles on mouse move
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) {
            createParticle(e.clientX, e.clientY);
        }
    });
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.position = 'fixed';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}
