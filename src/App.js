import React, { Component } from 'react';
import { getUnsubscribedTrailer } from './services/youtubeVideosServices';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unsubscribedTrailer: ''
    };
  }

  componentDidMount = async () => {
    const response = await getUnsubscribedTrailer();
    this.setState({
      unsubscribedTrailer: response.data.items[0].brandingSettings.channel.unsubscribedTrailer
    });
  };

  render() {
    const { unsubscribedTrailer } = this.state;
    return (
      <div>
        <iframe
          title="VevoTrailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${unsubscribedTrailer}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default App;
