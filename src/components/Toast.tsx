import React, { useEffect } from 'react';
import { Toast } from 'react-bootstrap';

interface ToastServiceProps {
  message: string;
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToastService: React.FC<ToastServiceProps> = ({ message, showToast, setShowToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000); // Le toast disparaîtra après 3 secondes
    return () => clearTimeout(timer);
  }, [showToast, setShowToast]);

  return (
    <Toast show={showToast} onClose={() => setShowToast(false)}>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastService;