import { useState } from "react";

interface useSwipeProps {
  swipeRight?: () => void;
  swipeLeft?: () => void;
  distanceLeft?: number;
}
export const useSwipe = ({ swipeRight, swipeLeft, distanceLeft  }: useSwipeProps) => {
  let startX = 0;
  let direction = "";
  let maxLeft = 0;

  const onTouchStart = (e: any) => {
    startX = e.changedTouches[0].pageX;
    maxLeft = distanceLeft || window.innerWidth / 4;
  };

  const onTouchMove = (e: any) => {
    if (e.changedTouches[0].pageX > startX) {
      direction = "right";
    } else {
      direction = "left";
    }
  };

  const onTouchEnd = (e: any) => {
    const isRight = direction === "right" && startX < maxLeft;
    if (swipeRight && isRight && e.changedTouches[0].pageX > startX + 15) {
      swipeRight();
    } else if (swipeLeft && !isRight && e.changedTouches[0].pageX < startX + 15) {
      swipeLeft();
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};
