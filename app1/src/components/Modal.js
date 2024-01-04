function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure? </p>
      <button className="btn btn--alt" onClick={props.onConfirm}>
        confirm
      </button>
      <button className="btn" onClick={props.onCancel}>
        cancel
      </button>
    </div>
  );
}

export default Modal;
