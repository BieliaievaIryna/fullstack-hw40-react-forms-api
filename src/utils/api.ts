const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`Error! ${(error as Error).message}`)
  } 
}