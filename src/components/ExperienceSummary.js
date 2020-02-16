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

class ExperienceSummary extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    this.props.handleExperienceSummaryReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Experience Summary`}</Text>
        </Box>
        <Box border="all" fill align="center" >
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.continue}
            >
              <Box border="all" background="light-2" align="center" >
                <Text size="medium" weight="bold">{`Current Employer`}</Text>
              </Box>
              <FormField
                label="Organization"
                name="exp1Orgn"
              >
                <TextInput
                  name="exp1Orgn"
                  value={values.exp1Orgn}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Position"
                name="exp1Position"
              >
                <TextInput
                  name="exp1Position"
                  value={values.exp1Position}
                  onChange={handleChange}
                  required
                />
              </FormField >

              <FormField
                label="Description"
                name="exp1Desc"
              >
                <TextArea
                  name="exp1Desc"
                  value={values.exp1Desc}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Duration"
                name="exp1Duration"
              >
                <TextInput
                  name="exp1Duration"
                  value={values.exp1Duration}
                  onChange={handleChange}
                  required
                />
              </FormField >

              <Box border="all" background="light-2" align="center" >
                <Text size="medium" weight="bold">{`Previous Employer`}</Text>
              </Box>
              <FormField
                label="Organization"
                name="exp2Orgn"
              >
                <TextInput
                  name="exp2Orgn"
                  value={values.exp2Orgn}
                  onChange={handleChange}
                />
              </FormField >
              <FormField
                label="Position"
                name="exp2Position"
              >
                <TextInput
                  name="exp2Position"
                  value={values.exp2Position}
                  onChange={handleChange}
                />
              </FormField >

              <FormField
                label="Description"
                name="exp2Desc"
              >
                <TextArea
                  name="exp2Desc"
                  value={values.exp2Desc}
                  onChange={handleChange}
                />
              </FormField >
              <FormField
                label="Duration"
                name="exp2Duration"
              >
                <TextInput
                  name="exp2Duration"
                  value={values.exp2Duration}
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

export default ExperienceSummary;
