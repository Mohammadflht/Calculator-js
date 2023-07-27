const result = document.getElementById("display");
result.value = result.value.toString();

let historyValue = document.querySelector("#top-display");
historyValue.value = historyValue.value.toString();

document.querySelector("#AC").addEventListener("click", () => {
    result.value = ""
    historyValue.value = "";
    historyValue.style.backgroundColor="transparent";

});
document.querySelector("#DE").addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
    historyValue.value = "";
    historyValue.style.backgroundColor="transparent";
});
document.querySelector("#Dot").addEventListener("click", () => {
    if(result.value.at(-1) === '.') return;
    if(
     (result.value.length === 0)||(result.value.at(-1) === '*')||
     (result.value.at(-1) === '/')||(result.value.at(-1) === '-')||
     (result.value.at(-1) === '+'))
     result.value += 0; return result.value += '.';
});
document.querySelector("#Division").addEventListener("click", () => {
    if(result.value.at(-1) === '/' || result.value.length === 0)
    return;
    else if(
        result.value.at(-1) === '*' ||
        result.value.at(-1) === '-' ||
        result.value.at(-1) === '+') return;
    else
    return result.value += '/';
});
document.querySelector("#Number9").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 9;
    else return result.value += '9';
});
document.querySelector("#Number8").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 8;
    else return result.value += '8';
});
document.querySelector("#Number7").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 7;
    else return result.value += '7';
});
document.querySelector("#Number6").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 6;
    else return result.value += '6';
});
document.querySelector("#Number5").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 5;
    else return result.value += '5';
});
document.querySelector("#Number4").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 4;
    else return result.value += '4';
});
document.querySelector("#Number3").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 3;
    else return result.value += '3';
});
document.querySelector("#Number2").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 2;
    else return result.value += '2';
});
document.querySelector("#Number1").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return result.value = 1;
    else return result.value += '1';
});
document.querySelector("#Number0").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return;
    else return result.value += 0;
});
document.querySelector("#Number00").addEventListener("click", () => {
    if(result.value.length === 1 && result.value.includes('0')) return;
    if (result.value.length === 0) return;
    return result.value += '00';
});
document.querySelector("#Multiplication").addEventListener("click", () => {
    if(result.value.at(-1) === '*' || result.value.length === 0) return;
    else if(
        result.value.at(-1) === '/' ||
        result.value.at(-1) === '-' ||
        result.value.at(-1) === '+') return;
    else
    return result.value += '*';
});
document.querySelector("#Addition").addEventListener("click", () => {
    if(result.value.at(-1) === '+' || result.value.length === 0)
    return;
    if(
        result.value.at(-1) === '*' ||
        result.value.at(-1) === '-' ||
        result.value.at(-1) === '/') return;
    else
    return result.value += '+';
});
document.querySelector("#Subtraction").addEventListener("click", () => {
    if(result.value.at(-1) === '-' || result.value.length === 0)
    return;
    if(
        result.value.at(-1) === '*' ||
        result.value.at(-1) === '/' ||
        result.value.at(-1) === '+') return;
    else
    return result.value += '-';
});
document.querySelector("#Equal").addEventListener("click", () => {
    if(result.value.length === 0) return;
    else historyValue.value = result.value;
    result.value = eval(result.value);
    historyValue.style.backgroundColor="rgb(103, 114, 100)";
});



