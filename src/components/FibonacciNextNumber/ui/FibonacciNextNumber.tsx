import React, {useState, useCallback, FC} from 'react';

interface NewsFormProps {
    onNextFibonacciClick: (number: number) => void
}
const FibonacciNextNumber: FC<NewsFormProps> = ({ onNextFibonacciClick }) => {
    const [fibSequence, setFibSequence] = useState([0, 1]);

    const getFibonacci = useCallback((n: number): number => {
        if (n <= 1) return n;
        if (fibSequence[n]) return fibSequence[n];
        const nextFib = getFibonacci(n - 1) + getFibonacci(n - 2);
        setFibSequence((prevSequence) => [...prevSequence, nextFib]);
        return nextFib;
    }, [fibSequence]);

    const handleNextFibonacci = () => {
        const nextNumber = getFibonacci(fibSequence.length);
        onNextFibonacciClick(nextNumber);
    };

    return (
        <div>
            <button onClick={handleNextFibonacci}>Get Next Fibonacci Number</button>
        </div>
    );
};

export default FibonacciNextNumber;
