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

// Get references to the button and the skills section
const toggleButton = document.getElementById('toggle-skills-btn');
const skillsSection = document.getElementById('skills')?.querySelector('ul');

// Function to toggle the visibility of the skills section
const toggleSkills = () => {
    if (skillsSection) {
        // Toggle the 'hidden' class
        skillsSection.classList.toggle('hidden');
    }
};

// Add an event listener to the button
toggleButton?.addEventListener('click', toggleSkills);
