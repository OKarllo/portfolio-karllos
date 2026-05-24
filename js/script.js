// ========================================
// MENU MOBILE
// ========================================

// ========================================
// Seleciona o botão hamburger
// ========================================
const hamburger = document.getElementById('hamburger');

// ========================================
// Seleciona a lista do menu
// ========================================
const navList = document.getElementById('navList');

// ========================================
// Seleciona todos os links do menu
// ========================================
const navLinks = document.querySelectorAll('.nav__list a');

// ========================================
// Abre e fecha o menu mobile
// ========================================
hamburger.addEventListener('click', () => {

    navList.classList.toggle('active');

    hamburger.classList.toggle('active');

});

// ========================================
// Fecha o menu ao clicar em um link
// ========================================
navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navList.classList.remove('active');

        hamburger.classList.remove('active');

    });

});

// ========================================
// HEADER COM EFEITO NO SCROLL
// ========================================

// ========================================
// Seleciona o header
// ========================================
const header = document.getElementById('header');

// ========================================
// Evento de rolagem da página
// ========================================
window.addEventListener('scroll', () => {

    // ========================================
    // Verifica se rolou mais de 50px
    // ========================================
    if(window.scrollY > 50){

        header.classList.add('scrolled');

    }else{

        header.classList.remove('scrolled');

    }

});