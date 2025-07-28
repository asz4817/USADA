interface TeamCardProps {
  image: string;
  university: string;
  teamName: string;
}


const TeamCard = ({ image, university, teamName }: TeamCardProps)  => {
  return <div>
    <div className="flex items-start bg-white text-black p-4 rounded-md shadow-md h-36 w-full">
      <img src={image} alt={teamName} className="w-25 h-25 object-contain mr-2 mt-2" />

      {/* Right side: vertical flex to keep content spaced top-bottom */}
      <div className="flex flex-col justify-between h-full">
        <h2 className="text-m font-medium mt-3">{university}</h2>

        <div>
          <div className="w-5 h-1 bg-black mb-1" />
          <p className="text-sm">{teamName}</p>
        </div>
      </div>
    </div>
  </div>;
}

export default TeamCard
