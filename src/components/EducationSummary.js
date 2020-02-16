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

class EducationSummary extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    this.props.handleEducationSummaryReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center">
          <Text size="large" weight="bold">{`Education Summary`}</Text>
        </Box>
        <Box border="all" fill align="center">
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.continue}
            >
              <Box border="all" background="light-2" align="center" >
                <Text size="medium" weight="bold">{`Under-Graduation`}</Text>
              </Box>
              <FormField
                label="Institution Name"
                name="edu1College"
              >
                <TextInput
                  name="edu1College"
                  value={values.edu1College}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Year of Passed Out"
                name="edu1Year"
              >
                <TextInput
                  name="edu1Year"
                  value={values.edu1Year}
                  onChange={handleChange}
                  required
                />
              </FormField >

              <FormField
                label="Qualification"
                name="edu1Qualification"
              >
                <TextInput
                  name="edu1Qualification"
                  value={values.edu1Qualification}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Description"
                name="edu1Desc"
              >
                <TextInput
                  name="edu1Desc"
                  value={values.edu1Desc}
                  onChange={handleChange}
                />
              </FormField >

              <Box border="all" background="light-2" align="center" >
                <Text size="medium" weight="bold">{`Post-Graduation`}</Text>
              </Box>
              <FormField
                label="Institution Name"
                name="edu2College"
              >
                <TextInput
                  name="edu2College"
                  value={values.edu2College}
                  onChange={handleChange}
                />
              </FormField >
              <FormField
                label="Year of Passed Out"
                name="edu2Year"
              >
                <TextInput
                  name="edu2Year"
                  value={values.edu2Year}
                  onChange={handleChange}
                />
              </FormField >

              <FormField
                label="Qualification"
                name="edu2Qualification"
              >
                <TextInput
                  name="edu2Qualification"
                  value={values.edu2Qualification}
                  onChange={handleChange}
                />
              </FormField >
              <FormField
                label="Description"
                name="edu2Desc"
              >
                <TextInput
                  name="edu2Desc"
                  value={values.edu2Desc}
                  onChange={handleChange}
                />
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

export default EducationSummary;
