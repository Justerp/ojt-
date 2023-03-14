let counter = 0;



function bingo(elem) {
    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'red';
    }
}


function b(elem) {
    var p = document.getElementById("clk");
    p.innerHTML = 'Last Called: ' + 'B - ' + ' ' + elem.innerText;



    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'red';
    }

    if (elem.classList.contains("clicked")) {
        counter--;
        elem.classList.remove("clicked");
    } else {
        counter++;
        elem.classList.add("clicked");
    }
    document.getElementById("count").textContent = counter;

}

function i(elem) {
    var p = document.getElementById("clk");
    p.innerHTML = 'Last Called: ' + 'I - ' + ' ' + elem.innerText;

    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'red';
    }

    if (elem.classList.contains("clicked")) {
        counter--;
        elem.classList.remove("clicked");
    } else {
        counter++;
        elem.classList.add("clicked");
    }
    document.getElementById("count").textContent = counter;
}

function n(elem) {
    var p = document.getElementById("clk");
    p.innerHTML = 'Last Called: ' + 'N - ' + ' ' + elem.innerText;

    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'red';
    }

    if (elem.classList.contains("clicked")) {
        counter--;
        elem.classList.remove("clicked");
    } else {
        counter++;
        elem.classList.add("clicked");
    }
    document.getElementById("count").textContent = counter;
}

function g(elem) {
    var p = document.getElementById("clk");
    p.innerHTML = 'Last Called: ' + 'G - ' + ' ' + elem.innerText;

    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'red';
    }

    if (elem.classList.contains("clicked")) {
        counter--;
        elem.classList.remove("clicked");
    } else {
        counter++;
        elem.classList.add("clicked");
    }
    document.getElementById("count").textContent = counter;
}


function o(elem) {
    var p = document.getElementById("clk");
    p.innerHTML = 'Last Called: ' + 'O - ' + ' ' + elem.innerText;

    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'red';
    }

    if (elem.classList.contains("clicked")) {
        counter--;
        elem.classList.remove("clicked");
    } else {
        counter++;
        elem.classList.add("clicked");
    }
    document.getElementById("count").textContent = counter;
}

