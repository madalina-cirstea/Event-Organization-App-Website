window.onload = function () {
    let div1 = document.getElementById("item1");
    let div2 = document.getElementById('item2');
    let div3 = document.getElementById('item3');
    let div4 = document.getElementById('item4');

    let th = document.getElementsByTagName("th");
    let maxi = document.getElementById('color1');
    let midi = document.getElementById('color2');
    let mini = document.getElementById('color3');

    maxi.addEventListener('click', function (event) {
        for (let i = 0; i < th.length; i++)
            th[i].style.backgroundColor = window.getComputedStyle(maxi).getPropertyValue('background-color');
    })

    midi.addEventListener('click', function (event) {
        event.stopPropagation();
        for (let i = 0; i < th.length; i++)
            th[i].style.backgroundColor = window.getComputedStyle(midi).getPropertyValue('background-color');
    })

    mini.addEventListener('click', function (event) {
        event.stopPropagation();
        for (let i = 0; i < th.length; i++)
            th[i].style.backgroundColor = window.getComputedStyle(mini).getPropertyValue('background-color');
    })

    div1.onclick = function () {
        let divClass = div1.classList;
        divClass.toggle('selected');
        div1.textContent = Date();
    }

    div2.onclick = function () {
        let divClass = div2.classList;
        divClass.toggle('selected');
        div2.textContent = Date();
    }

    div3.onclick = function () {
        let divClass = div3.classList;
        divClass.toggle('selected');
        div3.textContent = Date();

    }

    div4.onclick = function () {
        let divClass = div4.classList;
        divClass.toggle('selected');
        div4.textContent = Date();
    }

    let btn = document.getElementById('changeColor');

    btn.onclick = function () {
        let divs = document.querySelectorAll(".div-item");
        for (let i = 0; i < divs.length; i++) {
            let divClass = divs[i].classList;
            if (divClass.contains('selected')) {
                divClass.remove('selected');
                divClass.add('newColor');
            }
        }

        setTimeout(function () {
            for (let i = 0; i < divs.length; i++) {
                let divClass = divs[i].classList;
                divClass.toggle('newColor');

            }
        }, 1000);

        setTimeout(function () {
            for (let i = 0; i < divs.length; i++) {
                let divClass = divs[i].classList;
                if (divClass.contains("newColor"))
                    divClass.remove('newColor');

            }
        }, 3000);
    }

}