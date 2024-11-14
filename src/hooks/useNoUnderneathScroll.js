import { useEffect } from 'react';

function useNoUnderneathScroll() {
  useEffect(function () {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);
}

export default useNoUnderneathScroll;
