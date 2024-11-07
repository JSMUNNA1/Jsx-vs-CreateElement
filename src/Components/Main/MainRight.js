import React from 'react';
import style from '../../StyleModule/RightMain.module.css'
import moon from '../../images/anime-moon-landscape.jpg'
export default function MainRight(){
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        { className: style.mainRight },
        React.createElement(
          'div',
          { className: style.textContainer },
          React.createElement('h1', null, 'Lorem ipsum dolor sit amet.'),
          React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptates.'
          )
        ),
        React.createElement(
          'div',
          { className: style.imgContainer },
          React.createElement('img', {
            src: moon,
            className: style.imgStyle,
            alt: ''
          })
        ),
        React.createElement(
          'div',
          { className: style.textStyle },
          React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium autem, provident quis quidem minus architecto, voluptas, ducimus consequatur eligendi pariatur iure quibusdam quod id rem adipisci optio sit quisquam? Repellendus nobis accusamus autem eveniet reiciendis ex culpa dolor distinctio aperiam? Enim delectus tempora quis aperiam hic sit quisquam, cumque, iure ea possimus ducimus reprehenderit, consequatur nam aliquid beatae asperiores.'
          )
        )
      )
    );
    
}