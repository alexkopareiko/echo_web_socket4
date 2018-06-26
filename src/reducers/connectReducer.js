const initialState = [
  {
    id: 1,
    author: 'Me',
    text: 'tra-ta-ta',
    time: '2018-6-26 (11:16)'
  },
  {
    id: 2,
    author: 'Echo-Bot',
    text: 'tra-ta-ta',
    time: '2018-6-26 (11:16)'
  }
];

export default function connectReducer(state = initialState, action) {
switch(action.type) {



    case "MSG_RECEIVED":
    return [
      ...state,
      action.payload
    ]
      break;

    case "SEND_CHAT_MESSAGE":
    return [
      ...state,
      action.payload
    ]
      break;


    case "SEND_CHAT_MESSAGE_AND_SAVE":
    return [
      ...state,
      action.payload
    ]
      break;


  default:
    return state;
}
}
