toggleMenu = () => {
const menuMobile = document.getElementById('menu-mobile')

    if (menuMobile.className === 'menu-mobile-active') {
        menuMobile.className = 'menu-mobile'
    } else {
        menuMobile.className = 'menu-mobile-active'
    }
} 

toggleCart = () => {
    const menuMobile = document.getElementById('carrinho')
    const Body = document.getElementById('body')
    
        if (menuMobile.className === 'd-none') {
            menuMobile.className = 'd-flex'
        } else {
            menuMobile.className = 'd-none'
        }   

        if (Body.className === 'overflow-auto') {
            Body.className = 'overflow-hidden'
        } else {
            Body.className = 'overflow-auto'
        }

    } 