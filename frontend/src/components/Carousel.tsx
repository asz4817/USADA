import compPhoto from "../assets/competition.png"
import ButtonBig from "./ButtonBig"

const Carousel = () => {
  return (
    <>
      <section className="z-0 w-full aspect-[2] relative flex justify-center bg-red-100">
        <img src = {compPhoto} className="object-cover w-full"/>
        <div className="absolute bottom-[5%] grid grid-cols-2 gap-10">
            <div>
            <ButtonBig> About <br/> 2024 Nationals</ButtonBig>
            </div>
            <div>
            <ButtonBig> Watch Competition <br/> Livestream </ButtonBig>
            </div>
        </div>
      </section>

    </>
  )
}

export default Carousel
