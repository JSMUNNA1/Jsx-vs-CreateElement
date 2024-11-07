 import style from '../StyleModule/Header.module.css'

// export default function Header(){
         

//   return(
//        <>
//           <div className={style.Header}>
//                  <div>
//                  <h1>React Website</h1>
//                  <p>with a <b>Flexibal</b>Layout</p>
//                  </div>
//           </div>
//        </>
//   )
// }
//                     VS
//              these are equaly
import { createElement } from 'react';

export default function Header({ name }) {
  return createElement(
    'div',
    { className: `${style.Header}` },
    createElement('div',null,
      [createElement('h1',null,'React Website'),
        createElement('p',null,`with a ${createElement('b',null,'Flexibal')} Layout`)])
  );
}
