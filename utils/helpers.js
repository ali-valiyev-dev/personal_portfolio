const handleSmoothScroll = (event, targetId, setIsOpen) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (setIsOpen) {
    setIsOpen(false);
  }
};

export { handleSmoothScroll };
