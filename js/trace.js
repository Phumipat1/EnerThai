/* ==========================================================================
   Ener Thai Traceability - Batch Origin Tracker Logic
   ========================================================================== */

// Local Database Mapping for Sourced Batches
const BATCH_DATABASE = {
    'B-BAN-01': {
        name: 'Phop Phra Golden Banana',
        thaiName: 'กล้วยหอมทองพบพระ อำเภอพบพระ จังหวัดตาก',
        farmName: 'Phop Phra Highland Organic Farms',
        farmId: 'TH-TAK-PP-047',
        cooperative: 'Phop Phra Highland Agricultural Cooperative',
        location: 'Tak, Thailand',
        image: 'assets/story-banana.jpg',
        description: 'Grown in the volcanic highlands of Phop Phra District in Tak, over 600 meters above sea level. Cultivated slowly over 10–12 months in cooler temperatures under pristine mountain forest aquifers, resulting in high starch-to-sugar content and dense potassium reserves.',
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
            audit: 'ISO-17025 Certified'
        },
        minerals: [
            { label: 'Potassium (K+)', val: '250mg' },
            { label: 'Magnesium (Mg2+)', val: '28mg' },
            { label: 'Vitamin B6', val: '0.4mg' },
            { label: 'Natural Carbs', val: '31g' },
            { label: 'Soil Elevation', val: '640m' }
        ]
    },
    'B-MAN-01': {
        name: 'Bang Khla Nam Dok Mai Mango',
        thaiName: 'มะม่วงน้ำดอกไม้อำเภอบางคล้า จังหวัดฉะเชิงเทรา',
        farmName: 'Bang Khla Sweet Gold Orchards',
        farmId: 'TH-CCS-BK-112',
        cooperative: 'Bang Khla Fruit Growers Cooperative',
        location: 'Chachoengsao, Thailand',
        image: 'assets/story-mango.png',
        description: 'Harvested from the silt-rich volcanic sediments along the Bang Pakong River in Chachoengsao Province. The unique microclimate yields Nam Dok Mai mangoes with dense, fibreless golden flesh and exceptionally high levels of natural fast-absorbing glucose.',
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
            audit: 'ISO-17025 Certified'
        },
        minerals: [
            { label: 'Vitamin C', val: '40mg' },
            { label: 'Potassium (K+)', val: '180mg' },
            { label: 'Beta-Carotene', val: '640mcg' },
            { label: 'Fast Carbs', val: '30g' },
            { label: 'Soil Type', val: 'Alluvial Silt' }
        ]
    },
    'B-PIN-01': {
        name: 'Prachuap Pattavia Pineapple',
        thaiName: 'สับปะรดพันธุ์ปัตตาเวีย จังหวัดประจวบคีรีขันธ์',
        farmName: 'Prachuap Gulf Coast Farms',
        farmId: 'TH-PKK-PV-089',
        cooperative: 'Prachuap Pineapple Cooperative Union',
        location: 'Prachuap Khiri Khan, Thailand',
        image: 'assets/story-pineapple.jpg',
        description: 'Sourced from sandy loam coastal plantations in Prachuap Khiri Khan, Thailand’s primary high-grade pineapple cultivation zone. High sunshine hours and sea breezes yield pineapples rich in natural bromelain enzymes and refreshing organic fruit acids.',
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
            audit: 'ISO-17025 Certified'
        },
        minerals: [
            { label: 'Bromelain Enzyme', val: 'Active' },
            { label: 'Vitamin C', val: '24mg' },
            { label: 'Manganese (Mn)', val: '0.9mg' },
            { label: 'Fruit Acids', val: 'Citric/Malic' },
            { label: 'Soil Type', val: 'Sandy Loam' }
        ]
    },
    'B-COC-01': {
        name: 'Amphawa Organic Coconut Water',
        thaiName: 'วิสาหกิจชุมชนมะพร้าวอ่อนน้ำหอมอัมพวา จังหวัดสมุทรสงคราม',
        farmName: 'Amphawa Estuary Organic Groves',
        farmId: 'TH-SSK-AP-023',
        cooperative: 'Amphawa Organic Coconut Farmers Enterprise',
        location: 'Samut Songkhram, Thailand',
        image: 'assets/story-farmers.png', // Fall back to farmers profile image
        description: 'Harvested from sea-water estuary orchards in Amphawa District. The brackish soil conditions feed the trees with natural sodium, potassium, and magnesium chlorides, creating coconut water with an identical mineral structure to human sweat.',
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
            audit: 'ISO-17025 Certified'
        },
        minerals: [
            { label: 'Sodium (Na+)', val: '225mg' },
            { label: 'Potassium (K+)', val: '350mg' },
            { label: 'Magnesium (Mg2+)', val: '32mg' },
            { label: 'Osmolarity', val: 'Isotonic' },
            { label: 'Soil Salinity', val: 'Brackish Estuary' }
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

// Initialize QR/Barcode Scanner
function startScanner() {
    // Check if the scanner element exists
    if (!document.getElementById('reader')) return;

    // Show scanner laser animation line
    laserLine.style.display = 'block';

    // Instance of Html5Qrcode
    html5Qrcode = new Html5Qrcode("reader");

    const config = {
        fps: 15,
        qrbox: function(width, height) {
            // Responsive box sizing
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
            // On Success Decode
            laserLine.style.display = 'none';
            handleScannedText(decodedText);
        },
        (errorMessage) => {
            // Silent error on frame scanning failures (keeps scanning silently)
        }
    ).catch(err => {
        console.error("Camera startup failed:", err);
        laserLine.style.display = 'none';
        
        // Hide reader container and show a simple camera permission fallback message
        document.getElementById('reader').innerHTML = `
            <div style="padding: 40px 20px; text-align: center; color: var(--text-muted); font-size: 14px;">
                <p>📷 <strong>Camera Access Denied or Unavailable</strong></p>
                <p style="margin-top: 8px;">Please allow camera permission in your browser or type the batch code manually below.</p>
            </div>
        `;
    });
}

// Extract Batch ID from URL or Code text and fetch details
function handleScannedText(text) {
    let batchId = text.trim().toUpperCase();

    // If it's a URL (e.g. https://enerthai.com/trace.html?batch=B-BAN-01)
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
        // Fallback for relative or local strings
        const splitParts = text.split('batch=');
        if (splitParts.length > 1) {
            batchId = splitParts[1].split('&')[0].trim().toUpperCase();
        }
    }

    // Display the batch
    showBatchDetails(batchId);
}

// Display Sachet Cooperative Data and Timeline
function showBatchDetails(batchCode) {
    const data = BATCH_DATABASE[batchCode];

    if (!data) {
        // Show dynamic toast alert for invalid codes
        if (window.showToast) {
            window.showToast(`Batch code "${batchCode}" not found. Try B-BAN-01 or B-MAN-01!`, 'error');
        } else {
            alert(`Batch code "${batchCode}" not found. Try B-BAN-01 or B-MAN-01!`);
        }
        return;
    }

    // Stop scanner if running to preserve device battery
    if (html5Qrcode && html5Qrcode.isScanning) {
        html5Qrcode.stop().then(() => {
            console.log("Scanner stopped after successful decode.");
        }).catch(err => {
            console.error("Failed to stop scanner:", err);
        });
    }

    // Update Form Inputs
    batchCodeInput.value = batchCode;

    // Fill Cooperative Details
    resultCoopImg.src = data.image;
    resultCoopImg.alt = data.name;
    resultMapLocation.textContent = data.location;
    resultCoopTitle.textContent = data.name;
    resultCoopThaiName.textContent = data.thaiName;
    resultFarmName.textContent = data.farmName;
    resultFarmId.textContent = data.farmId;
    resultCoopDesc.textContent = data.description;

    // Fill Sourcing Timeline
    timelineHarvestDesc.textContent = `${data.cooperative} harvest organic yield.`;
    timelineHarvestDate.textContent = data.timeline.harvest;
    timelineLabDate.textContent = data.timeline.lab;
    timelinePackDate.textContent = data.timeline.pack;
    timelineExpDate.textContent = data.timeline.exp;

    // Fill Lab Audit Inspector
    resultInspector.textContent = data.lab.audit;

    // Populate Mineral Chips
    resultMineralChips.innerHTML = '';
    data.minerals.forEach(min => {
        const chip = document.createElement('div');
        chip.className = 'mineral-chip';
        chip.innerHTML = `
            <span style="color: #2A9D8F; font-weight: 700;">✦</span>
            <span><strong>${min.label}:</strong> ${min.val}</span>
        `;
        resultMineralChips.appendChild(chip);
    });

    // Reveal Results Sheet with Smooth Animation
    emptyState.style.display = 'none';
    resultsSheet.style.display = 'flex';

    // Send visual toast confirmation
    if (window.showToast) {
        window.showToast(`Batch ${batchCode} verified successfully!`, 'success');
    }
}

// Event Bindings
document.addEventListener('DOMContentLoaded', () => {
    // Bind Manual Enter Button
    submitBatchBtn.addEventListener('click', () => {
        const enteredVal = batchCodeInput.value.trim().toUpperCase();
        if (enteredVal) {
            showBatchDetails(enteredVal);
        } else {
            if (window.showToast) {
                window.showToast("Please enter a batch code first.", "error");
            }
        }
    });

    // Support hitting 'Enter' key inside manual input
    batchCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBatchBtn.click();
        }
    });

    // Check for query parameter triggers (?batch=B-BAN-01)
    const urlParams = new URLSearchParams(window.location.search);
    const batchParam = urlParams.get('batch');
    if (batchParam) {
        // Small delay to let styles/DOM settle
        setTimeout(() => {
            showBatchDetails(batchParam.trim().toUpperCase());
        }, 300);
    } else {
        // Start camera scanner if no batch parameter is directly provided in URL
        // Delay scanner start slightly to prevent browser frame locks
        setTimeout(() => {
            startScanner();
        }, 500);
    }
});
