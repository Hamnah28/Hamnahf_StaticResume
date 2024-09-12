// script.ts
var _a;
// Function to add an animation class to elements with a specific class
function addAnimationClass(className, animationClass) {
    var elements = document.querySelectorAll(className);
    elements.forEach(function (element) {
        element.classList.add(animationClass);
    });
}
// Example usage
document.addEventListener('DOMContentLoaded', function () {
    addAnimationClass('.profile-picture', 'fade-in');
});
// Get references to the button and the skills section
var toggleButton = document.getElementById('toggle-skills-btn');
var skillsSection = (_a = document.getElementById('skills')) === null || _a === void 0 ? void 0 : _a.querySelector('ul');
// Function to toggle the visibility of the skills section
var toggleSkills = function () {
    if (skillsSection) {
        // Toggle the 'hidden' class
        skillsSection.classList.toggle('hidden');
    }
};
// Add an event listener to the button
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', toggleSkills);
