import React, {
  Component
} from "react";
import {
  Link
} from "react-router-dom";
class Navbar extends Component {
  render() {
    return ( <
      div className = "navbar-fixed" >
      <
      nav >
      <
      div className = "nav-wrapper" >
      <
      a href = "#!"
      className = "brand-logo" > < /a> <
      ul className = "right hide-on-med-and-down" >
      <
      Link to = "/"
      style = {
        {
          fontFamily: "monospace"
        }
      }
      className = "col s5 brand-logo waves-effect waves-lightcenter black-text" > < i className = "material-icons" > code < /i>GMSS</Link >
      <
      /ul> <
      /div> <
      /nav> <
      /div>
    );
  }
}
export default Navbar;