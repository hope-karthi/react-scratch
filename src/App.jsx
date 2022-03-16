import './style.css'
import {Clickcounter} from './Clickcounter'
export const App = () => {
  return (
    <div>A1pp
      <h1>HELLO 78784 WORLD</h1>
      {process.env.NODE_ENV}----{process.env.name}
	<Clickcounter/>
    </div>
  )
}
