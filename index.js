'use strict'

let changePlayerButtons = document.querySelectorAll('.changePlayerName');

changePlayerButtons.forEach(item => {
    item.addEventListener('click', (e)=>{
        let imgElement = e.target.closest('.playerInfo').querySelector('img');
        let playerName = e.target.closest('.playerInfo').querySelector('.playerName');
        let acceptButton = e.target.nextElementSibling;
        e.target.style.display = 'none';
        acceptButton.style.display = 'inline';

        changeAvatar(imgElement);
        changeName(playerName);

        acceptButton.addEventListener('click', (e) => {
            let h1Name = document.createElement('h1');
            h1Name.classList.add('playerName');
            if (e.target.parentElement.querySelector('input').value) {
                h1Name.innerText = `${e.target.parentElement.querySelector('input').value}`;
            }
            else {
                h1Name.innerText = 'Player'
                if (e.target.classList.contains('changeXPlayer')){
                    h1Name.innerText+= ' X'
                }
                else {
                    h1Name.innerText+= ' O'
                }
            }
            e.target.parentElement.querySelector('input').replaceWith(h1Name);
            imgElement.nextElementSibling.style.display = 'none';
            imgElement.style.display = 'inline';
            e.target.style.display = 'none';
            item.style.display = 'inline';
        })

    })
})

function changeName(playerName) {
    let inputName = document.createElement('input');
    inputName.style.cssText = `
        width: 90%;
        font-size: 1.9em;
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 1.5em
    `
    playerName.replaceWith(inputName);
}

function changeAvatar (img) {
    let avatarList = img.nextElementSibling;
    img.style.display = 'none';
    avatarList.style.display = 'flex';
    chooseAvatar(img, avatarList);
}

function chooseAvatar(img, avatarList) {
    avatarList.parentElement.addEventListener('click', (e) => {
        if (e.target.matches('li')){
            avatarList.querySelectorAll('li').forEach(item=>item.classList.remove('chosen'));
            e.target.classList.add('chosen');
            let imgSrc = e.target.querySelector('img').getAttribute('src');
            img.setAttribute('src', imgSrc)
        }
    })
}

// let currentUser = 'X'
// let iterator = 0;
// let table = document.querySelector('table');

// let firstColumn = Array.from(table.querySelectorAll('td[data-position="0"]')),
//     secondColumn = Array.from(table.querySelectorAll('td[data-position="1"]')),
//     thirdColumn = Array.from(table.querySelectorAll('td[data-position="2"]')),
//     firstRow = Array.from(table.querySelectorAll('tr')[0].children),
//     secondRow = Array.from(table.querySelectorAll('tr')[1].children),
//     thirdRow = Array.from(table.querySelectorAll('tr')[2].children),
//     mainDia = [table.querySelectorAll('tr')[0].querySelectorAll('td')[0], table.querySelectorAll('tr')[1].querySelectorAll('td')[1],table.querySelectorAll('tr')[2].querySelectorAll('td')[2]],
//     notMainDia = [table.querySelectorAll('tr')[2].querySelectorAll('td')[0], table.querySelectorAll('tr')[1].querySelectorAll('td')[1],table.querySelectorAll('tr')[0].querySelectorAll('td')[2]];

// table.addEventListener('click', (e) => {
//     pointingArea(e.target);
//     checkingAreas();
//     changeUser();
// })

// function changeUser () {
//     if (currentUser === 'X') currentUser = 'O'
//     else currentUser = 'X'
// }

// function pointingArea (target) {
//     if (target.matches('td') && target.innerText === '') {
//         target.innerText = currentUser
//         iterator++
//         console.log(iterator)
//     }
// }

// function checkingAreas () {
//     if (firstColumn.every((item)=> item.innerText === 'X') ||
//         secondColumn.every((item)=> item.innerText === 'X') ||
//         thirdColumn.every((item)=> item.innerText === 'X') ||
//         firstRow.every((item)=> item.innerText === 'X') ||
//         secondRow.every((item)=> item.innerText === 'X') ||
//         thirdRow.every((item)=> item.innerText === 'X') ||
//         mainDia.every((item)=> item.innerText === 'X') ||
//         notMainDia.every((item)=> item.innerText === 'X')) endingGame(`X`)
//     else if (firstColumn.every((item)=> item.innerText === 'O') ||
//             secondColumn.every((item)=> item.innerText === 'O') ||
//             thirdColumn.every((item)=> item.innerText === 'O') ||
//             firstRow.every((item)=> item.innerText === 'O') ||
//             secondRow.every((item)=> item.innerText === 'O') ||
//             thirdRow.every((item)=> item.innerText === 'O') ||
//             mainDia.every((item)=> item.innerText === 'O') ||
//             notMainDia.every((item)=> item.innerText === 'O')) endingGame(`O`)
//     else if (iterator === 9) endingGame("Nobody");
// }

// function endingGame(player) {
//     document.querySelector('.whoWon').innerHTML = `${player} wins`
//     bluring();
// }

// function bluring() {
//     let blur = document.createElement('div');
//     blur.classList.add ('blur');

//     let tableCoors = table.getBoundingClientRect();
//     tableCoors.width = table.offsetWidth;
//     tableCoors.height = table.offsetHeight;
//     console.log(tableCoors);

//     blur.style.cssText = `
//         left: ${tableCoors.left}px;
//         top: ${tableCoors.top}px;
//         right: ${tableCoors.right}px;
//         bottom: ${tableCoors.bottom}px;
//         width: ${tableCoors.width}px;
//         height: ${tableCoors.height}px;
//         position: absolute;
//         background-color: rgba(0,0,0,0.05);
//         z-index:2;
//     `
//     document.body.append(blur);

//     let button = document.createElement('div');
//     button.classList.add('restart');
//     button.innerHTML = 'Start NEW game'
//     document.body.append(button);
//     button.addEventListener('click', () => {
//         table.querySelectorAll('td').forEach(item => item.textContent = '')
//         document.querySelector('.blur').remove();
//         button.remove();
//         document.querySelector('.whoWon').innerHTML = ``
//         iterator = 0;
//         currentUser = 'X'
//     })
// }