import React, { Component } from 'react'
import {
  Box,
  Grommet,
  Grid,
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

class PreviewProfile extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    const {
      name,
      email,
      mobileNo,
      linkedIn,
      github,

      profileSum,

      skill1,
      skill2,
      skill3,
      skill4,
      skill5,

      exp1Orgn,
      exp1Position,
      exp1Desc,
      exp1Duration,

      exp2Orgn,
      exp2Position,
      exp2Desc,
      exp2Duration,

      proj1Title,
      proj1Link,
      proj1Desc,
      pro1Duration,

      proj2Title,
      proj2Link,
      proj2Desc,
      pro2Duration,

      edu1College,
      edu1Year,
      edu1Qualification,
      edu1Desc,

      edu2College,
      edu2Year,
      edu2Qualification,
      edu2Desc,

      dob,
      languages,
      address
    } = values;

    let linkedInLink, githubLink, techSkills, experienceOne, experienceTwo, projectOne, projectTwo, bachelorDegree, masterDegree, addnPerInfo = null;

    if (linkedIn) {
      linkedInLink = <Text size="medium" >{`LinkedIn: ${linkedIn}`}</Text>
    }

    if (github) {
      githubLink = <Text size="medium" >{`Github: ${github}`}</Text>
    }

    if (skill1) {
      techSkills = <div>
        <Grid
          gap="small"
        >
          <Box responsive background="light-1"><Text size="medium">{skill1}</Text></Box>
          <Box responsive background="light-1"><Text size="medium">{skill2}</Text></Box>
          <Box responsive background="light-1"><Text size="medium">{skill3}</Text></Box>
          <Box responsive background="light-1"><Text size="medium">{skill4}</Text></Box>
          <Box responsive background="light-1"><Text size="medium">{skill5}</Text></Box>
        </Grid>
      </div>
    }

    if (exp1Orgn) {
      experienceOne = <div>
        <Grid
          columns={{
            count: 5,
            size: "auto"
          }}
        >
          <Box responsive background="light-3"></Box>
          <Box responsive background="light-3">Organization</Box>
          <Box responsive background="light-3">Position</Box>
          <Box responsive background="light-3">Description</Box>
          <Box responsive background="light-3">Duration</Box>
        </Grid>

        <Grid
          columns={{
            count: 5,
            size: "auto"
          }}
          gap="small"
        >
          <Box responsive>{`Current Employer`}</Box>
          <Box responsive>{exp1Orgn}</Box>
          <Box responsive>{exp1Position}</Box>
          <Box responsive>{exp1Desc}</Box>
          <Box responsive>{exp1Duration}</Box>
        </Grid>
      </div>
    }

    if (exp2Orgn) {
      experienceTwo = <div>
        <Grid
          columns={{
            count: 5,
            size: "auto"
          }}
          gap="small"
        >
          <Box responsive>{`Previous Employer`}</Box>
          <Box responsive>{exp2Orgn}</Box>
          <Box responsive>{exp2Position}</Box>
          <Box responsive>{exp2Desc}</Box>
          <Box responsive>{exp2Duration}</Box>
        </Grid>
      </div>
    }

    if (proj1Title) {
      projectOne = <div>
        <Text size="small" weight="bold">{`Project #1`}</Text>
        <Grid
          columns={{
            count: 3,
            size: "auto"
          }}
          gap="small"
        >
          <Box responsive background="light-3">{proj1Title}</Box>
          <Box responsive background="light-3">{proj1Link}</Box>
          <Box responsive background="light-3">{pro1Duration}</Box>
        </Grid>
        <Box responsive>{proj1Desc}</Box>
      </div>
    }

    if (proj2Title) {
      projectTwo = <div>
        <Text size="small" weight="bold">{`Project #2`}</Text>
        <Grid
          columns={{
            count: 3,
            size: "auto"
          }}
          gap="small"
        >
          <Box responsive background="light-3">{proj2Title}</Box>
          <Box responsive background="light-3">{proj2Link}</Box>
          <Box responsive background="light-3">{pro2Duration}</Box>
        </Grid>
        <Box responsive>{proj2Desc}</Box>
      </div>
    }

    if (edu1Qualification) {
      bachelorDegree = <div>
        <Text size="small" weight="bold">{`Under-Graduation`}</Text>
        <Grid
          columns={{
            count: 3,
            size: "auto"
          }}
          gap="small"
        >
          <Box responsive background="light-3">{edu1College}</Box>
          <Box responsive background="light-3">{edu1Qualification}</Box>
          <Box responsive background="light-3">{edu1Year}</Box>
        </Grid>
        <Box responsive>{edu1Desc}</Box>
      </div>
    }

    if (edu2Qualification) {
      masterDegree = <div>
        <Text size="small" weight="bold">{`Post-Graduation`}</Text>
        <Grid
          columns={{
            count: 3,
            size: "auto"
          }}
          gap="small"
        >
          <Box responsive background="light-3">{edu2College}</Box>
          <Box responsive background="light-3">{edu2Qualification}</Box>
          <Box responsive background="light-3">{edu2Year}</Box>
        </Grid>
        <Box responsive>{edu2Desc}</Box>
        </div>;
    }

    if (dob || languages || address) {
      let dobEle, languagesEle, addressEle = null
      if (dob) {
        dobEle = <Box responsive><Text size="small">{`Date Of Birth: ${dob}`}</Text></Box>
      }

      if (languages) {
        languagesEle = <Box responsive><Text size="small">{`Language(s) Known: ${languages}`}</Text></Box>
      }

      if (address) {
        addressEle = <Box responsive><Text size="small">{`Address: ${address}`}</Text></Box>
      }

      addnPerInfo = <div>
        <Box responsive background="light-6">
              <Text size="medium" weight="bold">{`Personal Details`}</Text>
            </Box>
        <Grid
          gap="small"
        >
          {dobEle}
          {languagesEle}
          {addressEle}
        </Grid>
      </div>
    }

    return (
      <Grommet full theme={theme}>
        <Box responsive border="all" background="white" align="center" >
          <Text size="large" weight="bold">{`Resume Preview`}</Text>
        </Box>
        <Box responsive>
        <Grid
          fill
          areas={[
            { name: "main", start: [1, 0], end: [1, 0] }
          ]}
          columns={["1/4", "2/4", "1/4"]}
          rows={["flex"]}
          gap="small"
        >
          <Box responsive gridArea="main" border="all">
            <Box responsive gridArea="main" border="all">

              <Text size="medium" weight="bold">{name}</Text>
              <Text size="medium" >{`Email ID: ${email}`}</Text>
              <Text size="medium" background="white">{`Mobile #: ${mobileNo}`}</Text>
              {linkedInLink}
              {githubLink}
            </Box>
            <Box responsive background="light-6">
              <Text size="medium" weight="bold">{`Profile Summary`}</Text>
            </Box>
            <Text size="medium">{profileSum}</Text>
            <Box responsive background="light-6">
              <Text size="medium" weight="bold">{`Core Competencies`}</Text>
            </Box>
            {techSkills}

            <Box responsive background="light-6">
              <Text size="medium" weight="bold">{`Career Progression`}</Text>
            </Box>
            {experienceOne}
            {experienceTwo}

            <Box responsive background="light-6">
              <Text size="medium" weight="bold">{`Project Undertaken`}</Text>
            </Box>

            {projectOne}
            {projectTwo}

            <Box responsive background="light-6">
              <Text size="medium" weight="bold">{`Education`}</Text>
            </Box>
            {bachelorDegree}
            {masterDegree}

            {addnPerInfo}
          </Box>
        </Grid>
        </Box>
      </Grommet>
    )
  }
}

export default PreviewProfile;
