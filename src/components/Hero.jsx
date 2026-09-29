export default function Hero() {
    return (
        <header id="top" className="mt-4">
            <p className="text-black font-normal text-base">Hi, I'm</p>
            <br/>
            <h1 className="text-4xl font-bold font-serif my-2 text-black">
                Juan dela Cruz
            </h1>
            <p className="text-black font-normal text-base max-w-2xl my-3">
                A third year IT student who builds small web apps for the people around me.
            </p>
            <div className="mt-4">
                <a href="#projects" className="text-blue-600 underline mr-2">
                    See my projects
                </a>
                <a href="#contact" className="text-blue-600 underline">
                    Contact me
                </a>
            </div>
        </header>
    );
}
