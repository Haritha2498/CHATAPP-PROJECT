import React, { useState, useEffect } from 'react';


// import im3 from '/home/haritha/chatapp_react/chatappui/src/assets/Images/bi.jpg'
import im3 from '../assets/Images/bi.jpg'




const Usercontacts = () => {
  const [friends, setFriends] = useState([]);
  const [username,setUsername]=useState('')

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const response = await fetch('/api/getfriends');
        const data = await response.json();
        console.log(data);
        setUsername(data[0]);
        setFriends(data[1]);
      } catch (error) {
        console.error("Error loading friends chat", error);
      }
    };

    loadFriends();
  }, []);

  return (
    <div className="w-[20%]   " id="middiv" style={{backgroundImage: `url(${im3})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}}>
      <br />
      <h3 className="text-2xl font-bold ml-10">Chats</h3>
      <div id="friendsContainer">
        {friends.map((friend, index) => {
          if (username !== friend.logeduser) {
            return (
              <div
                key={index}
                className="inline-flex mt-10 w-full"
                onClick={() => window.location.href = `/chat/${friend.logeduser}`}
              >
                <img
                  src="../src/assets/Images/dp2.jpeg"
                  className="w-12 ml-4 rounded-full"
                  alt=""
                />
                
                <span className="mt-4 ml-6">{friend.setname || friend.logeduser}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Usercontacts;
