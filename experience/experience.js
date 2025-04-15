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