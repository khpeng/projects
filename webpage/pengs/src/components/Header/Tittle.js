import React from "react";

export default class Nav extends React.Component {

  constructor() {
      super()
      this.state = {
        collapsed: true,
      };
    }

render () {
  return (
    <nav>
      <button> Home </button>
      <button> Github </button>
      <button> Resume </button>
      <button> Project </button>
    </nav>
  );
}
}
