import SocialLinks from './social';
import {socials} from '../../data/data';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-base-content bg-[url('/img/purple.png')]">
             <SocialLinks socials={socials} />
            <div>
                <p className="text-white font-bold">Ismail Kayadelen | {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
