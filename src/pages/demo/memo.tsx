import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [extraNumber, setExtraNumber] = useState(0);

  // 使用 useMemo 缓存总和计算结果
  const total = useMemo(() => {
    console.log('Calculating total...');
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  return (
    <div>
      <h1>Total: {total}</h1>
      <button onClick={() => setExtraNumber(extraNumber + 1)}>
        Add Extra Number ({extraNumber})
      </button>
    </div>
  );
};


export default Memo;
