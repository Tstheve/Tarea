
/*Crea un componente que tome un arreglo de strings y muestre la
concatenación de todos los elementos. Utiliza una variable de estado
para guardar el arreglo y mostrar el resultado. Stheven*/


import React, {useState} from 'react'
/*Importa el módulo React y la función useState de la biblioteca 'react'. */


function App() {
    /*Define un componente de React llamado App.*/


    var [cadena, setCadena] = useState([]);
    var [cad,setCad] = useState('');
    /*Declara dos variables de estado utilizando el gancho useState de React.
     cadena es una matriz inicializada como una matriz vacía y setCadena es una función
      para actualizar el estado de cadena. cad es una cadena inicializada como una cadena vacía y 
      setCad es una función para actualizar el estado de cad.*/

    var insertar = () =>{
        var cadenNew = [...cadena];
        cadenNew.splice(cadenNew.length,0,cad);
        setCadena(cadenNew);
        setCad('');

        /*Define una función insertar que se ejecutará cuando se haga clic en el botón "Insertar". 
        Esta función crea una copia de la matriz cadena utilizando el operador de propagación (...). 
        Luego, utiliza el método splice para insertar el valor de cad al final de la nueva matriz. 
        Después, actualiza los estados cadena y cad con los nuevos valores.*/
    }
    var concatenacion = cadena.join(' ');
        /*Crea una variable concatenacion que contiene una cadena resultante de concatenar todos
         los elementos de la matriz cadena utilizando el método join con un espacio como separador.*/
    return (
        <div>
            <input type='text' value={cad} onChange={(e) => setCad(e.target.value)}/>
            <button onClick={insertar}>Insertar</button>
            <div>
                <p>{concatenacion}</p>
            </div>
        </div>
    )

    /*Devuelve el JSX (JavaScript XML) que define la estructura del componente. 
    Incluye un campo de entrada de texto que muestra el valor de cad y se actualiza con la función setCad cuando cambia.
     También hay un botón "Insertar" que ejecuta la función insertar cuando se hace clic. Además,
      muestra el resultado de la concatenación en un párrafo.*/
}

export default App;
/*Exporta el componente App como el componente principal de este archivo para poder ser utilizado en otros archivos.*/