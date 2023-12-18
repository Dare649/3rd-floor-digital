import Image from "next/image";
import floor from "@public/assets/images/download.jpg";

const Services = () => {
  return (
    <section className='services w-full px-5 my-40' id='services'>
      <h1 className='capitalize text-6xl font-bold text-center'>services</h1>
      <div className="content py-10 px-2">
        <div className="service1 flex lg:flex-row sm:flex-col gap-10 items-center">
          <div className="lg:py-10 sm:py-0 lg:px-20 sm:px-0">
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum corrupti saepe iusto, adipisci fugiat molestiae atque aut blanditiis numquam!
            </p>
          </div>
          <Image
            src={floor}
            width={'fit'}
            alt="3rd floor digital"
            className='w-2/5 border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          />
        </div>
        <div className="service2 flex lg:flex-row sm:flex-col gap-10 items-center mt-20">
          <Image
            src={floor}
            width={'fit'}
            alt="3rd floor digital"
            className='w-2/5 border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
          />
          <div className="lg:py-10 sm:py-0 lg:px-20 sm:px-0">
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum corrupti saepe iusto, adipisci fugiat molestiae atque aut blanditiis numquam!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
