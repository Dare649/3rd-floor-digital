import Image from 'next/image';
import floor from '@public/assets/images/download.jpg';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="my-40 w-full px-5" id="contact">
      <h1 className='capitalize text-6xl font-bold text-center'>contact us</h1>
      <div className="content flex lg:flex-row sm:flex-col items-center gap-10 px-3 w-full mt-10 mb-10">
        <form className='lg:w-[50%] sm:w-full'>
            <input type="text" 
                placeholder='Full Name'
                className='w-full p-3 border-2 outline-none mb-5 focus:border-orange-500'
            />
            <input type="email" 
                placeholder='Email'
                className='w-full p-3 border-2 outline-none mb-5 focus:border-orange-500'
            />
            <textarea cols="30" rows="10" className='w-full p-3 border-2 outline-none mb-5 focus:border-orange-500' placeholder='message'></textarea>
            <div className='w-full'>
                <button className="rounded-full text-lg capitalize px-72 py-2 bg-orange-500 hover:bg-transparent hover:text-orange-500 border-2 border-transparent hover:border-orange-500">submit</button>
            </div>
        </form>
        <div className="image lg:w-[50%] sm:w-full">
            <Image
                src={floor}
                alt='3rdfloor digital'
                width={'fit'}
                className='w-full border-2 border-black'
            />
        </div>
    </div>
      <p className='text-center text-xl font-bold capitalize mt-20'> &copy; 3rd floor digital 2023</p>
      <Link href={"home"} className='flex float-right text-lg font-bold text-white bg-orange-500 rounded-lg px-3 py-1'>back to the top</Link>
    </section>
  )
}

export default Contact
