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
