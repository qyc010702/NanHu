import React, { Component } from 'react';

class WebSocketComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      input: '',
    };
    this.socket = null;
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://10.88.10.89:8080/socket');

    this.socket.onopen = () => {
      console.log('WebSocket连接已建立');
    };

    this.socket.onmessage = (event) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, event.data],
      }));
    };

    this.socket.onclose = () => {
      console.log('WebSocket连接已关闭');
    };
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.close();
    }
  }

  sendMessage = () => {
    if (this.socket && this.state.input) {
      this.socket.send(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <div>
        <h2>WebSocket 消息</h2>
        <div>
          {this.state.messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          placeholder="输入消息"
        />
        <button onClick={this.sendMessage}>发送</button>
      </div>
    );
  }
}

export default WebSocketComponent;