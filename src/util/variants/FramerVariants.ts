export const navbarContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const navbarItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const arrowVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const aboutVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const perksContainer = {
  offscreen: { opacity: 0, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const perksItem = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export const faqVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const AnimatedTextChild = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const AnimatedTextContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04 * i,
    },
  }),
};
