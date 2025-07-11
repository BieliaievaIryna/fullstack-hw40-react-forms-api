import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormData {
  email: string
  password: string
}

const initialFormData: FormData = {
  email: '',
  password: ''
}

const ControlledForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>ControlledForm</legend>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>
        <button type='submit'>Send data</button>
      </fieldset>
    </form>
  );
};

export default ControlledForm;