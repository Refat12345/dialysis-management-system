import { toast } from "react-toastify";
const customOption = {
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const showErrorToast = (message) => {
  toast.error(message, customOption);
};

export const showSuccessToast = (message) => {
  toast.success(message, customOption);
};

export const showWarningToast = (message) => {
  toast.warning(message, customOption);
};

export const showInfoToast = (message) => {
  toast.info(message, customOption);
};
