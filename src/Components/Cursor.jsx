import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  const targetPos = useRef({ x: 0, y: 0 }); // Target mouse position
  const currentPos = useRef({ x: 0, y: 0 }); // Current cursor position

  useEffect(() => {
    const updateMousePos = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const moveCursor = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(moveCursor);
    };

    window.addEventListener("mousemove", updateMousePos);
    requestRef.current = requestAnimationFrame(moveCursor);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="cursor z-50 fixed top-0 left-0 pointer-events-none" />;
};

export default Cursor;
