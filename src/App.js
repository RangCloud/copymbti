import { useEffect, useState } from 'react';
import './App.css';
import mbtiImg from './freeImg/mbti.png'

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  
  useEffect(()=>{
    setVh()

    function onResize(){
      setVh()
    }

    window.addEventListener('resize', onResize)

  },[])

  const [page, setPage] = useState(0)

  return (
    <div className="mbtiLayout">
      {page === 0 ? 
      <div>
        <div className='startLayout'>
          <div className='startLogo'>
            <img src={mbtiImg}/>
            <button onClick={()=>setPage(1)} className='startBtn'>테스트 시작하기!</button>
          </div>
        </div>
      </div>
      :
      <div>
      테스트페이지
      </div>
      }
    </div>
  );
}

export default App;
