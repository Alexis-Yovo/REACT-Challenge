import React, { useEffect, useReducer } from 'react';

const initialState = {
    displayedSorted: [],
    currentIndex: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_INDEX':
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                displayedSorted: [...state.displayedSorted, action.payload],
            };
        default:
            return state;
    }
};

const SortedNumberList = ({ numbers }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.currentIndex < numbers.length) {
            const timer = setTimeout(() => {
                dispatch({ type: 'INCREMENT_INDEX', payload: numbers[state.currentIndex] });
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [state.currentIndex, numbers]);

    return (
        <div className="number-list sorted">
            {state.displayedSorted.map((num, index) => (
                <span key={index} className="number">
                    {num}
                </span>
            ))}
        </div>
    );
};

export default SortedNumberList;
