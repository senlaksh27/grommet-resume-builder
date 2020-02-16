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

class TopFiveSkills extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = e => {
    this.props.handleTop5SkillsReset();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Grommet full theme={theme}>
        <Box border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Top 5 Skills`}</Text>
        </Box>
        <Box border="all" fill align="center" >
          <Box width="medium">
            <Form
              onReset={this.reset}
              onSubmit={this.continue}
            >
              <FormField
                label="Skill 1"
                name="skill1"
              >
                <TextInput
                  name="skill1"
                  value={values.skill1}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </FormField >
              <FormField
                label="Skill 2"
                name="skill2"
              >
                <TextInput
                  name="skill2"
                  value={values.skill2}
                  onChange={handleChange}
                  required
                />
              </FormField >

              <FormField
                label="Skill 3"
                name="skill3"
              >
                <TextInput
                  name="skill3"
                  value={values.skill3}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Skill 4"
                name="skill4"
              >
                <TextInput
                  name="skill4"
                  value={values.skill4}
                  onChange={handleChange}
                  required
                />
              </FormField >
              <FormField
                label="Skill 5"
                name="skill5"
              >
                <TextInput
                  name="skill5"
                  value={values.skill5}
                  onChange={handleChange}
                  required
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

export default TopFiveSkills;
