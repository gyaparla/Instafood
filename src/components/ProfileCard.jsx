import { Component } from "react";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      profileInfo: {},
    };
  }

  fetchUserProfile = (userName) => {
    fetch("https://api.github.com/users/" + userName).then((data) =>
      data.json().then((res) => {
        this.setState({
          profileInfo: res,
        });
      })
    );
  };

  componentDidMount() {
    this.fetchUserProfile("gyaparla");
  }
  render() {
    const { name, location } = this.state.profileInfo;
    return (
      <div>
        <h1>Class Component</h1>
        {/* <img src={this.state.profileInfo.avatar_url} alt="" /> */}
        <p>{name}</p>
        <p>{location}</p>
      </div>
    );
  }
}

export default ProfileCard;
