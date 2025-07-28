import TeamCard from "../components/TeamCard"; 

const teams = [
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_ad69ce6de1d946989a77a6e9e43fe2a6~mv2.png/v1/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_265671281485367.png',
    university: 'University of Massachusetts Amherst',
    teamName: 'TASC',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_abce1b28cfbf4692a953a3be1cbf4190~mv2.png/v1/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_253104452411690.png',
    university: 'New York University',
    teamName: 'Violet Diabolo',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_56a49ad373d646359e714d0048613243~mv2.png/v1/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_709296386475740.png',
    university: 'Cornell University',
    teamName: 'Pro-Yos',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_82124c276a2649ccbbf3dd3c2d2ba31f~mv2.png/v1/crop/x_0,y_72,w_3601,h_3457/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Finished%202019.png',
    university: 'University of Michigan',
    teamName: 'Revolution',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_6f6e41c67d564633bf4471e0e4bead5b~mv2.jpg/v1/crop/x_0,y_120,w_6000,h_5760/fill/w_250,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FINAL%20UPDATED%209_8%2001%20Artboard%201.jpg',
    university: 'Boston, Massachusetts',
    teamName: 'GBCCA Diabolo',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_efd7ceb2e7124969936e2d56cc6ca086~mv2.jpeg/v1/crop/x_0,y_11,w_558,h_536/fill/w_250,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_536895957025363.jpeg',
    university: 'University of Illinois Urbana-Champaign',
    teamName: 'TASC Special Ops',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_1ef032309fcd48508b54265bd59d177b~mv2.png/v1/crop/x_0,y_19,w_222,h_213/fill/w_250,h_240,al_c,lg_1,q_85,enc_avif,quality_auto/received_662163177968752.png',
    university: 'Washington University in St. Louis',
    teamName: 'YoWu',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_72fd08c81dae4b0cbb3215b269de2fc8~mv2.png/v1/crop/x_0,y_7,w_350,h_336/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/yooy-05.png',
    university: 'Texas Diabolo Association',
    teamName: 'TDA',
  },
  {
    image: 'https://static.wixstatic.com/media/a0e2a4_5846ba9ddd334cfe82c01bdb6ff271e7~mv2.png/v1/crop/x_0,y_60,w_3000,h_2880/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_1713492578790187.png',
    university: 'Boston, Massachusetts',
    teamName: 'Nova Diabolo',
  },
  {
    teamName: "Apex Diabolo",
    university: "Seattle, Washington",
    image: "https://static.wixstatic.com/media/a0e2a4_1d09c2579e69488f8b2e3969d82636b1~mv2.jpeg/v1/crop/x_0,y_20,w_1000,h_960/fill/w_250,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_557930518074667.jpeg", // replace with actual file name
  },
  {
    teamName: "Dragon Flyers",
    university: "Georgia Institute of Technology",
    image: "https://static.wixstatic.com/media/a0e2a4_2d579e36d2a24cdebdaafd1c4c526c86~mv2.png/v1/crop/x_0,y_51,w_2550,h_2448/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Artboard%201.png",
  },
  {
    teamName: "Team Vortex",
    university: "Michigan New Century Chinese School",
    image: "https://static.wixstatic.com/media/a0e2a4_d9334b31069847a5972de3f6fbb91345~mv2.png/v1/crop/x_8,y_0,w_771,h_740/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TeamVortexLogo_PNG.png",
  },
  {
    teamName: "CCALI Diabolo Team",
    university: "Long Island, New York",
    image: "https://static.wixstatic.com/media/a0e2a4_f7dc23a7c0314b64907271ae9452e619~mv2.jpg/v1/crop/x_11,y_0,w_967,h_928/fill/w_250,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_20200512-125857_Drive.jpg",
  },
  {
    teamName: "Vertax",
    university: "University of Florida",
    image: "https://static.wixstatic.com/media/a0e2a4_e80fd3c6a509492bbd830968acc74240~mv2.png/v1/crop/x_0,y_24,w_1200,h_1152/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_3403592706321765.png",
  },
  {
    teamName: "Spartan Diabolo",
    university: "Michigan State University",
    image: "https://static.wixstatic.com/media/a0e2a4_a9c9cde9d1064d8c8f781301f7719030~mv2.png/v1/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_649765495572182.png",
  },
  {
    teamName: "Infinite Diabolo",
    university: "Rockville, Maryland",
    image: "https://static.wixstatic.com/media/a0e2a4_fc92c45c2423479fb18d845c4327aabe~mv2.jpg/v1/crop/x_0,y_6,w_288,h_276/fill/w_250,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/infinite%20pfp.jpg",
  },
  {
    teamName: "diaboloTeamNYC",
    university: "New York, New York",
    image: "https://static.wixstatic.com/media/a0e2a4_c0cecb48981e4fd196a652ecf7aad325~mv2.png/v1/crop/x_0,y_8,w_414,h_397/fill/w_250,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dTNYC%20Logo%20(Square).png",
  },
  {
    teamName: "NSU CYY",
    university: "Nova Southeastern University",
    image: "https://static.wixstatic.com/media/a0e2a4_7aceb2a543e9402f897b118c57cdbb97~mv2.jpg/v1/crop/x_0,y_60,w_3024,h_2903/fill/w_250,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SIX_AC0D92EC-BE6A-4FB5-8680-0363537C8ABD.jpg",
  }
];


const OurMembers = () => {
  return (
    <div>
      <div className="bg-white text-black min-h-screen py-12 px-6">
        <h1 className="text-5xl font-bold text-center mb-8 tracking-wide">
            REGISTERED USADA TEAMS
        </h1>
      <div className="grid grid-cols-3 grid-rows-6 gap-8 w-3/4 mx-auto">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            image={team.image}
            university={team.university}
            teamName={team.teamName}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default OurMembers
