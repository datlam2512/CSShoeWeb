// 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

import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../CreateYourOwn/default_image.svg'

export default function ImageGenerator() {
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        console.log(data);
    }
    return (
        <div className='ai-image-generator'>
            <div className='header-generator'>
                AI Image <span>generator</span>
            </div>
            <div className='img-loading'>
                <div className='image'>
                    <img src={image_url === "/" ? default_image : image_url} />
                </div>
            </div>
            <div className='search-box'>
                <input className='search-input' type='text' ref={inputRef} />
                <div className='generate-btn'>
                    <button onClick={() => {
                        imageGenerator()
                    }}>
                        Generate
                    </button>
                </div>
            </div>
        </div>
    )
}
