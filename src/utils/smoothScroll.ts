export const smoothScrollTo = (targetPosition: number | string, duration: number = 1200, offset: number = 0) => {
  let targetY = 0;
  
  if (typeof targetPosition === 'string') {
    const element = document.querySelector(targetPosition);
    if (!element) return;
    targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
  } else {
    targetY = targetPosition - offset;
  }

  // Prevent scrolling past bottom of page
  const maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
  targetY = Math.min(targetY, maxScroll);
  targetY = Math.max(targetY, 0);

  const startPosition = window.pageYOffset;
  const distance = targetY - startPosition;
  let startTime: number | null = null;

  // easeInOutQuart for a smoother start and end
  const easeInOutQuart = (time: number, start: number, change: number, duration: number) => {
    time /= duration / 2;
    if (time < 1) return change / 2 * time * time * time * time + start;
    time -= 2;
    return -change / 2 * (time * time * time * time - 2) + start;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
    
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetY);
    }
  };

  requestAnimationFrame(animation);
};
