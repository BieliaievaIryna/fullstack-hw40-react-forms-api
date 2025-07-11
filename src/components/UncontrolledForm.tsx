import { useRef, type FormEvent } from 'react';

const UncontrolledForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(usernameRef.current?.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>UncontrolledForm</legend>
        <div>
          <label htmlFor="username">Username </label>
          <input
            id="username"
            type="text"
            name="username"
            ref={usernameRef}
            placeholder="Enter your username"
          />
        </div>
        <button type="submit">Send data</button>
      </fieldset>
    </form>
  );
};

export default UncontrolledForm;