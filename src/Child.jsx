

function Child({ sizeFunc }) {
  const passData = (e) => {
    console.log(e.target.value, "value");
    sizeFunc(+e.target.value)
  }
  return (
    <div>
      <input type='number' onChange={passData} />
    </div>
  )
}

export default Child
