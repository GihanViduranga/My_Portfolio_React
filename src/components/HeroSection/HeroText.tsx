

const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 h-full justify-center ad:text-left sm:text-left">
            <h2 className="lg:text-3xl sm:text-xl uppercase text-black">Frontend Developer</h2>
            <h1 className="md:text-[3rem] lg:text-7xl font-bold font-special text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 leading-normal">Gihan Viduranga</h1>
            <p className="text-2xl mt-4 text-black">A Passionate Wed Developer and UI/UX Designer</p>
        </div>
    );
};

export default HeroText;