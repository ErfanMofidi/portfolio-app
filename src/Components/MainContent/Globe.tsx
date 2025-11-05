import { useState } from 'react';
import globeImage from '../../Images/3D Globe Design_simple_compose_01k2vhmyj0fd3a315xmga2qxyj.png'
import emailjs from "@emailjs/browser";

export const Globe = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [statusMessage, setStatusMessage] = useState<string>("");

  const [nameFocused, setNameFocused] = useState<boolean>(false)
  const [emailFocused, setEmailFocused] = useState<boolean>(false)
  const [messageFocused, setMessageFocused] = useState<boolean>(false)


  const checkForSpecialCharEmail = (text: string) => {
    const specialCharRegex = /[ +=\-/*?!#$%^&(){}[\]:;"'\\|,~ ]/
    return specialCharRegex.test(text)
  }

  const checkForSpecialChar = (text: string) => {
    const specialCharRegex = /[+=\-/*?!#$%^&(){}[\]:;"'\\|,~]/
    return specialCharRegex.test(text)
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameHasSpecial = checkForSpecialChar(name);
    const emailHasSpecial = checkForSpecialChar(email)

    if (nameHasSpecial || emailHasSpecial) {
      setStatusMessage("Error: Special characters are now allowed!")
      return;
    }

    emailjs
      .sendForm(
        "service_7gxt6dm",
        "template_8bq9jtv",
        e.currentTarget,
        "ESi7pCU6E2-gHcmI6"
      ).then(() => {
        setStatusMessage("Email sent successfully")
        setName("")
        setEmail("")
        setMessage("")
      }).catch((err) => setStatusMessage("Failed to send email, please try again"));
  }


  return (
    <div id='contact' className='form-container'>

      <form className='form' onSubmit={sendEmail}>
        <h1 className='form-header'>Contact.</h1>

        <div className='name-input-container'>

          <label className={`name-label ${(nameFocused || name) && 'name-label-focused'}`} htmlFor='name'>Your Name</label>
          <input className='name-input'
            type="text"
            name="name"
            id='name'
            placeholder=''
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              checkForSpecialChar(e.target.value)
            }}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
          />
        </div>

        <div className='email-input-container'>
          <label className={`email-label ${(emailFocused || email) && 'email-label-focused'}`} htmlFor='email'>Your Email</label>
          <input className='email-input'
            type="email"
            name="email"
            id='email'
            placeholder=''
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              checkForSpecialCharEmail(e.target.value)
            }}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </div>

        <div className='message-input-container'>
          <label className={`message-label ${(messageFocused || message) && 'message-label-focused'}`} htmlFor='message'>Your Message</label>
          <textarea className='message-input'
            name="message"
            id='message'
            placeholder=''
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              checkForSpecialChar(e.target.value)
            }}
            onFocus={() => setMessageFocused(true)}
            onBlur={() => setMessageFocused(false)}
          />
        </div>

        <div className='status-message-container'>
          {statusMessage && <p className='status-message'>{statusMessage}</p>}
        </div>

        <button className='submit-button' type="submit">Submit</button>
      </form>

      <div className="globe-container">
        <img alt="Globe graphic" className="globe-image" src={globeImage} />
      </div>

    </div>
  )
}