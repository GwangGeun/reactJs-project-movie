import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log("hello");
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return <span>null</span>;
    }
  }
}

export default Detail;
