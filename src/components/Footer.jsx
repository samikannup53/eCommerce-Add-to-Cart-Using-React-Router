import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#172337] p-4">
      <div className="container mx-auto p-8 sm:p-4 flex flex-col-reverse lg:flex-row justify-between gap-y-10">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 items-center lg:items-start text-white">
          <h3 className="footer-navlink-title">Connect</h3>
          <div className="flex items-center gap-2">
            <img src="./logo-white.svg" alt="logo" className="w-8" />
            <h1 className="font-semibold text-lg">ShoppyCart</h1>
          </div>
          <p className="w-[95%] sm:w-[50%] lg:w-[70%] text-sm text-center sm:text-left cursor-default">
            Krishna Nivas, No. 8-1-164/345/A/1, Pragati Colony, Krishnaraja Pura,
            Chennai, Tamilnadu , 600 001
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap justify-between gap-y-10">
          <div className="w-2/3 sm:w-auto flex flex-col gap-2">
            <h3 className="footer-navlink-title">Company</h3>

            <nav className="flex flex-col gap-2">
              <span className="footer-navlink">About Us</span>
              <span className="footer-navlink">Mission</span>
              <span className="footer-navlink">Vission</span>
              <span className="footer-navlink">Contact</span>
            </nav>
          </div>

          <div className="w-1/3 sm:w-auto flex flex-col gap-2  ">
            <h3 className="footer-navlink-title">Quick Links</h3>

            <nav className="flex flex-col gap-2">
              <span className="footer-navlink">Home</span>
              <span className="footer-navlink">Products</span>
              <span className="footer-navlink">Cart</span>
              <span className="footer-navlink">About US</span>
            </nav>
          </div>

          <div className="w-2/3 sm:w-auto flex flex-col gap-2 sm:-mr-10">
            <h3 className="footer-navlink-title">Help</h3>
            <nav className="flex flex-col gap-2">
              <span className="footer-navlink">Payments</span>
              <span className="footer-navlink">Shipping</span>
              <span className="footer-navlink">Cancellation</span>
              <span className="footer-navlink">Returns</span>
              <span className="footer-navlink">Refunds</span>
            </nav>
          </div>

          <div className="w-1/3 sm:w-auto flex flex-col gap-2">
            <h3 className="footer-navlink-title">More</h3>

            <nav className="flex flex-col gap-2">
              <span className="footer-navlink">Terms</span>
              <span className="footer-navlink">Privacy</span>
              <span className="footer-navlink">Contact</span>
              <span className="footer-navlink">FAQ</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 p-4">
        <img className="social-icons" src={instagram} />
        <img className="social-icons" src={whatsapp} />
        <img className="social-icons" src={twitter} />
        <img className="social-icons" src={youtube} />
      </div>
      <p className="text-center text-xs sm:text-sm text-white cursor-default">
        Copyright @ 2025 ShoppyCart. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
