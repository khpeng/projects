import React from 'react';
import Img from 'react-image'
import myImage from "./IMG_0014.jpg"

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume__wrapper">
        <div className="resume__container">
          <div className="resume__main">
            <h1> Shengwei Peng</h1>

            <div className="resume__content">
            <div className="resume__education">
            <h3 > Education: </h3>
             <pre> Indiana University, Bloomington, IN                                                May, 2018</pre>
             <pre> Bachelor of Science in Computer Science</pre>
             <pre> Minor: Cybersecurity</pre>
             <pre> Cumulative GPA: 3.27/4.0</pre>
             </div>
            <h3> Work Experience </h3>

            <h3> Projects </h3>

            <h3> Academic Projects </h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
