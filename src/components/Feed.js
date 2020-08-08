import React, { Component } from "react";
import Instagram from "./../lib/Instagram";
import Media from "./Media";

class Feed extends Component {
  static defaultProps = { className: "", fetchFn: Instagram.getFeed };

  constructor(props) {
    super(props);

    this.state = { media: [] };
  }

  componentDidMount() {
    this.props
      .fetchFn(this.props.username)
      .then((media) => this.setState({ media: media }));
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.media.map((media, index) => (
          <Media key={index} src={media.src} url={media.url} alt={media.alt} />
        ))}
      </div>
    );
  }
}

export default Feed;