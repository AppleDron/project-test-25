(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // form: document.querySelector('.modal-form-js'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.modal.addEventListener('click', onBackdropClick);
  // refs.form.addEventListener('submit', event => {
  //   event.preventDefault();
  // });

  function onOpenModal() {
    window.addEventListener('keydown', onEscPress);
    refs.modal.classList.remove('is-hidden');
    document.body.classList.add('lock');
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscPress);
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('lock');
  }
  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  }

  function onEscPress(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    }
  }

  // function toggleModal() {
  //   refs.modal.classList.toggle('is-hidden');
  // }
})();
