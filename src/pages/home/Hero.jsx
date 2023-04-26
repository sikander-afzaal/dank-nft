const Hero = () => {
  return (
    <div className="wrapper mt-[220px]">
      <div className="contain flex-col justify-center items-center gap-14">
        <h2 className="text-center uppercase max-w-[900px] text-[55px] text-white font-bold">
          Dank is here to help grow the meme army{" "}
        </h2>
        <div className="flex justify-between  items-center w-full gap-8">
          <div className="flex justify-start max-w-[580px] items-start flex-col gap-5 ">
            <h3 className="text-primary uppercase text-[36px] font-bold">
              So that we can conquer the dog coins for good
            </h3>
            <p className="text-2xl font-bold text-white">
              We are the original meme
            </p>
            <p className="text-2xl font-bold text-white">
              Launched with zero taxes
            </p>
            <p className="text-2xl font-bold text-white">
              LP burnt and a clean BS free contract
            </p>
            <p className="text-2xl font-bold text-white">
              $DANK is the perfect coin for all meme lovers worldwide.
            </p>
            <button className="bg-babyPink text-white text-2xl font-bold rounded-full w-[250px] h-[76px] flex justify-center items-center gap-4 ">
              Buy Now{" "}
              <svg
                width="46"
                height="22"
                viewBox="0 0 46 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4148 22L32.9449 19.3417L39.2078 12.8333H0V9.16667H39.2078L32.9449 2.65833L35.4148 0L46 11L35.4148 22Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <img
            className="w-full max-w-[550px] object-contain"
            src="/hero-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
