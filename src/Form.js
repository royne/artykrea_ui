import React, {useState} from 'react';

const Form = () => {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    qty: '',
    category_id: '',
    image: '',
    image_url: ''
  })

  const getData = e => {
    if (e.target.name !== 'image') {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    } else {  
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
        image_url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  const sendForm = async () => {
    // const url = 'https://atkapi.herokuapp.com/api/v1/products'
    const url = 'http://localhost:4000/api/v1/products'
    const formData = new FormData();
    formData.append('product[name]', data.name);
    formData.append('product[description]', data.description);
    formData.append('product[price]', data.price);
    formData.append('product[qty]', data.qty);
    formData.append('product[category_id]', data.category_id);
    formData.append('image_file[image]', data.image);
    formData.append('product[published]', true);
    const request = await fetch(url, {
      method: 'POST',
      body: formData
    })
    const response = await request.json()
    console.log(response)
    setData({
      name: '',
      description: '',
      price: '',
      qty: '',
      category_id: '',
      image: ''
    })
  }

  return ( 
    <form>
      <input name="name" placeholder="name" type="text" onChange={getData}/>
      <input name="description" placeholder="description" type="text" onChange={getData}/>
      <input name="price" placeholder="price" type="text" onChange={getData}/>
      <input name="qty" placeholder="qty" type="number" onChange={getData}/>
      <select name="category_id" onChange={getData}>
        <option></option>
        <option value="1">Pines</option>
        <option value="2">Accsesorios</option>
        <option value="3">recordatorios</option>
        <option value="4">variedad</option>
        <option value="5">figuras</option>
      </select>
      <input name="image" placeholder="image" type="file" onChange={getData}/>
      <img src={data.image_url} alt={data.name} className="form_img"/>
      <div onClick={sendForm} className="btn">enviar</div>
    </form>
   );
}
 
export default Form;