import { render, screen } from '@testing-library/react';
import useDataApi from './useDataApi';
import React from 'react';

test('Write data to the local storage', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});

    const spy = jest.spyOn(Storage.prototype, 'setItem');
    const { setData } = useDataApi();

    setData(['10:00', '20:00']);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('availableItems', '["10:00","20:00"]');
});

test('Read data from the local storage', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});

    const spy = jest.spyOn(Storage.prototype, 'getItem');
    const { fetchData } = useDataApi();

    fetchData('2024-12-12');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('availableItems');
});
