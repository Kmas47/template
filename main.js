function showMenu() {
    const menu = document.getElementsByClassName('menu-contents')[0];
    const menuIcon = document.getElementsByClassName('menu')[0];
    const close = document.getElementsByClassName('menu-container')[0];
    
    menu.style.display = 'block';
    menuIcon.style.display = 'none';

    createList('Loans','Finance', 'debt');

    const removeList = (list) => list.forEach(rl => rl.remove());

    
    
    menu.addEventListener('click', () => {
        if(event.target == close) {
            removeList(document.querySelectorAll('.remove'));
            menu.style.display ='none';
            menuIcon.style.display = 'block';
            topScroll();
        }
    });
}

function login() { 
    window.scroll({top: document.body.scrollHeight, behavior: "smooth"});    
    showMenu();
}

function topScroll() {          
    window.scroll({top: 0, behavior: "smooth"});
}

function createList(l1, l2, l3) {
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.className = 'menu-container remove';
    li2.className = 'menu-container remove';
    li3.className = 'menu-container remove';


    li1.textContent = l1;
    li2.textContent = l2;
    li3.textContent = l3;

    document.querySelector('ul').prepend(li3);
    document.querySelector('ul').prepend(li2);
    document.querySelector('ul').prepend(li1);
}