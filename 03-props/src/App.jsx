import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">
      <Card user='Sonu Ansari' p='This is a car.' img='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700' />
      <Card user='Noor Mohammad' p='This is my first card.' img="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700" />
    </div>
  )
}

export default App