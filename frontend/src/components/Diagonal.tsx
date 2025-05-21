import ButtonSmall from "./ButtonSmall";
import hoodieFront from '../assets/hoodieFront.png'
import hoodieBack from '../assets/hoodieBack.png'


const Diagonal = () => {
  return (
    <>

      <section className="w-full aspect-[2.25]">
        <div className="h-full relative">
            {/* Text section */}
            <div 
                className="absolute w-full z-30 h-full p-[5%] grid items-center bg-white text-wrap" 
                style={{
                    clipPath: 'polygon(0% 0%, 0% 100%, 40% 100%, 50% 0%)',
                }}
            >
                <div>
                    <div className="max-w-[35%]">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            Support future USADA events & buy merch!
                        </h1>
                        <p className="mb-6 text-sm">
                        Check out our 2024 Nationals Merchandise
                        </p>

                        <ButtonSmall colors="bg-black text-white">
                            Buy Now
                        </ButtonSmall>
                    </div>

                </div>
            </div>
                

            {/* Image section with diagonal clip-path */}
            <div className="absolute top-0 right-0 h-full aspect-[1.5] z-10" style={{ backgroundColor: '#E7E7E7' }}>
                <div className="relative w-full h-full flex" >
                    <img 
                        src={hoodieBack} 
                        className="absolute h-[90%] z-10 left-[15%]"
                    />
                    <img 
                        src={hoodieFront} 
                        className="absolute z-20 h-[70%] top-[25%] right-[3%]" 
                    />
                </div>
            </div>


        </div>
      </section>
    </>
  )
}

export default Diagonal;
