import React, {Component}from 'react';


class Content extends Component {
    render(props){
      console.log("Content render")
      return (
      <article>
        <h2>{this.props.Title}</h2>
        {this.props.desc}
      </article>
      );
    }
  }

export default Content;