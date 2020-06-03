/* FORMULARIO DE INICIO */
const name = document.getElementById('name')
const age = document.getElementById('age')
const sex = document.getElementById('sex')
const type = document.getElementById('type')

/* CONTENIDO DEL USUARIO */
const form = document.getElementById('form');
const userName = document.getElementById('name-text')
const userType = document.getElementById('type-text')
const userSex = document.getElementById('sex-text')

/* CONTENIDO DE LA HISTORIA */
const historyImg = document.getElementById('history-img')
const title = document.getElementById('title')
const text = document.getElementById('text')
const time = document.getElementById('time')

/* HTML DE LAS IMAGENES */
const dado1 = document.getElementById('dado1')
const dado2 = document.getElementById('dado2')

/* RECOGER INFORMACION DEL FORMULARIO */
const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', (e) => {
    userName.innerText = name.value || 'Rndom Name';
    userType.innerText = type.value;
    userSex.innerText  = sex.value;
    form.style.display = 'none';
})

/* BOTON DE TIRAR LOS DADOS */
let isFinised = false;
const goBtn = document.getElementById('go-btn')
goBtn.addEventListener('click', () => {
    isFinised ? reset() : tirar();
})

const reset = () => {
    actualSituation = 0;
    isFinised = false;
    infoContent.style.display = 'none';
    goBtn.innerText = 'Go'
    historyImg.src = 'iniciacion-top.jpg'
    time.innerText = '100';
}

/* CERRAR CONTENIDO DE LA HISTORIA */
const infoContent = document.getElementById('info-content')
const infoBtn = document.getElementById('info-btn')
infoBtn.addEventListener('click', () => {
    infoContent.style.display = 'none';
})

/* NUMERO RANDON ENTRE DOS  */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


let actualSituation = 0;
const getSituation = (dado) => {
    switch (actualSituation) {
        case 0:
            dado >= 6 ? printSituation(situacionesPrincipales, 1) : printSituation(situacionesPrincipales, 0)
            dado >= 6 ? isOnCurse = true : isOnCurse = false;
        break;
        case 1: 
            isOnCurse ? dado >= 6 ? printSituation(situacionesDentro, 0) : printSituation(situacionesDentro, 1) : dado >= 6 ? printSituation(situacionesFuera, 0) : printSituation(situacionesFuera, 1)
            isFinised = true;
            goBtn.innerText = 'Reset';
        break;
    }
    infoContent.style.display = 'flex';
}


const printSituation = (situaciones, situation) => {
    title.innerText = situaciones[situation].title
    text.innerText  = situaciones[situation].text
    historyImg.src = situaciones[situation].img
    time.innerText = parseInt(time.innerText) + situaciones[situation].time
}

const situacionesPrincipales = [
    {
        title: 'No entras en el curso de Angular 9',
        text: 
        `No llegas a entrar en el curso de angular 9, contestas mal en el test basico la pregunta de block e inline por que esto solo lo sabe Fernando.`,
        img: 'directivas-de-angular-programación.jpg',
        time: 100
    },
    {
        title: 'Entras en el curso de Angular 9',
        text: 
        `Entras en el curso de Angular 9, por que buscas la pregunta de block e inline en wikipedia y aunque no lo entendiste, fue imaginativo y a los profes les gusto.`,
        img: 'directivas-de-angular-programación.jpg',
        time: -1000
    }
]

const situacionesFuera = [
    {
        title: 'Intentas buscar trabajo sin el curso de Angular y fracasas',
        text: 
        `No entras en el curso, a si que intentas buscar trabajo por que no tienes nada mejor que hacer, después de intentarlo sin parar, no te cogen en ningún sitio por que en todas las entrevistas dices que html y css son lenguajes de programación.`,
        img: 'nervios_entrevista_destacada.png',
        time: 1000
    },
    {
        title: 'Intentas buscar trabajo sin el curso de Angular y lo haces, felicidades',
        text: 
        `No entras en el curso, a si que intentas buscar trabajo por que no tienes nada mejor que hacer, después de intentarlo sin parar, Squaads te contrata por que aunque el requisito minimo para estar ahí es haber pasado por un curso de la EOI, les gusta tu pensamiento de que al menos css es un lenguaje de programación y te contratan.`,
        img: 'unnamed.jpg',
        time: -1000
    }
]

const situacionesDentro = [
    {
        title: 'Es el segundo día y Fernando te marca replicar una web y hacerla responsive',
        text: 
        `Después de muchos intentos, no te rindes, por que no hay que rendirse, pero dejas de hacerla y lloras.`,
        img: 'producthunt.png',
        time: -1000
    },
    {
        title: 'Es el segundo día y Fernando te marca replicar una web y hacerla responsive',
        text: 
        `Has hecho la web de instagram el primer dÍa estás motivado, esta web no puede ser tan difícil de hacer, lo intentas y lloras.`,
        img: 'producthunt.png',
        time: -1000
    }
]

const dieImages = [
    'dados/dice-six-faces-one_39564.png',
    'dados/dice-six-faces-two_38562.png',
    'dados/dice-six-faces-three_39562.png',
    'dados/dice-six-faces-four_38563.png',
    'dados/dice-six-faces-five_39565.png',
    'dados/dice-six-faces-six_39563.png'
]

let num1, num2;
let count = 0;
const tirar = () => {
    const interval = setInterval(() => {
        num1 = getRandomInt(0, 5)
        num2 = getRandomInt(0, 5)
        dado1.src = dieImages[num1]
        dado2.src = dieImages[num2]
        if (count === 6) {
            count = 0;
            getSituation(num1 + num2)
            actualSituation++;
            clearInterval(interval)
        }
        count++;
    }, 200)
}