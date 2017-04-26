import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';

import { Grid, Row, Col, Form, FormGroup, Button, ControlLabel, FormControl, Checkbox} from '@sketchpixy/rubix';
import Panelunit from '../common/panelunit';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    
  }
  submitForm(e){
    e.preventDefault();
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={4}>
            <div style={{marginTop: '50px'}}>
              <Panelunit title="Login">
                <div className="login_body">
                  <h1>Storage Search System</h1>
                  <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={3}>
                      User name
                      </Col>
                      <Col sm={9}>
                      <FormControl type="text" placeholder="User name" />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                      <Col componentClass={ControlLabel} sm={3}>
                      Password
                      </Col>
                      <Col sm={9}>
                      <FormControl type="password" placeholder="Password" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col smOffset={3} sm={9}>
                      <Checkbox>Remember me</Checkbox>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col smOffset={3} sm={9}>
                      <Button type="submit" onClick={this.submitForm}>
                        Login
                      </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </Panelunit>
            </div>
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
      </div>
    );
  }
}

