// ข้อมูลสำหรับแต่ละหัวข้อ
const modalData = {
    producers: {
        title: "ผู้ผลิต (Producers)",
        content: `
            <div class="modal-detail">
                <h3>ผู้ผลิต คืออะไร?</h3>
                <p>ผู้ผลิตคือสิ่งมีชีวิตที่สามารถสร้างอาหารเองได้จากแสงแดดและสารอนินทรีย์ ผ่านกระบวนการสังเคราะห์แสง</p>
                
                <h4>กระบวนการสังเคราะห์แสง</h4>
                <p>คาร์บอนไดออกไซด์ + น้ำ + แสงแดด → น้ำตาล + ออกซิเจน</p>
                
                <h4>ตัวอย่างผู้ผลิต</h4>
                <ul>
                    <li><strong>ต้นไผ่:</strong> เติบโตเร็ว ให้ออกซิเจนมาก</li>
                    <li><strong>ต้นยูคาลิปตัส:</strong> ดูดซับคาร์บอนไดออกไซด์ได้ดี</li>
                    <li><strong>หญ้า:</strong> เป็นอาหารพื้นฐานของสัตว์กินพืช</li>
                    <li><strong>สาหร่าย:</strong> ผู้ผลิตในแหล่งน้ำ</li>
                </ul>
                
                <div class="importance-box">
                    <h4>ความสำคัญ</h4>
                    <p>ผู้ผลิตเป็นจุดเริ่มต้นของห่วงโซ่อาหาร สร้างอาหารให้สิ่งมีชีวิตอื่น และผลิตออกซิเจนที่จำเป็นต่อการหายใจ</p>
                </div>
            </div>
        `
    },
    consumers: {
        title: "ผู้บริโภค (Consumers)",
        content: `
            <div class="modal-detail">
                <h3>ผู้บริโภค คืออะไร?</h3>
                <p>ผู้บริโภคคือสิ่งมีชีวิตที่ไม่สามารถสร้างอาหารเองได้ ต้องกินสิ่งมีชีวิตอื่นเป็นอาหาร</p>
                
                <h4>ระดับของผู้บริโภค</h4>
                <div class="consumer-levels">
                    <div class="level">
                        <h5>ผู้บริโภคขั้นที่ 1 (ปฐมภูมิ)</h5>
                        <p>สัตว์กินพืช เช่น กิ้งก่า หอย กิ้งก่าบ้าน กระรอก</p>
                    </div>
                    <div class="level">
                        <h5>ผู้บริโภคขั้นที่ 2 (ทุติยภูมิ)</h5>
                        <p>สัตว์กินเนื้อขนาดเล็ก เช่น นก แมลง เมาท์</p>
                    </div>
                    <div class="level">
                        <h5>ผู้บริโภคขั้นที่ 3 (ตติยภูมิ)</h5>
                        <p>สัตว์กินเนื้อขนาดใหญ่ เช่น งู เหยี่ยว เสือ</p>
                    </div>
                </div>
                
                <div class="importance-box">
                    <h4>ความสำคัญ</h4>
                    <p>ผู้บริโภคช่วยควบคุมจำนวนประชากรของสิ่งมีชีวิตในระบบนิเวศ และถ่ายทอดพลังงานในห่วงโซ่อาหาร</p>
                </div>
            </div>
        `
    },
    decomposers: {
        title: "ผู้ย่อยสลาย (Decomposers)",
        content: `
            <div class="modal-detail">
                <h3>ผู้ย่อยสลาย คืออะไร?</h3>
                <p>ผู้ย่อยสลายคือสิ่งมีชีวิตที่ย่อยสลายซากของสิ่งมีชีวิตที่ตายแล้ว ให้กลายเป็นสารอนินทรีย์</p>
                
                <h4>กระบวนการย่อยสลาย</h4>
                <p>ซากสิ่งมีชีวิต → สารอนินทรีย์ → ธาตุอาหารในดิน → ถูกดูดซึมโดยผู้ผลิต</p>
                
                <h4>ตัวอย่างผู้ย่อยสลาย</h4>
                <ul>
                    <li><strong>แบคทีเรีย:</strong> ย่อยสลายสารอินทรีย์ขนาดเล็ก</li>
                    <li><strong>เชื้อรา:</strong> ย่อยสลายใบไม้และไม้ที่ตาย</li>
                    <li><strong>ไส้เดือน:</strong> ย่อยสลายใบไม้และขุ่ยดิน</li>
                    <li><strong>ปลวก:</strong> ย่อยสลายไม้ที่ตาย</li>
                </ul>
                
                <h4>ประโยชน์ที่ได้รับ</h4>
                <ul>
                    <li>ทำให้ดินมีความอุดมสมบูรณ์</li>
                    <li>คืนธาตุอาหารสู่ระบบนิเวศ</li>
                    <li>ทำความสะอาดสิ่งแวดล้อม</li>
                    <li>ช่วยให้วัฏจักรธาตุอาหารต่อเนื่อง</li>
                </ul>
                
                <div class="importance-box">
                    <h4>ความสำคัญ</h4>
                    <p>ผู้ย่อยสลายเป็น "นักรีไซเคิล" ของธรรมชาติ ช่วยให้สารอาหารหมุนเวียนในระบบนิเวศอย่างต่อเนื่อง</p>
                </div>
            </div>
        `
    }
};

// ตัวแปรสำหรับเก็บสถานะการอ่าน
let currentSpeech = null;
let isSpeaking = false;

// ฟังก์ชันแสดง Modal
function showModal(type) {
    const modal = document.getElementById('explanationModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modalData[type]) {
        modalTitle.textContent = modalData[type].title;
        modalBody.innerHTML = modalData[type].content;
        modal.style.display = 'block';
        
        // เพิ่มเอฟเฟกต์การเปิด
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.getElementById('explanationModal');
    modal.classList.remove('show');
    
    // หยุดการอ่านออกเสียงถ้ากำลังอ่านอยู่
    if (isSpeaking) {
        stopSpeaking();
    }
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// ฟังก์ชันอ่านออกเสียง
function speakText() {
    const modalBody = document.getElementById('modalBody');
    const speakBtn = document.getElementById('speakBtn');
    
    if (!modalBody) return;
    
    // ถ้ากำลังอ่านอยู่ ให้หยุด
    if (isSpeaking) {
        stopSpeaking();
        return;
    }
    
    // ดึงข้อความจาก modal (ลบ HTML tags)
    const textContent = modalBody.innerText || modalBody.textContent;
    
    // ตรวจสอบว่าเบราว์เซอร์รองรับ Speech Synthesis หรือไม่
    if ('speechSynthesis' in window) {
        currentSpeech = new SpeechSynthesisUtterance(textContent);
        
        // ตั้งค่าเสียง
        currentSpeech.lang = 'th-TH'; // ภาษาไทย
        currentSpeech.rate = 1.2; // ความเร็วในการอ่าน
        currentSpeech.pitch = 1; // ระดับเสียง
        currentSpeech.volume = 1; // ระดับความดัง
        
        // Event listeners
        currentSpeech.onstart = function() {
            isSpeaking = true;
            speakBtn.innerHTML = '⏹️ หยุดอ่าน';
            speakBtn.classList.add('speaking');
        };
        
        currentSpeech.onend = function() {
            isSpeaking = false;
            speakBtn.innerHTML = '🔊 อ่านออกเสียง';
            speakBtn.classList.remove('speaking');
        };
        
        currentSpeech.onerror = function() {
            isSpeaking = false;
            speakBtn.innerHTML = '🔊 อ่านออกเสียง';
            speakBtn.classList.remove('speaking');
        };
        
        // เริ่มอ่าน
        speechSynthesis.speak(currentSpeech);
    } else {
        alert('เบราว์เซอร์ของคุณไม่รองรับการอ่านออกเสียง');
    }
}

// ฟังก์ชันหยุดการอ่านออกเสียง
function stopSpeaking() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    isSpeaking = false;
    const speakBtn = document.getElementById('speakBtn');
    if (speakBtn) {
        speakBtn.innerHTML = '🔊 อ่านออกเสียง';
        speakBtn.classList.remove('speaking');
    }
}

// ฟังก์ชันไปหน้าถัดไป
function showNextPage() {
    // เปลี่ยนเป็น URL ของหน้าถัดไปที่ต้องการ
    window.location.href = 'how2use.html';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // ปิด modal เมื่อคลิกนอก modal
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('explanationModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // ปิด modal เมื่อกด ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // เพิ่มเอฟเฟกต์ hover สำหรับไอคอน
    const icons = document.querySelectorAll('.component-icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// ฟังก์ชันเพิ่มเติมสำหรับเอฟเฟกต์
function addFloatingAnimation() {
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.style.animation = 'float 6s ease-in-out infinite';
    });
}

// เรียกใช้เมื่อโหลดหน้า
window.addEventListener('load', function() {
    addFloatingAnimation();
    
    // เพิ่มเอฟเฟกต์ fade-in สำหรับองค์ประกอบต่างๆ
    const components = document.querySelectorAll('.component');
    components.forEach((component, index) => {
        component.style.opacity = '0';
        component.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            component.style.transition = 'all 0.6s ease';
            component.style.opacity = '1';
            component.style.transform = 'translateY(0)';
        }, index * 200);
    });
});