//👉 Write your tests below here:

import { sumPairs } from "./main.js";

test ('does example function work', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const targetSum = 9;
    const func = sumPairs(arr, targetSum);
    expect(func).toEqual([3, 6]);
    });

test ('does new example work', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const targetSum = 7;
    const func = sumPairs(arr, targetSum);
    expect(func).toEqual([1, 6]);
    }
);

test ('does it return 0 when nothing adds up', () => {
    const arr = [1, 2, 3];
    const targetSum = 7;
    const func = sumPairs(arr, targetSum);
    expect(func).toEqual(null);
    }
);

test ('does it return 0 when negative numbers are used', () => {
    const arr = [-1, -2, -3, -4];
    const targetSum = 7;
    const func = sumPairs(arr, targetSum);
    expect(func).toEqual(null);
    }
);

test ('does it work when negative and positive numbers are used', () => {
    const arr = [-1, -2, -3, -4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const targetSum = 7;
    const func = sumPairs(arr, targetSum);
    expect(func).toEqual([-1, 8]);
    }
);