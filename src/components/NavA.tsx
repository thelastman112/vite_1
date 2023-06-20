import { NavLink } from 'react-router-dom'

type Props = {
  where: string
  children: string
}

const NavA = (props : Props) => {
  return (
    <NavLink to={props.where}>{props.children}</NavLink>
  )
}

export default NavA