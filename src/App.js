import React, { Component } from 'react';
import { Box,
  Text,
  Grommet} from 'grommet';
import ProfileForm from './components/ProfileForm';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    responsive
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      profile: {
        name: '',
        email: '',
        mobileNo: '',
        linkedIn: '',
        github: ''

      }
    };
  }

  handleEvent(event) {
    const profile = {...this.state.profile};
    profile[event.target.name] = event.target.value;
    this.setState({profile});
  }

  isSubmitted = false;
  handlePreview() {
    this.isSubmitted = true;
    this.setState({step: -1});
  }

  render() {
    return (
      <Grommet theme={theme}>
        <AppBar justify="center"><Text size="xlarge" weight="bold">{`Grommet Resume Builder`}</Text></AppBar>
        <ProfileForm/>        
      </Grommet>
    );
  }
}

export default App;
