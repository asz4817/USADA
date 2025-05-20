import { Link } from "react-router-dom"

const WatchVideos = () => {
  return (
    <div className="w-[90%] max-w-[1100px] mx-auto my-10">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 px-6 py-12">
        {/* Left Text */}
        <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold italic text-black mb-6">Watch Videos</h2>
            <Link
            to="https://www.youtube.com/watch?v=xaldkDtXwNw&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=OTY3MTQ"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-700 font-semibold italic flex items-center gap-2 hover:underline"
            >
            Competition Playlists
            <span className="text-xl">→</span>
            </Link>
        </div>

        {/* Video Cards */}
        <div className="flex flex-col flex-row gap-4">
            {/* Card 1 */}
            <div className="border-r border-gray-400 pr-10 flex flex-col items-start">
            <h3 className="text-lg font-bold italic text-red-700">
                <span className="block leading-tight">2024 USA National</span>
                 <span className="block leading-tight">Diabolo Competition</span>
            </h3>
            <p className="text-sm text-black my-2 italic">Metuchen, New Jersey</p>
            <Link
            to="https://www.youtube.com/watch?v=xaldkDtXwNw&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=OTY3MTQ"
            target="_blank" 
            className="mt-4 border border-black rounded px-2 py-1 text-sm"
            rel="noopener noreferrer">
                ▶
            </Link>
            </div>

            {/* Card 2 */}
            <div className="border-r border-gray-400 pr-10 flex flex-col items-start">
            <h3 className="text-lg font-bold italic text-red-700">
                <span className="block leading-tight">2023 USA National</span>
                <span className="block leading-tight">Diabolo Competition</span>
            </h3>
            <p className="text-sm text-black my-2 italic">East Brunswick, New Jersey</p>
            <Link
            to="https://www.youtube.com/watch?v=xaldkDtXwNw&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=OTY3MTQ"
            target="_blank" 
            className="mt-4 border border-black rounded px-2 py-1 text-sm"
            rel="noopener noreferrer">
                ▶
            </Link>
            </div>
        </div>
        </div>

    </div>
  )
}

export default WatchVideos
