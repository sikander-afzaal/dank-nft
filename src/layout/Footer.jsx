const Footer = () => {
  return (
    <footer className="wrapper bg-primary">
      <div className="contain sm:flex-row flex-col justify-between items-center py-5 sm:p-0 gap-4 sm:gap-0 sm:h-[105px]">
        <p className="text-black text-base sm:text-lg font-varela">
          © 2023 by DANK. All rights reserved!
        </p>
        <div className="flex justify-center gap-2">
          <a href="https://twitter.com/dankarmyeth" target="blank">
            <img
              src="/twitter.svg"
              className=" w-[45px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/dankarmyeth" target="blank">
            <img
              src="/fb.webp"
              className=" w-[45px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a href="https://t.me/dankarmyeth" target="blank">
            <img
              src="/telegram.svg"
              className=" w-[45px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xcbb80c9757337a38079f177409addc02910ba9ac"
            target="blank"
          >
            <img
              src="/dex.svg"
              className=" w-[45px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0f356DED5392Ca35CB2DEb69C6daeC9FC277A1Db"
            target="blank"
          >
            <img
              src="/uniswap.webp"
              className=" w-[45px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>

          <a
            href="https://etherscan.io/token/0x0f356DED5392Ca35CB2DEb69C6daeC9FC277A1Db"
            target="blank"
          >
            <img
              src="/medium.svg"
              className=" w-[45px]  hover:rotate-90 transition-all duration-700 object-contain"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
