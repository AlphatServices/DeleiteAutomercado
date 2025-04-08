// context/ModalContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isDeliveryModalOpen: boolean;
  toggleDeliveryModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <ModalContext.Provider
      value={{
        isDeliveryModalOpen: isOpen,
        toggleDeliveryModal: toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
