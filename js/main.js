/* ==========================================================================
   EnerThai Premium E-Commerce Website - Global JavaScript
   ========================================================================== */

// 1. Centralized Product Database
window.EnerThaiProducts = {
    sunrise: {
        id: 'sunrise',
        name: 'SUNRISE Energy Gel',
        purpose: 'Prepare',
        price: 95.00,
        currency: '฿',
        flavor: 'Jasmine Rice & Mango',
        imageGrad: 'sunrise-grad',
        tagline: 'Pre-race energy preparation to prime your muscles.',
        description: 'Formulated with organic Thai Jasmine Rice syrup and sweet mango puree, SUNRISE provides slow-release carbohydrates and essential electrolytes to top off your glycogen stores before intense exercise. Gentle on the stomach with a subtle, refreshing tropical taste.',
        benefits: [
            'Optimal glycemic index profile for sustained pre-run energy',
            'Made with natural Thai Jasmine Rice syrup and real mango puree',
            'Rich in Potassium and Sodium to prevent early dehydration',
            'Zero artificial preservatives or colorings'
        ],
        nutrition: {
            servingSize: '1 Sachet (45g)',
            calories: 160,
            totalFat: '0g',
            sodium: '180mg',
            totalCarb: '40g',
            sugars: '16g',
            protein: '0g',
            potassium: '90mg'
        },
        ingredients: 'Organic Thai Jasmine Rice Syrup, Natural Mango Puree, Water, Sea Salt, Potassium Chloride, Citric Acid, Natural Beta-Carotene (for color).'
    },
    strike: {
        id: 'strike',
        name: 'STRIKE Energy Gel',
        purpose: 'Perform',
        price: 85.00,
        currency: '฿',
        flavor: 'Thai Coconut & Lime',
        imageGrad: 'strike-grad',
        tagline: 'High-speed carbohydrate absorption during intense running.',
        description: 'STRIKE is our high-performance fuel utilizing Thailand\'s premium coconut water concentrate and lime juice. It features a scientifically proven 1:0.8 Maltodextrin-to-Fructose ratio to deliver 30g of fast-absorbing carbohydrates per hour without triggering gastrointestinal distress.',
        benefits: [
            'Dual-source carbohydrate ratio (1:0.8) for maximum absorption',
            'Real Thai Coconut Water concentrate providing natural potassium',
            '100mg of caffeine from organic green tea extract for mental focus',
            'Light, non-sticky consistency, easy to swallow at race pace'
        ],
        nutrition: {
            servingSize: '1 Sachet (40g)',
            calories: 120,
            totalFat: '0g',
            sodium: '250mg',
            totalCarb: '30g',
            sugars: '12g',
            protein: '0g',
            potassium: '110mg',
            caffeine: '100mg'
        },
        ingredients: 'Maltodextrin, Water, Fructose, Thai Coconut Water Concentrate, Lime Juice, Sea Salt, Green Tea Extract (Caffeine source), Natural Flavors, Sodium Benzoate (preservative).'
    },
    sunset: {
        id: 'sunset',
        name: 'SUNSET Recovery Gel',
        purpose: 'Recover',
        price: 105.00,
        currency: '฿',
        flavor: 'Thai Ginger & Forest Honey',
        imageGrad: 'sunset-grad',
        tagline: 'Post-run cooling recovery to accelerate muscle repair.',
        description: 'Rebuild and reduce inflammation with SUNSET. Infused with active Thai ginger extract (gingerol) and raw forest honey, it blends 25g of recovery carbs with 10g of plant-based essential amino acids (BCAAs) to kickstart muscle protein synthesis and soothe aching joints immediately after you cross the finish line.',
        benefits: [
            '10g of high-quality plant-based BCAAs (2:1:1 ratio) to rebuild muscle',
            'Thai Ginger extract containing active gingerol to combat muscle soreness',
            'Raw Thai Forest Honey for natural enzyme-rich glycogen replenishment',
            'Soothing warm ginger taste that relaxes the stomach post-effort'
        ],
        nutrition: {
            servingSize: '1 Sachet (50g)',
            calories: 140,
            totalFat: '0g',
            sodium: '120mg',
            totalCarb: '25g',
            sugars: '18g',
            protein: '10g',
            potassium: '75mg',
            bcaas: '5000mg'
        },
        ingredients: 'Thai Forest Honey, Water, Plant-based L-Leucine, L-Isoleucine, L-Valine, Ginger Root Extract, Lemon Juice Concentrate, Sea Salt, Potassium Sorbate.'
    }
};

// 2. Pricing & Currency Helpers
window.getConvertedPrice = function(id, currency = 'THB') {
    const product = window.EnerThaiProducts[id];
    if (!product) return 0;
    
    if (currency === 'USD') {
        if (id === 'sunrise') return 3.00;
        if (id === 'strike') return 2.75;
        if (id === 'sunset') return 3.25;
        return product.price / 32;
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
        
        window.showToast(
            `Added ${qty}x ${product.name} (${formattedCost}) to Cart.`,
            'View Cart',
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
            itemsContainer.innerHTML = `
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

                return `
                <div class="cart-item">
                    <div class="cart-item-image" style="background: none; display: flex; justify-content: center; align-items: center; width: 60px; height: 60px;">
                        <img src="assets/gel-${item.id}.png" alt="${item.name}" style="height: 50px; width: auto; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title-row">
                            <div>
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-purpose">${item.purpose}</div>
                            </div>
                            <button class="cart-item-remove" onclick="Cart.remove('${item.id}')">Remove</button>
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
    // 5.1 Dynamic Header Upgrades (Currency & Theme)
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
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

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            Cart.closeDrawer();
            if (checkoutOverlay) {
                // Populate order details in modal
                const modalSummary = document.getElementById('checkoutSummaryItems');
                const modalSubtotal = document.getElementById('checkoutSubtotal');
                const modalTotal = document.getElementById('checkoutTotal');
                const cartItems = Cart.get();
                const totalVal = Cart.getTotal();

                if (modalSummary) {
                    modalSummary.innerHTML = cartItems.map(item => `
                        <div class="order-summary-item">
                            <span>${item.name} (x${item.qty})</span>
                            <span>฿${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                    `).join('');
                }

                if (modalSubtotal) modalSubtotal.textContent = `฿${totalVal.toFixed(2)}`;
                if (modalTotal) modalTotal.textContent = `฿${totalVal.toFixed(2)}`;

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
                            <button id="btnCheckoutLine" class="btn" style="background-color: #06C755; color: #FFFFFF; border: none; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.3c0-5.7-5.4-10.3-12-10.3S0 4.6 0 10.3c0 5.1 4.3 9.3 10.1 10.1.4.1.9.4.8.9l-.3 2.1c-.1.5.2.9.6.7L15.6 22c4.8-1.4 8.4-5.6 8.4-11.7z"/></svg>
                                Order via LINE Chat
                            </button>
                            <button id="btnCheckoutWhatsapp" class="btn" style="background-color: #25D366; color: #FFFFFF; border: none; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.809.001-2.624-1.02-5.092-2.873-6.948-1.854-1.855-4.326-2.877-6.95-2.879-5.408 0-9.81 4.398-9.813 9.813-.001 1.562.417 3.09 1.21 4.453L1.58 19.174l4.242-1.111c.08.04.1.05.825.991z"/></svg>
                                Order via WhatsApp
                            </button>
                            <button id="btnCheckoutDemo" class="btn btn-secondary" style="width: 100%; font-weight: 600;">
                                Simulate Demo Order
                            </button>
                        `;
                        checkoutConfirmBtn.parentNode.insertBefore(wrapper, checkoutConfirmBtn.nextSibling);
                        
                        // Action listeners
                        document.getElementById('btnCheckoutLine').addEventListener('click', () => sendCartToChat('line'));
                        document.getElementById('btnCheckoutWhatsapp').addEventListener('click', () => sendCartToChat('whatsapp'));
                        document.getElementById('btnCheckoutDemo').addEventListener('click', () => handleConfirmDemoOrder());
                    }
                }

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

        let message = `Hello EnerThai! I would like to place an order:\n\n`;
        cartItems.forEach(item => {
            message += `• ${item.name} (x${item.qty}) - ฿${(item.price * item.qty).toFixed(2)}\n`;
        });
        message += `\nTotal Subtotal: ฿${Cart.getTotal().toFixed(2)}\n`;
        message += `Shipping: Free\n`;
        message += `Please confirm my order details and billing account.`;

        const encodedMessage = encodeURIComponent(message);
        let redirectUrl = '';

        if (platform === 'whatsapp') {
            redirectUrl = `https://wa.me/66800000000?text=${encodedMessage}`;
        } else if (platform === 'line') {
            redirectUrl = `https://line.me/R/msg/text/?${encodedMessage}`;
        }

        Cart.clear();

        if (checkoutOverlay) {
            checkoutOverlay.querySelector('.checkout-modal').innerHTML = `
                <div class="checkout-modal-success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h3>Redirecting to ${platform === 'line' ? 'LINE' : 'WhatsApp'}...</h3>
                <p style="margin-bottom: 24px;">Your order has been compiled. We are opening ${platform === 'line' ? 'LINE' : 'WhatsApp'} to submit your cart. Thank you!</p>
                <button class="btn btn-primary" onclick="window.location.reload();" style="width: 100%;">Return to Shop</button>
            `;
        }

        setTimeout(() => {
            window.open(redirectUrl, '_blank');
        }, 800);
    }

    function handleConfirmDemoOrder() {
        Cart.clear();
        if (checkoutOverlay) {
            checkoutOverlay.querySelector('.checkout-modal').innerHTML = `
                <div class="checkout-modal-success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h3>Order Placed Successfully!</h3>
                <p style="margin-bottom: 24px;">Thank you for refueling with EnerThai. We have sent a simulated order confirmation to your email.</p>
                <button class="btn btn-primary" onclick="window.location.reload();" style="width: 100%;">Return to Shop</button>
            `;
        }
    }
});

// 4. Service Worker Registration for PWA Support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('EnerThai Service Worker registered with scope:', reg.scope))
            .catch(err => console.error('EnerThai Service Worker registration failed:', err));
    });
}

// Dynamic Helper for linking Add to Cart button on grids directly
window.addToCartClick = function(id) {
    Cart.add(id, 1);
};
