import React from "react";

function useStorageListener(synchronizeTodos) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", change => {
    if (change.key === "TODOS_V1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronizeTodos(false);
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
