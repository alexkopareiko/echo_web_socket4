import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {connect_ws, disconnect_ws, send_ws} from '../actions/index';
import { Button } from 'semantic-ui-react';
import Chat from './Chat'

class Start extends Component {

  constructor(props) {
     super(props);
     this.btnHandlerOn = this.btnHandlerOn.bind(this);
     this.btnHandlerOff = this.btnHandlerOff.bind(this);
     this.btnHandlerSend = this.btnHandlerSend.bind(this);

     this.state = {
       inputField: ""

     }
   }

   componentDidMount() {

       window.scrollTo(0, 0);

  }


  btnHandlerOn(e) {
    e.preventDefault();
    this.props.actions.connect_ws();


  }

  btnHandlerOff(e) {
    e.preventDefault();
    this.props.actions.disconnect_ws();

  }

  btnHandlerSend(e) {
    e.preventDefault();
    if(this.refs._ref.value!='')
      this.props.actions.send_ws(this.refs._ref.value);
    this.refs._ref.value = '';
    this.refs._ref.focus();

  }

  showList() {
    return (
      <div>
      {console.log(this.props)}
        <Button onClick={e => this.btnHandlerOn(e)} disabled={this.props.connectState != 'connected' ? false: true}>Connect</Button>
        <Button onClick={e => this.btnHandlerOff(e)} disabled={this.props.connectState == 'connected' ? false: true}>Disconnect</Button>
        <div className="div_chat">
          <Chat />
        </div>
        <div className="ui form">

          <div className="field">
            <label></label>
            <textarea rows="2" ref='_ref' placeholder="Feel free to write..."></textarea>
          </div>
          <Button onClick={e => this.btnHandlerSend(e)} disabled={this.props.connectState == 'connected' ? false: true}>Send</Button>
        </div>

      </div>
    );
  }

    render() {
      return (
        <div>
          {this.showList()}
        </div>
      );
    }

}

function mapStateToProps (state) {

  return  {
    connectState: state.status
  };

}

function matchDispatchToProps (dispatch) {
  return {//bindActionCreators({select: select}, dispatch)
    actions: {
        connect_ws: bindActionCreators(connect_ws, dispatch),
        disconnect_ws: bindActionCreators(disconnect_ws, dispatch),
        send_ws: bindActionCreators(send_ws, dispatch)
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(Start);
