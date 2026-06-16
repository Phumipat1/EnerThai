/* ==========================================================================
   Ener Thai Traceability - Batch Origin Tracker Logic
   ========================================================================== */

// Local Database Mapping for Sourced Batches
const BATCH_DATABASE = {
    'B-BAN-01': {
        name: 'Phop Phra Golden Banana',
        nameEn: 'Phop Phra Golden Banana',
        nameTh: 'กล้วยหอมทองพบพระ',
        thaiName: 'กล้วยหอมทองพบพระ อำเภอพบพระ จังหวัดตาก',
        farmName: 'Phop Phra Highland Organic Farms',
        farmNameEn: 'Phop Phra Highland Organic Farms',
        farmNameTh: 'ฟาร์มออร์แกนิกบนที่ราบสูงพบพระ',
        farmId: 'TH-TAK-PP-047',
        cooperative: 'Phop Phra Highland Agricultural Cooperative',
        cooperativeEn: 'Phop Phra Highland Agricultural Cooperative',
        cooperativeTh: 'สหกรณ์การเกษตรพบพระ จำกัด',
        location: 'Tak, Thailand',
        locationEn: 'Tak, Thailand',
        locationTh: 'ตาก, ประเทศไทย',
        image: 'assets/story-banana.jpg',
        description: 'Grown in the volcanic highlands of Phop Phra District in Tak, over 600 meters above sea level. Cultivated slowly over 10–12 months in cooler temperatures under pristine mountain forest aquifers, resulting in high starch-to-sugar content and dense potassium reserves.',
        descriptionEn: 'Grown in the volcanic highlands of Phop Phra District in Tak, over 600 meters above sea level. Cultivated slowly over 10–12 months in cooler temperatures under pristine mountain forest aquifers, resulting in high starch-to-sugar content and dense potassium reserves.',
        descriptionTh: 'เพาะปลูกในที่ราบสูงภูเขาไฟของอำเภอพบพระ จังหวัดตาก สูงกว่าระดับน้ำทะเลกว่า 600 เมตร เพาะปลูกอย่างช้าๆ เป็นเวลา 10-12 เดือนภายใต้อุณหภูมิที่เย็นสบายและแหล่งน้ำจากป่าเขาที่บริสุทธิ์ ส่งผลให้มีปริมาณแป้งและน้ำตาลธรรมชาติสูง พร้อมทั้งมีโพแทสเซียมสะสมหนาแน่น',
        timeline: {
            harvest: 'Apr 2026',
            lab: 'May 2026',
            pack: 'May 2026',
            exp: 'May 2027'
        },
        lab: {
            heavyMetals: 'None Detected',
            pesticides: '0.0% (Organic)',
            microbes: 'Negative',
            audit: 'ISO-17025 Certified',
            auditEn: 'ISO-17025 Certified',
            auditTh: 'ได้รับการรับรอง ISO-17025'
        },
        minerals: [
            { label: 'Potassium (K+)', labelEn: 'Potassium (K+)', labelTh: 'โพแทสเซียม (K+)', val: '250mg', valEn: '250mg', valTh: '250 มก.' },
            { label: 'Magnesium (Mg2+)', labelEn: 'Magnesium (Mg2+)', labelTh: 'แมกนีเซียม (Mg2+)', val: '28mg', valEn: '28mg', valTh: '28 มก.' },
            { label: 'Vitamin B6', labelEn: 'Vitamin B6', labelTh: 'วิตามิน บี6', val: '0.4mg', valEn: '0.4mg', valTh: '0.4 มก.' },
            { label: 'Natural Carbs', labelEn: 'Natural Carbs', labelTh: 'คาร์โบไฮเดรตธรรมชาติ', val: '31g', valEn: '31g', valTh: '31 กรัม' },
            { label: 'Soil Elevation', labelEn: 'Soil Elevation', labelTh: 'ความสูงจากระดับน้ำทะเล', val: '640m', valEn: '640m', valTh: '640 เมตร' }
        ]
    },
    'B-MAN-01': {
        name: 'Bang Khla Nam Dok Mai Mango',
        nameEn: 'Bang Khla Nam Dok Mai Mango',
        nameTh: 'มะม่วงน้ำดอกไม้อำเภอบางคล้า',
        thaiName: 'มะม่วงน้ำดอกไม้อำเภอบางคล้า จังหวัดฉะเชิงเทรา',
        farmName: 'Bang Khla Sweet Gold Orchards',
        farmNameEn: 'Bang Khla Sweet Gold Orchards',
        farmNameTh: 'สวนมะม่วงโกลด์สวีท บางคล้า',
        farmId: 'TH-CCS-BK-112',
        cooperative: 'Bang Khla Fruit Growers Cooperative',
        cooperativeEn: 'Bang Khla Fruit Growers Cooperative',
        cooperativeTh: 'สหกรณ์ผู้ปลูกผลไม้อำเภอบางคล้า จำกัด',
        location: 'Chachoengsao, Thailand',
        locationEn: 'Chachoengsao, Thailand',
        locationTh: 'ฉะเชิงเทรา, ประเทศไทย',
        image: 'assets/story-mango.png',
        description: 'Harvested from the silt-rich volcanic sediments along the Bang Pakong River in Chachoengsao Province. The unique microclimate yields Nam Dok Mai mangoes with dense, fibreless golden flesh and exceptionally high levels of natural fast-absorbing glucose.',
        descriptionEn: 'Harvested from the silt-rich volcanic sediments along the Bang Pakong River in Chachoengsao Province. The unique microclimate yields Nam Dok Mai mangoes with dense, fibreless golden flesh and exceptionally high levels of natural fast-absorbing glucose.',
        descriptionTh: 'เก็บเกี่ยวจากตะกอนภูเขาไฟที่อุดมด้วยดินเลนริมแม่น้ำบางปะกงในจังหวัดฉะเชิงเทรา สภาพอากาศระดับจุลภาคที่เป็นเอกลักษณ์ทำให้ได้มะม่วงน้ำดอกไม้ที่มีเนื้อสีเหลืองทองหนาแน่น ละเอียดไม่มีเสี้ยน และมีระดับกลูโคสธรรมชาติที่ดูดซึมเร็วสูงเป็นพิเศษ',
        timeline: {
            harvest: 'May 2026',
            lab: 'May 2026',
            pack: 'Jun 2026',
            exp: 'Jun 2027'
        },
        lab: {
            heavyMetals: 'None Detected',
            pesticides: '0.0% (Organic)',
            microbes: 'Negative',
            audit: 'ISO-17025 Certified',
            auditEn: 'ISO-17025 Certified',
            auditTh: 'ได้รับการรับรอง ISO-17025'
        },
        minerals: [
            { label: 'Vitamin C', labelEn: 'Vitamin C', labelTh: 'วิตามิน ซี', val: '40mg', valEn: '40mg', valTh: '40 มก.' },
            { label: 'Potassium (K+)', labelEn: 'Potassium (K+)', labelTh: 'โพแทสเซียม (K+)', val: '180mg', valEn: '180mg', valTh: '180 มก.' },
            { label: 'Beta-Carotene', labelEn: 'Beta-Carotene', labelTh: 'เบต้าแคโรทีน', val: '640mcg', valEn: '640mcg', valTh: '640 ไมโครกรัม' },
            { label: 'Fast Carbs', labelEn: 'Fast Carbs', labelTh: 'คาร์โบไฮเดรตดูดซึมเร็ว', val: '30g', valEn: '30g', valTh: '30 กรัม' },
            { label: 'Soil Type', labelEn: 'Soil Type', labelTh: 'ประเภทดิน', val: 'Alluvial Silt', valEn: 'Alluvial Silt', valTh: 'ดินตะกอนน้ำพัด' }
        ]
    },
    'B-PIN-01': {
        name: 'Prachuap Pattavia Pineapple',
        nameEn: 'Prachuap Pattavia Pineapple',
        nameTh: 'สับปะรดปัตตาเวียประจวบคีรีขันธ์',
        thaiName: 'สับปะรดพันธุ์ปัตตาเวีย จังหวัดประจวบคีรีขันธ์',
        farmName: 'Prachuap Gulf Coast Farms',
        farmNameEn: 'Prachuap Gulf Coast Farms',
        farmNameTh: 'ฟาร์มชายฝั่งอ่าวไทย ประจวบฯ',
        farmId: 'TH-PKK-PV-089',
        cooperative: 'Prachuap Pineapple Cooperative Union',
        cooperativeEn: 'Prachuap Pineapple Cooperative Union',
        cooperativeTh: 'ชุมนุมสหกรณ์สับปะรดประจวบคีรีขันธ์ จำกัด',
        location: 'Prachuap Khiri Khan, Thailand',
        locationEn: 'Prachuap Khiri Khan, Thailand',
        locationTh: 'ประจวบคีรีขันธ์, ประเทศไทย',
        image: 'assets/story-pineapple.jpg',
        description: 'Sourced from sandy loam coastal plantations in Prachuap Khiri Khan, Thailand’s primary high-grade pineapple cultivation zone. High sunshine hours and sea breezes yield pineapples rich in natural bromelain enzymes and refreshing organic fruit acids.',
        descriptionEn: 'Sourced from sandy loam coastal plantations in Prachuap Khiri Khan, Thailand’s primary high-grade pineapple cultivation zone. High sunshine hours and sea breezes yield pineapples rich in natural bromelain enzymes and refreshing organic fruit acids.',
        descriptionTh: 'จัดหาจากไร่ชายฝั่งดินร่วนปนทรายในจังหวัดประจวบคีรีขันธ์ ซึ่งเป็นเขตเพาะปลูกสับปะรดคุณภาพสูงชั้นนำของประเทศไทย แสงแดดที่ยาวนานและลมทะเลทำให้ได้สับปะรดที่อุดมไปด้วยเอนไซม์โบรมีเลนตามธรรมชาติและกรดผลไม้ออร์แกนิกที่สดชื่น',
        timeline: {
            harvest: 'May 2026',
            lab: 'Jun 2026',
            pack: 'Jun 2026',
            exp: 'Jun 2027'
        },
        lab: {
            heavyMetals: 'None Detected',
            pesticides: '0.0% (Organic)',
            microbes: 'Negative',
            audit: 'ISO-17025 Certified',
            auditEn: 'ISO-17025 Certified',
            auditTh: 'ได้รับการรับรอง ISO-17025'
        },
        minerals: [
            { label: 'Bromelain Enzyme', labelEn: 'Bromelain Enzyme', labelTh: 'เอนไซม์โบรมีเลน', val: 'Active', valEn: 'Active', valTh: 'ตื่นตัวพร้อมทำงาน' },
            { label: 'Vitamin C', labelEn: 'Vitamin C', labelTh: 'วิตามิน ซี', val: '24mg', valEn: '24mg', valTh: '24 มก.' },
            { label: 'Manganese (Mn)', labelEn: 'Manganese (Mn)', labelTh: 'แมกนีเซียม (Mn)', val: '0.9mg', valEn: '0.9mg', valTh: '0.9 มก.' },
            { label: 'Fruit Acids', labelEn: 'Fruit Acids', labelTh: 'กรดผลไม้', val: 'Citric/Malic', valEn: 'Citric/Malic', valTh: 'ซิตริก/มาลิก' },
            { label: 'Soil Type', labelEn: 'Soil Type', labelTh: 'ประเภทดิน', val: 'Sandy Loam', valEn: 'Sandy Loam', valTh: 'ดินร่วนปนทราย' }
        ]
    },
    'B-COC-01': {
        name: 'Amphawa Organic Coconut Water',
        nameEn: 'Amphawa Organic Coconut Water',
        nameTh: 'น้ำมะพร้าวอ่อนน้ำหอมอัมพวาออร์แกนิก',
        thaiName: 'วิสาหกิจชุมชนมะพร้าวอ่อนน้ำหอมอัมพวา จังหวัดสมุทรสงคราม',
        farmName: 'Amphawa Estuary Organic Groves',
        farmNameEn: 'Amphawa Estuary Organic Groves',
        farmNameTh: 'สวนมะพร้าวออร์แกนิกปากแม่น้ำอัมพวา',
        farmId: 'TH-SSK-AP-023',
        cooperative: 'Amphawa Organic Coconut Farmers Enterprise',
        cooperativeEn: 'Amphawa Organic Coconut Farmers Enterprise',
        cooperativeTh: 'วิสาหกิจชุมชนชาวสวนมะพร้าวออร์แกนิกอัมพวา',
        location: 'Samut Songkhram, Thailand',
        locationEn: 'Samut Songkhram, Thailand',
        locationTh: 'สมุทรสงคราม, ประเทศไทย',
        image: 'assets/story-farmers.png',
        description: 'Harvested from sea-water estuary orchards in Amphawa District. The brackish soil conditions feed the trees with natural sodium, potassium, and magnesium chlorides, creating coconut water with an identical mineral structure to human sweat.',
        descriptionEn: 'Harvested from sea-water estuary orchards in Amphawa District. The brackish soil conditions feed the trees with natural sodium, potassium, and magnesium chlorides, creating coconut water with an identical mineral structure to human sweat.',
        descriptionTh: 'เก็บเกี่ยวจากสวนปากแม่น้ำสองน้ำในอำเภออัมพวา สภาพดินกร่อยช่วยป้อนโซเดียม โพแทสเซียม และแมกนีเซียมคลอไรด์ตามธรรมชาติให้แก่ต้นมะพร้าว ทำให้น้ำมะพร้าวมีโครงสร้างแร่ธาตุที่ใกล้เคียงกับเหงื่อของมนุษย์อย่างยิ่ง',
        timeline: {
            harvest: 'Jun 2026',
            lab: 'Jun 2026',
            pack: 'Jun 2026',
            exp: 'Jun 2027'
        },
        lab: {
            heavyMetals: 'None Detected',
            pesticides: '0.0% (Organic)',
            microbes: 'Negative',
            audit: 'ISO-17025 Certified',
            auditEn: 'ISO-17025 Certified',
            auditTh: 'ได้รับการรับรอง ISO-17025'
        },
        minerals: [
            { label: 'Sodium (Na+)', labelEn: 'Sodium (Na+)', labelTh: 'โซเดียม (Na+)', val: '225mg', valEn: '225mg', valTh: '225 มก.' },
            { label: 'Potassium (K+)', labelEn: 'Potassium (K+)', labelTh: 'โพแทสเซียม (K+)', val: '350mg', valEn: '350mg', valTh: '350 มก.' },
            { label: 'Magnesium (Mg2+)', labelEn: 'Magnesium (Mg2+)', labelTh: 'แมกนีเซียม (Mg2+)', val: '32mg', valEn: '32mg', valTh: '32 มก.' },
            { label: 'Osmolarity', labelEn: 'Osmolarity', labelTh: 'ออสโมลาริตี', val: 'Isotonic', valEn: 'Isotonic', valTh: 'ไอโซโทนิก (สมดุลกับเหงื่อ)' },
            { label: 'Soil Salinity', labelEn: 'Soil Salinity', labelTh: 'ความเค็มของดิน', val: 'Brackish Estuary', valEn: 'Brackish Estuary', valTh: 'ดินกร่อยปากแม่น้ำ' }
        ]
    }
};

// UI Elements
const emptyState = document.getElementById('emptyState');
const resultsSheet = document.getElementById('resultsSheet');
const laserLine = document.getElementById('laserLine');

const resultCoopImg = document.getElementById('resultCoopImg');
const resultMapLocation = document.getElementById('resultMapLocation');
const resultCoopTitle = document.getElementById('resultCoopTitle');
const resultCoopThaiName = document.getElementById('resultCoopThaiName');
const resultFarmName = document.getElementById('resultFarmName');
const resultFarmId = document.getElementById('resultFarmId');
const resultCoopDesc = document.getElementById('resultCoopDesc');

const timelineHarvestDesc = document.getElementById('timelineHarvestDesc');
const timelineHarvestDate = document.getElementById('timelineHarvestDate');
const timelineLabDate = document.getElementById('timelineLabDate');
const timelinePackDate = document.getElementById('timelinePackDate');
const timelineExpDate = document.getElementById('timelineExpDate');

const resultInspector = document.getElementById('resultInspector');
const resultMineralChips = document.getElementById('resultMineralChips');

const batchCodeInput = document.getElementById('batchCodeInput');
const submitBatchBtn = document.getElementById('submitBatchBtn');

// Active Html5Qrcode Instance
let html5Qrcode = null;
let currentBatchCode = '';

// Date translation helper
function translateDate(dateStr, lang) {
    if (lang !== 'th') return dateStr;
    return dateStr
        .replace('Jan', 'ม.ค.')
        .replace('Feb', 'ก.พ.')
        .replace('Mar', 'มี.ค.')
        .replace('Apr', 'เม.ย.')
        .replace('May', 'พ.ค.')
        .replace('Jun', 'มิ.ย.')
        .replace('Jul', 'ก.ค.')
        .replace('Aug', 'ส.ค.')
        .replace('Sep', 'ก.ย.')
        .replace('Oct', 'ต.ค.')
        .replace('Nov', 'พ.ย.')
        .replace('Dec', 'ธ.ค.');
}

// Toggle scanner state
function toggleScanner() {
    if (html5Qrcode && html5Qrcode.isScanning) {
        html5Qrcode.stop().then(() => {
            updateScannerUI(false);
            console.log("Scanner stopped manually.");
        }).catch(err => {
            console.error("Failed to stop scanner manually:", err);
        });
    } else {
        startScanner();
    }
}

// Update the scanner button and laser UI states
function updateScannerUI(isScanning) {
    const scannerStatusIcon = document.getElementById('scannerStatusIcon');
    const scannerStatusText = document.getElementById('scannerStatusText');
    const laserLine = document.getElementById('laserLine');
    const lang = localStorage.getItem('enerthai_lang') || 'en';

    if (isScanning) {
        if (scannerStatusIcon) scannerStatusIcon.textContent = '🔴';
        if (scannerStatusText) {
            scannerStatusText.innerHTML = lang === 'th' ? '<span lang="th">ปิดกล้อง</span>' : '<span lang="en">Stop Camera</span>';
        }
        if (laserLine) laserLine.style.display = 'block';
    } else {
        if (scannerStatusIcon) scannerStatusIcon.textContent = '🟢';
        if (scannerStatusText) {
            scannerStatusText.innerHTML = lang === 'th' ? '<span lang="th">เปิดกล้อง</span>' : '<span lang="en">Start Camera</span>';
        }
        if (laserLine) laserLine.style.display = 'none';
        
        // Show stopped placeholder inside #reader if camera is not active
        const readerEl = document.getElementById('reader');
        if (readerEl && !html5Qrcode?.isScanning) {
            readerEl.innerHTML = lang === 'th' ? `
                <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                    <p style="font-size: 32px; margin-bottom: 8px;">📷</p>
                    <p><strong>กล้องถูกปิดการใช้งาน</strong></p>
                    <p style="font-size: 12px; margin-top: 4px; color: var(--text-muted);">คลิก "เปิดกล้อง" ด้านล่างเพื่อเริ่มสแกน</p>
                </div>
            ` : `
                <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                    <p style="font-size: 32px; margin-bottom: 8px;">📷</p>
                    <p><strong>Camera is Stopped</strong></p>
                    <p style="font-size: 12px; margin-top: 4px; color: var(--text-muted);">Click "Start Camera" below to scan.</p>
                </div>
            `;
        }
    }
}

// Initialize QR/Barcode Scanner
function startScanner() {
    if (!document.getElementById('reader')) return;

    // Reset reader element in case it contains stopped placeholder
    document.getElementById('reader').innerHTML = '';

    // Create Html5Qrcode instance if not exists
    if (!html5Qrcode) {
        html5Qrcode = new Html5Qrcode("reader");
    }

    // Set UI to active scanning state
    updateScannerUI(true);

    const config = {
        fps: 15,
        qrbox: function(width, height) {
            const minDim = Math.min(width, height);
            return {
                width: Math.floor(minDim * 0.7),
                height: Math.floor(minDim * 0.7)
            };
        },
        aspectRatio: 1.0
    };

    // Start streaming back camera
    html5Qrcode.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
            handleScannedText(decodedText);
        },
        (errorMessage) => {
            // Silent error on frame scanning failures
        }
    ).catch(err => {
        console.error("Camera startup failed:", err);
        updateScannerUI(false);
        
        const lang = localStorage.getItem('enerthai_lang') || 'en';
        document.getElementById('reader').innerHTML = lang === 'th' ? `
            <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                <p style="font-size: 32px; margin-bottom: 8px;">📷</p>
                <p><strong>ปฏิเสธการเข้าถึงกล้อง</strong></p>
                <p style="font-size: 12px; margin-top: 4px; color: var(--text-muted);">โปรนอนุญาตสิทธิ์เข้าถึงกล้องในเบราว์เซอร์ของคุณ หรือป้อนรหัสเองด้านล่าง</p>
            </div>
        ` : `
            <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                <p style="font-size: 32px; margin-bottom: 8px;">📷</p>
                <p><strong>Camera Permission Denied</strong></p>
                <p style="font-size: 12px; margin-top: 4px; color: var(--text-muted);">Please allow camera access in settings or enter code manually.</p>
            </div>
        `;
    });
}

// Extract Batch ID from URL or Code text and fetch details
function handleScannedText(text) {
    let batchId = text.trim().toUpperCase();

    if (text.includes('?batch=')) {
        try {
            const urlObj = new URL(text);
            const batchParam = urlObj.searchParams.get('batch');
            if (batchParam) {
                batchId = batchParam.trim().toUpperCase();
            }
        } catch (e) {
            console.error("Failed to parse scanned URL:", e);
        }
    } else if (text.includes('trace.html')) {
        const splitParts = text.split('batch=');
        if (splitParts.length > 1) {
            batchId = splitParts[1].split('&')[0].trim().toUpperCase();
        }
    }

    showBatchDetails(batchId);
}

// Display Sachet Cooperative Data and Timeline
function showBatchDetails(batchCode) {
    const data = BATCH_DATABASE[batchCode];
    const lang = localStorage.getItem('enerthai_lang') || 'en';
    const suffix = lang === 'th' ? 'Th' : 'En';

    if (!data) {
        const notFoundMsg = lang === 'th' 
            ? `ไม่พบรหัสแบทช์ผลิต "${batchCode}" กรุณาลองใช้ B-BAN-01 หรือ B-MAN-01!`
            : `Batch code "${batchCode}" not found. Try B-BAN-01 or B-MAN-01!`;
        if (window.showToast) {
            window.showToast(notFoundMsg, 'error');
        } else {
            alert(notFoundMsg);
        }
        return;
    }

    currentBatchCode = batchCode;

    // Stop scanner if running to preserve device battery
    if (html5Qrcode && html5Qrcode.isScanning) {
        html5Qrcode.stop().then(() => {
            updateScannerUI(false);
            console.log("Scanner stopped after successful decode.");
        }).catch(err => {
            console.error("Failed to stop scanner:", err);
        });
    } else {
        updateScannerUI(false);
    }

    // Update Form Inputs
    batchCodeInput.value = batchCode;

    // Fill Cooperative Details
    resultCoopImg.src = data.image;
    resultCoopImg.alt = data['name' + suffix] || data.name;
    resultMapLocation.textContent = data['location' + suffix] || data.location;
    resultCoopTitle.textContent = data['name' + suffix] || data.name;
    resultCoopThaiName.textContent = data.thaiName;
    resultFarmName.textContent = data['farmName' + suffix] || data.farmName;
    resultFarmId.textContent = data.farmId;
    resultCoopDesc.textContent = data['description' + suffix] || data.description;

    // Fill Sourcing Timeline
    const harvestCoop = data['cooperative' + suffix] || data.cooperative;
    timelineHarvestDesc.textContent = lang === 'th' 
        ? `เก็บเกี่ยวผลผลิตออร์แกนิกโดย ${harvestCoop}`
        : `${harvestCoop} harvest organic yield.`;
    timelineHarvestDate.textContent = translateDate(data.timeline.harvest, lang);
    timelineLabDate.textContent = translateDate(data.timeline.lab, lang);
    timelinePackDate.textContent = translateDate(data.timeline.pack, lang);
    timelineExpDate.textContent = translateDate(data.timeline.exp, lang);

    // Fill Lab Audit Inspector
    resultInspector.textContent = data.lab['audit' + suffix] || data.lab.audit;

    // Populate Mineral Chips
    resultMineralChips.innerHTML = '';
    data.minerals.forEach(min => {
        const chip = document.createElement('div');
        chip.className = 'mineral-chip';
        const lbl = min['label' + suffix] || min.label;
        const val = min['val' + suffix] || min.val;
        chip.innerHTML = `
            <span style="color: #2A9D8F; font-weight: 700;">✦</span>
            <span><strong>${lbl}:</strong> ${val}</span>
        `;
        resultMineralChips.appendChild(chip);
    });

    // Reveal Results Sheet with Smooth Animation
    emptyState.style.display = 'none';
    resultsSheet.style.display = 'flex';

    // Send visual toast confirmation
    if (window.showToast) {
        const successMsg = lang === 'th' 
            ? `แบทช์ผลิต ${batchCode} ได้รับการรับรองความถูกต้องเรียบร้อยแล้ว!` 
            : `Batch ${batchCode} verified successfully!`;
        window.showToast(successMsg, 'success');
    }
}

// Event Bindings
document.addEventListener('DOMContentLoaded', () => {
    // Bind Manual Enter Button
    submitBatchBtn.addEventListener('click', () => {
        const enteredVal = batchCodeInput.value.trim().toUpperCase();
        const lang = localStorage.getItem('enerthai_lang') || 'en';
        if (enteredVal) {
            showBatchDetails(enteredVal);
        } else {
            if (window.showToast) {
                const errorMsg = lang === 'th' ? "กรุณากรอกรหัสแบทช์ผลิตก่อน" : "Please enter a batch code first.";
                window.showToast(errorMsg, "error");
            }
        }
    });

    // Support hitting 'Enter' key inside manual input
    batchCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBatchBtn.click();
        }
    });

    // Bind Toggle Scanner Button
    const toggleScannerBtn = document.getElementById('toggleScannerBtn');
    if (toggleScannerBtn) {
        toggleScannerBtn.addEventListener('click', () => {
            toggleScanner();
        });
    }

    // Check for query parameter triggers (?batch=B-BAN-01)
    const urlParams = new URLSearchParams(window.location.search);
    const batchParam = urlParams.get('batch');
    if (batchParam) {
        setTimeout(() => {
            showBatchDetails(batchParam.trim().toUpperCase());
        }, 300);
    } else {
        setTimeout(() => {
            startScanner();
        }, 500);
    }

    // Register language change listener to redraw results sheet in the active language
    window.addEventListener('langchange', () => {
        updateScannerUI(html5Qrcode && html5Qrcode.isScanning);
        if (currentBatchCode) {
            showBatchDetails(currentBatchCode);
        }
    });
});
