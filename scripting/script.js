
const changeTheme = () =>{
    let theme = document.getElementById('theme_css');
    if (theme.getAttribute('href') === './styling/light_theme.css') {
        theme.setAttribute('href', './styling/dark_theme.css');
    } else {
        theme.setAttribute('href', './styling/light_theme.css');
    }
}