cuadro_uno = document.querySelector('#color_1');
cuadro_dos = document.querySelector('#color_2');
cuadro_tres = document.querySelector('#color_3');
cuadro_cuatro = document.querySelector('#color_4');

cuadro_uno.style.width = '200px'
cuadro_uno.style.height = '200px'
cuadro_uno.style.backgroundColor= 'blue'


cuadro_dos.style.width = '200px'
cuadro_dos.style.height = '200px'
cuadro_dos.style.backgroundColor= 'red'


cuadro_tres.style.width = '200px'
cuadro_tres.style.height = '200px'
cuadro_tres.style.backgroundColor= 'green'


cuadro_cuatro.style.width = '200px'
cuadro_cuatro.style.height = '200px'
cuadro_cuatro.style.backgroundColor= 'yellow'

cuadro_uno.addEventListener ("click",function (){
    cuadro_uno.style.backgroundColor = 'black'
    });

    cuadro_dos.addEventListener ("click",function (){
        cuadro_dos.style.backgroundColor = 'black'
        });

        cuadro_tres.addEventListener ("click",function (){
            cuadro_tres.style.backgroundColor = 'black'
            });

cuadro_cuatro.addEventListener ("click",function (){
cuadro_cuatro.style.backgroundColor = 'black'
});
