import { useState } from 'react';

function useDebounce() {
  const [typingTimeout, setTypingTimeout] = useState('');

  function debounce(func, wait = 1000) {
    clearTimeout(typingTimeout);
    setTypingTimeout(setTimeout(() => func(), wait));
  }

  return debounce;
}

export default useDebounce;
