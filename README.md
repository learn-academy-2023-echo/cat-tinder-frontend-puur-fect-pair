


const CatIndex =({cats}) => {
    console.log("list of kitty")
  return(
    <>
    {/* <h3>ljsbdf</h3> */}
    {cats.map((cat, index)=> {
      return(
        <h3 key={index}>{cat.name}</h3>
      )
    })}
    </>
  )
}