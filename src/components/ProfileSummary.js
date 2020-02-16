import React, { Component } from 'react'
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  TextArea,
  Text
} from 'grommet';

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

class ProfileSummary extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    this.props.handleProfileSummaryReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Profile Summary`}</Text>
        </Box>
        <Box border="all" fill align="center" >
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.continue}
            >

              <FormField
                name="profileSum"
              >
                <Box
                  width="large"
                  height="small"
                  border={{ color: "brand", size: "xsmall" }}
                >
                  <TextArea fill
                    name="profileSum"
                    size="medium"
                    value={values.profileSum}
                    onChange={handleChange}
                    required
                    autoFocus
                  />

                </Box>
              </FormField >
              <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="button" label="Previous" onClick={this.back} />
                <Button type="reset" label="Reset" />
                <Button type="submit" label="Next" primary />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    )
  }
}

export default ProfileSummary;
