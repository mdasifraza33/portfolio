const About = () => {
    return (
        <div id='about' className="flex justify-around items-center w-[80%] p-4 mx-auto my-8 border shadow-lg hover:bg-gray-100 hover:border-3">
            <div>
                <img className='rounded-full w-[200] h-[200]' src={require('../../../assets/dp.jpeg')} alt='dp' />
            </div>
            <div className='w-[60%]'>
                <p className='italic text-2xl my-2'>About Me</p>
                <p>
                    A dedicated full-stack developer with a strong command of React, Node.js, Express.js, MySQL, MongoDB, HTML, and CSS. 
                    My passion lies in crafting seamless user experiences and robust backend solutions that drive innovation and exceed client expectations.
                    <br/>
                    With years of hands-on experience, I thrive in building dynamic web applications from conception to deployment. 
                    Whether it's designing captivating user interfaces with React.js or architecting scalable backend systems with Node.js and Express.js, 
                    I bring a blend of creativity and technical expertise to every project. Let's collaborate to bring your ideas to life and 
                    create impactful digital experiences that leave a lasting impression.
                </p>
            </div>
        </div>
    )
}

export default About;