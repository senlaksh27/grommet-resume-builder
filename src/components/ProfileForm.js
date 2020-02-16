import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfileSummary from './ProfileSummary';
import TopFiveSkills from './TopFiveSkills';
import ExperienceSummary from './ExperienceSummary';
import ProjectSummary from './ProjectSummary';
import EducationSummary from './EducationSummary';
import PreviewProfile from './PreviewProfile';
import AdditionalPersonalInfo from './AdditionalPersonalInfo';

class ProfileForm extends Component {

    state = {
        step: 1,

        name: '',
        email: '',
        mobileNo: '',
        linkedIn: '',
        github: '',

        profileSum: '',

        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',

        exp1Orgn: '',
        exp1Position: '',
        exp1Desc: '',
        exp1Duration: '',

        exp2Orgn: '',
        exp2Position: '',
        exp2Desc: '',
        exp2Duration: '',

        proj1Title: '',
        proj1Link: '',
        proj1Desc: '',
        pro1Duration: '',

        proj2Title: '',
        proj2Link: '',
        proj2Desc: '',
        pro2Duration: '',

        edu1College: '',
        edu1Year: '',
        edu1Qualification: '',
        edu1Desc: '',

        edu2College: '',
        edu2Year: '',
        edu2Qualification: '',
        edu2Desc: '',

        dob: '',
        languages: '',
        address: '',

        preview: false
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
        if (this.preview) {
            this.setState({
                preview: false
            });
        }
    };

    preview = () => {
        //const { status } = this.state;
        const { step } = this.state;
        this.setState({
            preview: true,
            step: step + 1
        });
    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    handlePersonalInfoReset = () => {
        this.setState({
            name: '',
            email: '',
            mobileNo: '',
            linkedIn: '',
            github: ''
        });
    }

    handleProfileSummaryReset = () => {
        this.setState({
            profileSum: ''
        });
    }

    handleTop5SkillsReset = () => {
        this.setState({
            skill1: '',
            skill2: '',
            skill3: '',
            skill4: '',
            skill5: ''
        });
    }

    handleExperienceSummaryReset = () => {
        this.setState({
            exp1Orgn: '',
            exp1Position: '',
            exp1Desc: '',
            exp1Duration: '',

            exp2Orgn: '',
            exp2Position: '',
            exp2Desc: '',
            exp2Duration: ''
        });
    }

    handleProjectSummaryReset = () => {
        this.setState({
            proj1Title: '',
            proj1Link: '',
            proj1Desc: '',
            pro1Duration: '',

            proj2Title: '',
            proj2Link: '',
            proj2Desc: '',
            pro2Duration: ''
        });
    }

    handleEducationSummaryReset = () => {
        this.setState({
            edu1College: '',
            edu1Year: '',
            edu1Qualification: '',
            edu1Desc: '',

            edu2College: '',
            edu2Year: '',
            edu2Qualification: '',
            edu2Desc: ''
        });
    }

    handleAdditionalPersonalInfoReset = () => {
        this.setState({
            dob: '',
            languages: '',
            address: '',
        });
    }

    render() {
        const { preview } = this.state;
        if (preview) {
            return (
                <PreviewProfile
                    values={this.state}
                    prevStep={this.prevStep}
                />
            );
        }
        else {
            const { step } = this.state;
            switch (step) {
                case 1:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <PersonalInfo
                                    values={this.state}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handlePersonalInfoReset={this.handlePersonalInfoReset}
                                />
                            </div>
                            <br />
                        </div>
                    );

                case 2:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <ProfileSummary
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handleProfileSummaryReset={this.handleProfileSummaryReset}
                                />
                            </div>
                            <br />
                        </div>
                    );

                case 3:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <TopFiveSkills
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handleTop5SkillsReset={this.handleTop5SkillsReset}
                                />
                            </div>
                            <br />
                        </div>
                    );

                case 4:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <ExperienceSummary
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handleExperienceSummaryReset={this.handleExperienceSummaryReset}
                                />
                            </div>
                            <br />
                        </div>
                    );

                case 5:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <ProjectSummary
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handleProjectSummaryReset={this.handleProjectSummaryReset}
                                />
                            </div>
                            <br />
                        </div>
                    );

                case 6:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <EducationSummary
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handleEducationSummaryReset={this.handleEducationSummaryReset}
                                />
                            </div>
                            <br />
                        </div>
                    );
                
                case 7:
                    return (
                        <div className="App pt-5 mt-5">
                            <div className="container col-lg-8 mx-auto text-center">
                                <AdditionalPersonalInfo
                                    values={this.state}
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    handleAdditionalPersonalInfoReset={this.handleAdditionalPersonalInfoReset}
                                    preview={this.preview}
                                />
                            </div>
                            <br />
                        </div>
                    );
                
                default:
                    return (<div>{`Does not match with any case`}</div>)
            }
        }

    }
}

export default ProfileForm;
