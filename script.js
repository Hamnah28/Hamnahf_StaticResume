document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn');
    const skillsList = document.querySelector('#skills ul');

    toggleSkillsButton.addEventListener('click', () => {
        // Toggle hidden class on the skills list
        if (skillsList) {
            skillsList.classList.toggle('hidden');
        }
    });
});
