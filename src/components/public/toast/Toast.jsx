/* eslint-disable react/prop-types */
import { ToastContainer } from 'react-toastify';
const Toast = ({textStyle , progressColor}) => {
  return (
    <ToastContainer position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    progressStyle={{backgroundColor: progressColor}}
    toastStyle={textStyle}
    theme="colored" />
  )
}

export default Toast