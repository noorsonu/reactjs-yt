
const App = () => {

  function btnClicked() {
    console.log("Button is clicked");

  }

  return (
    <div className="btn">
      <button onClick={btnClicked}>Clicked</button>
    </div>
  )
}

export default App