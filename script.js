function showContent(sectionId) {
     document.querySelectorAll('.content').forEach(section => {
         section.classList.add('hidden'); // Oculta todas las secciones
     });
     document.getElementById(sectionId).classList.remove('hidden'); // Muestra la seleccionada
 }