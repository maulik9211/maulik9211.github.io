
export default function HandWrittenServices() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 pb-20 mb-20">


            <div className="card rounded-full align-middle justify-center mt-32 sm:mt-60 " >
                {/* <img
                    src="/svg/green.svg"
                    className="absolute opacity-40 rotate-180 scale-125"
                /> */}

                <object type="image/svg+xml" data="/svg/green1.svg"
                    className="absolute opacity-20 rotate-180 scale-125"
                />


                <h2 className="z-10  text-green-800 text-3xl font-semibold text-center handwriting2" >Frontend</h2>

                <h2 className="z-10 text-green-600 text-2xl handwriting1 absolute top-[4em] left-[3em]" >React</h2>
                <h2 className="z-10 text-green-600 text-2xl handwriting1 absolute bottom-[5em] right-[2.5em] rotate-6" >React Native</h2>
                <h2 className="z-10 text-green-600 text-2xl handwriting1 absolute top-[5em] right-[2em] -rotate-12" >Tailwind</h2>
                <h2 className="z-10 text-green-600 text-2xl handwriting1 absolute bottom-[2.5em] left-[2em] -rotate-12" >Electron</h2>
            </div>


            <div className="card rounded-full align-middle justify-center mt-80 sm:mt-60" >
                {/* <img
                    src="/svg/blue.svg"
                    className="absolute opacity-40 scale-125"
                /> */}

                <object type="image/svg+xml" data="/svg/blue1.svg"
                    className="absolute opacity-30 scale-125 md:scale-150 scale-y-150  md:-rotate-45"
                />


                <h2 className="z-10 text-blue-800 text-3xl font-semibold text-center handwriting2" >Backend</h2>

                <h2 className="z-10 text-blue-500 text-2xl handwriting1 absolute top-[1.7em] left-[1em] -rotate-6" >Node.js</h2>
                <h2 className="z-10 text-blue-500 text-2xl handwriting1 absolute bottom-[2.5em] right-[2em] rotate-12" >Redis</h2>
                <h2 className="z-10 text-blue-500 text-2xl handwriting1 absolute top-[3em] right-[2em]" >MongoDB</h2>
                <h2 className="z-10 text-blue-500 text-2xl handwriting1 absolute bottom-[3em] left-[1em] -rotate-12" >Internet Of Things</h2>
                <h2 className="z-10 text-blue-500 text-xl handwriting1 absolute -bottom-[150px] left-[3em] md:left-[6em] rotate-6" >TimeSeries<br /> Databases</h2>
                <h2 className="z-10 text-blue-500 text-2xl handwriting1 absolute bottom-[7em] left-[5em] md:left-[8em]" >MySQL</h2>
            </div>

            <div className="card  rounded-full align-middle justify-center  mt-80 sm:mt-60" >
                {/* <img
                    src="/svg/yellow.svg"
                    className="absolute opacity-40 rotate-90 scale-110"
                /> */}

                <object type="image/svg+xml" data="/svg/yellow1.svg"
                    className="absolute opacity-30 scale-110 md:scale-125"
                />


                <h2 className="z-10 text-amber-800 text-3xl font-semibold text-center handwriting2" >Cloud/Hosting</h2>

                <h2 className="z-10 text-amber-600 text-2xl handwriting1 absolute bottom-[3em] left-20 rotate-6 md:-rotate-6" >Amazon Web Services</h2>
                <h2 className="z-10 text-amber-600 text-2xl handwriting1 absolute top-[3em] left-[3em]" >Nginx</h2>
                <h2 className="z-10 text-amber-600 text-2xl handwriting1 absolute top-[3em] right-[2em] md:right-[4em] -rotate-12" >App Stores</h2>
            </div>

        </div>
    )
}
