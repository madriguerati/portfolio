export const scrollToSection = (id) => {
  console.log("hola que yapapapapapa", id);
  const target = document.getElementById(id);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 3000;
    let start = null;

    const animateScroll = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressPercentage = Math.min(progress / duration, 1);
      const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // Función de easing

      window.scrollTo(0, startPosition + distance * easeInOut(progressPercentage));

      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }
};
