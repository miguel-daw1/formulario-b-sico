import {useForm} from "./hook/useForm"
import {Formulario} from "./components/Formulario"
function App() {
  const { form, products, handleChange, handleSubmit } = useForm()

  return (
    <div>
      <h2>Alta de producto</h2>

      <Formulario
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h2>Lista</h2> 

      {products.map((p, index) => (
        <div key={index}>
          <p>{p.title}</p>
          <p>${p.price}</p> 
        </div>
      ))}
    </div>
  )
}

export default App