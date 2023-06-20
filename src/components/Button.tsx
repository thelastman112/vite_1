type Props = {
  className : string
  children: any
  change?: any
}

const Button = (props: Props) => {
  return (
    <>
      <button className={`${props.className}`} onClick={props.change}>
        {props.children}
      </button>
    </>
  )
}

export default Button