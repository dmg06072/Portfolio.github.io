// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/


// Portfolio data for carousel

const portfolioData = [
    {
        id: 1,
        title: 'ABOUT',
        description: '자기소개 및 이력서',
        image: 'images/neural-network.jpg',
        tech: ['프런트엔드', '백엔드', '풀스택']
    },
    {
        id: 2,
        title: 'STATS',
        description: '수료 및 경력사항, 보유 기술',
        image: 'images/quantum-cloud.jpg',
        tech: ['ReactJS', 'SpringBoot', 'Docker']
    },
    {
        id: 3,
        title: 'PROJECT',
        description: '팀 프로젝트',
        image: 'images/blockchain-vault.jpg',
        tech: ['ReactJS', 'SpringBoot', 'Docker']
    },
    {
        id: 4,
        title: 'SUB-PROJECT',
        description: '개인 프로젝트',
        image: 'images/cyber-defense.jpg',
        tech: ['ReactJS', 'SpringBoot', 'Docker']
    },
    {
        id: 5,
        title: 'CONTACT',
        description: '주소 및 연락처',
        image: 'images/data-nexus.jpg',
        tech: ['Git', 'Notion', 'Portfolio']
    },
    {
        id: 6,
        title: '...',
        description: '...',
        image: 'images/ar-interface.jpg',
        tech: ['', '', '']
    }
];

// Skills data
const skillsData = [
    // =====================
    // FRONTEND
    // =====================
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "React Router", icon: "🛣️", category: "frontend" },
    { name: "JavaScript", icon: "", category: "frontend" },
    { name: "HTML5", icon: "📄", category: "frontend" },
    { name: "CSS3", icon: "🎨", category: "frontend" },
    { name: "SCSS", icon: "💅", category: "frontend" },

    // =====================
    // BACKEND
    // =====================
    {
        name: "Java",
        category: "backend",
        icon: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="42" height="42">
<path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path>
<path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path>
<g>
<path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055z"/>
<path fill="#1565C0" d="M29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"/>
<path fill="#1565C0" d="M27.935 29.571c-4.509 1.499-12.814 1.02-10.354-0.993c-1.198 0-2.974 0.963-2.974 1.889c0 1.857 8.982 3.291 15.63 0.572L27.935 29.571z"/>
<path fill="#1565C0" d="M18.686 32.739c-1.636 0-2.695 1.054-2.695 1.822c0 2.391 9.76 2.632 13.627 0.205l-2.458-1.632C24.271 34.404 17.014 34.579 18.686 32.739z"/>
<path fill="#1565C0" d="M36.281 36.632c0-.936-1.055-1.377-1.433-1.588c2.228 5.373-22.317 4.956-22.317 1.784c0-.721 1.807-1.427 3.477-1.093l-1.42-.839C11.26 34.374 9 35.837 9 37.017C9 42.52 36.281 42.255 36.281 36.632z"/>
<path fill="#1565C0" d="M39 38.604c-4.146 4.095-14.659 5.587-25.231 3.057C24.341 46.164 38.95 43.628 39 38.604z"/>
</g>
</svg>
`
    },
    { name: "Spring Boot", icon: "🌱", category: "backend" },
    { name: "Spring Security", icon: "🔐", category: "backend" },
    { name: "MyBatis", icon: "💾", category: "backend" },
    { name: "JPA / Hibernate", icon: "🗄️", category: "backend" },
    { name: "JWT", icon: "🪪", category: "backend" },

    // =====================
    // DATABASE
    // =====================
    { name: "MySQL", icon: "🐬", category: "cloud" },
    { name: "MariaDB", icon: "🐳", category: "cloud" },
    { name: "Redis", icon: "🔥", category: "cloud" },

    // =====================
    // DEVOPS / INFRA
    // =====================
    { name: "Docker", icon: "🐳", category: "cloud" },
    { name: "AWS EC2", icon: "☁️", category: "cloud" },
    { name: "GitHub Actions", icon: "⚙️", category: "cloud" },
    { name: "Jenkins", icon: "🤖", category: "cloud" },

    // =====================
    // DATA SCIENCE / ML
    // =====================
    { name: "Python", icon: "🐍", category: "emerging" },
    { name: "NumPy", icon: "📐", category: "emerging" },
    { name: "Pandas", icon: "🐼", category: "emerging" },
    { name: "Scikit-learn", icon: "📊", category: "emerging" },
    { name: "LightGBM", icon: "⚡", category: "emerging" },
    { name: "Jupyter", icon: "📒", category: "emerging" },

    // =====================
    // TOOLS
    // =====================
    { name: "Git", icon: "🔧", category: "all" },
    { name: "GitHub", icon: "🐱", category: "all" },
    { name: "VS Code", icon: "📝", category: "all" },
    { name: "IntelliJ IDEA", icon: "💡", category: "all" },
    { name: "Postman", icon: "🚀", category: "all" },
    { name: "Node.js", icon: "🟢", category: "frontend" },
    { name: "Jira", icon: "📌", category: "all" },
    { name: "Figma", icon: "🎨", category: "all" }
];


// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize carousel
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;

    const techBadges = data.tech.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>

            <!-- ✅ 섹션 경로 분기 적용 -->
            <button class="card-cta"
                onclick="scrollToSection(cardSectionRoutes[${data.id}] || 'about')">
                Explore
            </button>
        </div>
    `;

    return item;
}

// ✅ HOME CARD → SECTION ROUTE MAP (ADD)
const cardSectionRoutes = {
    1: 'about',
    2: 'stats',
    3: 'skills',  // Main Project
    4: 'skills',  // Side Project (partition 예정)
    5: 'contact'
};



function initCarousel() {
    // Create carousel items
    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;

    items.forEach((item, index) => {
        // Calculate relative position
        let offset = index - currentIndex;

        // Wrap around for continuous rotation
        if (offset > totalItems / 2) {
            offset -= totalItems;
        } else if (offset < -totalItems / 2) {
            offset += totalItems;
        }

        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;

        // Reset transform
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';

        // Adjust spacing based on screen size
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;

        if (isMobile) {
            spacing1 = 280;  // Was 400, now 100px closer
            spacing2 = 420;  // Was 600, now 180px closer
            spacing3 = 550;  // Was 750, now 200px closer
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }

        if (absOffset === 0) {
            // Center item
            item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            // Side items
            const translateX = sign * spacing1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else if (absOffset === 2) {
            // Further side items
            const translateX = sign * spacing2;
            const rotation = isMobile ? 35 : 40;
            const scale = isMobile ? 0.75 : 0.7;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';
        } else if (absOffset === 3) {
            // Even further items
            const translateX = sign * spacing3;
            const rotation = isMobile ? 40 : 45;
            const scale = isMobile ? 0.65 : 0.6;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';
        } else {
            // Hidden items (behind)
            item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Initialize hexagonal skills grid
function initSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');

    function displaySkills(category = 'all') {
        skillsGrid.innerHTML = '';

        const filteredSkills =
            category === 'all'
                ? skillsData
                : skillsData.filter(skill => skill.category === category);

        filteredSkills.forEach((skill, index) => {
            const hexagon = document.createElement('div');
            hexagon.className = 'skill-hexagon';
            hexagon.style.animationDelay = `${index * 0.1}s`;

            // 아이콘/네임 안전 보정
            const icon = skill.icon || '⭐';
            const name = skill.name || 'SKILL';

            hexagon.innerHTML = `
            <div class="hexagon-inner">
                <div class="hexagon-content">

                    <div class="skill-icon-hex">${icon}</div>
                    <div class="skill-name-hex">${name}</div>

                    <div class="skill-level">
                        <div class="skill-level-fill"></div>
                    </div>

                </div>
            </div>
        `;

            skillsGrid.appendChild(hexagon);
        });
    }


    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displaySkills(tab.dataset.category);
        });
    });

    displaySkills();
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Auto-rotate carousel
setInterval(nextSlide, 8000);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Update carousel on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateCarousel();
    }, 250);
});

// Initialize on load
initCarousel();
initSkillsGrid();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling and active navigation
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);

//         if (targetSection) {
//             const headerHeight = header.offsetHeight;
//             const targetPosition = targetSection.offsetTop - headerHeight;

//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });

//             // Close mobile menu if open
//             navMenu.classList.remove('active');
//             menuToggle.classList.remove('active');
//         }
//     });
// });

// // Update active navigation on scroll
// function updateActiveNav() {
//     const scrollPosition = window.scrollY + 100;

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionId = section.getAttribute('id');

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 const href = link.getAttribute('href').substring(1);
//                 if (href === sectionId) {
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });
// }

// window.addEventListener('scroll', updateActiveNav);

// // Animated counter for stats
// function animateCounter(element) {
//     const target = parseInt(element.dataset.target);
//     const duration = 2000;
//     const step = target / (duration / 16);
//     let current = 0;

//     const counter = setInterval(() => {
//         current += step;
//         if (current >= target) {
//             element.textContent = target;
//             clearInterval(counter);
//         } else {
//             element.textContent = Math.floor(current);
//         }
//     }, 16);
// }

// Intersection Observer for stats animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                if (!number.classList.contains('animated')) {
                    number.classList.add('animated');
                    animateCounter(number);
                }
            });
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show success message
    alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);

    // Reset form
    contactForm.reset();
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
    }, 1500);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// PROJECT 토글

const projectTrigger = document.getElementById('projectTrigger');
const projectDetailWrap = document.getElementById('projectDetailWrap');

if (projectTrigger && projectDetailWrap) {
	projectTrigger.addEventListener('click', () => {
		projectDetailWrap.classList.toggle('show');
	});
}

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// 클릭 → 무조건 정확한 섹션으로 이동
navLinks.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();

		const target = document.querySelector(link.getAttribute('href'));
		if (!target) return;

		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
});

// 스크롤 → 정확한 active 매칭
window.addEventListener('scroll', () => {
	let current = "";

	sections.forEach(section => {
		const sectionTop = section.offsetTop - 200;
		const sectionHeight = section.offsetHeight;

		if (
			window.scrollY >= sectionTop &&
			window.scrollY < sectionTop + sectionHeight
		) {
			current = section.id;
		}
	});

	navLinks.forEach(link => {
		link.classList.remove("active");

		if (link.getAttribute("href") === `#${current}`) {
			link.classList.add("active");
		}
	});
});


