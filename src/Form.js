import React, {useState} from 'react';

const Form = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    qty: '',
    category_id: '',
    photo: '',
    url: ''
  })

  const getData = e => {
    if (e.target.name !== 'photo') {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    } else {
      console.log(e.target.files[0])  
      setData({
        ...data,
        [e.target.name]: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const sendForm = async () => {
    const url = 'http://localhost:4000/api/v1/products'
    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    const response = await request.json()
    console.log(response)
    setData({
      name: '',
      description: '',
      price: '',
      qty: '',
      category_id: '',
      photo: '',
      url:''
    })
  }

  return ( 
    <form>
      <input name="name" placeholder="name" type="text" onChange={getData}/>
      <input name="description" placeholder="description" type="text" onChange={getData}/>
      <input name="price" placeholder="price" type="text" onChange={getData}/>
      <input name="qty" placeholder="qty" type="number" onChange={getData}/>
      <input name="url" placeholder="url" type="text" onChange={getData}/>
      <select name="category_id" onChange={getData}>
        <option></option>
        <option value="1">Pines</option>
        <option value="2">Accsesorios</option>
      </select>
      <input name="photo" placeholder="photo" type="file" onChange={getData}/>
      <img src={data.photo} alt={data.name} className="form_img"/>
      <div onClick={sendForm} className="btn">enviar</div>
    </form>
   );
}
 
export default Form;