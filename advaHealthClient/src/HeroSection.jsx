const HeroSection = () => {
    return (
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
          <h2 className="text-4xl font-bold">Transforming Maternal Health, One Click at a Time</h2>
          <p className="mt-4">Harnessing Technology and Compassion to Make Maternal Healthcare More Accessible and Effective</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-teal-400 text-black px-4 py-2 rounded-lg">Contact Us</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">Learn More</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  