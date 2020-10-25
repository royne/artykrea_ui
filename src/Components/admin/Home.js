import React from 'react';
import '../../styles/admin.css'
import Form from './Form';
import SideNav from './SideNav';

const Home = () => {
  return (
    <section className="admin">
      <SideNav />
      <div className="admin_content">
        <Form />
      </div>
    </section> 
   );
}
 
export default Home;