/* ==========================================================================
   Ener Thai Premium E-Commerce Website - Fueling Calculator JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DOM Elements
    const form = document.getElementById('calculatorForm');
    const customDistanceInput = document.getElementById('customDistance');
    const distancePresetBtns = document.querySelectorAll('#distancePresets .preset-btn');
    
    const selectedPaceInput = document.getElementById('selectedPaceValue');
    const pacePresetBtns = document.querySelectorAll('#pacePresets .preset-btn');
    const customPaceToggle = document.getElementById('customPaceToggle');
    const customPaceFields = document.getElementById('customPaceFields');
    const paceMinInput = document.getElementById('paceMin');
    const paceSecInput = document.getElementById('paceSec');
    
    const bodyWeightInput = document.getElementById('bodyWeight');
    const temperatureSelect = document.getElementById('temperatureSelect');
    const experienceSelect = document.getElementById('experienceSelect');
    
    const welcomeState = document.getElementById('welcomeState');
    const resultsState = document.getElementById('resultsState');
    const resultsContainer = document.getElementById('resultsContainer');
    
    const resDuration = document.getElementById('resDuration');
    const resCarbRate = document.getElementById('resCarbRate');
    const resTotalCarbs = document.getElementById('resTotalCarbs');
    const resFluid = document.getElementById('resFluid');
    const resTimeline = document.getElementById('resTimeline');
    const planSubtitle = document.getElementById('planSubtitle');
    const recProductsList = document.getElementById('recProductsList');
    const btnBuyBundle = document.getElementById('btnBuyBundle');

    let calculatedBundle = {
        sunrise: 0,
        strike: 0,
        sunset: 0
    };

    // 2. Preset Value Click Listeners
    
    // 2.1 Distance Presets
    distancePresetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all presets
            distancePresetBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update input value
            const val = btn.getAttribute('data-val');
            customDistanceInput.value = val;
        });
    });

    // Clear preset selection if user edits the custom input manually
    customDistanceInput.addEventListener('input', () => {
        distancePresetBtns.forEach(b => b.classList.remove('active'));
    });

    // 2.2 Pace Presets
    pacePresetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            pacePresetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const val = btn.getAttribute('data-val');
            
            if (val === 'custom') {
                customPaceFields.style.display = 'flex';
                selectedPaceInput.value = 'custom';
            } else {
                customPaceFields.style.display = 'none';
                selectedPaceInput.value = val;
            }
        });
    });

    // 3. Calculator Calculations & Timeline Generation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 3.1 Extract Values
        const distance = parseFloat(customDistanceInput.value);
        if (isNaN(distance) || distance <= 0) return;
        
        let pace = 0; // minutes per km
        const paceVal = selectedPaceInput.value;
        
        if (paceVal === 'custom') {
            const min = parseInt(paceMinInput.value) || 0;
            const sec = parseInt(paceSecInput.value) || 0;
            pace = min + (sec / 60);
        } else {
            pace = parseFloat(paceVal);
        }
        
        const weight = parseFloat(bodyWeightInput.value) || 70;
        const temp = temperatureSelect.value;
        const exp = experienceSelect.value;
        
        // 3.2 Calculations
        
        // Duration in decimal minutes
        const durationMinutes = distance * pace;
        const durationHours = durationMinutes / 60;
        
        // Formatted Duration Time String (H:MM:SS)
        const totalSecs = Math.round(durationMinutes * 60);
        const hoursPart = Math.floor(totalSecs / 3600);
        const minsPart = Math.floor((totalSecs % 3600) / 60);
        const secsPart = totalSecs % 60;
        const formattedDuration = `${hoursPart}:${minsPart.toString().padStart(2, '0')}:${secsPart.toString().padStart(2, '0')}`;
        
        // Target Carbohydrates per Hour
        let carbRatePerHour = 60; // Base default (grams/hr)
        
        if (durationHours < 1.0) {
            carbRatePerHour = 30;
        } else if (durationHours >= 1.0 && durationHours < 2.0) {
            carbRatePerHour = 60;
        } else if (durationHours >= 2.0 && durationHours < 3.0) {
            carbRatePerHour = 80;
        } else {
            carbRatePerHour = 90;
        }
        
        // Experience adjustment
        if (exp === 'beginner') {
            carbRatePerHour = Math.max(30, carbRatePerHour - 10);
        } else if (exp === 'advanced') {
            carbRatePerHour = Math.min(100, carbRatePerHour + 10);
        }
        
        // Total carbohydrate requirement during the run
        const totalCarbsRequired = Math.round(carbRatePerHour * durationHours);
        
        // Fluid requirements (ml/hour)
        let baseFluidRate = 500;
        
        const chkUseSweatRate = document.getElementById('chkUseSweatRate');
        const sweatRateVal = document.getElementById('sweatRateVal');
        
        if (chkUseSweatRate && chkUseSweatRate.checked && sweatRateVal) {
            baseFluidRate = parseFloat(sweatRateVal.textContent) || 500;
        } else {
            if (temp === 'cool') {
                baseFluidRate = 400;
            } else if (temp === 'hot') {
                baseFluidRate = 700;
            }
            
            // Weight adjustments
            if (weight > 80) {
                baseFluidRate += 100;
            } else if (weight < 60) {
                baseFluidRate -= 50;
            }
        }
        
        const totalFluidLiters = (baseFluidRate * durationHours) / 1000;
        
        // Recommended Product counts
        let countSunrise = 0;
        let countSunset = 0;
        let countStrike = 0;
        
        // Sunrise (Pre-race): recommended for runs longer than 45 min or >= 10k
        if (durationMinutes > 45 || distance >= 10) {
            countSunrise = 1;
        }
        
        // Sunset (Post-race): recommended for runs longer than 1 hour or >= 10k
        if (durationMinutes > 60 || distance >= 10) {
            countSunset = 1;
        }
        
        // Strike (During): count gels based on carbs/hour target
        if (durationMinutes >= 45) {
            // Each Strike gel provides 30g carbs.
            // Estimate gels needed for total carbs.
            countStrike = Math.max(1, Math.round(totalCarbsRequired / 30));
        }
        
        // 3.3 Build Timeline
        const lang = localStorage.getItem('enerthai_lang') || 'en';
        let timelineHTML = '';
        
        // Pre-race Sunrise Gel
        if (countSunrise > 0) {
            const timeStr = lang === 'th' ? '60 นาทีก่อนเริ่มวิ่ง' : '60 Minutes Before Start';
            const textStr = lang === 'th' 
                ? '<strong>เตรียมไกลโคเจน:</strong> รับประทานเจล SUNRISE ผสมคาเฟอีน 1 ซอง (คาร์โบไฮเดรต 31 กรัม, คาเฟอีน 70 มิลลิกรัม) พร้อมน้ำ 250 มล. เพื่อเตรียมความพร้อมไกลโคเจนในกล้ามเนื้อ เพิ่มสมาธิ และช่วยให้ท้องอิ่มสบาย'
                : '<strong>Prep Glycogen:</strong> Take 1 caffeinated SUNRISE gel (31g carbs, 70mg caffeine) with 250ml water to prime muscle glycogen, boost cognitive focus, and settle your stomach.';
            timelineHTML += `
                <div class="timeline-item">
                    <div class="timeline-dot sunrise"></div>
                    <div class="timeline-time">${timeStr}</div>
                    <div class="timeline-content">
                        <span class="timeline-product-tag sunrise">SUNRISE</span>
                        <div>${textStr}</div>
                    </div>
                </div>
            `;
        }
        
        // During Race Strike Gels
        let actualStrikeCount = 0;
        if (countStrike > 0) {
            const interval = Math.round(durationMinutes / (countStrike + 1));
            const capInterval = Math.max(30, Math.min(45, interval));
            
            for (let i = 1; i <= countStrike; i++) {
                const timePoint = Math.round(i * capInterval);
                if (timePoint >= durationMinutes - 5) break;
                
                actualStrikeCount++;
                const timeStr = lang === 'th' ? `นาทีที่ ${timePoint} ของการวิ่ง` : `${timePoint} Minutes In`;
                const textStr = lang === 'th'
                    ? `<strong>รักษาระดับพลังงาน:</strong> รับประทานเจล STRIKE สูตรปราศจากคาเฟอีนซองที่ #${actualStrikeCount} (สะสมคาร์โบไฮเดรต ${actualStrikeCount * 30} กรัม, อิเล็กโทรไลต์) ดื่มน้ำตามเล็กน้อย`
                    : `<strong>Maintain energy:</strong> Take caffeine-free STRIKE gel #${actualStrikeCount} (${actualStrikeCount * 30}g cumulative carbs, electrolytes). Wash down with a few sips of water.`;
                timelineHTML += `
                    <div class="timeline-item">
                        <div class="timeline-dot strike"></div>
                        <div class="timeline-time">${timeStr}</div>
                        <div class="timeline-content">
                            <span class="timeline-product-tag strike">STRIKE</span>
                            <div>${textStr}</div>
                        </div>
                    </div>
                `;
            }
        }
        countStrike = actualStrikeCount;
        
        // Post-race Sunset Gel
        if (countSunset > 0) {
            const timeStr = lang === 'th' ? 'เส้นชัย (ภายใน 30 นาที)' : 'Finish Line (Within 30 Min)';
            const textStr = lang === 'th'
                ? '<strong>เร่งการฟื้นฟู:</strong> รับประทานเจลฟื้นฟู SUNSET 1 ซอง (คาร์โบไฮเดรต 23 กรัม, โปรตีนถั่วลันเตา 9 กรัม) ส่วนผสมสับปะรด ส้มแมนดาริน และเสาวรสบดเข้มข้นช่วยเติมเต็มไกลโคเจน ในขณะที่โปรตีนถั่วลันเตาออร์แกนิกไอโซเลตช่วยซ่อมแซมเส้นใยกล้ามเนื้อ'
                : '<strong>Accelerate Repair:</strong> Take 1 SUNSET recovery gel (23g carbs, 9g pea protein). Concentrated pineapple, mandarin, and passion fruit purees replenish glycogen, while organic pea protein isolate repairs muscle fibers.';
            timelineHTML += `
                <div class="timeline-item">
                    <div class="timeline-dot sunset"></div>
                    <div class="timeline-time">${timeStr}</div>
                    <div class="timeline-content">
                        <span class="timeline-product-tag sunset">SUNSET</span>
                        <div>${textStr}</div>
                    </div>
                </div>
            `;
        }
        
        // Keep in local page variables for bundle add-to-cart
        calculatedBundle = {
            sunrise: countSunrise,
            strike: countStrike,
            sunset: countSunset
        };
        
        // If race is extremely short and no gels recommended
        if (timelineHTML === '') {
            const timeStr = lang === 'th' ? 'ไม่จำเป็นต้องใช้เจลพลังงาน' : 'No Gels Needed';
            const textStr = lang === 'th'
                ? 'การวิ่งที่น้อยกว่า 45 นาทีไม่จำเป็นต้องได้รับพลังงานเสริมภายนอก การดื่มน้ำในแต่ละวันอย่างเพียงพอและมื้ออาหารปกติก็เพียงพอแล้ว!'
                : 'Runs under 45 minutes do not require external fueling. Adequate daily hydration and normal meals are sufficient!';
            timelineHTML = `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-time">${timeStr}</div>
                    <div class="timeline-content">
                        <div>${textStr}</div>
                    </div>
                </div>
            `;
        }
        
        // 3.4 Render UI
        
        // Animate result display
        welcomeState.style.display = 'none';
        resultsState.style.display = 'block';
        
        // Update stats
        resDuration.textContent = formattedDuration;
        resCarbRate.textContent = `${carbRatePerHour}g`;
        resTotalCarbs.textContent = `${totalCarbsRequired}g`;
        resFluid.textContent = `${totalFluidLiters.toFixed(1)}L`;
        
        // Subtitle
        let paceMin = Math.floor(pace);
        let paceSec = Math.round((pace % 1) * 60);
        let formattedPace = `${paceMin}:${paceSec.toString().padStart(2, '0')}`;
        planSubtitle.textContent = lang === 'th'
            ? `คำนวณจากการวิ่งระยะทาง ${distance} กม. ที่เพซ ${formattedPace} นาที/กม.`
            : `Based on a ${distance} km run at a ${formattedPace} min/km pace.`;
        
        // Timeline content
        resTimeline.innerHTML = timelineHTML;
        
        // Bundle pills
        let pillsHTML = '';
        if (countSunrise > 0) {
            pillsHTML += `<span class="rec-product-pill"><span style="color:var(--color-sunrise);">●</span> ${countSunrise}x ${lang === 'th' ? 'ซันไรส์' : 'Sunrise'}</span>`;
        }
        if (countStrike > 0) {
            pillsHTML += `<span class="rec-product-pill"><span style="color:var(--color-strike);">●</span> ${countStrike}x ${lang === 'th' ? 'สไตรก์' : 'Strike'}</span>`;
        }
        if (countSunset > 0) {
            pillsHTML += `<span class="rec-product-pill"><span style="color:var(--color-sunset);">●</span> ${countSunset}x ${lang === 'th' ? 'ซันเซ็ต' : 'Sunset'}</span>`;
        }
        if (pillsHTML === '') {
            pillsHTML = `<span>${lang === 'th' ? 'ไม่พบคำแนะนำเจลพลังงาน' : 'No gels recommended'}</span>`;
            btnBuyBundle.style.display = 'none';
        } else {
            btnBuyBundle.style.display = 'block';
        }
        recProductsList.innerHTML = pillsHTML;
        
        // Scroll to results on mobile
        if (window.innerWidth < 992) {
            resultsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 4. Bundle Purchase Action
    btnBuyBundle.addEventListener('click', () => {
        let added = false;
        
        if (calculatedBundle.sunrise > 0) {
            Cart.add('sunrise', calculatedBundle.sunrise);
            added = true;
        }
        if (calculatedBundle.strike > 0) {
            Cart.add('strike', calculatedBundle.strike);
            added = true;
        }
        if (calculatedBundle.sunset > 0) {
            Cart.add('sunset', calculatedBundle.sunset);
            added = true;
        }
        
        if (added) {
            Cart.openDrawer();
        }
    });

    // 5. Sweat Rate Calculator collapsible toggle & calculation
    const sweatCalcHeader = document.getElementById('sweatCalcHeader');
    const sweatCalcBody = document.getElementById('sweatCalcBody');
    const sweatCalcToggleIcon = document.getElementById('sweatCalcToggleIcon');
    
    if (sweatCalcHeader && sweatCalcBody) {
        sweatCalcHeader.addEventListener('click', () => {
            const isHidden = sweatCalcBody.style.display === 'none';
            sweatCalcBody.style.display = isHidden ? 'flex' : 'none';
            sweatCalcToggleIcon.textContent = isHidden ? '−' : '+';
        });
    }

    const btnCalculateSweat = document.getElementById('btnCalculateSweat');
    const sweatWeightPre = document.getElementById('sweatWeightPre');
    const sweatWeightPost = document.getElementById('sweatWeightPost');
    const sweatDuration = document.getElementById('sweatDuration');
    const sweatFluidIntake = document.getElementById('sweatFluidIntake');
    const sweatRateResult = document.getElementById('sweatRateResult');
    const sweatRateVal = document.getElementById('sweatRateVal');

    if (btnCalculateSweat) {
        btnCalculateSweat.addEventListener('click', () => {
            const preWeight = parseFloat(sweatWeightPre.value);
            const postWeight = parseFloat(sweatWeightPost.value);
            const mins = parseFloat(sweatDuration.value);
            const fluid = parseFloat(sweatFluidIntake.value) || 0;

            const lang = localStorage.getItem('enerthai_lang') || 'en';
            if (isNaN(preWeight) || isNaN(postWeight) || isNaN(mins) || mins <= 0) {
                const msg = lang === 'th' ? 'กรุณากรอกค่าน้ำหนักและระยะเวลาการวิ่งที่ถูกต้อง' : 'Please enter valid weight and run duration values.';
                alert(msg);
                return;
            }

            const weightLossKg = preWeight - postWeight;
            if (weightLossKg < -1) {
                const msg = lang === 'th' ? 'น้ำหนักหลังวิ่งไม่สามารถสูงกว่าน้ำหนักก่อนวิ่งได้' : 'Post-run weight cannot be higher than pre-run weight.';
                alert(msg);
                return;
            }

            // Sweat rate formula: (Weight Loss kg * 1000 + Fluid intake ml) / (mins / 60)
            const totalLossMl = (weightLossKg * 1000) + fluid;
            const hourlyRate = Math.round((totalLossMl / mins) * 60);

            if (sweatRateVal) {
                sweatRateVal.textContent = Math.max(0, hourlyRate);
            }
            if (sweatRateResult) {
                sweatRateResult.style.display = 'block';
            }
        });
    }

    // 6. Copy and Print Fuel Plan Actions
    const btnCopyPlan = document.getElementById('btnCopyPlan');
    const btnPrintPlan = document.getElementById('btnPrintPlan');

    if (btnCopyPlan) {
        btnCopyPlan.addEventListener('click', () => {
            const lang = localStorage.getItem('enerthai_lang') || 'en';
            const items = document.querySelectorAll('#resTimeline .timeline-item');
            if (items.length === 0 || (items.length === 1 && items[0].innerText.includes(lang === 'th' ? 'ไม่จำเป็นต้องใช้เจลพลังงาน' : 'No Gels Needed'))) {
                window.showToast(lang === 'th' ? 'ไม่มีแผนพลังงานที่จะคัดลอก!' : 'No fueling plan to copy!');
                return;
            }
            const text = Array.from(items)
                .map(el => {
                    const time = el.querySelector('.timeline-time').textContent;
                    const content = el.querySelector('.timeline-content').innerText.replace(/\n/g, ' ');
                    return `[${time}] ${content}`;
                })
                .join('\n');

            navigator.clipboard.writeText(text)
                .then(() => {
                    window.showToast(lang === 'th' ? 'คัดลอกแผนพลังงานไปยังคลิปบอร์ดแล้ว!' : 'Fueling plan copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy plan:', err);
                    window.showToast(lang === 'th' ? 'ไม่สามารถคัดลอกแผนพลังงานได้' : 'Failed to copy fueling plan.');
                });
        });
    }

    if (btnPrintPlan) {
        btnPrintPlan.addEventListener('click', () => {
            window.print();
        });
    }

    // Listen for language change to recalculate plan automatically if it's already calculated
    window.addEventListener('langchange', () => {
        if (resultsState && resultsState.style.display === 'block') {
            form.dispatchEvent(new Event('submit'));
        }
    });
});
