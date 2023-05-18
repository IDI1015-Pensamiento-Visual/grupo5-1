$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

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

// Botón Entretenimiento
var boton1 = document.getElementById('entretenimiento');
boton1.addEventListener('click', fun1);
function fun1() {
  var puntos = document.querySelectorAll('.punto');
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Entertainment')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('.button');
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
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Music')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('.button');
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
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Cinema')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('.button');
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
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Health,')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });

  // Restablecer el estado de los botones anteriores
  var botones = document.querySelectorAll('.button');
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
  puntos.forEach(function(punto) {
    if (punto.classList.contains('Science')) {
      punto.style.display = 'block';
    } else {
      punto.style.display = 'none';
    }
  });
}

// Botón Belleza
var boton6 = document.getElementById('belleza');
boton6.addEventListener('click', fun6);
function fun6() {
    var puntos = document.querySelectorAll('.punto');
    puntos.forEach(function(punto) {
        if (punto.classList.contains('Fashion')) {
            punto.style.display = 'block';
        } else {
            punto.style.display = 'none';
        }
    });
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
    console.log(perfiles)
    for(var i=0; i<perfiles.length;i++){
        var perfil=perfiles[i];
        
        var origen=document.querySelector('#mapa #' + perfil.pais);
        var coordenadas_origen= origen.getBoundingClientRect();
        
        var destino=document.querySelector('#mapa #' + perfil.audience);
        var coordenadas_destino= destino.getBoundingClientRect();



        console.log(coordenadas_origen)
        //---EN CASO DE QUE PAIS ORIGEN Y DESTINO SEAN IGUALES
        

        var decimales = perfil.decimales;
        if (destino==origen){
            //--------PUNTO DE ORIGEN----------------
            var punto1=document.createElement('div');
            // Condición 1: Menor o igual a 270
            if (decimales <= 270) {
                
                punto1.className='estrella1 punto '+perfil.categoria;
                
            // Condición 2: Entre 270 y 360

            } else if (decimales > 270 && decimales < 360) {
                punto1.className='estrella2 punto '+perfil.categoria;
            
            // Condición 3: Mayor o igual a 36
            } else {
                punto1.className='estrella3 punto '+perfil.categoria;
              }



            var article=document.getElementById('contenedor')
            article.appendChild(punto1)





        //---------------EN CASO DE QUE ORIGEN != DESTINO-------------------//
        } else{
            //--------PUNTO DE ORIGEN----------------
            var punto1=document.createElement('div');
            // Condición 1: Menor o igual a 270
            if (decimales <= 270) {
                
                punto1.className=perfil.categoria+' low punto';
                
            // Condición 2: Entre 270 y 360

            } else if (decimales > 270 && decimales < 360) {
                punto1.className=perfil.categoria+' mid punto';
            
            // Condición 3: Mayor o igual a 36
            } else {
                punto1.className=perfil.categoria+' top punto';
              }



            var article=document.getElementById('contenedor')
            article.appendChild(punto1)


        }
        
    };    
      
    });


function createCurve(point1, point2, color, perfil) {
    const midPoint = { x: (point1.x + point2.x) / 2, y: point1.y + 20 };
  
    const data = [
      point1,
      midPoint,
      point2
    ];
  
    const svg = d3.select("#chart");
    const width = 400;
    const height = 300;
    const margin = 30;
  
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([margin, width - margin]);
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height - margin, margin]);
  
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveCardinal.tension(0.5));
  
    const path = svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .style("stroke", getColor(color))
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "5")
      .attr("d", line);
  
    const totalLength = path.node().getTotalLength();
  
    function repeatAnimation() {
      path.attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .transition()
        .delay(0)
        .duration(700)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", -totalLength)
        .on("end", function () {
          d3.select(this)
            .attr("stroke-dasharray", "5")
            .attr("stroke-dashoffset", totalLength);
          repeatAnimation();
        });
    }
  
    repeatAnimation();
  
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("display", "none");
  
    path.on("mouseover", function () {
      tooltip.html(`Cuenta: ${perfil.cuenta}<br>
                    Seguidores: ${perfil.visualseguidores}<br>
                    Rank: ${perfil.rank}`)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px")
        .style("display", "block");
    });
  
    path.on("mouseout", function () {
      tooltip.style("display", "none");
    });
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
  
  createCurve({ x: 40, y: 1000 }, { x: 250, y: 200 }, "mid", { cuenta: "example", visualseguidores: 1000, rank: 1 });
  createCurve({ x: 40, y: 800 }, { x: 150, y: 200 }, "top", { cuenta: "example", visualseguidores: 1000, rank: 1 });
  createCurve({ x: 140, y: 200 }, { x: 50, y: 200 }, "low", { cuenta: "example", visualseguidores: 1000, rank: 1 });
  

    //-----------------------------------convertir seguidores a color-------------------------------//
        

    
    
    });
    




  
             
