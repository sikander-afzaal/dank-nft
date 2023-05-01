const About = () => {
  return (
    <section
      id="about"
      className="wrapper pb-[50px] sm:pb-[100px] xl:mt-0 mt-[100px] "
    >
      <div className="contain xl:flex-row flex-col  justify-center items-center w-full gap-14">
        <img
          src="/about.webp"
          className="w-full  sm:max-w-[550px] object-contain"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-8 w-full">
          <h2 className="title">About</h2>
          <p className="text-white text-lg md:text-2xl font-semibold">
            Pepe is tired of watching everyone play hot potato with the endless
            derivative Inu coins. The Inu’s have had their day. It’s time for
            the most recognizable meme in the world to take his reign as king of
            the memes.
          </p>
          <p className="text-white text-lg md:text-2xl font-semibold">
            Pepe is here to make memecoins great again. Launched stealth with no
            presale, zero taxes, LP burnt and contract renounced, $PEPE is a
            coin for the people, forever. Fueled by pure memetic power, let
            $PEPE show you the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
