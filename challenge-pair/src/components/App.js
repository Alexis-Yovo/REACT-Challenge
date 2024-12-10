import React, { useEffect, useState } from 'react';
import { generateRandomNumbers } from '../utils/arrayUtils';
import NumberList from './numberList';
import SortedNumberList from './sortedNumberList';
import '../App.css';

const App = () => {
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [sortedNumbers, setSortedNumbers] = useState([]);

    useEffect(() => {
        const numbers = generateRandomNumbers();
        setRandomNumbers(numbers);
        setSortedNumbers([...numbers].sort((a, b) => a - b));
    }, []);

    return (
        <div className="App">
            <NumberList numbers={randomNumbers} />
            <SortedNumberList numbers={sortedNumbers} />
        </div>
    );
};

export default App;
