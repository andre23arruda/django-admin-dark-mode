const options = {
    mixColor: '#fff', // default: '#fff'
    backgroundColor: 'transparent',  // default: '#fff'
    buttonColorDark: '#2f2f2fc1',  // default: '#100f2c'
    buttonColorLight: '#ffffff4f', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

function addDarkmodeWidget() {
    new Darkmode(options).showWidget()
    const darkModeToggle = document.querySelector('button.darkmode-toggle')
    darkModeToggle.addEventListener('click', () => {
        document.querySelector('body').classList.value.includes('darkmode--activated') ? setColorTheme('dark') : setColorTheme('light')
    })
    initDarkMode(darkmode)
}
window.addEventListener('load', addDarkmodeWidget)
