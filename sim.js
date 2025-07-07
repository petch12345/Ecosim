let chart = null;
let simulationData = [];
let isSimulating = false;
let animationTimer = null;
let currentStep = 0;

// อัปเดตค่าสเกล
document.getElementById('sunlight').addEventListener('input', function(e) {
    document.getElementById('sunlight-value').textContent = e.target.value + '%';
    if (!isSimulating) {
        const values = getInputValues();
        updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
    }
});

document.getElementById('water').addEventListener('input', function(e) {
    document.getElementById('water-value').textContent = e.target.value + '%';
    if (!isSimulating) {
        const values = getInputValues();
        updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
    }
});

// อัปเดตอนิเมชันเมื่อเปลี่ยนค่าจำนวนสัตว์
document.getElementById('plants').addEventListener('input', function() {
    if (!isSimulating) {
        const values = getInputValues();
        updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
    }
});

document.getElementById('herbivores').addEventListener('input', function() {
    if (!isSimulating) {
        const values = getInputValues();
        updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
    }
});

document.getElementById('carnivores').addEventListener('input', function() {
    if (!isSimulating) {
        const values = getInputValues();
        updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
    }
});

function updateEcosystemAnimation(plants, herbivores, carnivores, sunlight, water) {
    const container = document.getElementById('ecosystem-elements');
    const sun = document.getElementById('sun');
    const waterPond = document.getElementById('water-pond');
    
    // อัพเดทความเข้มของแสงแดด
    sun.style.opacity = (sunlight / 100) * 0.8 + 0.2;
    sun.style.transform = `scale(${0.8 + (sunlight / 100) * 0.4})`;
    
    // อัพเดทขนาดของแอ่งน้ำ
    const waterScale = 0.5 + (water / 100) * 0.8;
    waterPond.style.transform = `translateX(-50%) scale(${waterScale})`;
    waterPond.style.opacity = (water / 100) * 0.7 + 0.3;
    
    // ลบองค์ประกอบเก่าและป้ายกำกับเก่า
    const oldElements = container.querySelectorAll('.grass, .rabbit, .wolf, .label');
    oldElements.forEach(el => el.remove());
    
    // เพิ่มหญ้า
    const grassCount = Math.min(Math.floor(plants / 8), 20);
    for (let i = 0; i < grassCount; i++) {
        const grass = document.createElement('div');
        grass.className = 'grass';
        grass.style.left = Math.random() * 85 + 5 + '%';
        grass.style.bottom = Math.random() * 30 + 20 + '%';
        grass.style.animationDelay = Math.random() * 3 + 's';
        grass.style.height = (15 + Math.random() * 10) + 'px';
        container.appendChild(grass);
    }
    
    // เพิ่มกระต่าย
    const rabbitCount = Math.min(Math.floor(herbivores / 4), 12);
    for (let i = 0; i < rabbitCount; i++) {
        const rabbit = document.createElement('div');
        rabbit.className = 'rabbit';
        rabbit.style.left = Math.random() * 75 + 12 + '%';
        rabbit.style.bottom = Math.random() * 40 + 25 + '%';
        rabbit.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(rabbit);
    }
    
    // เพิ่มหมาป่า
    const wolfCount = Math.min(Math.floor(carnivores / 2), 8);
    for (let i = 0; i < wolfCount; i++) {
        const wolf = document.createElement('div');
        wolf.className = 'wolf';
        wolf.style.left = Math.random() * 70 + 15 + '%';
        wolf.style.bottom = Math.random() * 45 + 30 + '%';
        wolf.style.animationDelay = Math.random() * 6 + 's';
        container.appendChild(wolf);
    }
    
    // เพิ่มป้ายกำกับ
    addLabels(container, grassCount, rabbitCount, wolfCount);
}

function addLabels(container, grassCount, rabbitCount, wolfCount) {
    // ป้ายกำกับพืช (หญ้า)
    if (grassCount > 0) {
        const grassLabel = document.createElement('div');
        grassLabel.className = 'label grass-label';
        grassLabel.textContent = `พืช (${grassCount})`;
        grassLabel.style.top = '15px';
        grassLabel.style.left = '15px';
        container.appendChild(grassLabel);
    }
    
    // ป้ายกำกับกระต่าย
    if (rabbitCount > 0) {
        const rabbitLabel = document.createElement('div');
        rabbitLabel.className = 'label rabbit-label';
        rabbitLabel.textContent = `กระต่าย (${rabbitCount})`;
        rabbitLabel.style.top = '40px';
        rabbitLabel.style.left = '15px';
        container.appendChild(rabbitLabel);
    }
    
    // ป้ายกำกับหมาป่า
    if (wolfCount > 0) {
        const wolfLabel = document.createElement('div');
        wolfLabel.className = 'label wolf-label';
        wolfLabel.textContent = `หมาป่า (${wolfCount})`;
        wolfLabel.style.top = '65px';
        wolfLabel.style.left = '15px';
        container.appendChild(wolfLabel);
    }
}

function initChart() {
    const ctx = document.getElementById('ecosystemChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'พืช',
                    data: [],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'สัตว์กินพืช',
                    data: [],
                    borderColor: '#FF9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'สัตว์กินเนื้อ',
                    data: [],
                    borderColor: '#F44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'การเปลี่ยนแปลงประชากรในระบบนิเวศ',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'จำนวนประชากร'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'เวลา (ปี)'
                    }
                }
            }
        }
    });
}

function getInputValues() {
    return {
        plants: parseInt(document.getElementById('plants').value) || 0,
        herbivores: parseInt(document.getElementById('herbivores').value) || 0,
        carnivores: parseInt(document.getElementById('carnivores').value) || 0,
        sunlight: parseInt(document.getElementById('sunlight').value) || 0,
        water: parseInt(document.getElementById('water').value) || 0
    };
}

function validateInputs(values) {
    const errors = [];
    
    if (values.plants < 0 || values.plants > 1000) {
        errors.push('จำนวนพืชต้องอยู่ระหว่าง 0-1000');
    }
    if (values.herbivores < 0 || values.herbivores > 500) {
        errors.push('จำนวนสัตว์กินพืชต้องอยู่ระหว่าง 0-500');
    }
    if (values.carnivores < 0 || values.carnivores > 100) {
        errors.push('จำนวนสัตว์กินเนื้อต้องอยู่ระหว่าง 0-100');
    }
    if (values.sunlight < 0 || values.sunlight > 100) {
        errors.push('ปริมาณแสงแดดต้องอยู่ระหว่าง 0-100');
    }
    if (values.water < 0 || values.water > 100) {
        errors.push('ปริมาณน้ำต้องอยู่ระหว่าง 0-100');
    }
    
    return errors;
}

function simulateEcosystem(initialValues) {
    const data = [];
    const years = 20;
    
    let plants = initialValues.plants;
    let herbivores = initialValues.herbivores;
    let carnivores = initialValues.carnivores;
    const sunlight = initialValues.sunlight;
    const water = initialValues.water;
    
    for (let year = 0; year <= years; year++) {
        const plantGrowthRate = (sunlight + water) / 200;
        const newPlantGrowth = plants * plantGrowthRate;
        
        const plantsEaten = Math.min(plants * 0.3, herbivores * 0.5);
        
        const herbivoreBirthRate = Math.min(plantsEaten / herbivores, 0.1) || 0;
        const newHerbivores = herbivores * herbivoreBirthRate;
        
        const herbivoresEaten = Math.min(herbivores * 0.2, carnivores * 0.3);
        
        const carnivoreBirthRate = Math.min(herbivoresEaten / carnivores, 0.05) || 0;
        const newCarnivores = carnivores * carnivoreBirthRate;
        
        plants = Math.max(0, plants + newPlantGrowth - plantsEaten);
        herbivores = Math.max(0, herbivores + newHerbivores - herbivoresEaten - herbivores * 0.02);
        carnivores = Math.max(0, carnivores + newCarnivores - carnivores * 0.03);
        
        plants = Math.min(plants, 2000);
        herbivores = Math.min(herbivores, 1000);
        carnivores = Math.min(carnivores, 200);
        
        data.push({
            year: year,
            plants: Math.round(plants),
            herbivores: Math.round(herbivores),
            carnivores: Math.round(carnivores)
        });
    }
    
    return data;
}

function updateChart(data) {
    const labels = data.map(d => `ปีที่ ${d.year}`);
    const plantsData = data.map(d => d.plants);
    const herbivoresData = data.map(d => d.herbivores);
    const carnivoresData = data.map(d => d.carnivores);
    
    chart.data.labels = labels;
    chart.data.datasets[0].data = plantsData;
    chart.data.datasets[1].data = herbivoresData;
    chart.data.datasets[2].data = carnivoresData;
    
    chart.update('active');
}

function animateChart(data, initialValues) {
    updateEcosystemAnimation(initialValues.plants, initialValues.herbivores, initialValues.carnivores, initialValues.sunlight, initialValues.water);
    
    chart.data.labels = [];
    chart.data.datasets[0].data = [];
    chart.data.datasets[1].data = [];
    chart.data.datasets[2].data = [];
    chart.update('none');
    
    let step = 0;
    const totalSteps = data.length;
    
    function addNextPoint() {
        if (step >= totalSteps) {
            isSimulating = false;
            const analysis = analyzeResults(data);
            updateStatus('การจำลองเสร็จสิ้น');
            showResults(analysis);
            return;
        }
        
        const currentData = data[step];
        
        chart.data.labels.push(`ปีที่ ${currentData.year}`);
        chart.data.datasets[0].data.push(currentData.plants);
        chart.data.datasets[1].data.push(currentData.herbivores);
        chart.data.datasets[2].data.push(currentData.carnivores);
        
        updateEcosystemAnimation(
            currentData.plants, 
            currentData.herbivores, 
            currentData.carnivores,
            initialValues.sunlight,
            initialValues.water
        );
        
        chart.update('active');
        
        updateStatus(`กำลังจำลอง... ปีที่ ${currentData.year}/${totalSteps - 1}`);
        
        step++;
        
        animationTimer = setTimeout(addNextPoint, 500);
    }
    
    addNextPoint();
}
function analyzeResults(data) {
    const finalDay = data[data.length - 1];
    const finalYears = data.slice(-5);
    const avgPlants = finalYears.reduce((sum, d) => sum + d.plants, 0) / finalYears.length;
    const avgHerbivores = finalYears.reduce((sum, d) => sum + d.herbivores, 0) / finalYears.length;
    const avgCarnivores = finalYears.reduce((sum, d) => sum + d.carnivores, 0) / finalYears.length;
    
    let balance = 'ไม่สมดุล';
    let sustainability = 'ไม่ยั่งยืน';
    let recommendation = '';
    
    // วิเคราะห์ความสมดุล
    if (avgPlants > 0 && avgHerbivores > 0 && avgCarnivores > 0) {
        if (avgPlants > avgHerbivores * 1.5 && avgHerbivores > avgCarnivores * 2) {
            balance = 'สมดุลดี';
            sustainability = 'ยั่งยืน';
            recommendation = 'ระบบนิเวศมีความสมดุลที่ดี สามารถดำรงอยู่ได้อย่างยั่งยืน';
        } else if (avgPlants > avgHerbivores && avgHerbivores > avgCarnivores) {
            balance = 'สมดุลปานกลาง';
            sustainability = 'ยั่งยืนบางส่วน';
            recommendation = 'ระบบนิเวศมีความสมดุลในระดับปานกลาง ควรปรับปรุงสภาพแวดล้อม';
        } else {
            balance = 'ไม่สมดุล';
            sustainability = 'ไม่ยั่งยืน';
            recommendation = 'ระบบนิเวศไม่สมดุล ควรเพิ่มจำนวนพืชหรือปรับปรุงสภาพแวดล้อม';
        }
    } else if (avgPlants <= 0) {
        recommendation = 'พืชสูญพันธุ์ - ควรเพิ่มปริมาณแสงแดดและน้ำ';
    } else if (avgHerbivores <= 0) {
        recommendation = 'สัตว์กินพืชสูญพันธุ์ - ควรลดจำนวนสัตว์กินเนื้อหรือเพิ่มจำนวนพืช';
    } else if (avgCarnivores <= 0) {
        recommendation = 'สัตว์กินเนื้อสูญพันธุ์ - ควรเพิ่มจำนวนสัตว์กินเนื้อหรือสัตว์กินพืช';
    }
    
    return {
        balance: balance,
        sustainability: sustainability,
        recommendation: recommendation,
        finalPopulation: {
            plants: Math.round(avgPlants),
            herbivores: Math.round(avgHerbivores),
            carnivores: Math.round(avgCarnivores)
        }
    };
}

function updateStatus(message) {
    document.getElementById('status').textContent = message;
}

function showResults(analysis) {
    const resultsDiv = document.getElementById('results');
    const balanceDiv = document.getElementById('balance');
    const sustainabilityDiv = document.getElementById('sustainability');
    const recommendationDiv = document.getElementById('recommendation');
    
    balanceDiv.textContent = `ความสมดุล: ${analysis.balance}`;
    sustainabilityDiv.textContent = `ความยั่งยืน: ${analysis.sustainability}`;
    recommendationDiv.textContent = `คำแนะนำ: ${analysis.recommendation}`;
    
    resultsDiv.style.display = 'block';
}

function startSimulation() {
    const values = getInputValues();
    const errors = validateInputs(values);
    
    // แสดงข้อผิดพลาดหากมี
    const existingError = document.querySelector('.error');
    if (existingError) {
        existingError.remove();
    }
    
    if (errors.length > 0) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.innerHTML = '<strong>ข้อผิดพลาด:</strong><br>' + errors.join('<br>');
        document.querySelector('.container').insertBefore(errorDiv, document.querySelector('.main-content'));
        return;
    }
    
    if (isSimulating) {
        updateStatus('กำลังจำลองอยู่แล้ว กรุณารอสักครู่');
        return;
    }
    
    isSimulating = true;
    updateStatus('เริ่มต้นการจำลอง...');
    
    // ซ่อนผลลัพธ์เก่า
    document.getElementById('results').style.display = 'none';
    
    // จำลองระบบนิเวศ
    simulationData = simulateEcosystem(values);
    
    // แสดงผลแบบอนิเมชัน
    animateChart(simulationData, values);
}

function resetSimulation() {
    if (animationTimer) {
        clearTimeout(animationTimer);
        animationTimer = null;
    }
    
    isSimulating = false;
    simulationData = [];
    currentStep = 0;
    
    // รีเซ็ตค่าในฟอร์ม
    document.getElementById('plants').value = 100;
    document.getElementById('herbivores').value = 50;
    document.getElementById('carnivores').value = 20;
    document.getElementById('sunlight').value = 80;
    document.getElementById('water').value = 70;
    document.getElementById('sunlight-value').textContent = '80%';
    document.getElementById('water-value').textContent = '70%';
    
    // รีเซ็ตสถานะ
    updateStatus('พร้อมเริ่มการจำลอง');
    document.getElementById('results').style.display = 'none';
    
    // ลบข้อผิดพลาด
    const existingError = document.querySelector('.error');
    if (existingError) {
        existingError.remove();
    }
    
    // รีเซ็ตกราฟ
    if (chart) {
        chart.data.labels = [];
        chart.data.datasets[0].data = [];
        chart.data.datasets[1].data = [];
        chart.data.datasets[2].data = [];
        chart.update('none');
    }
    
    // รีเซ็ตอนิเมชัน
    const values = getInputValues();
    updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
}

// เริ่มต้นเมื่อโหลดหน้าเว็บ
window.addEventListener('load', function() {
    initChart();
    const values = getInputValues();
    updateEcosystemAnimation(values.plants, values.herbivores, values.carnivores, values.sunlight, values.water);
});

// เพิ่ม interactivity
document.querySelector('.next-btn').addEventListener('click', function() {
    window.location.href = 'quize.html';
});

document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back();
});

document.querySelector('.home-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});