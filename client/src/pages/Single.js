
import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import {Link} from "react-router-dom";
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
    <div className="content">

<img src="https:images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
   <div className="user">

    <img src= "https:images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        
        <div className="info">
        <span>John</span>
        <p>posted 2 days ago</p>
        </div>

        <div className="edit">
         <Link to={`/write?edit=2`}>
         <img src={Edit} alt=""/>
         </Link> 
        <img src={Delete} alt=""/>
        </div>
    </div>
    <div>
    </div>
    <h1>Lorem ipsum dolor</h1>
    <p>Who Oversees the Data Science Process?
Business Managers
The business managers are the people in charge of overseeing the data science training method. Their primary responsibility is to collaborate with the data science team to characterise the problem and establish an analytical method. A data scientist may oversee the marketing, finance, or sales department, and report to an executive in charge of the department. Their goal is to ensure projects are completed on time by collaborating closely with data scientists and IT managers.

IT Managers
Following them are the IT managers. If the member has been with the organisation for a long time, the responsibilities will undoubtedly be more important than any others. They are primarily responsible for developing the infrastructure and architecture to enable data science activities. Data science teams are constantly monitored and resourced accordingly to ensure that they operate efficiently and safely. They may also be in charge of creating and maintaining IT environments for data science teams.

Data Science Managers
The data science managers make up the final section of the tea. They primarily trace and supervise the working procedures of all data science team members. They also manage and keep track of the day-to-day activities of the three data science teams. They are team builders who can blend project planning and monitoring with team growth

    </p>
    
    </div>
 
<Menu/>

    </div>
  )
}

export default Single