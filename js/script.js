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
  // Só roda no mobile
  if (window.innerWidth >= 768) return;

  const text = button.previousElementSibling;

  // Se o texto já está expandido (tem maxHeight definido), fecha
  if (text.style.maxHeight) {
    text.style.maxHeight = null;
    button.style.display = 'inline';
  } else {
    // Se está fechado, abre e esconde o botão
    text.style.maxHeight = text.scrollHeight + 'px';
    button.style.display = 'none';

    // Adiciona evento para fechar ao clicar fora
    setTimeout(() => {
      document.addEventListener('click', ClicarFora);
    }, 10);
  }

  function ClicarFora(event) {
    if (!button.parentElement.contains(event.target)) {
      text.style.maxHeight = null;
      button.style.display = 'inline';
      document.removeEventListener('click', ClicarFora);
    }
  }
}