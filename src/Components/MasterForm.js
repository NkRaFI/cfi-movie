import React, { Component } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import Step1 from './ProjectForm1';
import Step2 from './ProjectForm2';
import Step3 from './ProjectForm3';
import StepProgressbar from "./StepProgressbar";

class MasterForm extends Component {
    constructor(props) {
      super(props);
  
      // Set the intiial input values
      this.state = {
        currentStep: 1,
        email: "",
        username: "",
        password: ""
      };
  
      // Bind the submission to handleChange()
      this.handleChange = this.handleChange.bind(this);
  
      // Bind new functions for next and previous
      this._next = this._next.bind(this);
      this._prev = this._prev.bind(this);
    }
  
    // Use the submitted data to set the state
    handleChange(event) {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }
  
    // Trigger an alert on form submission
    handleSubmit = event => {
      event.preventDefault();
      const { email, username, password } = this.state;
      alert(`Your registration detail: \n 
        Email: ${email} \n 
        Username: ${username} \n
        Password: ${password}`);
    };
  
    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
      let currentStep = this.state.currentStep;
  
      // If the current step is 1 or 2, then add one on "next" button click
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      this.setState({
        currentStep: currentStep
      });
    }
    
  
  
    _prev() {
      let currentStep = this.state.currentStep;
      // If the current step is 2 or 3, then subtract one on "previous" button click
      currentStep = currentStep <= 1 ? 1 : currentStep - 1;
      this.setState({
        currentStep: currentStep
      });
    }
  
    // The "next" and "previous" button functions
    get previousButton() {
      let currentStep = this.state.currentStep;
  
      // If the current step is not 1, then render the "previous" button
      if (currentStep !== 1) {
        return (
          <Button color="secondary float-left" onClick={this._prev}>
            Previous
          </Button>
        );
      }
  
      // ...else return nothing
      return null;
    }
  
    get nextButton() {
      let currentStep = this.state.currentStep;
      // If the current step is not 3, then render the "next" button
      if (currentStep < 3) {
        return (
          <Button color="primary float-right" onClick={this._next}>
            Next
          </Button>
        );
      }
      // ...else render nothing
      return null;
    }
  
    get submitButton() {
      let currentStep = this.state.currentStep;
  
      // If the current step is the last step, then render the "submit" button
      if (currentStep > 2) {
        return <Button color="primary float-right">Submit</Button>;
      }
      // ...else render nothing
      return null;
    }
  
    render() {
      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <Card.Header>Create an Account</Card.Header>
              <Card.Body>
                <Card.Title>
                  <StepProgressbar currentStep={this.state.currentStep} />
                </Card.Title>
                <Card.Text />
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.password}
                />
              </Card.Body>
              <Card.Footer>
                {this.previousButton}
                {this.nextButton}
                {this.submitButton}
              </Card.Footer>
            </Card>
          </Form>
        </>
      );
    }
  }

export default MasterForm;