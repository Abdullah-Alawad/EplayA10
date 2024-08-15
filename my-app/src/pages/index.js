export default function Home() {
  return (
    <div className="flex flex-col font-custom justify-center items-center bg-[url('../../public/bg1.png')] bg-repeat px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10 mt-3 sm:mt-5 lg:mt-8 text-yellow-300'>
      Ooops, wrong page I guess...
    </h1>
    <iframe
      width="100%"
      height="auto"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
      allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
      className='mb-8 sm:mb-12 md:mb-16 lg:mb-24 rounded-2xl lg:w-2/3 xl:w-1/2' // Adjust width for larger screens
      style={{ aspectRatio: '16 / 9' }} // Maintains a 16:9 aspect ratio
    ></iframe>
    <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-3 sm:mt-5 lg:mt-8'>
      Okay sorry but I really wanted to do this <br />
      here is the link :&#41;
    </div>
    <a
      className='underline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-red-900 hover:text-yellow-500'
      href='https://esports-project-frontend.vercel.app/'
    >
      ZAAAA LINK
    </a>
  </div>
  );
}
