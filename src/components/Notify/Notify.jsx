import { toast } from 'react-toastify';

export default function Notify() {
  return toast.error("Check the correctness", {
    position: toast.POSITION.TOP_CENTER
  })
};

