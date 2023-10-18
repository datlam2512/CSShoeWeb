import { Checkbox } from 'antd';
import React, { useState } from 'react';
import './FilterProduct.css';

export default function FilterProduct() {
    const [isPriceVisible, setPriceVisible] = useState(false);
    const [isSizeVisible, setSizeVisible] = useState(false);
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');

    const togglePrice = () => {
        setPriceVisible(!isPriceVisible);
    };

    const toggleSize = () => {
        setSizeVisible(!isSizeVisible);
    };

    const handlePriceMinChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setPriceMin(numericValue);
    };

    const handlePriceMaxChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setPriceMax(numericValue);
    };

    return (
        <div className='filter-content'>
            <div className='filter-price'>
                <div className='filter-price-title'>
                    <button className='price-title title' onClick={togglePrice}>
                        Price
                    </button>
                </div>
                {isPriceVisible && (
                    <div className='price-range'>
                        <input
                            className='price-min'
                            type='text'
                            value={priceMin}
                            onChange={handlePriceMinChange}
                            placeholder='min'
                        />
                        <span className='split'> - </span>
                        <input
                            className='price-max'
                            type='text'
                            value={priceMax}
                            onChange={handlePriceMaxChange}
                            placeholder='max'

                        />
                    </div>
                )}
            </div>
            <div className='filter-size'>
                <div className='filter-size-title'>
                    <button className='size-title title' onClick={toggleSize}>
                        Size
                    </button>
                </div>
                {isSizeVisible && (
                    <div className='size-choice'>
                        <ul className='check-box'>
                            <li className='size-option'>
                                <Checkbox><span className='size'>34</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>35</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>36</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>37</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>38</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>39</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>40</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>41</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>42</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>43</span></Checkbox>
                            </li>
                            <li className='size-option'>
                                <Checkbox><span className='size'>44</span></Checkbox>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
            <div className='apply'>
                <div className='apply-btn'>
                    <button className='action-btn'>Apply</button>
                </div>
            </div>
        </div>
    );
}
