const toggle = document.getElementById('hamburger-icon');
const navigation = document.getElementById('navigation-list');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('open');
}); 

