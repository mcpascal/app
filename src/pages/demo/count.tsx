import useCountStore from '@/store/count';

const Count = () => {
    const { count, increment, decrement, getCount } = useCountStore();
    return (
        <div>
            <h1>Counter</h1>
            <p>Value: {count}</p>
            <button onClick={() => getCount()}>fetchCount</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Count