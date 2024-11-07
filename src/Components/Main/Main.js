import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import style from '../../StyleModule/Main.module.css'
import { createElement } from "react";


export default function Main(){
       const childsMan=[];
        childsMan.push(createElement('div',{className:`${style.leftchild}`},createElement(MainLeft,null)))
        childsMan.push(createElement('div',{className:`${style.rightchild}`},createElement(MainRight,null)))

   
    
       return  createElement('div',{className:`${style.Main}`},childsMan)
    
  
}