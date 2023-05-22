import React, {useState} from 'react'
function App() {
    var [cadena, setCadena] = useState([it n]);
    var [cad,setCad] = useState('');
    var insertar = () =>{
        var cadenNew = [...cadena];
        cadenNew.splice(cadenNew.length,0,cad);
        setCadena(cadenNew);
        setCad('');
    }
    var concatenacion = cadena.join(' ');

    return (
        <div>
            <input type='text' value={cad} onChange={(e) => setCad(e.target.value)}/>
            <button onClick={insertar}>Insertar</button>
            <div>
                <p>{concatenacion}</p>
            </div>
        </div>
    )
}

export default App;