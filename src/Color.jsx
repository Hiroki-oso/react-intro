function Color({setColor}) {

  function onChangeColor(e) {
    setColor(e.target.value);
  }
  
  return (
    <div>
      <input type="color" onChange={onChangeColor} />
    </div>
  )
}

export default Color
