export default function Main() {
    return (
        <div className='min-h-screen flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-8'>   
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3'> asteroid tracker </h1>
          <p className='text-sm md:text-base'>This app uses data from NASA's Near Earth Object Web Service (NEOWS) API to provide real-time information on asteroids passing close to Earth. Use the date selector to find out about specific dates. </p>
        </div>
    )
}