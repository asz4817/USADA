import ButtonSmall from "../components/ButtonSmall"

const TravelandLog = () => {
  return (
    <div className="mx-25">
        <div className="px-6 py-12 md:px-12 lg:px-24 space-y-4">
        <h1 className="text-5xl font-bold text-rose-800 text-center mb-8 tracking-wide">
            TRAVEL & LODGING
        </h1>

        <div>
        <h2 className="text-3xl font-bold mb-1">Getting There</h2>
        <p>
            For those flying in from out of state, we recommend flying into Newark Liberty International Airport. The competition venue (Sportsplex at Metuchen) is roughly a 25 minute drive from Newark Airport. An alternative option would be to fly into New York JFK International Airport which is roughly a 1 hour drive to the venue. <br/>
            Limited public transportation is available between Newark Liberty Airport and the venue.

        </p>
        </div>
        
        <div>
            <h2 className="text-3xl font-bold mb-1">Lodging</h2>

            <p className="mt-4">
            We have secured a group rate of $139 + taxes and fees per night per room for August 1st and August 2nd at the Crowne Plaza Edison. The hotel is less than a 10-minute drive from the venue and is conveniently located around various restaurants and shopping malls in the area. We highly encourage competitors to book at the hotel listed as you will be able to socialize with other competitors during non-competition hours. Additionally, we may be hosting informal social events & gatherings at the hotel during the night.
            </p>
            <br />

            Please read the notes below to ensure you can stay with us at the Crowne Plaza Edison: 
            <ol className="list-decimal list-inside  mt-2 space-y-1 mx-5">
            <li>We currently only have a certain number of rooms contracted with the hotel. If you or your parents/guardians are unable to book using the link, please contact the hotel at (732) 287-3500 and mention that you would like to book a room with the USA Diabolo Association’s group rate.</li>
            <li>You must be 21+, or staying with a guest that is 21+ to be able to check in to the hotel. </li>
            <li>The group nightly rate can be extended up to 3 days before and after the two scheduled nights of August 1st and August 2nd. Please contact the hotel directly if you are planning to stay more nights.</li>
            </ol>

            <p className="mt-4">
            Please use the button below to reserve a room: <br/>
            <a
                href="https://tinyurl.com/2nny8urr"
                target="_blank"
                rel="noopener noreferrer"
                >
            <button className="text-bold text-md py-2.5 px-4 rounded-full bg-purple-300">
                Reserve a Room
            </button></a>
            </p>
        </div>


        </div>
    </div>
  )
}

export default TravelandLog
