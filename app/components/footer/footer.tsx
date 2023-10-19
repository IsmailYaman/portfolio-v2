import SocialLinks from "./social";
import { socials } from "../../data/data";

const Footer = () => {
    return (
        
        <footer className="footer footer-center sm:h-screen md:h-96 p-10 text-primary-content bg-[url('/img/oooscillate.svg')] bg-no-repeat bg-center bg-cover ">
            <aside>
                {/* <Image src={"/img/svg.svg"} fill className="" alt={"footer background"} /> */}
            </aside>
            <SocialLinks socials={socials} />
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
        
        // <footer className="footer footer-center bg-no-repeat h-screen bg-cover bg-center p-10 text-base-content bg-[url('/img/oooscillate.svg')]">
        // {/* <footer className="footer footer-center text-base-content "> */}
        //     {/* <Image src={"/img/oooscillate.svg"} fill className="" alt={"footer background"} /> */}
        //     <SocialLinks socials={socials} />
        //     <div>
        //         <p className="text-white font-bold">Ismail Kayadelen | {new Date().getFullYear()}</p>
        //     </div>
        // </footer>
    );
};

export default Footer;
