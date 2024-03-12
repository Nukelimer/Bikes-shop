

function AddToCartBtn({btnStyles, icon, text}) {
  return (
    <button className={`${btnStyles}`}>

      <div className="">{icon }</div>
      <p className="flex">{ text}</p>
    </button>
  )
}

export default AddToCartBtn