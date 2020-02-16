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

class ProjectSummary extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    this.props.handleProjectSummaryReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Projects Summary`}</Text>
        </Box>
        <Box border="all" fill align="center" >
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.continue}
            >
              <Box border="all" background="light-2" align="center" >
                <Text size="medium" weight="bold">{`Project #1`}</Text>
              </Box>
              <FormField
                label="Title"
                name="proj1Title"
              >
                <TextInput
                  name="proj1Title"
                  value={values.proj1Title}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </FormField >
              <FormField
                label="Link"
                name="proj1Link"
              >
                <TextInput
                  name="proj1Link"
                  value={values.proj1Link}
                  onChange={handleChange}
                />
              </FormField >

              <FormField
                label="Description"
                name="proj1Desc"
              >
                <TextArea
                  name="proj1Desc"
                  value={values.proj1Desc}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Duration"
                name="pro1Duration"
              >
                <TextInput
                  name="pro1Duration"
                  value={values.pro1Duration}
                  onChange={handleChange}
                  required
                />
              </FormField >

              <Box border="all" background="light-2" align="center" >
                <Text size="medium" weight="bold">{`Project #2`}</Text>
              </Box>
              <FormField
                label="Title"
                name="proj2Title"
              >
                <TextInput
                  name="proj2Title"
                  value={values.proj2Title}
                  onChange={handleChange}
                />
              </FormField >
              <FormField
                label="Link"
                name="proj2Link"
              >
                <TextInput
                  name="proj2Link"
                  value={values.proj2Link}
                  onChange={handleChange}
                />
              </FormField >

              <FormField
                label="Description"
                name="proj2Desc"
              >
                <TextArea
                  name="proj2Desc"
                  value={values.proj2Desc}
                  onChange={handleChange}
                />
              </FormField >
              <FormField
                label="Duration"
                name="pro2Duration"
              >
                <TextInput
                  name="pro2Duration"
                  value={values.pro2Duration}
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

export default ProjectSummary;
