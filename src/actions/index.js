/*export const connectAction = (connect) => {
  return {
    type: "CONNECT",
    payload: connect
  }
};*/


export const connect_ws = () => {
  console.log('connect');
  return {
    type: "CONNECT",
    payload: 'connect'
  }
};

export const disconnect_ws = () => {
  console.log('disconnect');
  return {
    type: "DISCONNECT",
    payload: 'disconnect'
  }
};

export const connected = () => {
  console.log('connected');
  return {
    type: "CONNECTED",
    payload: 'connected'
  }
};

export const disconnected = () => {
  console.log('disconnected');
  return {
    type: "DISCONNECTED",
    payload: 'disconnected'
  }
};


export const messageReceived = (msg) => {
  console.log('messageReceived');
  return {
    type: "MSG_RECEIVED",
    payload: msg
  }
};

export const connecting = () => {
  console.log('connecting');
  return {
    type: "CONNECTING",
    payload: "connecting"
  }
};

export const send_ws = (msg) => {
  console.log('send');
  return {
    type: "SEND_CHAT_MESSAGE",
    payload: msg
  }
};

export const send_and_save = (msg) => {
  console.log('send_and_save');
  return {
    type: "SEND_CHAT_MESSAGE_AND_SAVE",
    payload: msg
  }
};
