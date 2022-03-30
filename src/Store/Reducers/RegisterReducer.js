import { 
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_LOADING_TRUE
} from '../ActionsTypes';

const initialState = {
   errors: null,
   loading: false
};

const registerReducer = (state=initialState, {type, payload}) => {
   switch (type) {
      case REGISTER_LOADING_TRUE:
          return {
              ...state,
              loading: true,
          };
       case REGISTER_SUCCESS:
           return {
               ...state,
               loading: false,
               error: null
           };
          case REGISTER_FAIL:
            console.log(payload)
           return {
            
               ...state,
               errors: payload,
               loading: false
           };
       default:
           return state;
   }
};
export default  registerReducer ;