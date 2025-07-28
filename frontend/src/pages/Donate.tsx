
const Donate = () => {
  return (
    <div className="flex flex-col justify-center my-10">
      <h1 className="text-center font-bold text-4xl text-purple-300">DONATE</h1> <br/>

     <div className="flex flex-col items-center text-xl text-center text-gray-800 space-y-2">
        <p>
          We prefer donations made via{" "}
          <a
            href="https://www.zellepay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:underline-offset-2 transition"
          >
            Zelle
          </a>{" "}
          (usa.diabolo.association@gmail.com)
        </p>
        <p>
          or{" "}
          <a
            href="https://www.paypal.com/US/fundraiser/charity/5140132"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:underline-offset-2 transition"
          >
            PGF
          </a>{" "}
          if you have a Paypal.
        </p>
      </div>
    <br/>

    <div className="w-3/4 mx-auto">
      <p className="text-center text-xl my-10">
        Your support will greatly contribute to the success of our events. Any contribution, regardless of the amount, is immensely appreciated. Your support will not only help us host more events and create new opportunities, but also foster the growth and recognition of an amazing cultural activity. By investing in our organization you will directly impact the lives of talented individuals and inspire a new generation of diabolo players.
      </p>
      <p className="flex justify-center text-xl my-10">Thank you for considering donating to our cause.</p>
      
      <p className="text-center text-m italic my-10">
        USA Diabolo Association Inc. is a federally recognized 5O1c3 tax-exempt nonprofit organization. As such, all donations are tax-deductible to the fullest extent of the law. 
      </p>
    </div>

      
    </div>
  )
}

export default Donate
