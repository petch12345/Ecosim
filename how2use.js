// เพิ่ม interactivity
document.querySelector('.next-btn').addEventListener('click', function() {
    window.location.href = 'sim.html';
});

document.querySelector('.back-btn').addEventListener('click', function() {
    window.location.href = 'description.html';
});

document.querySelector('.home-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// เพิ่มเอฟเฟกต์ใบไม้ลอย
function createFloatingLeaf() {
    const leaf = document.createElement('div');
    leaf.innerHTML = '🌿';
    leaf.style.position = 'absolute';
    leaf.style.fontSize = Math.random() * 20 + 10 + 'px';
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.top = '100%';
    leaf.style.animation = `leafFloat ${Math.random() * 5 + 3}s linear`;
    leaf.style.opacity = '0.6';
    
    document.body.appendChild(leaf);
    
    setTimeout(() => {
        leaf.remove();
    }, 8000);
}

// เพิ่ม CSS animation สำหรับใบไม้
const style = document.createElement('style');
style.textContent = `
    @keyframes leafFloat {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// สร้างใบไม้ใหม่ทุก 3 วินาที
setInterval(createFloatingLeaf, 3000);