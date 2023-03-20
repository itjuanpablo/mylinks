function toggleMode() {
  const html = document.documentElement
  
  // Se houver a classe 'light' remova ela se não houver adicione-a
  html.classList.toggle('light')
  
  // Pegar a tag image
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode adicone a imagem 
   img.setAttribute('src', '/mylinks/assets/avatar2.png')
  } else {
    // se tiver sem light mode mantenha a imagem 
   img.setAttribute('src', '/mylinks/assets/avatar1.png')
  }
}