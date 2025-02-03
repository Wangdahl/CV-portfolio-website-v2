// Script to toggle between light and dark mode + remember user choice

//Saving color schemes to variables
const lightModeColors = {
    '--background-color': '#1A0B03',
    '--text-color': '#FFF8F4',
    '--primary-color': '#CC5500',
};
const darkModeColors = {
    '--background-color': '#FFF8F4',
    '--text-color': '#1A0B03',
    '--primary-color': '#CC5500',
};
//Function for setting the color schemes
function applyColorScheme(colorScheme) {
    for (const [variable, value] of Object.entries(colorScheme)) {
    document.documentElement.style.setProperty(variable, value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    if (!toggleButton) return;

    // Set initial mode based on saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
    applyColorScheme(darkModeColors);
    toggleButton.checked = true;
    } else {
    applyColorScheme(lightModeColors);
    toggleButton.checked = false;
    }
    // Listen for changes on the toggle
    toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        applyColorScheme(darkModeColors);
        localStorage.setItem('darkMode', 'enabled');
    } else {
        applyColorScheme(lightModeColors);
        localStorage.setItem('darkMode', 'disabled');
    }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkModeMobile');
    if (!toggleButton) return;

    // Set initial mode based on saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
    applyColorScheme(darkModeColors);
    toggleButton.checked = true;
    } else {
    applyColorScheme(lightModeColors);
    toggleButton.checked = false;
    }
    // Listen for changes on the toggle
    toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        applyColorScheme(darkModeColors);
        localStorage.setItem('darkMode', 'enabled');
    } else {
        applyColorScheme(lightModeColors);
        localStorage.setItem('darkMode', 'disabled');
    }
    });
});