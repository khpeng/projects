import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className = "contact__wrapper" >
        <div className = "contact__container" >
          <div className = "contact__text">
            <pre> Phone: 812-369-7148 </pre>
            <pre> Email: pengs@iu.edu </pre>
          </div>
          <p className = "message anim-typewriter" >
              Shengwei is working on his website...</p>
        </div>
      </div>
    );
  }

}
