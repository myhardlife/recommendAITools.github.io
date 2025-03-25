// 문제:다시하기 버튼 리로드 안됌


// 넣을 기능
// :결과값 출력
// 질문 전 설명 창
// 다시하기 버튼 활성화




// ask 속성: text=내용,section:질문파트,Qnum:질문번호,type,option:선택지에 따른 값할당

const ask=[
  {text:"문법 및 철자 자동 수정 기능",
   section:"writing",
   Qnum:1,
   type:"x_1",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"서식 및 레이아웃 자동정리 기능",
   section:"writing",
   Qnum:2,
   type:"x_1",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"음성 인식 기능을 통해 텍스트를 작성",
   section:"writing",
   Qnum:3,
   type:"x_1",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"AI 기반의 텍스트 분석을 통해 요약 및 주요 정보 추출 기능",
   section:"writing",
    Qnum:4,
   type:"x_1",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"이메일 및 보고서 작성의 효율성 증대",
   section:"writing",
    Qnum:5,
   type:"x_1",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  
//   코딩,데이터분석
  
  
  {text:"자동화된 코드 생성 기능",
   section:"code",
    Qnum:6,
   type:"x_2",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"데이터셋의 이상치 탐지 및 정제 기능",
   section:"code",
    Qnum:7,
   type:"x_2",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:" 머신러닝 모델 생성 및 평가 기능",
   section:"code",
    Qnum:8,
   type:"x_2",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"데이터 시각화 도구",
   section:"code",
    Qnum:9,
   type:"x_2",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"데이터 분석 결과를 자동으로 해석하여 리포트를 생성",
   section:"code",
    Qnum:10,
   type:"x_2",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  
  
  // 영상편집분야
  {text:"영상의 색상 보정",
    Qnum:11,
   section:"video",
   type:"x_3",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"자동 자막 생성 기능",
    Qnum:12,
   section:"video",
   type:"x_3",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"영상의 트랜지션 및 효과 자동 적용 기능",
    Qnum:13,
   section:"video",
   type:"x_3",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"비디오 클립의 하이라이트를 자동으로 편집",
    Qnum:14,
   section:"video",
   type:"x_3",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"영상에서 소리와 음악을 자동으로 분리",
   section:"video",
    Qnum:15,
   type:"x_3",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]},
   {text:"그림을 자동으로 채색하거나 스타일을 변경",
   section: "photo",
     Qnum:16,
   type:"x_4",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]},
   {text:"이미지 내 객체나 인물의 윤곽을 자동으로 추출",
   section:"photo",
     Qnum:17,
   type:"x_4",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"포토샵에서 자동으로 배경을 제거",
   section:"photo",
    Qnum:18,
   type:"x_4",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"이미지를 해상도 및 품질을 자동으로 향상시키는 기능",
   section:"photo",
    Qnum:19,
   type:"x_4",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"드로잉 작업시 이미지 변환 또는 보정 기능",
   section:"photo",
    Qnum:20,
   type:"x_4",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
   {text:"자동 응답 시스템을 통해 고객 서비스에 활용",
   section:"talk",
     Qnum:21,
   type:"x_5",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:" 대화형 챗봇으로 고객의 질문을 자동으로 처리",
   section:"talk",
    Qnum:22,
   type:"x_5",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"이메일이나 메시지의 작성 및 자동 답변 기능",
   section:"talk",
    Qnum:23,
   type:"x_5",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"다국어 번역을 실시간으로 활용",
   section:"talk",
    Qnum:24,
   type:"x_5",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  {text:"사용자 경험을 향상시키기 위한 맞춤형 대화 기능",
   section:"talk",
    Qnum:25,
   type:"x_5",
   options:[
     {text:"0",value:0},
     {text:"1",value:1},
     {text:"2",value:2},
     {text:"3",value:3},
     {text:"4",value:4}
   ]
  },
  
];

// ai_data 속성: Qnum에 따른 value 값 data
let ai_data = {
  "ChatGPT": [3, 1, 2, 3, 4, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 3, 4],
  "Grammarly": [4, 3, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1],
  "Hemingway Editor": [2, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "ProWritingAid": [4, 3, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1],
  "QuillBot": [3, 1, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1],
  "GitHub Copilot": [0, 0, 0, 0, 0, 4, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Tabnine": [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "DeepCode": [0, 0, 0, 0, 0, 1, 3, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "DataRobot": [0, 0, 0, 0, 0, 1, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "RapidMiner": [0, 0, 0, 0, 0, 1, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Adobe Premiere Pro": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Final Cut Pro": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "DaVinci Resolve": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "HitFilm Express": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Magisto": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Adobe Photoshop": [1, 2, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  "CorelDRAW": [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 2, 0, 0, 0, 0, 0],
  "Procreate": [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 2, 3, 0, 0, 0, 0, 0],
  "Clip Studio Paint": [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 2, 3, 4, 0, 0, 0, 0, 0],
  "Artbreeder": [1, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 1, 3, 3, 0, 0, 0, 0, 0]
};

// 초기화시점:selectAnswer 마지막
let currentQuestion = 0;

//초기화시점=> 
let answers =[];


const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-btn");
const resultSection = document.getElementById("result-section");
const resultText = document.getElementById("result-text");
const againbt = document.getElementById("again");



// 질문창생성
nextBtn.onclick=() => showQuestion();

function showQuestion() {
  // 다음버튼 없애기
  nextBtn.style.display="none";
  
  
  const q = ask[currentQuestion];
  // 질문 추가
  questionBox.innerHTML = `<h3>${q.text}</h3>`;
  
  q.options.forEach(opt => {
    const btn = document.createElement("div");
    // btn css지정
    btn.className = "option";
    btn.textContent = opt.text;
    
//     btn 이벤트지정
    btn.onclick = () => selectAnswer(answers,opt.value);
    
    // btn위치
    questionBox.appendChild(btn);
  });
  
  
};
// 답변받기:answers 초기화위해 변수로 지정
function selectAnswer(arr,value) {
  // 답변저장
  arr.push(value);
  console.log(answers);
  
  // 질문넘어가기
  currentQuestion++;
  if (currentQuestion < ask.length) {
    showQuestion();
    // 질문 끝까지 진행
   } else {
    // 결과보이기
    showResult();
    currentQuestion=0;
    
  };
};


  







  function cosineSimilarity(vecA, vecB) {
  if (vecA.length !== vecB.length) {
    throw new Error("두 벡터의 길이는 같아야 합니다.");
  }

  // 내적 계산
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);

  // 벡터 크기 계산
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));

  if (magnitudeA === 0 || magnitudeB === 0) {
    throw new Error("영벡터(크기가 0인 벡터)는 사용할 수 없습니다.");
  }

  // 코사인 유사도 반환
  return dotProduct / (magnitudeA * magnitudeB);
};


function showResult() {
  
  
  
  
  console.log(answers);
  // 퀴즈창 숨기고 결과창보이기
  document.getElementById("quiz-section").style.display = "none";
  resultSection.style.display = "block";
  
  
//   객체의 호출명으로 이루어진 배열
  const AI_name=Object.keys(ai_data);
  // 코사인유사도를 넣을 배열
  // const output = [];
  //ai-코사인유사도 객체만들기
  console.log(AI_name);
  const aiCos={};
  console.log("과정1");
  // 코사인유사도 배열 구하기 
  for(let i=0;i<AI_name.length;i++){
    //특정 AI에 대한 value 값 추출
    const v1 = AI_name[i];
    const arr = ai_data[v1];   //배열
    const out = cosineSimilarity(arr,answers);
    // output.push(out);
    console.log(out);
    // aiCos에 채우기:ai이름 순으로 
    aiCos[v1]=out
    
  };
  console.log("과정2");
  console.log(aiCos);
  
  //aiCos 함수 완성
  // 코사인 값 큰 순으로 배열
  const smallerAIname = AI_name.sort((a,b)=>aiCos[b]-aiCos[a]);
  const smalleraiCos={};
  for(let i=0;i<smallerAIname.length;i++){
    const v2 = smallerAIname[i];
    smalleraiCos.v2=aiCos.v2;
  };
  console.log("과정3"); //이상X
  
  
  
  //앞에 3개 추천
  const recomAI=[];
  for(let i=0;i<3;i++){
    recomAI.push(smallerAIname[i]);
  };
  
  // 텍스트 구현:result-text(p태크)에 추가
  resultText.textContent=recomAI.join("&");
  console.log(recomAI);
  
  
  
  
  againbt.onclick=()=>{
    
    // 초기화
    resultSection.style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    currentQuestion=0;
    answers=[];
    showQuestion();
  };
  
  
        
  
  // 1)ai_data의 각 ai툴과 각 구하기
  // 2)각들을 새로운 객체에 넣기
  //3)각들이 적은 순으로 나열한후 3개씩 묶어서 추천하기 
  
};








// 콘솔
// console.log(ask.length);
// console.log(answers);