import { useState, useEffect } from "react";
import instagramLogo from '../assets/instagramLogo.png'
import facebookLogo from '../assets/facebook.png'




const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        if (responseMessage) {
          const timer = setTimeout(() => {
            setResponseMessage('');
          }, 5000);
    
          return () => clearTimeout(timer); // Clean up on unmount or message change
        }
      }, [responseMessage]);

    const submitContactForm = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        const contactData = {
            firstName, 
            lastName, 
            email, 
            message
        }


        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
            });

            const result = await res.json();
            setResponseMessage(result.message || 'Success!');

            setMessage('');
            setFirstName('');
            setLastName('');
            setEmail('');

        } catch (err) {
            setResponseMessage(`Error Submitting form: ${err}`);
        }
    }

  return (
    <>
        <section className="py-20 mb-4 w-[75%] mx-auto">
            <h1 className="text-center font-bold text-4xl mb-10">Contact Us Here</h1>

            <div className="w-full font-bold text-xl mb-6">
                <h2>Reach out to us anytime!</h2>
            </div>

            <div id="contact-information" className="grid grid-cols-3 gap-2 text-center w-full mx-auto mb-5 px-2">
                <div className="w-full rounded-xl mx-auto py-2 text-wrap"><b>Email:</b> <br /> <p className="mt-[2%] text-wrap"> usa.diabolo.association@gmail.com </p> </div>
                <div className="w-full rounded-xl mx-auto py-2 px-10 "><b>Address:</b><br />USA Diabolo Association Inc
                    <br />510 Main St Apt 720
                     <br />Roosevelt Island, NY 10044
                     <br />
                </div>
                <div className="w-full rounded-xl mx-auto py-2">
                    <b>Social Media:</b>
                    <br />
                    <div className="grid grid-cols-2 justify-center items-center w-max mx-auto gap-4">
                        <a href="https://www.instagram.com/usada.diabolo/" target="_blank" id = "button">
                            <img src={instagramLogo} className="w-8 h-8 my-3 mx-auto" />
                        </a>       
                        <a href="hhttps://www.facebook.com/usada.diabolo" target="_blank" id = "button">
                            <img src={facebookLogo} className="w-8 h-8 my-3 mx-auto" />
                        </a>  
                    </div>         
                </div>
            </div>
    

            <form id="contact-form" onSubmit={submitContactForm}>
                <div className="grid grid-cols-3 gap-2 w-full mx-auto mb-5">
                    <input 
                        className = "border-2 rounded h-10 border-violet-300 pl-2" 
                        type="text" 
                        id="firstname"
                        name="firstname" 
                        placeholder="First Name" 
                        required 
                        value = {firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        className = "border-2 rounded h-10 border-violet-300 pl-2" 
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        placeholder="Last Name" 
                        required 
                        value = {lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input 
                        className = "border-2 rounded h-10 border-violet-300 pl-2" 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="message w-full mx-auto">
                    <textarea 
                        className="w-full mx-auto border-2 rounded h-25 border-violet-300 pl-2 pt-2" 
                        id="message" 
                        name="message" 
                        placeholder=" Message" 
                        required 
                        value = {message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button  className="block bg-violet-800 text-white text-center py-4 w-full rounded-xl hover:bg-violet-500 mx-auto mt-4" type="submit">Submit</button>
            </form>
            <p className="mt-3 text-green-500 text-center mt-4">{responseMessage}</p>
            <div id="response"></div>
        </section>
    </>
  )
}

export default ContactUs;
