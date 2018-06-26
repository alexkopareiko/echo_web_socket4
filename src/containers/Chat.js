import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {connect_ws, disconnect_ws, send_ws} from '../actions/index';
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class Chat extends Component {

  constructor(props) {
     super(props);

     this.state = {


     }
   }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
      this.scrollToBottom();
    }

    componentDidUpdate() {
      this.scrollToBottom();
    }

  showList() {
    console.log(this.props)
    return this.props.connectState.map ((row) => {
      return (
        <div key={row.id}>
          <div className="ui comments">
            <div className="comment">
              <div className={row.author=="Echo-Bot" ? "ui comments": ''}>
                <div className="comment">
                  <div className="avatar">
                    <img src={row.author=="Echo-Bot" ? "https://react.semantic-ui.com/images/avatar/small/elliot.jpg" : "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"} />
                  </div>
                  <div className="content">
                    <a className="author">{row.author}</a>
                    <div className="metadata">
                      <div>{row.time}</div>
                    </div>
                    <div className="text">{row.text}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>


      );
    });
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
    connectState: state.chatbox
  };

}


export default connect (mapStateToProps)(Chat);
