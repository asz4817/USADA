
const StructandLog = () => {
  return (
    <div className="mx-25">
        <div className="px-6 py-12 md:px-12 lg:px-24 space-y-4">

            <h1 className="text-5xl font-bold text-rose-800 text-center mb-8 tracking-wide">
        Structure & Logistics
      </h1>
      <div>
        <h2 className="text-3xl font-bold mb-1">Competition Date</h2>
        <p>August 1-3, 2025</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-1">Location</h2>
        <p>
          Sportsplex at Metuchen<br />
          <span className="italic">215 Durham Ave</span><br />
          <span className="italic">Metuchen, NJ, 08840</span>
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-1">Eligibility</h2>
        <p>
          All US residents with a valid mailing address are eligible to compete. We may ask competitors
          to show some form of ID to confirm their identity at the competition. Providing false
          information may result in disqualification.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-1">Stage Details</h2>
        <p>
          This year at the Sportsplex at Metuchen the stage will have tiled flooring - for reference,
          please look at the hardwood courts in the{" "}
          <a
            href="https://www.sportsplexatmetuchen.com/facility-photo-gallery"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            photo gallery
          </a>.
        </p>
        <p className="mt-4">
          While we cannot finalize the stage dimensions until the day of the competition, competitors can
          expect minimum stage dimensions as follows:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 mx-5">
          <li>Individual: 30 feet by 20 feet</li>
          <li>Team: 40 feet by 20 feet</li>
        </ul>
        <p className="mt-4">
          Final stage dimensions may change. We will indicate the competition boundaries on the days of
          the competition.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-1">Competition Divisions</h2>
        <div className="flex justify-center my-8">
        <img
          src="https://static.wixstatic.com/media/a0e2a4_8d26fd4ccac641c98f6ad2f8ada91876~mv2.png/v1/fill/w_836,h_241,al_c,lg_1,q_85,enc_avif,quality_auto/a0e2a4_8d26fd4ccac641c98f6ad2f8ada91876~mv2.png" // replace with your actual path
          alt="Stage Layout"
          className="w-full max-w-xl rounded-lg shadow-lg"
        />
        </div>
        <br/>
        Each competitor may only register as part of 1 team. Individuals part of a team may additionally register to compete in the individual division. Teams can consist of individuals in any age group, but the age of the team's oldest individual determines which age group the team competes in.
        <br /><br/>

        We reserve the right to change these age groups to preserve competitive integrity.
        </div>
    </div>
    </div>
  )
}

export default StructandLog
