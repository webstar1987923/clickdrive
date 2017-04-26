import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { Grid, Row, Col, Form, FormGroup, Button, ControlLabel, FormControl, Checkbox} from '@sketchpixy/rubix';
import Panelunit from '../common/panelunit';
import Datatable from './Datatablesjs.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    $('#datepicker_start').datetimepicker();
    $('#datepicker_end').datetimepicker({
        // useCurrent: false //Important! See issue #1075
    });
    $("#datepicker_start").on("dp.change", function (e) {
        $('#datepicker_end').data("DateTimePicker").minDate(e.date);
    });
    $("#datepicker_end").on("dp.change", function (e) {
        $('#datepicker_start').data("DateTimePicker").maxDate(e.date);
    });
    $(".home_left").parent().css('overflow', 'visible');
  }
  render() {
    return (
      <div ref={(c) => this.home_main_component = c} className="home_main">
        <Col md={2}>
          <Panelunit title="Form">
            <div className="home_left">
              <FormGroup>
                <ControlLabel>Device ID</ControlLabel>
                <FormControl componentClass="select" placeholder="Device ID">
                  <option value="other">...</option>
                  <option value="id_1">id_1</option>
                  <option value="id_2">id_2</option>
                  <option value="id_3">id_3</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Start Time</ControlLabel>
                <div className='input-group date' id='datepicker_start'>
                    <input type='text' className="form-control" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel>End Time</ControlLabel>
                <div className='input-group date' id='datepicker_end'>
                    <input type='text' className="form-control" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
              </FormGroup>
              <FormGroup>
                <Button  onClick={this.search}>
                  Search
                </Button>
              </FormGroup>
            </div>
          </Panelunit>
        </Col>
        <Col md={7}>
          <Panelunit title="Search Result">
            <div className="home_center">
              <Datatable />
            </div>
          </Panelunit>
        </Col>
        <Col md={3}>
          <Panelunit title="Details">
            <div className="home_right">
              <FormGroup>
                <ControlLabel>File Name:</ControlLabel>
                <FormControl.Static>
                  bb.02.Jan.2000.12.00.00.dat
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>File Size:</ControlLabel>
                <FormControl.Static>
                  15260 bytes
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>md5:</ControlLabel>
                <FormControl.Static>
                  ca5b75cba5a7cb58c58c5ab85ac8cb
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Uploaded by:</ControlLabel>
                <FormControl.Static>
                  5C-3E-2E-33-3R-Q3
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Upload timestamp:</ControlLabel>
                <FormControl.Static>
                  02/10/2017 11:26:34
                </FormControl.Static>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Upload url:</ControlLabel>
                <FormControl.Static>
                  https://www.someurl.com/somevalue
                </FormControl.Static>
              </FormGroup>
            </div>
          </Panelunit>
        </Col>
      </div>
    );
  }
}

