window.onload = function () {
    const leftTables = document.getElementById("left_tables");
    const cx = 30, cy = 30, r = 30;
    let tableNo = 0;

    leftTables.onclick = function (event) {
        tableNo ++;

        let x = event.pageX;
        let y = event.pageY;

        drawTable(leftTables, x, y, r, cx, cy, "#BAB2B5",tableNo );
    }

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