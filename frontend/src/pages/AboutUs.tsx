
export default function AboutUs() {
  return (
    <>
    <div className="py-16 px-4 text-center space-y-12 w-[75%] mx-auto">

      <div className="text-center">
        <span className="inline-block relative">
          <p className="text-6xl font-bold tracking-wide text-purple-400 text-shadow-lg/10">
            OUR MISSION
          </p>
        </span>
      </div>

      {/* Mission Statement Block */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-widest">MISSION STATEMENT</h2>
        <div className="mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-600/40 to-transparent shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]" />
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Our mission is to grow diabolo into a sport that more people can enjoy across the US.
          Through the USADA, we hope to encourage players of all skill levels to connect with one another
          and to share our collective passion for diabolo.
        </p>
      </div>

      {/* Our Vision Block */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-widest">OUR VISION</h2>
        <div className="mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-600/40 to-transparent shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]" />
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          We will provide resources for US diabolo players to advance their growth as well as work together with other players through events and competitions.
          In collaboration with the International Diabolo Association and other foreign diabolo communities, we will connect our members
          with fellow players locally and abroad.
        </p>
      </div>
    </div>
    </>

  );
}
