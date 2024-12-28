import { useState, useEffect } from "react";
import './css/Modal.css';

const Modal = ({ closeModal, onAdd }) => {
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    // Close modal on escape key press
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  const handleSubmit = () => {
    onAdd(todoText);
    setTodoText('');
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">Add New Todo</h2>
        <input
          type="text"
          className="modal-input"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your todo item"
          autoFocus
        />
        <div className="modal-buttons">
          <button 
            className="modal-button modal-button-primary"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button 
            className="modal-button modal-button-secondary"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;