import { createElement } from 'react'
import profile from '../../images/Profile.png'
import style from '../../StyleModule/MainLeft.module.css'
export default function MainLeft(){


 return createElement('div',{className:`${style.MainLeft}`},createElement('img',{className:`${style.profileImg}`,src:profile}))
}