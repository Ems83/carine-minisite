function scrollGaleria(categoria, direction) {
  const galeria = document.getElementById(`galeria-${categoria}`);
  const scrollAmount = 240; // largura do card + gap
  if (galeria) {
    galeria.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  } else {
    console.warn(`Elemento galeria-${categoria} não encontrado.`);
  }
}
// Abrir imagem ao clicar
document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('.item img');
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('imagem-ampliada');

  imagens.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });
});

// Fechar o modal
function fecharModal() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none';
}