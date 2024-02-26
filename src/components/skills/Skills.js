const Skills = () => {
    return (
        <div id='skills' className='flex flex-col items-center w-[80%] p-4 mx-auto my-8 border shadow-lg hover:bg-gray-100 hover:border-3'>
            <p className=' italic text-2xl'>Skills</p>
            <img src={require('../../../assets/mern_.png')} alt='skills' />
            <p className='my-2'>Download my resume</p>
            <a href='../../../assets/resume.pdf' download>
                <button className='bg-red-400 border-1 border-black rounded-lg p-3 my-2 text-white italic pointer hover:bg-red-700'>
                    Download
                </button>
            </a>
        </div>
    )
}

export default Skills;