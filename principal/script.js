'use strict';

const nav = document.querySelector('nav');
const btnGrupo = document.querySelectorAll('.btn-grupo-muscular');
const ejercicios = document.querySelectorAll('.ejercicio');
const overlay = document.querySelector('.overlay');
const menuIcon = document.getElementById('desplegable');
const close = document.querySelectorAll('.close');

menuIcon.onclick = function () {
    menuIcon.classList.toggle('active');
};

btnGrupo.forEach(btn => {
    btn.addEventListener('click', function () {
        const type = this.id;
        const ejercicio = document.querySelector(`.${type}`);
        ejercicio.classList.toggle('hidden');
    });
});

ejercicios.forEach(ejercicio => {
    const header = ejercicio.querySelector('.h');
    const modal = ejercicio.querySelector('.content');
    const close = modal.querySelector('.close');

    header.addEventListener('click', () => {
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
    });

    close.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    });

    overlay.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});

window.addEventListener('scroll', function () {
    nav.classList.toggle('sticky', window.scrollY > 0);
});
