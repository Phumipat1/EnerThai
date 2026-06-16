/* ==========================================================================
   Ener Thai Premium E-Commerce Website - Global JavaScript
   ========================================================================== */

// 1. Centralized Product Database
window.EnerThaiProducts = {
    sunrise: {
        id: 'sunrise',
        name: 'SUNRISE Energy Gel',
        nameEn: 'SUNRISE Energy Gel',
        nameTh: 'SUNRISE Energy Gel',
        purpose: 'Prepare',
        purposeEn: 'Prepare',
        purposeTh: 'เตรียมตัวก่อนออกกำลังกาย',
        price: 99.00,
        currency: '฿',
        flavor: 'Mango & Banana',
        flavorEn: 'Mango & Banana',
        flavorTh: 'มะม่วงและกล้วย',
        imageGrad: 'sunrise-grad',
        tagline: 'Pre-race caffeinated preparation to prime your muscles.',
        taglineEn: 'Pre-race caffeinated preparation to prime your muscles.',
        taglineTh: 'เจลพลังงานผสมคาเฟอีนสำหรับเตรียมความพร้อมก่อนแข่งเพื่อกระตุ้นกล้ามเนื้อของคุณ',
        description: 'Formulated with sweet mango puree and ripe banana puree, SUNRISE provides 31g of easily digestible carbohydrates. Infused with 70mg of natural green tea caffeine to boost mental focus and key antioxidants (catechins and beta-carotene) to protect cells during extreme exercise. Formulated with zero added sodium for an organic, smooth pre-workout fuel.',
        descriptionEn: 'Formulated with sweet mango puree and ripe banana puree, SUNRISE provides 31g of easily digestible carbohydrates. Infused with 70mg of natural green tea caffeine to boost mental focus and key antioxidants (catechins and beta-carotene) to protect cells during extreme exercise. Formulated with zero added sodium for an organic, smooth pre-workout fuel.',
        descriptionTh: 'สูตรที่อุดมด้วยมะม่วงบดแท้รสหวานและกล้วยสุกบดธรรมชาติ SUNRISE ให้คาร์โบไฮเดรตที่ย่อยง่ายปริมาณ 31 กรัม ผสมด้วยคาเฟอีนธรรมชาติจากชาเขียว 70 มิลลิกรัมเพื่อเพิ่มสมาธิในการคิด และมีสารต้านอนุมูลอิสระที่สำคัญ (คาเทชินและเบต้าแคโรทีน) เพื่อปกป้องเซลล์ระหว่างการออกกำลังกายอย่างหนัก ได้รับการปรับสูตรโดยไม่มีโซเดียมเติมเพิ่มเพื่อให้ได้พลังงานก่อนการฝึกซ้อมที่ออร์แกนิกและลื่นคอ',
        benefits: [
            '31g of fast and slow-release carbohydrates from real mango and banana',
            '70mg of natural caffeine from organic green tea extract for cognitive focus',
            'Packed with natural Potassium (250mg) from bananas to prime fluid balance',
            'Rich in tea catechins and mango carotene antioxidants'
        ],
        benefitsEn: [
            '31g of fast and slow-release carbohydrates from real mango and banana',
            '70mg of natural caffeine from organic green tea extract for cognitive focus',
            'Packed with natural Potassium (250mg) from bananas to prime fluid balance',
            'Rich in tea catechins and mango carotene antioxidants'
        ],
        benefitsTh: [
            'คาร์โบไฮเดรตชนิดดูดซึมเร็วและช้า 31 กรัมจากมะม่วงและกล้วยจริง',
            'คาเฟอีนธรรมชาติ 70 มิลลิกรัมจากสารสกัดชาเขียวออร์แกนิกเพื่อเพิ่มโฟกัสและความตื่นตัว',
            'อุดมด้วยโพแทสเซียมธรรมชาติ (250 มิลลิกรัม) จากกล้วยเพื่อเตรียมสมดุลของเหลวในร่างกาย',
            'อุดมด้วยสารต้านอนุมูลอิสระประเภทชาเขียวคาเทชินและมะม่วงแคโรทีน'
        ],
        nutrition: {
            servingSize: '1 Sachet (50g)',
            servingSizeEn: '1 Sachet (50g)',
            servingSizeTh: '1 ซอง (50 กรัม)',
            calories: 135,
            totalFat: '0g',
            satFat: '0g',
            transFat: '0g',
            cholesterol: '0mg',
            sodium: '15mg',
            totalCarb: '31g',
            fiber: '0g',
            fiberEn: '0g',
            fiberTh: '0 กรัม',
            sugars: '27g',
            addedSugars: '0g',
            protein: '0g',
            potassium: '250mg',
            caffeine: '70mg'
        },
        ingredients: 'Natural Mango Puree, Natural Banana Puree, Water, Maltodextrin, Green Tea Extract (Caffeine source), Citric Acid.',
        ingredientsEn: 'Natural Mango Puree, Natural Banana Puree, Water, Maltodextrin, Green Tea Extract (Caffeine source), Citric Acid.',
        ingredientsTh: 'มะม่วงบดธรรมชาติ, กล้วยบดธรรมชาติ, น้ำ, มอลโทเดกสทริน, สารสกัดจากชาเขียว (แหล่งคาเฟอีน), กรดซิตริก'
    },
    strike: {
        id: 'strike',
        name: 'STRIKE Energy Gel',
        nameEn: 'STRIKE Energy Gel',
        nameTh: 'STRIKE Energy Gel',
        purpose: 'Perform',
        purposeEn: 'Perform',
        purposeTh: 'รักษาระดับระหว่างออกกำลังกาย',
        price: 99.00,
        currency: '฿',
        flavor: 'Thai Coconut & Guava',
        flavorEn: 'Thai Coconut & Guava',
        flavorTh: 'มะพร้าวและฝรั่งไทย',
        imageGrad: 'strike-grad',
        tagline: 'High-speed carbohydrate and electrolyte absorption during intense exercise.',
        taglineEn: 'High-speed carbohydrate and electrolyte absorption during intense exercise.',
        taglineTh: 'คาร์โบไฮเดรตและอิเล็กโทรไลต์ที่ดูดซึมความเร็วสูงระหว่างการออกกำลังกายที่เข้มข้น',
        description: 'STRIKE is our premium performance fuel, utilizing organic coconut water and guava puree. It delivers 30g of fast-absorbing carbohydrates per sachet. Packed with 225mg of natural sea salt sodium, 350mg of potassium, and 40mg of Vitamin C, it maintains fluid balance and prevents muscle cramps at race pace. Caffeine-free and easy on the stomach.',
        descriptionEn: 'STRIKE is our premium performance fuel, utilizing organic coconut water and guava puree. It delivers 30g of fast-absorbing carbohydrates per sachet. Packed with 225mg of natural sea salt sodium, 350mg of potassium, and 40mg of Vitamin C, it maintains fluid balance and prevents muscle cramps at race pace. Caffeine-free and easy on the stomach.',
        descriptionTh: 'STRIKE คือเชื้อเพลิงสำหรับประสิทธิภาพระดับพรีเมียมของเรา โดยใช้น้ำมะพร้าวออร์แกนิกและฝรั่งบด ให้คาร์โบไฮเดรตที่ดูดซึมได้รวดเร็ว 30 กรัมต่อซอง อุดมด้วยโซเดียมจากเกลือทะเลธรรมชาติ 225 มิลลิกรัม โพแทสเซียม 350 มิลลิกรัม และวิตามินซี 40 มิลลิกรัม ช่วยรักษาสมดุลของเหลวและป้องกันตะคริวของกล้ามเนื้อที่เพซการแข่งขัน สูตรไม่มีคาเฟอีนและเป็นมิตรต่อกระเพาะอาหารอย่างยิ่ง',
        benefits: [
            '30g of dual-source carbohydrates (fructose-dominant ~1:0.7) for gut-friendly absorption',
            '225mg of clean Thai sea salt sodium to replenish lost sweat minerals',
            '350mg of Potassium and 40mg of Calcium from natural coconut and guava',
            '40mg of Vitamin C to reduce oxidative stress during heavy efforts'
        ],
        benefitsEn: [
            '30g of dual-source carbohydrates (fructose-dominant ~1:0.7) for gut-friendly absorption',
            '225mg of clean Thai sea salt sodium to replenish lost sweat minerals',
            '350mg of Potassium and 40mg of Calcium from natural coconut and guava',
            '40mg of Vitamin C to reduce oxidative stress during heavy efforts'
        ],
        benefitsTh: [
            'คาร์โบไฮเดรตสองแหล่ง 30 กรัม (ฟรักโทสเด่น ~1:0.7) เพื่อการดูดซึมที่ดีต่อลำไส้',
            'โซเดียมเกลือทะเลไทยที่สะอาด 225 มิลลิกรัม เพื่อชดเชยแร่ธาตุที่เสียไปกับเหงื่อ',
            'โพแทสเซียม 350 มิลลิกรัม และแคลเซียม 40 มิลลิกรัม จากมะพร้าวธรรมชาติและฝรั่ง',
            'วิตามินซี 40 มิลลิกรัม เพื่อลดความเครียดจากการเกิดออกซิเดชันระหว่างการออกกำลังกายหนัก'
        ],
        nutrition: {
            servingSize: '1 Sachet (50g)',
            servingSizeEn: '1 Sachet (50g)',
            servingSizeTh: '1 ซอง (50 กรัม)',
            calories: 118,
            totalFat: '0g',
            satFat: '0g',
            transFat: '0g',
            cholesterol: '0mg',
            sodium: '225mg',
            totalCarb: '30g',
            fiber: 'less than 1g',
            fiberEn: 'less than 1g',
            fiberTh: 'น้อยกว่า 1 กรัม',
            sugars: '26g',
            addedSugars: '0g',
            protein: '0g',
            potassium: '350mg',
            calcium: '40mg',
            vitC: '40mg'
        },
        ingredients: 'Thai Coconut Water, Natural Guava Puree, Lime Juice, Sea Salt, Maltodextrin, Calcium Lactate, Ascorbic Acid (Vitamin C).',
        ingredientsEn: 'Thai Coconut Water, Natural Guava Puree, Lime Juice, Sea Salt, Maltodextrin, Calcium Lactate, Ascorbic Acid (Vitamin C).',
        ingredientsTh: 'น้ำมะพร้าวไทย, ฝรั่งบดธรรมชาติ, น้ำมะนาว, เกลือทะเล, มอลโทเดกสทริน, แคลเซียมแลกเตต, กรดแอสคอร์บิก (วิตามินซี)'
    },
    sunset: {
        id: 'sunset',
        name: 'SUNSET Recovery Gel',
        nameEn: 'SUNSET Recovery Gel',
        nameTh: 'SUNSET Recovery Gel',
        purpose: 'Recover',
        purposeEn: 'Recover',
        purposeTh: 'ฟื้นฟูหลังออกกำลังกาย',
        price: 99.00,
        currency: '฿',
        flavor: 'Pineapple, Mandarin Orange & Passion Fruit',
        flavorEn: 'Pineapple, Mandarin Orange & Passion Fruit',
        flavorTh: 'สับปะรด ส้มแมนดาริน และเสาวรส',
        imageGrad: 'sunset-grad',
        tagline: 'Post-run tropical fruit and plant protein recovery to rebuild muscle.',
        taglineEn: 'Post-run tropical fruit and plant protein recovery to rebuild muscle.',
        taglineTh: 'การฟื้นฟูด้วยผลไม้เมืองร้อนและโปรตีนจากพืชหลังวิ่งเพื่อเสริมสร้างกล้ามเนื้อ',
        description: 'SUNSET is built to kickstart muscle recovery immediately after your run. Formulated with organic plant-based pea protein isolate providing 9g of protein and concentrated pineapple, mandarin orange, and passion fruit purees yielding 23g of natural recovery carbohydrates. Restores glycogen stores and repairs muscle fibers naturally. 100% vegan.',
        descriptionEn: 'SUNSET is built to kickstart muscle recovery immediately after your run. Formulated with organic plant-based pea protein isolate providing 9g of protein and concentrated pineapple, mandarin orange, and passion fruit purees yielding 23g of natural recovery carbohydrates. Restores glycogen stores and repairs muscle fibers naturally. 100% vegan.',
        descriptionTh: 'SUNSET ถูกสร้างขึ้นเพื่อกระตุ้นการฟื้นตัวของกล้ามเนื้อทันทีหลังจากคุณวิ่งเสร็จ อุดมด้วยโปรตีนถั่วลันเตาออร์แกนิกไอโซเลตที่ให้โปรตีน 9 กรัม พร้อมสับปะรดเข้มข้น ส้มแมนดาริน และเสาวรสบดเข้มข้นที่ให้คาร์โบไฮเดรตสำหรับการฟื้นฟูตามธรรมชาติ 23 กรัม ช่วยเติมเต็มแหล่งสำรองไกลโคเจนและซ่อมแซมเส้นใยกล้ามเนื้อตามธรรมชาติ เจลเจ 100%',
        benefits: [
            '9g of clean organic pea protein isolate to rebuild muscle tissue',
            '23g of fast-replenishing carbohydrates from concentrated tropical fruits',
            'High in natural Vitamin C and Manganese to support immune recovery',
            '100% vegan, clean-label formulation with no synthetic additives'
        ],
        benefitsEn: [
            '9g of clean organic pea protein isolate to rebuild muscle tissue',
            '23g of fast-replenishing carbohydrates from concentrated tropical fruits',
            'High in natural Vitamin C and Manganese to support immune recovery',
            '100% vegan, clean-label formulation with no synthetic additives'
        ],
        benefitsTh: [
            'โปรตีนถั่วลันเตาออร์แกนิกไอโซเลต 9 กรัมที่สะอาดเพื่อฟื้นฟูเนื้อเยื่อกล้ามเนื้อ',
            'คาร์โบไฮเดรตเติมเต็มเร็ว 23 กรัมจากผลไม้เมืองร้อนเข้มข้น',
            'อุดมไปด้วยวิตามินซีธรรมชาติและแมงกานีสเพื่อสนับสนุนการฟื้นฟูระบบภูมิคุ้มกัน',
            'สูตรคลีนเลเบล เจ 100% ปราศจากสารแต่งสีและกลิ่นสังเคราะห์'
        ],
        nutrition: {
            servingSize: '1 Sachet (50g)',
            servingSizeEn: '1 Sachet (50g)',
            servingSizeTh: '1 ซอง (50 กรัม)',
            calories: 117,
            totalFat: '0g',
            satFat: '0g',
            transFat: '0g',
            cholesterol: '0mg',
            sodium: '25mg',
            totalCarb: '23g',
            fiber: '0g',
            fiberEn: '0g',
            fiberTh: '0 กรัม',
            sugars: '20g',
            addedSugars: '0g',
            protein: '9g',
            potassium: '50mg',
            vitC: '24mg'
        },
        ingredients: 'Concentrated Pineapple Puree, Concentrated Mandarin Orange Juice, Concentrated Passion Fruit Puree, Organic Pea Protein Isolate, Tapioca Starch (Pregelatinized), Filtered Water.',
        ingredientsEn: 'Concentrated Pineapple Puree, Concentrated Mandarin Orange Juice, Concentrated Passion Fruit Puree, Organic Pea Protein Isolate, Tapioca Starch (Pregelatinized), Filtered Water.',
        ingredientsTh: 'สับปะรดบดเข้มข้น, น้ำส้มแมนดารินเข้มข้น, เสาวรสบดเข้มข้น, โปรตีนถั่วลันเตาออร์แกนิกไอโซเลต, แป้งมันสำปะหลัง (พรีเจลาทิไนซ์), น้ำกรอง'
    }
};

// 2. Pricing & Currency Helpers
window.getConvertedPrice = function(id, currency = 'THB') {
    const product = window.EnerThaiProducts[id];
    if (!product) return 0;
    
    if (currency === 'USD') {
        return 3.00; // 99 THB is roughly 3.00 USD
    }
    return product.price; // default THB
};

window.formatCurrency = function(val, currency = 'THB') {
    if (currency === 'USD') {
        return `$${val.toFixed(2)}`;
    }
    return `฿${val.toFixed(2)}`;
};

// 3. Toast Notifications System
// Create container dynamically
let toastContainer = document.getElementById('toastContainer');
if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
}

window.showToast = function(message, actionLabel = '', actionCallback = null) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    
    let actionHTML = '';
    if (actionLabel && actionCallback) {
        actionHTML = `<span class="toast-action" id="toastActionBtn" style="margin-left: 10px;">${actionLabel}</span>`;
    }
    
    toast.innerHTML = `
        <span>${message}</span>
        ${actionHTML}
    `;
    
    toastContainer.appendChild(toast);
    
    // Animate display
    setTimeout(() => toast.classList.add('show'), 50);
    
    if (actionLabel && actionCallback) {
        toast.querySelector('#toastActionBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            actionCallback();
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }
    
    // Auto dismiss
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }
    }, 3500);
};

// 4. Shopping Cart Operations
const Cart = {
    key: 'enerthai_cart',

    get() {
        try {
            return JSON.parse(localStorage.getItem(this.key)) || [];
        } catch (e) {
            return [];
        }
    },

    save(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
        this.updateUI();
    },

    add(id, qty = 1) {
        const product = window.EnerThaiProducts[id];
        if (!product) return;

        let cart = this.get();
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.qty += qty;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                purpose: product.purpose,
                imageGrad: product.imageGrad,
                qty: qty
            });
        }
        this.save(cart);
        
        // Show premium toast notice instead of forcing side-drawer open
        const currency = localStorage.getItem('enerthai_currency') || 'THB';
        const itemUnitPrice = window.getConvertedPrice(product.id, currency);
        const formattedCost = window.formatCurrency(itemUnitPrice * qty, currency);
        const lang = localStorage.getItem('enerthai_lang') || 'en';
        const name = product['name' + (lang === 'th' ? 'Th' : 'En')] || product.name;
        const msg = lang === 'th'
            ? `เพิ่ม ${qty}x ${name} (${formattedCost}) ลงในตะกร้าสินค้าแล้ว`
            : `Added ${qty}x ${name} (${formattedCost}) to Cart.`;
        const actionLabel = lang === 'th' ? 'ดูตะกร้าสินค้า' : 'View Cart';
        
        window.showToast(
            msg,
            actionLabel,
            () => this.openDrawer()
        );
    },

    remove(id) {
        let cart = this.get();
        cart = cart.filter(item => item.id !== id);
        this.save(cart);
    },

    updateQty(id, delta) {
        let cart = this.get();
        const item = cart.find(item => item.id === id);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
        }
        this.save(cart);
    },

    clear() {
        localStorage.removeItem(this.key);
        this.updateUI();
    },

    getTotal() {
        const currency = localStorage.getItem('enerthai_currency') || 'THB';
        return this.get().reduce((sum, item) => sum + (window.getConvertedPrice(item.id, currency) * item.qty), 0);
    },

    getCount() {
        return this.get().reduce((sum, item) => sum + item.qty, 0);
    },

    openDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('cartOverlay');
        if (drawer && overlay) {
            drawer.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    closeDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('cartOverlay');
        if (drawer && overlay) {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    updateUI() {
        const cart = this.get();
        const badge = document.getElementById('cartBadge');
        const count = this.getCount();

        // Update badge
        if (badge) {
            badge.textContent = count;
            badge.style.transform = 'scale(1.2)';
            setTimeout(() => badge.style.transform = 'scale(1)', 150);
        }

        // Render drawer items
        const itemsContainer = document.getElementById('cartItems');
        if (!itemsContainer) return;

        if (cart.length === 0) {
            const lang = localStorage.getItem('enerthai_lang') || 'en';
            itemsContainer.innerHTML = lang === 'th' ? `
                <div class="cart-empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <p>ตะกร้าสินค้าของคุณว่างเปล่า</p>
                    <a href="products.html" class="btn btn-secondary" style="margin-top: 16px; font-size: 11px; padding: 8px 16px;">เลือกซื้อเจลพลังงาน</a>
                </div>
            ` : `
                <div class="cart-empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <p>Your cart is empty</p>
                    <a href="products.html" class="btn btn-secondary" style="margin-top: 16px; font-size: 11px; padding: 8px 16px;">Shop Gels</a>
                </div>
            `;
            const footer = document.querySelector('.cart-footer');
            if (footer) footer.style.display = 'none';
        } else {
            const footer = document.querySelector('.cart-footer');
            if (footer) footer.style.display = 'block';

            itemsContainer.innerHTML = cart.map(item => {
                const currency = localStorage.getItem('enerthai_currency') || 'THB';
                const unitPrice = window.getConvertedPrice(item.id, currency);
                const totalPrice = unitPrice * item.qty;
                const formattedPrice = window.formatCurrency(totalPrice, currency);
                const lang = localStorage.getItem('enerthai_lang') || 'en';
                const name = item['name' + (lang === 'th' ? 'Th' : 'En')] || item.name;
                const purpose = item['purpose' + (lang === 'th' ? 'Th' : 'En')] || item.purpose;
                const removeLabel = lang === 'th' ? 'ลบออก' : 'Remove';

                return `
                <div class="cart-item">
                    <div class="cart-item-image" style="background: none; display: flex; justify-content: center; align-items: center; width: 60px; height: 60px;">
                        <img src="assets/gel-${item.id}.png" alt="${name}" style="height: 50px; width: auto; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title-row">
                            <div>
                                <div class="cart-item-name">${name}</div>
                                <div class="cart-item-purpose">${purpose}</div>
                            </div>
                            <button class="cart-item-remove" onclick="Cart.remove('${item.id}')">${removeLabel}</button>
                        </div>
                        <div class="cart-item-controls">
                            <div class="qty-selector">
                                <button class="qty-btn" onclick="Cart.updateQty('${item.id}', -1)">-</button>
                                <span class="qty-val">${item.qty}</span>
                                <button class="qty-btn" onclick="Cart.updateQty('${item.id}', 1)">+</button>
                            </div>
                            <div class="cart-item-price">${formattedPrice}</div>
                        </div>
                    </div>
                </div>
            `}).join('');

            // Update footer values
            const subtotalEl = document.getElementById('cartSubtotal');
            const totalEl = document.getElementById('cartTotal');
            const totalVal = this.getTotal();
            const currency = localStorage.getItem('enerthai_currency') || 'THB';
            if (subtotalEl) subtotalEl.textContent = window.formatCurrency(totalVal, currency);
            if (totalEl) totalEl.textContent = window.formatCurrency(totalVal, currency);
        }
    }
};

// 5. Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 5.1 Dynamic Header Upgrades (Currency, Theme, Language)
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        // Language initialization
        const currentLang = localStorage.getItem('enerthai_lang') || 'en';
        document.body.classList.add(`lang-${currentLang}`);

        // Declarative Placeholders utility
        function updatePlaceholders() {
            const isThai = document.body.classList.contains('lang-th');
            document.querySelectorAll('[data-placeholder-en]').forEach(input => {
                const ph = isThai ? input.getAttribute('data-placeholder-th') : input.getAttribute('data-placeholder-en');
                if (ph) {
                    input.placeholder = ph;
                }
            });
        }

        const langBtn = document.createElement('button');
        langBtn.id = 'langToggleNav';
        langBtn.className = 'lang-selector-nav';
        langBtn.title = 'Switch Language';
        langBtn.innerHTML = `
            <span class="lang-indicator en-active">EN</span>
            <span style="opacity: 0.4;">|</span>
            <span class="lang-indicator th-active">TH</span>
        `;

        langBtn.addEventListener('click', () => {
            const isThai = document.body.classList.contains('lang-th');
            const targetLang = isThai ? 'en' : 'th';
            
            document.body.classList.remove('lang-en', 'lang-th');
            document.body.classList.add(`lang-${targetLang}`);
            
            localStorage.setItem('enerthai_lang', targetLang);
            
            // Dispatch event for other scripts to update
            window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: targetLang } }));
            updatePlaceholders();
            
            const msg = targetLang === 'th' ? 'เปลี่ยนภาษาเป็นภาษาไทยแล้ว' : 'Language switched to English';
            window.showToast(msg);
        });

        // Initialize placeholders on load
        setTimeout(updatePlaceholders, 0);

        // Theme initialization
        const currentTheme = localStorage.getItem('enerthai_theme') || 'light';
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }

        const themeBtn = document.createElement('button');
        themeBtn.id = 'themeToggleNav';
        themeBtn.className = 'theme-toggle-nav';
        themeBtn.title = 'Toggle Theme';
        themeBtn.innerHTML = currentTheme === 'dark'
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            const newTheme = isDark ? 'dark' : 'light';
            localStorage.setItem('enerthai_theme', newTheme);
            themeBtn.innerHTML = isDark
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        });

        // Currency Switcher initialization
        const currentCurrency = localStorage.getItem('enerthai_currency') || 'THB';
        const currencyBtn = document.createElement('button');
        currencyBtn.id = 'currencyToggleNav';
        currencyBtn.className = 'currency-selector-nav';
        currencyBtn.textContent = currentCurrency;
        currencyBtn.title = 'Switch Currency';

        currencyBtn.addEventListener('click', () => {
            const cur = currencyBtn.textContent;
            const target = cur === 'THB' ? 'USD' : 'THB';
            currencyBtn.textContent = target;
            localStorage.setItem('enerthai_currency', target);

            // Dispatch event so all page elements convert currency
            window.dispatchEvent(new CustomEvent('currencychange', { detail: { currency: target } }));
            window.showToast(`Currency switched to ${target}`);
        });

        headerActions.insertBefore(themeBtn, headerActions.firstChild);
        headerActions.insertBefore(currencyBtn, themeBtn);
        headerActions.insertBefore(langBtn, currencyBtn);
    }


    // Register currency change listener to refresh UI
    window.addEventListener('currencychange', () => {
        Cart.updateUI();
    });

    // 5.2 Cart UI Initial Rendering
    Cart.updateUI();

    // 5.3 Cart Drawer Toggle Listeners
    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartToggle) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            Cart.openDrawer();
        });
    }

    if (cartClose) {
        cartClose.addEventListener('click', () => Cart.closeDrawer());
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => Cart.closeDrawer());
    }

    // 5.4 Mobile Menu Toggle
    const menuBurger = document.getElementById('menuBurger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBurger && mobileMenu) {
        menuBurger.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            
            // Animate burger menu to X
            const spans = menuBurger.querySelectorAll('span');
            if (isActive) {
                spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu on clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                const spans = menuBurger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // 3.4 Sticky Header Scroll Styling
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3.5 Fade In Up Scroll Intersection Observer
    const animateElements = document.querySelectorAll('.animate-fade-in');
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // trigger only once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(el => observer.observe(el));
    }

    // 3.6 Checkout Simulation Modal Handling
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    const checkoutClose = document.getElementById('checkoutClose');
    const checkoutConfirmBtn = document.getElementById('checkoutConfirmBtn');

    // Helper to populate/refresh the checkout modal content
    function populateCheckoutModal() {
        const modalSummary = document.getElementById('checkoutSummaryItems');
        const modalSubtotal = document.getElementById('checkoutSubtotal');
        const modalTotal = document.getElementById('checkoutTotal');
        const cartItems = Cart.get();
        const totalVal = Cart.getTotal();
        const lang = localStorage.getItem('enerthai_lang') || 'en';
        const currency = localStorage.getItem('enerthai_currency') || 'THB';

        if (modalSummary) {
            modalSummary.innerHTML = cartItems.map(item => {
                const name = item['name' + (lang === 'th' ? 'Th' : 'En')] || item.name;
                const unitPrice = window.getConvertedPrice(item.id, currency);
                const formattedPrice = window.formatCurrency(unitPrice * item.qty, currency);
                return `
                    <div class="order-summary-item">
                        <span>${name} (x${item.qty})</span>
                        <span>${formattedPrice}</span>
                    </div>
                `;
            }).join('');
        }

        if (modalSubtotal) modalSubtotal.textContent = window.formatCurrency(totalVal, currency);
        if (modalTotal) modalTotal.textContent = window.formatCurrency(totalVal, currency);

        // Rebuild or update wrapper buttons in the correct language
        let wrapper = document.getElementById('dynamicCheckoutWrapper');
        if (wrapper) {
            const lineText = lang === 'th' ? 'สั่งซื้อผ่านไลน์แชท (LINE)' : 'Order via LINE Chat';
            const waText = lang === 'th' ? 'สั่งซื้อผ่าน WhatsApp' : 'Order via WhatsApp';
            const demoText = lang === 'th' ? 'จำลองการสั่งซื้อเดโม' : 'Simulate Demo Order';
            
            wrapper.querySelector('#btnCheckoutLine').innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.3c0-5.7-5.4-10.3-12-10.3S0 4.6 0 10.3c0 5.1 4.3 9.3 10.1 10.1.4.1.9.4.8.9l-.3 2.1c-.1.5.2.9.6.7L15.6 22c4.8-1.4 8.4-5.6 8.4-11.7z"/></svg>
                ${lineText}
            `;
            wrapper.querySelector('#btnCheckoutWhatsapp').innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.809.001-2.624-1.02-5.092-2.873-6.948-1.854-1.855-4.326-2.877-6.95-2.879-5.408 0-9.81 4.398-9.813 9.813-.001 1.562.417 3.09 1.21 4.453L1.58 19.174l4.242-1.111c.08.04.1.05.825.991z"/></svg>
                ${waText}
            `;
            wrapper.querySelector('#btnCheckoutDemo').textContent = demoText;
        }
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            Cart.closeDrawer();
            if (checkoutOverlay) {
                // Dynamically replace original single submit button with WhatsApp / LINE options
                if (checkoutConfirmBtn) {
                    checkoutConfirmBtn.style.display = 'none'; // hide original simulated button
                    
                    let wrapper = document.getElementById('dynamicCheckoutWrapper');
                    if (!wrapper) {
                        wrapper = document.createElement('div');
                        wrapper.id = 'dynamicCheckoutWrapper';
                        wrapper.style.display = 'flex';
                        wrapper.style.flexDirection = 'column';
                        wrapper.style.gap = '10px';
                        wrapper.style.marginTop = '20px';
                        
                        wrapper.innerHTML = `
                            <button id="btnCheckoutLine" class="btn" style="background-color: #06C755; color: #FFFFFF; border: none; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;"></button>
                            <button id="btnCheckoutWhatsapp" class="btn" style="background-color: #25D366; color: #FFFFFF; border: none; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;"></button>
                            <button id="btnCheckoutDemo" class="btn btn-secondary" style="width: 100%; font-weight: 600;"></button>
                        `;
                        checkoutConfirmBtn.parentNode.insertBefore(wrapper, checkoutConfirmBtn.nextSibling);
                        
                        // Action listeners
                        document.getElementById('btnCheckoutLine').addEventListener('click', () => sendCartToChat('line'));
                        document.getElementById('btnCheckoutWhatsapp').addEventListener('click', () => sendCartToChat('whatsapp'));
                        document.getElementById('btnCheckoutDemo').addEventListener('click', () => handleConfirmDemoOrder());
                    }
                }

                // Populate and translate modal details
                populateCheckoutModal();

                checkoutOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (checkoutClose) {
        checkoutClose.addEventListener('click', () => {
            if (checkoutOverlay) {
                checkoutOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Compile cart details and redirect to external messaging channels
    function sendCartToChat(platform) {
        const cartItems = Cart.get();
        if (cartItems.length === 0) return;

        const lang = localStorage.getItem('enerthai_lang') || 'en';
        const currency = localStorage.getItem('enerthai_currency') || 'THB';
        const isTh = lang === 'th';
        
        let message = isTh 
            ? `สวัสดี Ener Thai! ฉันต้องการสั่งซื้อสินค้าดังนี้:\n\n`
            : `Hello Ener Thai! I would like to place an order:\n\n`;
            
        cartItems.forEach(item => {
            const unitPrice = window.getConvertedPrice(item.id, currency);
            const formattedTotal = window.formatCurrency(unitPrice * item.qty, currency);
            const name = item['name' + (isTh ? 'Th' : 'En')] || item.name;
            message += `• ${name} (x${item.qty}) - ${formattedTotal}\n`;
        });
        
        const formattedGrandTotal = window.formatCurrency(Cart.getTotal(), currency);
        const freeText = isTh ? 'ฟรี' : 'Free';
        const shippingLabel = isTh ? 'การจัดส่ง' : 'Shipping';
        const totalLabel = isTh ? 'ยอดรวมทั้งหมด' : 'Total Subtotal';
        const confirmText = isTh
            ? 'โปรดยืนยันรายละเอียดการสั่งซื้อและบัญชีสำหรับการชำระเงิน'
            : 'Please confirm my order details and billing account.';
            
        message += `\n${totalLabel}: ${formattedGrandTotal}\n`;
        message += `${shippingLabel}: ${freeText}\n\n`;
        message += confirmText;

        const encodedMessage = encodeURIComponent(message);
        let redirectUrl = '';

        if (platform === 'whatsapp') {
            redirectUrl = `https://wa.me/66800000000?text=${encodedMessage}`;
        } else if (platform === 'line') {
            redirectUrl = `https://line.me/R/msg/text/?${encodedMessage}`;
        }

        Cart.clear();

        if (checkoutOverlay) {
            const heading = lang === 'th' 
                ? `กำลังเปลี่ยนเส้นทางไปที่ ${platform === 'line' ? 'LINE' : 'WhatsApp'}...` 
                : `Redirecting to ${platform === 'line' ? 'LINE' : 'WhatsApp'}...`;
            const text = lang === 'th'
                ? `รายการสั่งซื้อของคุณถูกรวบรวมแล้ว เรากำลังเปิด ${platform === 'line' ? 'LINE' : 'WhatsApp'} เพื่อส่งรายการสินค้าของคุณ ขอบคุณครับ!`
                : `Your order has been compiled. We are opening ${platform === 'line' ? 'LINE' : 'WhatsApp'} to submit your cart. Thank you!`;
            const buttonText = lang === 'th' ? 'กลับไปที่ร้านค้า' : 'Return to Shop';

            checkoutOverlay.querySelector('.checkout-modal').innerHTML = `
                <div class="checkout-modal-success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h3>${heading}</h3>
                <p style="margin-bottom: 24px;">${text}</p>
                <button class="btn btn-primary" onclick="window.location.reload();" style="width: 100%;">${buttonText}</button>
            `;
        }

        setTimeout(() => {
            window.open(redirectUrl, '_blank');
        }, 800);
    }

    function handleConfirmDemoOrder() {
        Cart.clear();
        if (checkoutOverlay) {
            const lang = localStorage.getItem('enerthai_lang') || 'en';
            const heading = lang === 'th' 
                ? 'สั่งซื้อสินค้าเสร็จสมบูรณ์!' 
                : 'Order Placed Successfully!';
            const text = lang === 'th'
                ? 'ขอบคุณสำหรับการเติมพลังงานกับ Ener Thai เราได้ส่งข้อมูลยืนยันการสั่งซื้อจำลองไปยังอีเมลของคุณแล้ว'
                : 'Thank you for refueling with Ener Thai. We have sent a simulated order confirmation to your email.';
            const buttonText = lang === 'th' ? 'กลับไปที่ร้านค้า' : 'Return to Shop';

            checkoutOverlay.querySelector('.checkout-modal').innerHTML = `
                <div class="checkout-modal-success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h3>${heading}</h3>
                <p style="margin-bottom: 24px;">${text}</p>
                <button class="btn btn-primary" onclick="window.location.reload();" style="width: 100%;">${buttonText}</button>
            `;
        }
    }

    // Register language change listener to refresh UI
    window.addEventListener('langchange', () => {
        Cart.updateUI();
        const checkoutOverlay = document.getElementById('checkoutOverlay');
        if (checkoutOverlay && checkoutOverlay.classList.contains('active')) {
            populateCheckoutModal();
        }
    });
});

// 4. Service Worker Registration for PWA Support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Ener Thai Service Worker registered with scope:', reg.scope))
            .catch(err => console.error('Ener Thai Service Worker registration failed:', err));
    });
}

// Dynamic Helper for linking Add to Cart button on grids directly
window.addToCartClick = function(id) {
    Cart.add(id, 1);
};
