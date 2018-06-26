const initialState = 'disconnected';

export default function status(state = initialState, action) {

  switch(action.type) {


    case "CONNECT":
    return [
      action.payload
    ]
      break;

    case "DISCONNECT":
      return [
        action.payload
      ]
        break;

      case "CONNECTED":
      return [
        action.payload
      ]
        break;

      case "DISCONNECTED":
      return [
        action.payload
      ]
        break;


      case "CONNECTING":
      return [
        action.payload
      ]
        break;


    default:
      return state;
  }

}
