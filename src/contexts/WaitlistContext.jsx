import { createContext, useContext, useState } from 'react';

const WaitlistContext = createContext();

export const WaitlistProvider = ({ children }) => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => setIsWaitlistModalOpen(true);
  const closeWaitlistModal = () => setIsWaitlistModalOpen(false);

  return (
    <WaitlistContext.Provider value={{
      isWaitlistModalOpen,
      openWaitlistModal,
      closeWaitlistModal
    }}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};
