import React, { Component } from 'react'
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  TextInput,
  Text,
  TextArea
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

class AdditionalPersonalInfo extends Component {

  preview = e => {
    e.preventDefault();
    this.props.preview();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    this.props.handleAdditionalPersonalInfoReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Additional Personal Info`}</Text>
        </Box>
        <Box border="all" fill align="center" >
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.preview}
            >
              <FormField
                label="Date Of Birth"
                name="dob"
              >
                <TextInput
                  name="dob"
                  type="date"
                  value={values.dob}
                  onChange={handleChange}
                />
              </FormField>
              <FormField
                label="Language Known"
                name="languages"
              >
                <TextInput
                  name="languages"
                  value={values.languages}
                  onChange={handleChange}
                />
              </FormField>
              <FormField
                label="Address"
                name="address"
              >
                <TextArea fill
                  name="address"
                  size="medium"
                  value={values.address}
                  onChange={handleChange}
                />
              </FormField>
              <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="button" label="Previous" />
                <Button type="reset" label="Reset" />
                <Button type="submit" label="Preview" primary />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    )
  }
}

export default AdditionalPersonalInfo;
