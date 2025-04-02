/* 
Aquí crearemos el formulario e importaremos las BoxColor para pasarle props. 
*/

import { useRef, useState } from 'react';
import BoxColor from './BoxColor'

function MyForm() {

  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="escribe un color"
          onChange={() => setValue(inputRef.current.value)}
          value={value}
          ref={inputRef}
        />
        <div className='container'> 
          { colors.map((color, index) => {
            return (<BoxColor key={index} color={color} value={value} />)
          }) } 
        </div>
      </section>
    </>
  );
}

export default MyForm;