
const News = () => {
  return (
    <div>
      <section className="px-6 py-10 w-[80%] mx-auto">
        {/* Section Heading */}
        <div className="mb-8">
            <h2 className="text-4xl font-black italic relative w-fit">
            News
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600"></span>
            </h2>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="bg-gray-900 shadow-md relative">
                {/* Top Image Placeholder */}
                <div className="bg-gray-300 h-110 w-full"></div>

                {/* Slanted Bottom Section */}
                <div
                className="bg-[#1F2B67] text-white p-4 pt-20 h-60 absolute -left-1 -right-1 bottom-0"
                style={{
                    clipPath: 'polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)',
                }}
                >
                <h3 className="text-white font-bold italic mb-2">
                    News Article Header
                </h3>
                <p className="text-sm leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Morbi sagittis nec est
                    consequat sit in ullamcorper. Etiam laoreet at vitae duis
                    placerat nam...
                </p>
                <div className="flex justify-end mt-4">
                    <span className="text-2xl">→</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>

    </div>
  )
}

export default News
