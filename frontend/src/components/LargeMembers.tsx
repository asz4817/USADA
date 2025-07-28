import instagramLogo from '../assets/instagramLogo.png';

interface LargeMemberProps {
  name: string;
  location: string;
  role: string[];
  image: string;
  instagram: string;
}

const LargeMembers = ({ name, location, role, image, instagram }: LargeMemberProps) => {
  return (
    <div>
        
      <div className="flex flex-col md:flex-row items-center justify-center px-8 space-y-8 md:space-y-0 md:space-x-12">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={image}// Replace with your actual path
          className="w-64 h-64 rounded-full object-cover border-4 border-black shadow-lg"
        />
      </div>

      {/* Info Section */}
      <div className="text-center md:text-left max-w-xl">
        <h3 className="text-3xl font-extrabold">{name}</h3>
        <p className="italic text-gray-500 mb-4">{location}</p>


        <ul className="list-disc list-inside text-lg space-y-1">
        {role.map((item, index) => (
          <li key={index} className="text-sm text-gray-500">{item}</li>
        ))}
      </ul>

        {/* Socials */}
        <div className="flex justify-center md:justify-start mt-4 space-x-4">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LargeMembers
