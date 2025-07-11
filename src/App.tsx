import { useEffect, useState } from 'react'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import { getUsers } from './utils/api'

interface UserInterface {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const users = await getUsers()
        setUsers(users)
      } catch (error) {
        setError(`${(error as Error).message}`)
      } finally {
        setIsLoading(false)
      }

    }
    fetchUsers()
  }, [])

  return (
    <div>
      <div>
        <ControlledForm />
        <UncontrolledForm />
      </div>
      <div>
        <h1>Users</h1>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2 className="error">{error}</h2>}
        {!isLoading && !error && users.length === 0 && (
          <h2>No users found.</h2>
        )}
        {!isLoading && !error && users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
