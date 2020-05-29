import { React } from "react"
import { useForm } from "react-hook-form"
import { css } from "@emotion/core"
import Layout from "../components/layout"

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    let formEntry = new FormData()
    for (const entry in data) {
      formEntry.append(`${entry}`, `${data[entry]}`)
    }
    fetch("https://forms.danferth.com/parse/devferth-contact.php", {
      method: "POST",
      mode: "cors",
      body: formEntry,
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
        <div className="form-group">
          <label htmlFor="name">
            name
            <input type="text" name="name" ref={register({ required: true })} />
            {errors.name && <p>sorry, need to know who you are</p>}
          </label>
          <label htmlFor="email">
            email
            <input
              type="email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && <p>gotta know how to get back to you</p>}
          </label>
          <label htmlFor="message">
            message
            <textarea
              name="message"
              ref={register({ required: true })}
            ></textarea>
            {errors.message && <p>I mean what do you want, right?</p>}
          </label>
          <input type="submit" value="send" />
        </div>
      </form>
    </Layout>
  )
}

export default Contact
