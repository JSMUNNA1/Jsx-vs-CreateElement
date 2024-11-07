import style from '../StyleModule/Nav.module.css';
import { createElement } from 'react';


export default function Nav(){
                  const arrOfLi=[]
                  arrOfLi.push(createElement('li',null,createElement('a',{href:'www.google.com'},'Link')))
                  arrOfLi.push(createElement('li',null,createElement('a',{href:'www.google.com'},'Link')))
                  arrOfLi.push(createElement('li',null,createElement('a',{href:'www.google.com'},'Link')))
                  arrOfLi.push(createElement('li',null,createElement('a',{href:'www.google.com'},'Link')))
        
                  return createElement('div',{className:`${style.nav}`},arrOfLi
            
              
            
          )
}