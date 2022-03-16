import './style.css'
export const App = () => {
  return (
    <div>A1pp
      <h1>HELLO WORLD</h1>
      {process.env.NODE_ENV}----{process.env.name}
    </div>
  )
}
