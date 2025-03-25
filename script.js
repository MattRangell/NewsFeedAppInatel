// Referências aos elementos do menu e botões
const menuToggle = document.getElementById('menuToggle');
const hiddenMenu = document.getElementById('hiddenMenu');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');

// Alternar visibilidade do menu
menuToggle.addEventListener('click', () => {
    hiddenMenu.classList.toggle('hidden');
});

// Função para aplicar um tema
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.style.setProperty('--neutral-light-gray', '#f0f0f0');
        document.body.style.setProperty('--primary-dark-blue', '#003366');
    } else if (theme === 'dark') {
        document.body.style.setProperty('--neutral-light-gray', '#1f1f1f');
        document.body.style.setProperty('--primary-dark-blue', '#00ff6a');
    }
}

// Salvar tema no localStorage
function saveTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
}

// Aplicar o tema claro ao clicar no botão
lightThemeBtn.addEventListener('click', () => {
    applyTheme('light');
    saveTheme('light');
    hiddenMenu.classList.add('hidden'); // Esconder o menu
});

// Aplicar o tema escuro ao clicar no botão
darkThemeBtn.addEventListener('click', () => {
    applyTheme('dark');
    saveTheme('dark');
    hiddenMenu.classList.add('hidden'); // Esconder o menu
});

// Recuperar tema salvo no localStorage no carregamento da página
window.onload = () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light'; // Padrão: tema claro
    applyTheme(savedTheme);
};
const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Adicionar eventos ao carrossel
eventos.forEach(evento => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${evento.image}" alt="${evento.title}">
        <div class="info">
            <h3>${evento.title}</h3>
            <p>${evento.description}</p>
            <p><span class="material-symbols-outlined icon">event</span> ${evento.date} às ${evento.time}</p>
            <p><span class="material-symbols-outlined icon">location_on</span> ${evento.location}</p>
        </div>
    `;

    carousel.appendChild(card);
});

// Lógica de navegação do carrossel
function updateCarousel() {
    const totalCards = eventos.length;
    const cardWidth = carousel.querySelector('.card').offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Botão próximo
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % eventos.length; // Circular
    updateCarousel();
    resetAutoSlide(); // Reinicia o temporizador ao clicar manualmente
});

// Botão anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + eventos.length) % eventos.length; // Circular
    updateCarousel();
    resetAutoSlide(); // Reinicia o temporizador ao clicar manualmente
});

// Função para deslizar automaticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % eventos.length; // Circular
    updateCarousel();
}

// Reiniciar o temporizador
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Limpa o intervalo existente
    autoSlideInterval = setInterval(autoSlide, 5000); // Reinicia o intervalo
}

// Inicializa o carrossel
let autoSlideInterval = setInterval(autoSlide, 5000); // Troca automática a cada 5 segundos

// Atualiza o carrossel na carga inicial
window.onload = updateCarousel;

