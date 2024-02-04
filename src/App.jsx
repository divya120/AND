import { useState } from 'react'
import './App.css'
import { LoveLetter } from './LoveLetter'
import attackImage from "./public/attack.gif"
import happyCat from "./public/happycat.gif"
import postCard from "./public/postcard.jpeg"
import pleaseMao from './public/pleaseMao.gif'
import post from './public/post.png'

function App() {
  const noArray = ["No","try again", "you are breaking my heart", "please", "kitts", "bb again", "mao!!!!","c'mon kitten", "Pls","cute!", "say yes", "i lovie na", "pls na mao", "me is munchkin pls", "me is dying", "heart shatter initiated", "haww"]
  const [isClicked, setIsClicked] = useState(false)
  const[letter, setLetter] = useState(false)
  const[showLetter, setShowLetter] = useState(false)
  const[index, setIndex] = useState(0)
  const [yes, setYes] = useState(false)
  const handlePostClick = (event) =>{
    event.stopPropagation()
    event.preventDefault()
    setIsClicked(true)
    setTimeout(()=>{
      setIsClicked(false)
      setLetter(true)
    },2000)
    setInterval(2000)
  }

  const handleLetterClick = (event) =>{
    event.stopPropagation()
    event.preventDefault()
    setShowLetter(true)
    setLetter(false)
  }

  const loveAttackModal = (
    <div className='attack-modal'>
      <div>
      <h1>Love Attack Initiated...</h1>
      <img src={attackImage}></img>
      </div>
    </div>
  )

  const handleNo = () =>{
    setIndex(index+1)
    if(index===noArray.length-1){
      setIndex(0)
    }
  }


const happyModal = (
  <div className='attack-modal'>
    <div>
    <h1>I Love you!!! Thank you for making me so happy!</h1>
      <img src={happyCat}></img>
      <div>
      <button onClick={()=>{
        setYes(false)
      }}>Close</button>
      </div>
      </div>
      </div>
)
  return (
    <div>
      {yes && happyModal}
       {showLetter && <div className='letter-modal'><LoveLetter onClose ={setShowLetter}/></div>}
      {isClicked && loveAttackModal}
      {letter &&(<div>
        <img src ={postCard} onClick={(event)=>{
          handleLetterClick(event)
        }}></img>
        <p>Click on me!</p>
      </div>)}

      <h1>Would You Be My Valentine MAO?</h1>
      <img src={pleaseMao}></img>
      <p>Click on the post to open up some mails</p>
      <img src={post} className='post' onClick={(event)=>{
        handlePostClick(event)
      }}></img>
    <div className='button-container'>
    <button onClick={()=>{
      setYes(true)
    }}>Yes</button>
      <button onClick={()=>{
        handleNo()
      }}>{noArray[index]}</button>
    </div>
    </div>
  )
}

export default App
