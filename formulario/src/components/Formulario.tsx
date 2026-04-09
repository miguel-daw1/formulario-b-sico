interface Props {
    form: {
      title: string
      price: string
    }
    onChange: (e) => void
    onSubmit: (e) => void
  }
  
  export const Formulario = ({ form, onChange, onSubmit }: Props) => {
    return (
      <form onSubmit={onSubmit}>
        <input
          name="title"
          placeholder="Nombre"
          value={form.title}
          onChange={onChange}
        />
  
        <input
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={onChange}
        />
  
        <button type="submit">Guardar</button>
      </form>
    )
  }