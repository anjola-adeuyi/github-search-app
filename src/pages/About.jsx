const About = () => {
  return (
    <>
      <h1 className="text-5xl mb-4">
        Github Search Users App
      </h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          <strong>React Front To Back</strong>
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com' target='_blank' rel='noreferrer'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Done by:
        <a className='text-white' href='https://twitter.com/anjola_adeuyi' target='_blank' rel='noreferrer'>
          {'  '} Anjolaoluwa Adeuyi Joshua
        </a>
      </p>
    </>
  )
}

export default About
