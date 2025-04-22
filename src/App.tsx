import { useState } from 'react'
import SampleImg from './images.jpeg'
import './App.css'

interface ProfileCardProps {
  name: string;
  bio: string;
  initialBgColor: string;
}

const ProfileCard = ({name, bio, initialBgColor}:ProfileCardProps) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor('lightblue');
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };

  return (
    <div className={`profile-card ${hovered ? "hovered" : ""}`}
    style={{ backgroundColor: bgColor, color: hovered ? "#000000" : "#000000" }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <img src={SampleImg} alt={name} className='profile-pic' />
      <h2 className='profile-name'>{name}</h2>
      <p className='profile-bio'>{bio}</p>
    </div>
  )
}

const App = () => {
  return (
   <div className="app-container">
    <ProfileCard
    name="Elon Musk"
    bio="Founder of SpaceX, Tesla, and Neuralink, known for pushing the boundaries of space travel, electric vehicles, and brain-computer interfaces."
    initialBgColor="linear-gradient(135deg, #add8e6, rgb(146, 23, 23))" />
   </div>
  )
}

export default App