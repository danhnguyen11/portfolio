import axios from 'axios';
import { SEND_MESSAGE } from './types';

export const sendMessage = (values) => async dispatch => {
    console.log(values);
    const res = await axios.post('/contact/send', values)

    dispatch({ type: SEND_MESSAGE, payload: res.data })
}