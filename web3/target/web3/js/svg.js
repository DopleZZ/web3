"use strict";

const padding = 10;

const color = "green";

const scale = 4;


const intSize = 620;

const gap = Math.floor((intSize-padding*2)/((scale+1)*2));
const markHeight = 5;

const axisXY = Math.floor(intSize/2);

var xForm;
var yForm;
let R = 1;


function drawAxis(R) {
    const svg = document.getElementById("svg");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    rect.setAttribute("points", "0,0 0,620 620,620 620,0");
    rect.setAttribute("stroke", "#000");
    rect.setAttribute("stroke-width", "1");
    rect.setAttribute("fill", "#fff");
    rect.setAttribute("fill-rule", "nonzero");
    svg.appendChild(rect);
    const verticalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    verticalLine.setAttribute("x1", "310");
    verticalLine.setAttribute("y1", "10");
    verticalLine.setAttribute("x2", "310");
    verticalLine.setAttribute("y2", "610");
    verticalLine.setAttribute("stroke", "#000");
    verticalLine.setAttribute("stroke-width", "1");
    svg.appendChild(verticalLine);
    const horizontalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    horizontalLine.setAttribute("x1", "10");
    horizontalLine.setAttribute("y1", "310");
    horizontalLine.setAttribute("x2", "610");
    horizontalLine.setAttribute("y2", "310");
    horizontalLine.setAttribute("stroke", "#000");
    horizontalLine.setAttribute("stroke-width", "1");
    svg.appendChild(horizontalLine);
    const arrowY = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowY.setAttribute("points", "308,20 310,10 312,20");
    arrowY.setAttribute("stroke", "#000");
    arrowY.setAttribute("stroke-width", "1");
    arrowY.setAttribute("fill", "#000");
    svg.appendChild(arrowY);
    const arrowX = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrowX.setAttribute("points", "600,308 610,310 600,312");
    arrowX.setAttribute("stroke", "#000");
    arrowX.setAttribute("stroke-width", "1");
    arrowX.setAttribute("fill", "#000");
    svg.appendChild(arrowX);
    const yLines = [70, 130, 190, 250, 370, 430, 490, 550];
    yLines.forEach(y => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", "310");
        line.setAttribute("y1", y);
        line.setAttribute("x2", "315");
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "#000");
        line.setAttribute("stroke-width", "1");
        svg.appendChild(line);
    });
    const xLines = [70, 130, 190, 250, 370, 430, 490, 550];
    xLines.forEach(x => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x);
        line.setAttribute("y1", "310");
        line.setAttribute("x2", x);
        line.setAttribute("y2", "305");
        line.setAttribute("stroke", "#000");
        line.setAttribute("stroke-width", "1");
        svg.appendChild(line);
    });
    const textY = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textY.setAttribute("x", "320");
    textY.setAttribute("y", "20");
    textY.setAttribute("class", "small");
    textY.textContent = "Y";
    svg.appendChild(textY);
    const textX = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textX.setAttribute("x", "600");
    textX.setAttribute("y", "300");
    textX.setAttribute("class", "small");
    textX.textContent = "X";
    svg.appendChild(textX);
}

function drawCircle(svg, R) {
    R = (R * gap)/2;
    let strokeStyle = "#7FC7FF";
    let fillStyle = "#7FC7FF";
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    let endY = 310 + R;
    let startX = 310 + R;
    var CirclePath = `M ${startX} 310 A ${R} ${R} 0 0 1 310 ${endY} L 310 310 z`
    newElement.setAttribute("d",CirclePath); //Set path's data
    newElement.style.fill = fillStyle;
    newElement.style.stroke = strokeStyle;
    newElement.style.strokeWidth = "1px";
    svg.appendChild(newElement);
}
function drawRectangle(svg, R) {
    R = R * gap;
    let strokeStyle = "#7FC7FF";
    let fillStyle = "#7FC7FF";
    var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    let rHeight = R/2;
    let rWidth = R;
    let startX = 310 - R;
    rect.setAttribute('x', startX);
    rect.setAttribute('y', '310');
    rect.setAttribute('height', rHeight);
    rect.setAttribute('width', rWidth);
    rect.style.fill = fillStyle;
    rect.style.stroke = strokeStyle;
    rect.style.strokeWidth = "1px"; //Set stroke width
    svg.appendChild(rect);
}
function drawTriangle(svg, R) {
    R = R * gap;
    var tri = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    let strokeStyle = "#7FC7FF";
    let fillStyle = "#7FC7FF";
    let endX = 310 - R;
    let endY = 310 - R;
    var triPath = `M 310 310 L ${endX} 310 L 310 ${endY} z`
    tri.setAttribute("d",triPath);
    tri.style.fill = fillStyle;
    tri.style.stroke = strokeStyle;
    tri.style.strokeWidth = "1px";
    svg.appendChild(tri);
}

function DrawCanvas(intSize, R) {
    var ctx  = document.getElementsByTagName('svg')[0];
    drawAxis(ctx, R)
    drawCircle(ctx,R);
    drawRectangle(ctx, R);
    drawTriangle(ctx, R);
    try {
    const table = document.getElementById("fm:table");
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const x = parseFloat(cells[0].textContent.trim());
        const y = parseFloat(cells[1].textContent.trim());
        const r = parseFloat(cells[2].textContent.trim());
        const hit = cells[3].textContent.trim().toLowerCase() === 'true';

        drawDot(axisXY+ x*gap,axisXY-y*gap);
    });} catch {
        console.log("тут пусто");
    }

}

function drawDot(x, y) {
    var svg  = document.getElementsByTagName('svg')[0];
    let fillStyle = "red";
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 5);
    circle.style.fill = fillStyle;
    circle.strokeStyle = fillStyle;
    circle.style.strokeWidth = "1px";
    svg.appendChild(circle);
    console.log("new dot at", x,y);
}

function handleSubmit(){
    setTimeout(() => {
        let xValue = parseFloat(document.getElementById("fm:xValue").textContent);
        let yValue = parseFloat(document.getElementById("fm:yValue").value);
        console.log(xValue, yValue);
        let px = axisXY + xValue * gap;
        let py = axisXY - yValue * gap;
        drawDot(px,py);
    }, 320);
}

function getCursorPosition(ctx, event) {
    let pos = {};
    const rect = ctx.getBoundingClientRect()

    const x = (event.clientX - rect.left);
    const y = (event.clientY - rect.top);

    const roundedX = parseFloat(((x - axisXY)/gap).toFixed(4));
    const roundedY = parseFloat(((y - axisXY)/gap * -1).toFixed(4));


    document.getElementById("fm:xhidden").value = roundedX;
    document.getElementById("fm:yhidden").value = roundedY;
    console.log(document.getElementById("fm:xhidden").value, document.getElementById("fm:yhidden").value);

    document.getElementById("fm:b").click();
    drawLast();

}



function init(){
    DrawCanvas(intSize, R)
    var ctx = document.getElementById("svg");
    ctx.addEventListener('mousedown', function(e) {getCursorPosition(ctx, e)});
}

function drawLast(){
    setTimeout(() => {
        const table = document.getElementById("fm:table");
        const rows = table.querySelectorAll("tbody tr");
        let points = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            const x = parseFloat(cells[0].textContent.trim());
            const y = parseFloat(cells[1].textContent.trim());
            const r = parseFloat(cells[2].textContent.trim());
            const hit = cells[3].textContent.trim().toLowerCase() === 'true';
            points = { x, y, r, hit };
        });
        drawDot(axisXY+ points.x*gap,axisXY-points.y*gap);
        document.getElementById("fm:xhidden").value = -1000;
        document.getElementById("fm:yhidden").value = -1000;

    }, 300);
}

