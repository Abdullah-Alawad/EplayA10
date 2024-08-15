
export default function Home() {
  return (
    <div className="flex flex-col font-custom justify-center items-center bg-[url('../../public/bg1.png')] bg-repeat">
      <h1 className='text-4xl font-extrabold mb-10 mt-5 text-yellow-300'>Ooops, wrong page I guess...</h1>
      <iframe
        width="760"
        height="415"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
        //frameBorder="0"
        allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        className='mb-32 rounded-2xl'
      ></iframe>
      <div className='text-3xl font-extrabold mb-10 mt-5'>Okay sorry but I really wanted to do this <br />here is the link :&#41;</div>
      <a className='underline text-5xl font-semibold mb-[500px] text-red-900 hover:text-yellow-500' href='https://esports-project-frontend.vercel.app/'>ZAAAA LINK</a>
    </div>
  );
}
