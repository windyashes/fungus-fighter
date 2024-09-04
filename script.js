// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

function atk(apc, dmg){
    let apTextElement = document.getElementById('ap-text');
    let apMeterElement = document.getElementById('ap-meter');
    let ap = Number(apMeterElement.dataset.value);
    console.log(ap,apc);
    if(apc > ap){
        apMeterElement.dataset.value = '0';
        apTextElement.innerText = '0';
        ap = 0;
    } else {
        ap -= apc;
        apMeterElement.dataset.value = `${ap}`;
        apTextElement.innerText = `${ap}`;
    }
    if(ap == 0){
        let fungus = document.getElementById('fungus');
        fungus.classList.toggle('walk');
        fungus.classList.toggle('jump');
        let buttons = document.getElementsByTagName('button');
        for(let button of buttons){
            button.disabled = true;
        }
        return;
    }

    let hpTextElement = document.getElementById('hp-text');
    let hpMeterElement = document.getElementById('hp-meter');
    let hp = Number(hpMeterElement.dataset.value);
    console.log(hp,dmg);
    if(dmg > hp){
        hpMeterElement.dataset.value = '0';
        hpTextElement.innerText = '0';
        hp = 0;
    } else {
        hp -= dmg;
        hpMeterElement.dataset.value = `${hp}`;
        hpTextElement.innerText = `${hp}`;
    }
    if(hp == 0){
        let fungus = document.getElementById('fungus');
        fungus.classList.toggle('walk');
        fungus.classList.toggle('dead');
    }
}