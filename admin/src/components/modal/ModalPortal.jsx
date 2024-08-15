import ReactDOM from 'react-dom';

function ModalPortal({ children }) {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
}

export default ModalPortal;
