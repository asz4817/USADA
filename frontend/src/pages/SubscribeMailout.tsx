import { useState, useEffect } from "react";

const SubscribeMailout = () => {

  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage('');
      }, 5000);

      return () => clearTimeout(timer); // Clean up on unmount or message change
    }
  }, [responseMessage]);

  const addToMailout = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
          const res = await fetch('http://127.0.0.1:5000/addToMailout', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(email),
          });

          const result = await res.json();
          setResponseMessage(result.message || 'Success!');

          setEmail('');
        } catch (err) {
            setResponseMessage(`Submission failed: ${err}`);
        }

  }
  
  return (
    <>
      <h1 className="font-bold text-2xl text-center mt-10">Join our mailing list for the latest updates</h1>
      
      <form className="mt-4 text-center" onSubmit={addToMailout}>
        <input 
          className="border-2 rounded h-10 w-[60%] border-rose-800 pl-2" 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Email"
          required 
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button  
          className="bg-rose-800 text-white text-center h-10 w-[60%] rounded hover:bg-rose-600 mx-auto mt-2" 
          type="submit">Subscribe</button>
        <p className="mt-3 text-green-500">{responseMessage}</p>

     </form>
    </>
  )
}

export default SubscribeMailout;
