const result = document.getElementById("display");


function showNumber1(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 1;
    else return result.value += '1';
}
function showNumber2(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 2;
    else return result.value += '2';
}
function showNumber3(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 3;
    else return result.value += '3';
}
function showNumber4(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 4;
    else return result.value += '4';
}
function showNumber5(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 5;
    else return result.value += '5';
}
function showNumber6(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 6;
    else return result.value += '6';
}
function showNumber7(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 7;
    else return result.value += '7';
}
function showNumber8(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 8;
    else return result.value += '8';
}
function showNumber9(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return result.value = 9;

    else return result.value += '9';
}
function showNumber0(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return;
    else return result.value += 0;
}
function showNumber00(){
    result.value = result.value.toString();

    if(result.value.length === 1 && result.value.includes('0')) return;

    if (result.value.length === 0) return;
    return result.value += '00';
}
function showDotted(){
    result.value.toString();
    if(result.value.at(-1) === '.') return;
    if(
     (result.value.length === 0)||
     (result.value.at(-1) === '*')||
     (result.value.at(-1) === '/')||
     (result.value.at(-1) === '-')||
     (result.value.at(-1) === '+')) 
     result.value += 0;
     
     return result.value += '.';
}

function showTimes(){
    result.value.toString();
    if(result.value.at(-1) === '*' || result.value.length === 0)
    return;
    else if(
        result.value.at(-1) === '/' ||
        result.value.at(-1) === '-' ||
        result.value.at(-1) === '+') return;
    else
    return result.value += '*';
}
function showDivide(){
    result.value.toString();
    if(result.value.at(-1) === '/' || result.value.length === 0)
    return;
    else if(
        result.value.at(-1) === '*' ||
        result.value.at(-1) === '-' ||
        result.value.at(-1) === '+') return;
    else
    return result.value += '/';
}
function showPlus(){
    result.value.toString();
    if(result.value.at(-1) === '+' || result.value.length === 0)
    return;
    if(
        result.value.at(-1) === '*' ||
        result.value.at(-1) === '-' ||
        result.value.at(-1) === '/') return;
    else
    return result.value += '+';
}
function showMinus(){
    result.value.toString();
    if(result.value.at(-1) === '-' || result.value.length === 0)
    return;
    if(
        result.value.at(-1) === '*' ||
        result.value.at(-1) === '/' ||
        result.value.at(-1) === '+') return;
    else
    return result.value += '-';
}
function showAllClear(){
    return result.value = '';
}
function showDelete(){
    return result.value = result.value.toString().slice(0, -1);
}
function showEqual(){
    result.value = result.value.toString();
    if(result.value.length === 0) return;

    return result.value = eval(result.value);

}










