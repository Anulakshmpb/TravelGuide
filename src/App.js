
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Adlog from './Admin/Adlog';
import Contact from './Client/Contact/Contact';
import Profile from './Client/Profile/Profile';
import Weather from './Client/Weather/Weather';
import Aboutus from './Client/Aboutus/Aboutus';
import Dest from './Client/Dest/Dest';
import Review from './Client/Review/Review';
import Hotels from './Client/Hotels/Hotels';
import Restaurant from './Client/Restaurant/Restaurant';
import Register from './Client/Register/Register';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Spinner from './Spinner/Spinner';
import TopBar from './AppBar/AppBar';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import { db } from './Config/Config';

function App() {
  const [uid,setuid] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  useEffect(()=>{
    fetchFromDb();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setuid(uid);
          setLoading(false);
        } else {
          setuid(null)
          setLoading(false);
        }
      });
  },[auth]);
  const [allDocs,setallDocs] = useState([]);
  const fetchFromDb = async()=>{
    const ref = collection(db,"users");
    const docSnap = await getDocs(ref);
    var data = []
    docSnap.forEach((doc)=>{
     data.push({...doc.data(),id:doc.id})
    });
    setallDocs(data)
  }
  return (
    <div className="App">
      {allDocs&&(<>
      {allDocs.map((doc)=>{
        return(<>
          {/* <h2>{doc.id}</h2>
          <h2>{doc.name}</h2> */}
        </>)
      })}
      </>)}
    <TopBar />
      {loading?<Spinner/>:null}
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Adlog />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/aboutus" element={ <Aboutus />} />
        <Route path="/profile" element={ <Profile />} />
        <Route path="/" element={ <Dest />} />
        <Route path="/review" element={ <Review />} />
        <Route path='/hotels'element={ <Hotels/>} />
        <Route path='/rest'element={ <Restaurant/>} />
        <Route path='/reg'element={ <Register/>} />
        </Routes>
         <div className="row">
             <div className="copyright">
             <p>Copyright</p> 
             <a className='copy_p' href="">Terms and Policy</a><br />
            <a className='copy_p' href="">Privacy and Cookies Statement</a><br />
             <p className='copy_p'>TravelGuide LLC makes no guarantees for availability of prices advertised on our sites and applications. Listed prices may require a stay of a particular length or have blackout dates, qualifications or other applicable restrictions.</p>
             </div>
           </div>
    </div>
   
  );
}

export default App;
