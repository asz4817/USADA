
const RecapVideo = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <iframe
        className="w-[90vw] max-w-[1000px] aspect-video rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/xaldkDtXwNw?si=23VlLQL7GE1rvnfq" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
    </div>
    </>
  )
}

export default RecapVideo
