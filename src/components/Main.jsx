export default function Main() {
    return (
        <div className='flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-6'>   
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4'> asteroid tracker </h1>
            <div className='flex items-start text-sm space-x-2' style={{ fontFamily: 'Cutive Mono', textAlign:'left'}}>
                <img 
                    src='favicon-192.png'
                    alt='NASA logo' 
                    className='w-10 h-10' 
                />
                <p>
                    This app uses data from NASA's Near Earth Object Web Service (NeoWs) API 
                    to provide real-time information on asteroids passing close to Earth.
                </p>
            </div>
            <p className='items-start text-sm pt-2' style={{textAlign:'left'}}>Choose a date to see stats on nearby asteroids, including their close approach distance, velocity, and other characteristics. Click to find out more! </p>
        </div>
    )
}