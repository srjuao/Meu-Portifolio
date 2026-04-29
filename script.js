// Initialize Lucide Icons
lucide.createIcons();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple animation observer for elements to fade in on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply initial styles and observe
document.querySelectorAll('.problem-card, .step-card, .service-card, .diff-item, .stat-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Highlight animation logic for the dashboard mockup chart
function animateChart() {
    const bars = document.querySelectorAll('.chart-bar');
    setInterval(() => {
        bars.forEach(bar => {
            if (!bar.classList.contains('highlight')) {
                const randomHeight = Math.floor(Math.random() * 60) + 20;
                bar.style.height = `${randomHeight}%`;
            }
        });
    }, 2000);
}

// Mobile Menu Logic
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

if (mobileMenuBtn && nav) {
    const setMenuIcon = (open) => {
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', open ? 'x' : 'menu');
            lucide.createIcons();
        }
        mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', () => {
        const opened = nav.classList.toggle('active');
        setMenuIcon(opened);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            setMenuIcon(false);
        });
    });
}

// Modal Logic
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.querySelector('.modal-close');
const orbitNodes = document.querySelectorAll('.orbit-node');

const modalData = {
    chat: {
        title: 'Comunicação Omnichannel',
        icon: 'message-square',
        desc: 'Automatizamos o atendimento ao cliente via WhatsApp, Messenger e outros canais, integrando diretamente com seu CRM para que nenhuma oportunidade seja perdida.'
    },
    pagamento: {
        title: 'Faturamento Inteligente',
        icon: 'credit-card',
        desc: 'Integramos gateways de pagamento e sistemas de conciliação bancária, automatizando a emissão de notas fiscais e o controle de inadimplência.'
    },
    email: {
        title: 'Automação de E-mail',
        icon: 'mail',
        desc: 'Criamos fluxos de nutrição e alertas automáticos baseados no comportamento do usuário ou em eventos do sistema, mantendo sua equipe sempre informada.'
    },
    agenda: {
        title: 'Gestão de Agendamentos',
        icon: 'calendar',
        desc: 'Sistemas de agendamento automático que sincronizam com Google Calendar ou Outlook, eliminando conflitos de horário e reduzindo faltas com lembretes automáticos.'
    }
};

function openModal(type) {
    const data = modalData[type];
    if (!data) return;

    modalContent.innerHTML = `
        <div class="modal-icon-container">
            <i data-lucide="${data.icon}" class="modal-icon"></i>
        </div>
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
        <button class="btn btn-primary" style="margin-top: 24px; width: 100%;" onclick="window.location.href='#cta'; document.getElementById('modal-overlay').classList.remove('active');">Saiba mais</button>
    `;
    
    lucide.createIcons();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

orbitNodes.forEach(node => {
    node.style.cursor = 'pointer';
    node.addEventListener('click', () => {
        openModal(node.getAttribute('data-target'));
    });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}

// Start animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateChart();
    
    // Initialize Liquid Ether Background
    const liquidContainer = document.getElementById('liquid-bg');
    if (liquidContainer && typeof initLiquidEther === 'function') {
        initLiquidEther(liquidContainer, {
            colors: ['#5227FF', '#FF9FFC', '#B497CF'],
            mouseForce: 12,
            cursorSize: 100,
            isViscous: true,
            viscous: 40,
            iterationsViscous: 20,
            iterationsPoisson: 20,
            resolution: 0.4,
            autoDemo: true,
            autoSpeed: 0.35, // Slightly increased for visibility
            autoIntensity: 1.6 // Increased to make it more continuous
        });
    }
});
