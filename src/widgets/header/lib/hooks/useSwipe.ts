import React from "react";

interface useSwipeProps {
  swipeRight?: () => void;
  swipeLeft?: () => void;
  distanceLeft?: number;
}

type SwipeTouchEvent = React.TouchEvent<HTMLDivElement> | TouchEvent;

export const useSwipe = ({ swipeRight, swipeLeft, distanceLeft }: useSwipeProps) => {
  let startX = 0;
  let direction = "";
  let maxLeft = 0;

  const onTouchStart = (e: SwipeTouchEvent) => {
    startX = e.changedTouches[0].pageX;
    maxLeft = distanceLeft || window.innerWidth / 4;
  };

  const onTouchMove = (e: SwipeTouchEvent) => {
    if (e.changedTouches[0].pageX > startX) {
      direction = "right";
    } else {
      direction = "left";
    }
  };

  const onTouchEnd = (e: SwipeTouchEvent) => {
    const isRight = direction === "right" && startX < maxLeft;
    if (swipeRight && isRight && e.changedTouches[0].pageX > startX + 15) {
      swipeRight();
    } else if (swipeLeft && !isRight && e.changedTouches[0].pageX < startX + 15) {
      swipeLeft();
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};
