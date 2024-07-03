import Image from "next/image";

const Banner = () => {
    return (
        <div className="h-screen relative">
            <Image src="/img/ccchaos4.svg" width={5000} height={5000} className="max-h-screen object-cover h-screen absolute" alt="background"/>
            <div className="md:w-1/2 sm:w-full right-0 flex h-screen absolute justify-center flex-col">
                <div className="mx-auto px-8">
                    
                    <h1 className=" font-bold mb-4">Ismail Kayadelen</h1>
                    <h2 className="font-light text-3xl mb-4">Development & Design</h2>
                    <a
                        href="mailto:iso_yaman@outlook.com"
                        className="relative m-1 hover:shadow-2xl hover:shadow-primary hover:scale-110 duration-300  ease-in-out  active:outline-primary bg-gradient-to-br from-[#180042] via-[#2e017d] to-primary inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                    >
                        <span className="relative">Let&#39;s work together!</span>
                    </a>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-12 flex items-center justify-center z-40">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 motion-safe:animate-bounce"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Banner;
