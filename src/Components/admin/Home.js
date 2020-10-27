import React, {useState} from 'react';
import '../../styles/admin.css'
import Form from './Form';
import List from './List';
import SideNav from './SideNav';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState('Form')

  const setComponent = name => setActiveComponent(name)

  return (
    <section className="admin">
      <SideNav setComponent={setComponent} />
      <div className="admin_content">
        { activeComponent === 'Form' ? <Form /> : <List /> }
      </div>
    </section> 
   );
}
 
export default Home;