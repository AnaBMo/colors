/* 
Aquí irá el componente del cuadrado de color.
*/
import { useState, useRef, useEffect } from 'react';

function BoxColor({ color, value }) {

  const [classList, setClassList] = useState('');
  const boxRef = useRef(null);

  const boxStyle = {
    backgroundColor: classList.includes(`box${value}`) ? color : null,
    border: `2px solid ${color}`,
    color: color
  };

  useEffect(() => {
    setClassList(boxRef.current.className)
  }, []);

  return (
    <>
      <div ref={boxRef} className={color === value ? "yes" : "not"} style={boxStyle}>
        <h3 >
          {color === value ? `Yes, I am ${value} color` : `I am not a ${value} color`}
        </h3>
      </div>
    </>
  )
}
export default BoxColor;  