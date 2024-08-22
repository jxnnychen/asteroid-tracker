export default function Main() {
    return (
        <div className='flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto pt-6 pb-10'>   
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4'> asteroid tracker </h1>
            <div className='flex items-start text-xs space-x-2 pb-2' style={{ fontFamily: 'Cutive Mono', textAlign:'left'}}>
                <img 
                    src='favicon-192.png'
                    alt='NASA logo' 
                    className='w-8 h-8' 
                />
                <p>
                    This app uses data from NASA's Near Earth Object Web Service (NeoWs) API 
                    to provide real-time information on asteroids passing close to Earth.
                </p>
            </div>
            <p className='items-start text-md' style={{textAlign:'left'}}>Choose a date to see stats on nearby asteroids, including their close approach distance, velocity, and other characteristics. Click to find out more! </p>
        </div>
    )
}