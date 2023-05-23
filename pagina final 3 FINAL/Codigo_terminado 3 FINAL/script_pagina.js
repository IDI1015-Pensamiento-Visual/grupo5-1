$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();
    //$('.estrella1').hide();
    //$('.estrella2').hide();
    //$('.estrella3').hide();

    //Moverme entre Tabs
    $('ul.tabs li a').click(function(){
            $('ul.tabs li a').removeClass('active');
            $(this).addClass('active');
            $('.secciones article').hide();

            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
           
            
    });

    //Esconder y mostrar puntos

    //Las siguientes 6 funciones se encargan de ocultar y mostrar los puntos y triangulos segun su categoria correspondiente
// Botón Entretenimiento
var boton1 = document.getElementById('entretenimiento');
boton1.addEventListener('click', fun1);
function fun1() {
  //selecciono todos los puntos y lineas
  var puntos = document.querySelectorAll('.punto');
  var lineas=document.querySelectorAll('.lineas');
  //itero sobre ambas listas y las oculto o muestro segun corresponda (chatgpt me ayudo con el comando para mostrarlas y ocultarlas)
  lineas.forEach(function(linea){
    if (linea.classList.contains('Entertainment')) {
      linea.style.display = 'block';
    } else {
      linea.style.display = 'none';
    }

  });


  puntos.forEach(function(punto) {
    if (punto.classList.contains('Entertainment')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }

    
  });


  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.classList.remove('active-button');
  });

  // Aplicar el estilo al botón actual
  boton1.classList.add('active-button');
}

// Botón Música
var boton2 = document.getElementById('musica');
boton2.addEventListener('click', fun2);
function fun2() {
  var puntos = document.querySelectorAll('.punto');
  var lineas=document.querySelectorAll('.lineas');
  lineas.forEach(function(linea){
    if (linea.classList.contains('Music')) {
      linea.style.display = 'block';
    } else {
      linea.style.display = 'none';
    }

  });
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Music')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.classList.remove('active-button');
  });

  // Aplicar el estilo al botón actual
  boton2.classList.add('active-button');
}

// Botón Cine
var boton3 = document.getElementById('cine');
boton3.addEventListener('click', fun3);
function fun3() {
  var puntos = document.querySelectorAll('.punto');
  var lineas=document.querySelectorAll('.lineas');
  lineas.forEach(function(linea){
    if (linea.classList.contains('Cinema')) {
      linea.style.display = 'block';
    } else {
      linea.style.display = 'none';
    }

  });
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Cinema')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.classList.remove('active-button');
  });

  // Aplicar el estilo al botón actual
  boton3.classList.add('active-button');
}

// Botón Fitness
var boton4 = document.getElementById('fitness');
boton4.addEventListener('click', fun4);
function fun4() {
  var puntos = document.querySelectorAll('.punto');
  var lineas=document.querySelectorAll('.lineas');
  lineas.forEach(function(linea){
    if (linea.classList.contains('Health,')) {
      linea.style.display = 'block';
    } else {
      linea.style.display = 'none';
    }

  });
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Health,')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.classList.remove('active-button');
  });

  // Aplicar el estilo al botón actual
  boton4.classList.add('active-button');
}

// Botón Ciencia
var boton5 = document.getElementById('ciencia');
boton5.addEventListener('click', fun5);
function fun5() {
  var puntos = document.querySelectorAll('.punto');
  var lineas=document.querySelectorAll('.lineas');
  lineas.forEach(function(linea){
    if (linea.classList.contains('Science')) {
      linea.style.display = 'block';
    } else {
      linea.style.display = 'none';
    }

  });
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Science')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.classList.remove('active-button');
  });

  // Aplicar el estilo al botón actual
  boton5.classList.add('active-button');
  

}

// Botón Belleza
var boton6 = document.getElementById('belleza');
boton6.addEventListener('click', fun6);
function fun6() {
    var puntos = document.querySelectorAll('.punto');
    var lineas=document.querySelectorAll('.lineas');
  lineas.forEach(function(linea){
    if (linea.classList.contains('Fashion')) {
      linea.style.display = 'block';
    } else {
      linea.style.display = 'none';
    }

  });
    puntos.forEach(function(punto) {
        if (punto.classList.contains('Fashion')) {
            punto.style.display = 'block';
        } else {
            punto.style.display = 'none';
        }
    });
    // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('button');
  botones.forEach(function(boton) {
    boton.classList.remove('active-button');
  });

  // Aplicar el estilo al botón actual
  boton6.classList.add('active-button');
}
    ///Mostrar diferenci




    //Trabajar archivo Esto me lo dio ChatGpt
    // Resto de tu código...

  // Trabajar archivo Esto me lo dio ChatGpt
  fetch('datos_xml_final.xml')
  .then(response => response.text())
  .then(data => {
    // Aquí puedes procesar los datos XML

    // Puedes utilizar el objeto 'data' para parsear el XML y trabajar con él
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(data, 'text/xml');

    // Trabajar con los datos del archivo y crear lista con todos los perfiles
    //Esta funcion se utilizo para crear los puntos de forma dinamica en conjutno con la base de datos, actualmente no hace nada, ya que luego de crearlos con sus categorias correspondientes, colores y anadirlos al div contenedor, se ajusto manualmente su posicion en el html

    var perfiles = [];
    var cuentas = xmlDoc.getElementsByTagName('cuentas');
    for (var i = 0; i < cuentas.length; i++) {
      var cuenta = cuentas[i].getElementsByTagName('cuenta')[0].textContent;
      var categoria = cuentas[i].getElementsByTagName('categoria')[0].textContent;
      var seguidores = cuentas[i].getElementsByTagName('seguidores')[0].textContent;
      var visualseguidores = cuentas[i].getElementsByTagName('visualseguidores')[0].textContent;
      var decimales = cuentas[i].getElementsByTagName('decimales')[0].textContent;
      var audience = cuentas[i].getElementsByTagName('audience')[0].textContent;
      var rank = cuentas[i].getElementsByTagName('rank')[0].textContent;
      var pais = cuentas[i].getElementsByTagName('pais')[0].textContent;
      var engagement = cuentas[i].getElementsByTagName('engagement')[0].textContent;
      var temporal = {};

      temporal.cuenta = cuenta;
      temporal.categoria = categoria;
      temporal.seguidores = seguidores;
      temporal.visualseguidores = visualseguidores;
      temporal.decimales = decimales;
      temporal.audience = audience;
      temporal.rank = rank;
      temporal.pais = pais;
      temporal.engagement = engagement;
      perfiles.push(temporal);
    }
    //----------------------------CREO PUNTOS--------------------------------------------------------------------///
    var contenedor=document.getElementById('mapa');
    for(var i=0; i<perfiles.length;i++){
        var perfil=perfiles[i];              

        var decimales = perfil.decimales;
        var punto1=document.createElement('div');
        var origen=obtenerCoordenadas(perfil.pais);
        var destino=obtenerCoordenadas(perfil.audience);
        //En caso de que pais origen y el de audiencia sean iguales
        if (perfil.pais==perfil.audience){            

            // Condición 1: Menor o igual a 270
            if (decimales <= 270) {
                punto1.className='estrella1 punto '+perfil.categoria;
                punto1.style.top=(origen.top-5)+"px";
                punto1.style.left=(origen.left+90)+'px';
                punto1.style.position='absolute';

                
            // Condición 2: Entre 270 y 360

            } else if (decimales > 270 && decimales < 360) {
                punto1.className='estrella2 punto '+perfil.categoria;
                punto1.style.top=(origen.top-5)+"px";
                punto1.style.left=(origen.left+90)+'px';
                punto1.style.position='absolute';

            // Condición 3: Mayor o igual a 36
            } else {
                punto1.className='estrella3 punto '+perfil.categoria;
                punto1.style.top=(origen.top-5)+"px";
                punto1.style.left=(origen.left+90)+'px';
                punto1.style.position='absolute';
              }

            

        //---------------EN CASO DE QUE ORIGEN != DESTINO-------------------//
        } else{
            //-------------------EN CASO DE QUE ORIGEN SEA DISTINTO A DESTINO------------------------------//
            // Condición 1: Menor o igual a 270
            if (decimales <= 270) {
                
                punto1.className=perfil.categoria+' low punto';
                punto1.style.top=(origen.top-5)+"px";
                punto1.style.left=(origen.left+90)+'px';
                punto1.style.position='absolute';
                var color='low';
                
            // Condición 2: Entre 270 y 360

            } else if (decimales > 270 && decimales < 360) {
                punto1.className=perfil.categoria+' mid punto';
                punto1.style.top=(origen.top-5)+"px";
                punto1.style.left=(origen.left+90)+'px';
                punto1.style.position='absolute';
                var color='mid';
                
            
            // Condición 3: Mayor o igual a 36
            } else {
                punto1.className=perfil.categoria+' top punto';
                punto1.style.top=(origen.top-5)+"px";
                punto1.style.left=(origen.left+90)+'px';
                punto1.style.position='absolute';
                var color='top';
              };
            
            //-------------------------------AHORA CREO LA CURVA--------------------------------------------//
            
            console.log('origen '+origen.top+","+origen.left+" destino "+destino.top+","+destino.left+" color "+color)


        


        }

        

    };    
      
    });


    //Esta fucnion se encarga de dibujar las curvas que salen de los puntos
    //Chat gpt creo el codigo asociado a las animaciones de cada linea
    function createCurve(punto1, punto2, color, categoria) {
  var canvas = document.createElement('canvas');
  canvas.width = 1490;
  canvas.height = 690;
  canvas.className = categoria + " lineas";

  var ctx = canvas.getContext("2d");

  var left1 = punto1.left;
  var top1 = punto1.top;

  var left2 = punto2.left;
  var top2 = punto2.top;

  var cleft = (punto1.left + punto2.left) / 2;
  var ctop = punto1.top + 100;
      //esta es la funcion encargada de animar las lineas
  var distance = Math.sqrt(Math.pow(left2 - left1, 2) + Math.pow(top2 - top1, 2));
  var animationSpeed = 2; // Ajusta la velocidad de aparición gradual (puedes cambiar este valor)
  var lineDashOffset = 30;
  var step = distance;
  var repeatInterval = null;
  var delayInterval = 0; // Intervalo de tiempo entre iteraciones en milisegundos
      //dibuja las lineas de forma de una parabola cuadratica creando un punto medio llamado cleft y ctop
  function drawLine() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([lineDashOffset, distance]);
    ctx.lineDashOffset = step;
    ctx.beginPath();
    ctx.moveTo(left1, top1);
    ctx.quadraticCurveTo(cleft, ctop, left2, top2);
    ctx.lineWidth = 3;
    //define el color de la curva segun el rango de seguidores del perfil asociado a la curva
    if (color == 'low') {
      ctx.strokeStyle = "#3A86FF";
    } else if (color == 'mid') {
      ctx.strokeStyle = "#8338ec";
    } else if (color == 'top') {
      ctx.strokeStyle = "#F40579";
    }

    ctx.lineCap = 'round';
    ctx.stroke();

    if (step > 0) {
      step -= animationSpeed;
    } else {
      clearInterval(repeatInterval); // Detener el intervalo de repetición
      repeatInterval = null;
      step = distance;
      setTimeout(startAnimation, delayInterval); // Esperar el intervalo de tiempo antes de iniciar una nueva animación
    }
  }

  function startAnimation() {
    if (!repeatInterval) {
      repeatInterval = setInterval(drawLine, 20); // Repetir la animación cada 20ms
    }
  }

  startAnimation();

  lineas.appendChild(canvas);
}

    
    
    

function getColor(color) {
  switch (color) {
    case "low":
      return "#3A86FF";
    case "mid":
      return "#8338ec";
    case "top":
      return "#F40579";
    default:
      return "black";
  }
}


//funcion que se encarga de obtener las coordenadas de cada pais, estas coordenadas se obtuvieron manualmente
function obtenerCoordenadas(pais) {
  var coordenadas = {
    "england": { "top": 293, "left": 620 },
    "france": { "top": 325, "left": 640 },
    "argentina": { "top": 590, "left": 455 },
    "spain": { "top": 345, "left": 625 },
    "trinidad": { "top": 345, "left": 625 },
    "brazil": { "top": 510, "left": 480 },
    "portugal": { "top": 345, "left": 607 },
    "colombia": { "top": 462, "left": 410 },
    "cambodia": { "top": 423, "left": 1040 },
    "india": { "top": 410, "left": 875 },
    "mexico": { "top": 400, "left": 340 },
    "usa": { "top": 332, "left": 358 },
    "canada": { "top": 245, "left": 360 },
    "israel": { "top": 380, "left": 733 },
    "senegal": { "top": 430, "left": 595 },
    "iran": { "top": 365, "left": 798 },
    "thailand": { "top": 422, "left": 943 },
    "indonesia": { "top": 490, "left": 985 },
    "barbados": { "top": 425, "left": 454 }
  };
  //obtiene las coordenadas fijadas del pais si es que este se encuentra en la lista
  if (pais in coordenadas) {
    return coordenadas[pais];
  } else {
    return null;
  }
}


//CREO LAS CURVAS DE CADA PUNTO DE FORMA MANUAL
//instagram
  createCurve({ left: 410, top: 200 },{ left: 950, top: 290},"top","Entertainment");

  //la roca//
  createCurve({ left: 440, top: 230 },{ left: 950, top: 290},"mid","Cinema");


  //katyperry
  createCurve({ left: 435, top: 260 },{ left: 550, top: 400},"low","Music");

  //vindiesel
  createCurve({ left: 470, top: 240 },{ left: 550, top: 400},"low","Cinema");

  //nasa
  createCurve({ left: 490, top: 220 },{ left: 950, top: 290},"low","Science");




  //justin
  createCurve({ left: 420, top: 115 },{ left: 950, top: 290},"low","Music");

  //shawn
  createCurve({ left: 440, top: 130 },{ left: 550, top: 400},"low","Music");




  //emmawatson
  createCurve({ left: 712, top: 210 },{ left: 410, top: 220},"low","Cinema");

  //championsleaguee
  createCurve({ left: 728, top: 210 },{ left: 550, top: 400},"low","Health,");





  //nicki
  createCurve({ left: 708, top: 243 },{ left: 410, top: 220},"low","Music");

  //barca
  createCurve({ left: 712, top: 235 },{ left: 1048, top: 316},"low","Health,");



  //cristiano
  createCurve({ left: 690, top: 235 },{ left: 950, top: 290},"top","Health,");


  //dua lipa
  createCurve({ left: 698, top: 180 },{ left: 420, top: 290},"low","Music");


  //gal gadot
  createCurve({ left: 810, top: 265 },{ left: 410, top: 220},"low","Cinema");

  //lalalisa
  createCurve({ left: 1025, top: 310},{ left: 1048, top: 316},"low","Music");

  //shakira
  createCurve({ left: 490, top: 350},{ left: 950, top: 290},"low","Music");

  //beckham
  createCurve({ left: 704, top: 180 },{ left: 950, top: 290},"low","Health,");

  //khalby
  createCurve({ left: 680, top: 318},{ left: 882, top: 265 },"low","Entertainment");



//INICIO//
  gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray("img");

gsap.utils.toArray("section").forEach((section, index) => {
  const w = section.querySelector(".images");
  const [x, xEnd] = [w.scrollWidth * -1, 0];
  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1,
      },
    }
  );
});


// imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);

    });


    // nuestras caras uwuuuuu



    var imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(function(container) {
      var fadeImage = container.querySelector('.fade-image');
      var textOverlay = container.querySelector('.text-overlay');
    
      container.addEventListener('click', function() {
        if (fadeImage.style.opacity === '0.5') {
          fadeImage.style.opacity = 1;
          textOverlay.style.opacity = 0;
        } else {
          fadeImage.style.opacity = 0.5;
          textOverlay.style.opacity = 1;
          container.style.borderColor = 'gray'
        }
      });
    });

    // cajita xd
    
    const faq = document.querySelector('.faq') //Se selecciona el primer elemento que tiene la clase "faq" en el documento HTML y se guarda en la variable faq.
    faq.addEventListener('click', event => { //Se agrega un evento de escucha al elemento faq que espera a que se haga clic en él. Cuando se produce el clic, se ejecuta la función de flecha proporcionada.
      const question = event.target.closest('.faq__question') //Dentro de la función de flecha, se selecciona el elemento más cercano con la clase "faq__question" que es un descendiente del elemento en el que se hizo clic. Se guarda en la variable question.
      if (!question) return //Si no se encontró ningún elemento con la clase "faq__question" dentro de los descendientes del elemento en el que se hizo clic, se sale de la función.
      const answer = question.nextElementSibling //Se selecciona el siguiente hermano del elemento question y se guarda en la variable answer. Se asume que este siguiente hermano es la respuesta correspondiente a la pregunta.
      
      // hide previously opened answer and show the clicked answer
      const currentAnswer = faq.querySelector('.faq__answer[aria-hidden="false"]') //Se selecciona el elemento dentro del elemento faq que tiene la clase "faq__answer" y el atributo aria-hidden establecido en "false". Esto busca la respuesta actualmente abierta.
      if (currentAnswer === answer) { //Si la respuesta actualmente abierta (currentAnswer) es igual a la respuesta a la que se hizo clic (answer), se ejecuta el bloque de código dentro de este condicional.
        // close the already open answer
        answer.setAttribute('aria-hidden', 'true') //Se establece el atributo aria-hidden de la respuesta a "true", lo que oculta la respuesta.
        answer.parentNode.classList.remove('faq__item--expanded') //Se elimina la clase "faq__item--expanded" del elemento padre de la respuesta. Esta clase se usa para indicar que el elemento está expandido o desplegado.
        question.setAttribute('aria-expanded', 'false') //Se establece el atributo aria-expanded de la pregunta a "false", lo que indica que la pregunta no está expandida.
      } else { //En caso contrario (si currentAnswer no es igual a answer), se ejecuta el bloque de código dentro de este otro condicional.
        // hide previously open answer and show the clicked answer
        if (currentAnswer) { //Si hay una respuesta actualmente abierta (currentAnswer), se ejecuta el bloque de código dentro de este condicional. Esto significa que hay una respuesta diferente abierta y se debe cerrar antes de mostrar la respuesta a la que se hizo clic.
          currentAnswer.setAttribute('aria-hidden', 'true') //Se establece el atributo aria-hidden de la respuesta actualmente abierta a "true", ocultándola.
          currentAnswer.parentNode.classList.remove('faq__item--expanded') //Se elimina la clase "faq__item--expanded" del elemento padre de la respuesta actualmente abierta.
          currentAnswer.previousElementSibling.setAttribute(
            'aria-expanded',
            'false'
          )//Se establece el atributo `aria
        }
        answer.setAttribute('aria-hidden', 'false')
        answer.parentNode.classList.add('faq__item--expanded')
        question.setAttribute('aria-expanded', 'true')
      }
    })



  
             
