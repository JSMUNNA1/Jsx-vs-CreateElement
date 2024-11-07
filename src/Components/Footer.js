import React from 'react'
import style from '../StyleModule/Footer.module.css'
export default function Footer(){
  const copyrights=[]
  copyrights.push( React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Copyrights')),)
  copyrights.push( React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Copyrights')),)
  copyrights.push( React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Copyrights')),)
  copyrights.push( React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Copyrights')),)
  const contactus=[];
  contactus.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Contactus')))
  contactus.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Contactus')))
  contactus.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Contactus')))
  contactus.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Contactus')))
  const socialMedias=[]
 socialMedias.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Linkdin')))
 socialMedias.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Linkdin')))
 socialMedias.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Linkdin')))
 socialMedias.push(React.createElement('li', null, React.createElement('a', { href: 'www.google.com' }, 'Linkdin')))
  return  React.createElement(
      'div',
      { className: style.Footer },
      React.createElement(
        'ul',
        null,
       copyrights
      ),
      React.createElement(
        'ul',
        null,
      contactus
      ),
      React.createElement(
        'ul',
        null,
       socialMedias
      )
   
    
  )
}