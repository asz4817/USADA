
const ScoreandAwards = () => {
  return (
    <div className="mx-25">
        <div className="px-6 py-12 md:px-12 lg:px-24 space-y-4">
        <h1 className="text-5xl font-bold text-rose-800 text-center mb-8 tracking-wide">
            SCORING & AWARDS
        </h1>

        <div>
        <h2 className="text-3xl font-bold mb-1">Scoring</h2>
        <p>
            Judges will score competitors according to a variety of criteria, including difficulty, execution, and performance. <br/>
            Please see the judging rubric {" "}
          <a
            href="https://www.usadiaboloassociation.org/_files/ugd/a0e2a4_a1b16ae428854df4b75d1a9f142c8472.pdf"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
            </p>
        </div>
        
        <div>
            <h2 className="text-3xl font-bold mb-1">Awards</h2>

            <p className="mt-4">
            There will be an awards ceremony after the competition. All competitors are strongly encouraged to attend.
            </p>

            <ul className="list-disc list-inside mt-2 space-y-1 mx-5">
            <li>The top 3 competitors in every group will receive a trophy and a personal certificate of merit.</li>
            <li>The top 5 competitors in every group will receive a personal certificate of merit. </li>
            </ul>

            <p className="mt-4">
            If you have any questions, please email us at usa.diabolo.association@gmail.com.
            </p>
        </div>


        </div>
    </div>
  )
}

export default ScoreandAwards
