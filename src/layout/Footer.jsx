const Footer = () => {
  return (
    <footer className="wrapper bg-primary">
      <div className="contain sm:flex-row flex-col justify-between items-center py-5 sm:p-0 gap-4 sm:gap-0 sm:h-[105px]">
        <p className="text-black text-base sm:text-lg font-varela">
          © 2023 by DANK. All rights reserved!
        </p>
        <div className="flex justify-center gap-2">
          <a
            href="#"
            target="blank"
            className="rounded-full bg-white w-[35px] sm:w-[45px] aspect-square grid place-items-center"
          >
            <img
              src="/twitter.png"
              className="max-w-[20px] sm:max-w-[28px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target="blank"
            className="rounded-full bg-white w-[35px] sm:w-[45px] aspect-square grid place-items-center"
          >
            <img
              src="/telegram.png"
              className="max-w-[20px] sm:max-w-[28px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target="blank"
            className="rounded-full bg-white w-[35px] sm:w-[45px] aspect-square grid place-items-center"
          >
            <img
              src="/dex.png"
              className="max-w-[20px] sm:max-w-[28px] object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            target="blank"
            className="rounded-full bg-white w-[35px] sm:w-[45px] aspect-square grid place-items-center"
          >
            <img
              src="/medium.png"
              className="max-w-[20px] sm:max-w-[28px] object-contain"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
