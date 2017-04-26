import React from 'react';
import ReactDOM from 'react-dom';
import LabelBtn from '../common/labelBtn';

import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
  Checkbox,
  FormGroup,
  Label,
  Button,
} from '@sketchpixy/rubix';

import testdata from '../common/testdata.js'

class DatatableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.tbody)).append(this.render_row());
    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        responsive: true
    });
  }
  render_row(){
    // console.log(testdata.tabledata);
    const trs = testdata.tabledata.map((row, key)=>{
        let stateColor = null;
        let markColor = null;
        switch(row.tags.state){
          case 'Driving': stateColor = 'rgb(255, 140, 33)'; break;
          case 'Crowd': stateColor = 'rgb(248, 106, 103)'; break;
          case 'Vehicle': stateColor = 'rgb(101, 191, 90)'; break;
          default: stateColor = 'rgb(91, 192, 222)';
        }
        switch(row.tags.mark){
          case 'D423': markColor = 'rgb(103, 50, 9)'; break;
          case 'Q421': markColor = 'rgb(110, 49, 133)'; break;
          case 'F93': markColor = 'rgb(0, 115, 96)'; break;
          case 'D298': markColor = 'rgb(195, 104, 73)'; break;
          case 'A2': markColor = 'rgb(255, 189, 56)'; break;
          case 'C65': markColor = 'rgb(104, 70, 122)'; break;
          default: markColor = 'rgb(91, 192, 222)';
        }
        return  <tr key={key}>
                  <td><Checkbox onChange={this.props.checked}></Checkbox></td>
                  <td>{row.date}</td>
                  <td>{row.start}</td>
                  <td>{row.end}</td>
                  <td>
                    <LabelBtn color={stateColor}>{row.tags.state}</LabelBtn>
                    <LabelBtn color={markColor}>{row.tags.mark}</LabelBtn>
                  </td>
                </tr>
    })
    return trs;
  }
  render() {
    return (
      <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Tags</th>
          </tr>
        </tfoot>
        <tbody ref={(tbody) => this.tbody = tbody}>
          {this.render_row()}
        </tbody>
      </Table>
    );
  }
}

export default class Datatablesjs extends React.Component {
  constructor(props) {
    super(props);
    this.checked = this.checked.bind(this);
    this.state = {
      checkedCount: 0,
    }
  }
  checked(){
    const count = $('tbody input[type="checkbox"]:checked').length;
    this.setState({checkedCount: count});
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <DatatableComponent checked = {this.checked}/>
                      <br/>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                    </Col>
                    <Col xs={3}>
                      <FormGroup>
                        <FormControl.Static>
                          {this.state.checkedCount} item(s) Selected
                        </FormControl.Static>
                      </FormGroup>
                    </Col>
                    <Col xs={3}>
                      <FormGroup>
                        <Button  onClick={()=>{alert("you were gonna download!")}}>
                          Download
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
