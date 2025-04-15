function copyToClipboard(element, text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Ajouter la classe "copied" pour changer la couleur
      element.classList.add('copied');

      // Retirer la classe après 1 seconde
      setTimeout(() => {
        element.classList.remove('copied');
      }, 500);
    })
    .catch(err => {
      console.error('Erreur lors de la copie : ', err);
    });
}



function toggleExperienceHK() {
    const experienceDiv = document.querySelector('.div__hk__experience');
    const parentDiv = document.querySelector('.div__hk');
  
    // Basculer la classe 'hidden' pour afficher/masquer le contenu
    experienceDiv.classList.toggle('hidden');
  
    // Ajouter ou retirer la classe 'active' sur la div principale
    if (experienceDiv.classList.contains('hidden')) {
      parentDiv.classList.remove('active');
    } else {
      parentDiv.classList.add('active');
    }
  }

    function toggleExperienceArturin() {
      const experienceDiv = document.querySelector('.div__arturin__experience');
      const parentDiv = document.querySelector('.div__arturin');
  
      // Basculer la classe 'hidden' pour afficher/masquer le contenu
      experienceDiv.classList.toggle('hidden');
  
      // Ajouter ou retirer la classe 'active' sur la div principale
      if (experienceDiv.classList.contains('hidden')) {
          parentDiv.classList.remove('active');
      } else {
          parentDiv.classList.add('active');
      }
  }