import { useState } from "react";

export default function useModal() {
  const [isActive, setIsActive] = useState(false);

  const handleModal = (active) => {
    setIsActive(active);
  };
  
  return { isActive, handleModal };
}