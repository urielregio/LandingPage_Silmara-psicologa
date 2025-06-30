// ---- MENU LATERAL ----
const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar')
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('#menu a')

// ---- ABRIR MENU ----
btnMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

// ---- FECHAR MENU PELO BOTAO ----
btnFechar.addEventListener('click', () => {
  menu.classList.remove('active');
});

// ---- FECHAR MENU AO CLICAR EM QUALQUER LINK ----
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// ---- FECHAR MENU AO CLICAR FORA DELE ----
document.addEventListener('click', (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnBtnMenu = btnMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBtnMenu) {
    menu.classList.remove('active');
  }
});

// ---- LER MAIS ----
  function toggleText(button) {
    const text = button.previousElementSibling; 

    if (text.classList.contains('expandido')) {
      text.classList.remove('expandido');
      text.style.maxHeight = null;
      button.textContent = '... ler mais';
    } else {
      text.classList.add('expandido');
      text.style.maxHeight = text.scrollHeight + 'px';
      button.textContent = '... menos';
    }
  }