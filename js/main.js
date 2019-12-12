const skill = document.querySelectorAll('.skills-skill');
const skillDescriptions = document.querySelectorAll('.skills-skill-description');

// Select tab content item
function selectItem(e) {
    removeShow();
    console.log(this.id);
    // Grab content item from DOM
    // `#` To dynamic grab. this.id = tab-1/tab-2/tab-2
    const skillDescription = document.querySelector(`#${this.id}-content`);
//    Add show class
    skillDescription.classList.add('show');
}

function removeShow() {
    skillDescriptions.forEach(item => item.classList.remove('show'))
}

// Listener for tabl click
skill.forEach(item => item.addEventListener('click', selectItem));

