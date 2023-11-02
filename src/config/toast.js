import { ToastContainer, toast } from 'react-toastify';

export const toastSuccess = () => toast.success('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
