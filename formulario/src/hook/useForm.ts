import { useState } from "react"

export const useForm = () => {
  const [form, setForm] = useState({
    title: "",
    price: ""
  })

  const [products, setProducts] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct = {
      ...form,
      price: Number(form.price)
    }

    setProducts(prev => [...prev, newProduct])

    setForm({
        title: "",
        price: ""
      })
  }

  return {
    form,
    products,
    handleChange,
    handleSubmit
  }
}