import Image from "next/image";

const Banner2 = () => {
    return (
        <div className="h-screen relative bg-base-100">
            <Image src="/img/ccchaos.svg" layout="fill" objectFit="cover" alt="background" />
            <div className="md:w-1/2 sm:w-full right-0 flex h-screen absolute justify-center flex-col">
                <div className="mx-auto px-8">
                    
                    <h1 className=" font-bold mb-4">Ismail Kayadelen</h1>
                    <h3 className="font-light mb-4">Development & Design</h3>
                    <a
                        href="#_"
                        className="relative m-1 hover:shadow-2xl hover:shadow-primary hover:scale-110 duration-300 outline outline-offset-1 outline-2 outline-primary/50 hover:outline-primary/75 ease-in-out duration-100 active:outline-primary bg-gradient-to-br from-[#180042] via-[#2e017d] to-primary inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Let's work together!</span>
                    </a>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-12 flex items-center justify-center z-50">
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

export default Banner2;
