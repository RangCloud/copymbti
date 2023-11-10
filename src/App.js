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

  const [page, setPage] = useState(0);

  const qList = [
          {q : ['1. 오랜만에 친구와 만나 놀던 도중, 친구의 친구가 같이 놀아도 된다고 물어본다면..?'],
            a : [{ type : 'E', text : '당연히 가능! 오늘부터 친구다'},
                  { type : 'I', text : '어어..?(싫은데..)'}]},
          {q : ['2. 다음 중 더 공감되는 말은?'],
            a : [{ type : 'E', text : '주말이니까 밖에 나가볼까??'},
                  { type : 'I', text : '주말이니까 집에서 푹 쉬자!'}]},
          {q : ['3. 다가오는 생일에 파티를 하려는데.. 초대할 수 있는 친구는?'],
            a : [{ type : 'E', text : '어느 정도 친한 친구도 초대 가능'},
                  { type : 'I', text : '찐친 몇 명만 초대가능'}]},
          {q : ['4. 내가 강아지로 변하면 어떻게 할 것 같아??'],
            a : [{ type : 'S', text : '그럴 수가 있나?'},
                  { type : 'N', text : '다시 돌아올 수 있는거야? 근데 귀엽겠당!'}]},
          {q : ['5. 샤워하면서 무슨 생각해?'],
            a : [{ type : 'S', text : '아무 생각 안하는데?'},
                  { type : 'N', text : '오늘 뭐하지? 뭐 먹지? 어제 뭐 실수한거 없나?'}]},
          {q : ['6. 갑자기 좀비가 나타나면?'],
            a : [{ type : 'S', text : '좀비는 없어.'},
                  { type : 'N', text : '일단 생필품 먼저사고 집에 있는 가구로 무기만들거야'}]},
          {q : ['7. 친구한테 교통사고났다고 전화가 왔다. 당신의 대답은?'],
            a : [{ type : 'T', text : '보험 불렀어?'},
                  { type : 'F', text : '다친 곳 없어? 괜찮아??'}]},
          {q : ['8. 나 너랑 별로 안맞는 것 같아..'],
            a : [{ type : 'T', text : '왜? (이유 궁금)'},
                  { type : 'F', text : '!!! (마상...)'}]},
          {q : ['9. 나 배탈 난 것 같아'],
            a : [{ type : 'T', text : '뭐 먹었는데?'},
                  { type : 'F', text : '약 먹었어?? 얼른 병원 가자!'}]},
          {q : ['10. 심심한데 뭐하냐 나와~'],
            a : [{ type : 'P', text : 'ㅇㅋ 나감'},
                  { type : 'J', text : '응?? 갑자기?? 흠,,,'}]},
          {q : ['11. 오늘 뭐 먹을까?'],
            a : [{ type : 'P', text : '몰라 맛있어보이는 곳 가자'},
                  { type : 'J', text : '계획이 다 있지! 맛집리스트 뽑았다'}]},
          {q : ['12. 여행 갈 때 당신은??'],
            a : [{ type : 'P', text : '대략적으로 코스만 짬 그것도 안지킴'},
                  { type : 'J', text : '시간단위 분단위별로 계획 다 짬'}]},

          {q : ['테스트가 모두 끝났어! 결과 보러 갈래??'],
            a : [{ type : '', text : '결과 보러 가기'}]}
  ]

  const [mbtiList, setMbtiList] = useState([
    {name:'E', count: 0},{name:'I', count: 0},{name:'S', count: 0},{name:'N', count: 0},
    {name:'T', count: 0},{name:'F', count: 0},{name:'P', count: 0},{name:'J', count: 0}
  ])

  return (
    <div className="mbtiLayout">
      {page === 0 ? 
      <div>
        <div className='startLayout'>
          <div className='startLogo'>
            <img src={mbtiImg}/>
            <button onClick={()=>setPage(1)} className='startBtn'>Start!</button>
          </div>
        </div>
      </div>
      : page <= qList.length?
      <div>
        <div>(`${page} / ${qList.length}`)</div>
      </div>
      :
      <div>
        결과페이지
      </div>
      }
    </div>
  );
}

export default App;
