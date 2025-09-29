export const useScrollLock = () => {
  const lockScroll = () => {
    document?.documentElement?.classList.add("lock");
  };

  const unlockScroll = () => {
    document?.documentElement?.classList.remove("lock");
  };

  const lockToggle = (lockStatus) => {
    if (!lockStatus) {
      unlockScroll();
    } else {
      lockScroll();
    }
  };

  return {
    lockScroll,
    unlockScroll,
    lockToggle,
  };
};
