window.onload = function () {
    let boxWrapper = document.querySelector(".box_wrapper");

    let sit = document.getElementById("left_1_1")
    sit.onclick = function () {
        let person = prompt("Enter guest name", "Dan Brawn")
        sit.textContent = person;
    }

    sit.onmouseover = function () {
        let sitInfo = document.createElement("div");
        sitInfo.setAttribute("class", "sitInfo");
        sitInfo.setAttribute("id", "sitInfo_left_1_1");
        sitInfo.textContent = `sit assigned to ${sit.textContent}`;
        sitInfo.style.backgroundColor = "white";
        boxWrapper.appendChild(sitInfo);
    }

    sit.onmouseout = function () {
        let sitInfo = document.querySelector("#sitInfo_left_1_1");
        boxWrapper.removeChild(sitInfo);
    }

    const dance_floor = document.getElementById("dance_floor");
    const cx = 30, cy = 30, r = 30;
    let tableNo = 0;

    dance_floor.onclick = function (event) {
        tableNo++;

        let x = event.pageX;
        let y = event.pageY;

        drawTable(dance_floor, x, y, r, cx, cy, "#EEE2DC", tableNo);
    }

    function drawTable(canvas, x, y, r, cx, cy, color, tableNo) {
        let newBox = document.createElement("div");
        newBox.setAttribute("class", "circleBox");
        newBox.setAttribute("id", `point_${tableNo}`);
        newBox.style.left = x - cx + "px";
        newBox.style.top = y - cy + "px";
        newBox.innerHTML = `<svg id="circle"> <circle r="${r}" cx="${cx}" cy="${cy}" fill="${color}"/> </svg>`;
        canvas.appendChild(newBox);
    }

}