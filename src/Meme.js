import './App.sass';
import { useEffect, useState } from 'react';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1h7in3.jpg',
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme(prevMemeImage => {
            return {
                ...prevMemeImage,
                randomImage: url
            }
        })
    }
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    placeholder='Top text'
                    className='form-input' 
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder='Bottom text'
                    className='form-input'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className='form-button'
                    onClick={getMemeImage}
                    >Get a new meme image 🖼️</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme-image'/>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    );
}