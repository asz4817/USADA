import LargeMembers from "../components/LargeMembers"
import BoardMember from "../components/BoardMember";

const BoardOfDirectors = () => {

  const members = [
    {
      name: "Jason Pao",
      location: "Seattle, Washington",
      role: [
        "Founder and Captain of Apex Diabolo (2016 - Present)",
        "Captain of UIUC TASC Special Ops (2013 - 2016)",
        "Diabolo Instructor (2013 - 2015)",
        "Diabolo Captain of CFAW Boston (2011 - 2012)"
      ],
      image: "https://static.wixstatic.com/media/a0e2a4_118312141d724f7cad3814a3b0d508b1~mv2.jpg/v1/crop/x_4,y_0,w_1830,h_1830/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/received_296018768057737_edited.jpg",
      instagram: "https://www.instagram.com/yoyoonarock/"
    },
    {
      name: "Bryan Tam",
      location: "Boston, Massachusetts",
      role: [
        "Co-Founder of Nova Diabolo (2019 - Present)",
        "Co-Founder and Treasurer of UMass TASC (2015 - 2019)"
      ],
      image: "https://static.wixstatic.com/media/a0e2a4_815e8d49a9bd49e6b466d12d6849e102~mv2.jpg/v1/fill/w_400,h_400,al_c,lg_1,q_80,enc_avif,quality_auto/FB_IMG_1588707178111_edited.jpg",
      instagram: "https://www.instagram.com/btam13/"
    },
    {
      name: "Ryan Lin",
      location: "Boston, Massachusetts",
      role: [
        "Co-Founder of NYU Violet Diabolo"
      ],
      image: "https://static.wixstatic.com/media/a0e2a4_d55590074a8841e29171a8b701d9540b~mv2.jpg/v1/fill/w_400,h_400,al_c,lg_1,q_80,enc_avif,quality_auto/FB_IMG_1588707127125_edited.jpg",
      instagram: "https://www.instagram.com/linx_ryry/"
    },
    {
      name: "Andrew Sun-Yan",
      location: "Montville, New Jersey",
      role: [
        "Co-Founder of NYU Violet Diabolo"
      ],
      image: "https://static.wixstatic.com/media/a0e2a4_2a8e0694b226451a846b3750559320d3~mv2.jpg/v1/crop/x_1827,y_735,w_1713,h_1716/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_4712.jpg",
      instagram: "https://www.instagram.com/andrewsunyan/"
    }
  ];


  return (
    <div className="py-10 md:px-12 lg:px-24">
      <h1 className="text-5xl font-bold text-center mb-12 tracking-wide text-indigo-900">
        MEET THE TEAM
      </h1>

      <h2 className="text-rose-800 text-5xl font-bold tracking-wide text-center">PRESIDENT</h2>
      <LargeMembers 

          name="Graham Lo"
          location="New York City, New York"
          role={["Founder of USA Diabolo Association",
              "Founder and President of New York Diabolo Association",
              "Founder and Owner of Sundia USA"]}
          image="https://static.wixstatic.com/media/a0e2a4_513fe57298c0409dab3357975f829496~mv2.jpg/v1/crop/x_4,y_0,w_1480,h_1480/fill/w_412,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20230401_Graham%20Pic_edited.jpg"
          instagram="https://www.instagram.com/graham_lo_00/"
        />
      <br/><br/><br/>

      <h2 className="text-rose-800 text-5xl font-bold tracking-wide text-center">BOARD MEMBERS</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 py-4 w-7/8 mx-auto">
      {members.map((member, index) => (
        <BoardMember 
          key={index} 
          name={member.name}
          location={member.location}
          role={member.role}
          image={member.image}
          instagram={member.instagram}
        />
      ))}
    </div>
      <br/><br/><br/>

    <h2 className="text-rose-800 text-5xl font-bold tracking-wide text-center">Creative Director</h2>
    <br/>

      <LargeMembers 

          name="Joy Deng"
          location="Houston, Texas"
          role={[
        "Graphic Designer of USADA",
        "Founder of Texas Diabolo Association",
      ]}
          image= "https://static.wixstatic.com/media/a0e2a4_ae71ad9d83b043e188a75eef7ff55aee~mv2.jpg/v1/fill/w_536,h_536,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cbafb0b-db90-45fa-baea-1f846332c97a.jpg"
          instagram= "https://www.instagram.com/joyyy_deng/"
        />
  <br/><br/><br/>

        <img src="https://static.wixstatic.com/media/a0e2a4_6ee5d0ea71734830bf582c2b88831a82~mv2.jpg/v1/crop/x_0,y_316,w_1440,h_809/fill/w_1440,h_809,al_c,q_85,enc_avif,quality_auto/454203547_514493804426701_6346741296255543537_n_jpg_stp%3Ddst-jpegr_e35_tt6%26efg%3DeyJ2ZW5jb2Rl.jpg"
         alt="Bottom image" 
         className=" w-5/8 h-auto mx-auto" />

    </div>
  )
}

export default BoardOfDirectors
