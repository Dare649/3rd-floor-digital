import Image from 'next/image';
import floor from '@public/assets/images/download.jpg';

const About = () => {
  return (
    <section className='about w-full px-5 my-40' id='about'>
      <h1 className='capitalize text-6xl font-bold text-center'>about us</h1>
      <div className="content flex lg:flex-row sm:flex-col items-center gap-10  px-2">
        <Image
          src={floor}
          width={"fit"}
          alt='3rd floor digital'
          className='w-3/5 border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
        />
        <div className="text text-lg lg:px-20 sm:px-0">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo corrupti quae nam deleniti. Inventore ea placeat voluptas est dolorem pariatur, et perspiciatis, blanditiis delectus nam dignissimos! Quo, beatae odit.</p>
        </div>
      </div>
    </section>
  )
}

export default About
