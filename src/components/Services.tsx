// ... início do arquivo permanece igual

const ServiceModal = ({ isOpen, closeModal, service }: any) => {
  // ... resto do código permanece igual até o Dialog

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center flex items-center justify-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-4 md:p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative">
              {/* ... resto do conteúdo do modal permanece igual */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

// ... resto do arquivo permanece igual