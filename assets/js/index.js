localStorage.setItem('result', '');
localStorage.setItem('lastNumber', '');
localStorage.setItem('equalsClicked', '');
localStorage.setItem('plusClicked', '');

function numberClick(n) {
    let mainScreen = document.getElementById("mainScreen").value;
    let result = localStorage.getItem('result');
    let equalsClicked = localStorage.getItem('equalsClicked');
    localStorage.setItem('lastNumber', n);

    if (mainScreen == 0 || equalsClicked == 'true') {
        document.getElementById("mainScreen").value = n;
        localStorage.setItem('equalsClicked', '');
        localStorage.setItem('plusClicked', '');
    } else {
        document.getElementById("mainScreen").value = mainScreen + n;
        localStorage.setItem('plusClicked', '');
    }
}

function plusClick() {
    let mainScreen = document.getElementById("mainScreen").value;
    let allNumber = mainScreen.split("+");
    let lastNumber = allNumber[allNumber.length - 1];
    let result = localStorage.getItem('result');
    let plusClicked = localStorage.getItem('plusClicked');

    if (mainScreen == 0 || plusClicked == 'true') {
        alert('Você precisa inserir algum número para somar!');
    } else {
        if (result == '') {
            result = 0 + parseInt(lastNumber);
        } else {
            result = parseInt(result) + parseInt(lastNumber);
        }
        localStorage.setItem('result', result);
        document.getElementById("mainScreen").value = mainScreen + '+';
        localStorage.setItem('equalsClicked', '');
        localStorage.setItem('plusClicked', 'true');
    }
}

function calc(){
    let mainScreen = document.getElementById("mainScreen").value;
    let lastCharacter = mainScreen[mainScreen.length - 1];
    let allNumber = mainScreen.split("+");
    let result = localStorage.getItem('result');

    if(lastCharacter == '+'){
        let showScreen = document.getElementById("mainScreen").value;
        let t = showScreen.substring(0, showScreen.length - 1);
        allNumber = t.split("+");
    }else{
        allNumber = mainScreen.split("+");
    }

    let lastNumber = allNumber[allNumber.length - 1];

    if (result == '') {
        result = 0 + parseInt(lastNumber);
    } else {
        result = parseInt(result) + parseInt(lastNumber);
    }
    localStorage.setItem('result', result);
}

function equalsClick() {
    let mainScreen = document.getElementById("mainScreen").value;
    let lastCharacter = mainScreen[mainScreen.length - 1];
    let allNumber;
    let plusClicked = localStorage.getItem('plusClicked');

    if(plusClicked == 'true'){
        alert('Você precisa inserir um número após o "+".')
    }else{
        if(lastCharacter == '+'){
            let showScreen = document.getElementById("mainScreen").value;
            let t = showScreen.substring(0, showScreen.length - 1);
            allNumber = t.split("+");
        }else{
            allNumber = mainScreen.split("+");
        }

        let lastNumber = allNumber[allNumber.length - 1];

        calc();

        let result = localStorage.getItem('result');

        document.getElementById("mainScreen").value = result;

        localStorage.setItem('result', '');
        localStorage.setItem('equalsClicked', 'true');
    }
}

function clearClick(){
    document.getElementById("mainScreen").value = 0;
}
