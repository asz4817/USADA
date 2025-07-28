import instagramLogo from '../assets/instagramLogo.png';

interface BoardMemberProps {
  name: string;
  location: string;
  role: string[]; // assuming it's a list of roles
  image: string;
  instagram: string;
}

const BoardMember = ({ name, location, role, image, instagram }: BoardMemberProps) => {
  return (
    <div className="relative text-center flex flex-col items-center pb-8">
      <img src={image} alt={name} className="rounded-full w-48 h-48 object-cover" />
      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{location}</p>
      <ul className="text-left mt-4">
        {role.map((item, index) => (
          <li key={index} className="text-sm text-gray-500">{item}</li>
        ))}
      </ul>

      <a href={instagram} target="_blank" rel="noopener noreferrer" className="absolute bottom-1 left-6">
        <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default BoardMember;
