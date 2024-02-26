import { useEffect, useState } from 'react';
import { inspiringQuotes } from './inspiringQuotes';

const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        let timerId = setInterval(() => {
            setQuoteIndex(prevIndex => (prevIndex + 1) % inspiringQuotes.length);
        }, 2500);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="text-white flex flex-col justify-center items-center w-[80%] p-4 mx-auto my-8 border shadow-lg bg-red-400">
            <p className=" italic text-2xl my-4">Inspiring Quotes</p>
            <div className='flex flex-col justify-center items-center'>
                <div>{inspiringQuotes[quoteIndex].author}</div>
                <div>
                    <button></button>
                    <img className='rounded-full w-[100] h-[100]' src={inspiringQuotes[quoteIndex].imageUrl} alt='author' />
                    <button></button>
                </div>
                <div>
                    {inspiringQuotes[quoteIndex].quote}
                </div>
            </div>
            <div className='flex'>
                {
                    inspiringQuotes.map(i => {
                        return (
                            <div className={`w-4 h-4 bg-white rounded-full m-2 ${i===quoteIndex? 'bg-black' : ''}`}></div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Quotes;