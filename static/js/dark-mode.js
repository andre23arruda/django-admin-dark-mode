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
    new Darkmode(options).showWidget();
}
window.addEventListener('load', addDarkmodeWidget);
