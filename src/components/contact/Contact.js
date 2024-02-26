const Contact = () => {
    return (
        <div id='contact' className='flex flex-col items-center w-[80%] p-4 mx-auto my-8 border shadow-lg hover:bg-gray-100 hover:border-3'>
            <p className="italic text-2xl ">Contact Me</p>
            <ul className="flex justify-center my-4">
                <li><a href='mailto:mdasif010998@gmail.com'><button><img className="rounded w-[70] h-[70] mx-4" src='https://tse4.mm.bing.net/th?id=OIP.gBxckyCbOcmOdOsXxKm8gQHaHa&pid=Api&P=0&h=220' alt='mail'/></button></a></li>
                <li><a href='https://www.linkedin.com/in/asif-raza-79a00a1a1/' target='blank'><button><img className="rounded w-[70] h-[70] mx-4" src='https://tse1.mm.bing.net/th?id=OIP.AuHdEodxsrUmjdfvWn37vwHaIW&pid=Api&P=0&h=220' alt='linkeldn'/></button></a></li>
                <li><a href='https://github.com/mdasifraza33' target='blank'><button ><img className="rounded w-[70] h-[70] mx-4" src='https://tse1.mm.bing.net/th?id=OIP.7DpgyMZTmgfrcLUvZzfqbgAAAA&pid=Api&P=0&h=220' alt='github'/></button></a></li>
            </ul>
        </div>
    )
}

export default Contact;