// script.ts

// Function to add an animation class to elements with a specific class
function addAnimationClass(className: string, animationClass: string): void {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
        (element as HTMLElement).classList.add(animationClass);
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    addAnimationClass('.profile-picture', 'fade-in');
});

// Toggle visibility for Skills section
const toggleSkillsButton = document.getElementById('toggle-skills-btn');
const skillsSection = document.querySelector('#skills ul');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        // Toggle hidden class
        skillsSection.classList.toggle('hidden');
    }
});

