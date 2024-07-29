

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">Your Gateway to Seamless Travel Booking
        
      </h1>
      <p className="leading-relaxed">Find the Best Deals on Flights, Hotels, and Car Rentals with Ease. </p> 
      <p>Book Now and Start Your Journey with Confidence!</p>
      <div className="flex justify-center mt-8">
        <button className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg">Get Started</button>
        <button className="ml-4 inline-flex text-gray-700 border border-red-400 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-xl text-lg">Explore Services</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded w-94" alt="hero" src="/hero.svg"/>
    </div>
  </div>
</section>
  )
}

export default Hero