
const Registration = () => {
  return (
    <div className="mx-25">
    <div className="px-6 py-12 md:px-12 lg:px-24">
      <h1 className="text-5xl font-bold text-rose-800 text-center mb-8 tracking-wide">
        REGISTRATION
      </h1>

      <p className="italic text-lg mb-4 text-center">
        Registrations Open from <strong>February 14, 2025</strong> - <strong>May 1st, 2025</strong>
      </p>

      <p className="text-lg mb-6">
        The registration fee is <span className="font-bold">$50</span> for the Individual division and <span className="font-bold">$100</span> per team for the Team division.
      </p>

      <div className="mb-6">
        <p className="font-bold mb-2">To register, please fill out the corresponding forms:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Individual Division:{" "}
            <a
              href="https://forms.gle/xtTJPUc6JCLURv629"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              https://forms.gle/xtTJPUc6JCLURv629
            </a>
          </li>
          <li>
            Team Division:{" "}
            <a
              href="https://forms.gle/XPx8T1yq6ojgsQdA6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              https://forms.gle/XPx8T1yq6ojgsQdA6
            </a>
          </li>
          <li>
            Music Submission:{" "}
            <a
              href="https://forms.gle/MwNhgFWNbouWyzQ76"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              https://forms.gle/MwNhgFWNbouWyzQ76
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <p>
          Registration after <strong>11:59 PM ET on May 1st, 2025</strong> will incur an additional late fee of $10.
          We will not be accepting registration after <strong>11:59 PM ET on June 1st, 2025</strong>.
          We reserve the right to close registration early after May 1st if we determine we have reached the maximum number of participants.
        </p>
      </div>

      <div className="mb-6">
        <p>
          Full payment must be made to the USADA, preferably through Zelle (
          <span className="text-blue-300">usa.diabolo.association@gmail.com</span>), but{" "}
          <a
            href="https://www.paypal.com/ncp/payment/228GYJHBK2L22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            PayPal
          </a>{" "}
          is acceptable. Please include the participant name and competition division in the payment description.
        </p>
      </div>
            <div>
        <p>
          Music must be submitted no later than <strong>11:59 PM ET on July 1st, 2025</strong>. The music you use for
          your performance must be appropriate for all ages. We will review your music submission and ask competitors
          to send a new music file if necessary.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Registration
