import React, { Component } from 'react'
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  TextInput,
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

class PersonalInfo extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  reset = e => {
    this.props.handlePersonalInfoReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Personal Info`}</Text>
        </Box>
        <Box border="all" fill align="center" >
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.continue}
            >
              <FormField
                label="Name"
                name="name"
              >
                <TextInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </FormField>
              <FormField
                label="Email"
                name="email"
              >
                <TextInput
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </FormField>
              <FormField
                label="Mobile No"
                name="mobileNo"
              >
                <TextInput
                  name="mobileNo"
                  value={values.mobileNo}
                  onChange={handleChange}
                  required
                  validate={{ regexp: /^[0-9]/, message: "Only Numbers" }}
                />
              </FormField>
              <FormField
                label="LinkedIn"
                name="linkedIn"
              >
                <TextInput
                  name="linkedIn"
                  value={values.linkedIn}
                  onChange={handleChange}
                />
              </FormField>
              <FormField
                label="Github"
                name="github"
              >
                <TextInput
                  name="github"
                  value={values.github}
                  onChange={handleChange}
                />
              </FormField>
              <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="button" label="Previous" disabled />
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

export default PersonalInfo;
