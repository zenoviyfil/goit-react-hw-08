import UserMenu from "../components/UserMenu/UserMenu"

const HomePage = () => {
  return (
    <div>
      <UserMenu />
      <h1>This is your home page!</h1>
      <p>The page is empty, you haven&apos;t published anything yet!</p>
      <p>Check out your <b>contacts page</b> to create a new contact!</p>
    </div>
  )
}

export default HomePage