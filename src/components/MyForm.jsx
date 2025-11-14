import { useState } from 'react'

const MyForm = () => {
  const [formState, setFormState] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form data placeholder', formState)
  }

  return (
    <form className="placeholder-block" onSubmit={handleSubmit}>
      <h2>Issue Form</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MyForm
