// ========================================
// Navigation Menu Toggle
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// Scroll Animation - Add class when element is visible
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all game cards for animation
document.querySelectorAll('.game-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ========================================
// Game Filtering System (for games.html)
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const gameCards = document.querySelectorAll('.game-card');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const gamesContainer = document.getElementById('gamesContainer');

let currentCategory = 'all';
let currentSearchTerm = '';

// Filter by category
if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get selected category
            currentCategory = button.getAttribute('data-category');
            
            // Apply filters
            applyFilters();
        });
    });
}

// Search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        applyFilters();
    });
}

// Apply both search and category filters
function applyFilters() {
    let visibleCount = 0;

    gameCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitle = card.querySelector('.game-title')?.textContent.toLowerCase() || '';
        const cardDescription = card.querySelector('.game-description')?.textContent.toLowerCase() || '';
        
        // Check category match
        const categoryMatch = currentCategory === 'all' || cardCategory === currentCategory;
        
        // Check search match
        const searchMatch = currentSearchTerm === '' || 
                          cardTitle.includes(currentSearchTerm) || 
                          cardDescription.includes(currentSearchTerm);
        
        // Show/hide card based on filters
        if (categoryMatch && searchMatch) {
            card.style.display = 'block';
            // Re-trigger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, visibleCount * 50);
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no results message
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            if (gamesContainer) {
                gamesContainer.style.display = 'none';
            }
        } else {
            noResults.style.display = 'none';
            if (gamesContainer) {
                gamesContainer.style.display = 'grid';
            }
        }
    }
}

// ========================================
// URL Parameter Handling (for category links)
// ========================================
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if there's a category parameter in URL
window.addEventListener('DOMContentLoaded', () => {
    const categoryParam = getURLParameter('category');
    
    if (categoryParam && filterButtons.length > 0) {
        // Find and activate the corresponding filter button
        filterButtons.forEach(button => {
            if (button.getAttribute('data-category') === categoryParam) {
                // Remove active from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active to matched button
                button.classList.add('active');
                currentCategory = categoryParam;
                applyFilters();
            }
        });
    }
});

// ========================================
// Navbar Background on Scroll
// ========================================
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 30, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(233, 69, 96, 0.2)';
        } else {
            navbar.style.background = 'rgba(15, 15, 30, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(233, 69, 96, 0.1)';
        }
    });
}

// ========================================
// Stats Counter Animation
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = element.textContent;
    const isNumber = /^\d+/.test(target);
    
    if (isNumber) {
        const number = parseInt(target.replace(/[^0-9]/g, ''));
        const suffix = target.replace(/[0-9]/g, '');
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = number + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
};

// Observe stat numbers for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// Download Button Interaction
// ========================================
document.querySelectorAll('.btn-download, .btn-download-large').forEach(button => {
    button.addEventListener('click', (e) => {
        // For demo purposes - add visual feedback
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        button.style.pointerEvents = 'none';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.pointerEvents = 'auto';
            }, 2000);
        }, 1500);
        
        // Prevent default behavior for demo
        e.preventDefault();
    });
});

// ========================================
// Game Detail Page - Image Gallery
// ========================================
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            // Add a simple scale animation to main image
            mainImage.style.transform = 'scale(0.95)';
            setTimeout(() => {
                mainImage.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🎮 APK Gaming Hub', 'font-size: 24px; font-weight: bold; color: #e94560;');
console.log('%cWelcome to APK Gaming Hub! Download the best Android games.', 'font-size: 14px; color: #00d9ff;');
