//양쪽 파일 충돌부분체크==완료
//버튼 및 창 호출명 작성(20~)==완료
//특정 페이지만 보이게하는 함수 작성 변수=페이지배열,페이지호출명 (50~)

//메인창 배열 :34~
//버튼 클릭 로직:70~

//mytool부분:150~



// 기초 ai데이터
const aipropertyObj = {
  "ChatGPT": {
    kindpaying: "구독",
    price: 0,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    section: "prompt"
  },
  "ChatGPT Plus": {
    kindpaying: "구독",
    price: 20,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    section: "prompt"
  },
  "Grammarly": {
    kindpaying: "구독",
    price: 0,
    logo: "https://static.grammarly.com/assets/files/1f6f1cce4e0a5f9b9e9b8a3e3e0e7e8f/logo.png",
    section: "writing"
  },
  "Grammarly Premium": {
    kindpaying: "구독",
    price: 12,
    logo: "https://static.grammarly.com/assets/files/1f6f1cce4e0a5f9b9e9b8a3e3e0e7e8f/logo.png",
    section: "writing"
  },
  "Hemingway Editor": {
    kindpaying: "일회성",
    price: 19.99,
    logo: "https://www.hemingwayapp.com/images/hemingway-logo.png",
    section: "writing"
  },
  "ProWritingAid": {
    kindpaying: "구독",
    price: 0,
    logo: "https://prowritingaid.com/images/logo.png",
    section: "writing"
  },
  "ProWritingAid Premium": {
    kindpaying: "구독",
    price: 6.58, // 연 $79 → 월 환산
    logo: "https://prowritingaid.com/images/logo.png",
    section: "writing"
  },
  "ProWritingAid Premium Plus": {
    kindpaying: "구독",
    price: 7.42, // 연 $89 → 월 환산
    logo: "https://prowritingaid.com/images/logo.png",
    section: "writing"
  },
  "QuillBot": {
    kindpaying: "구독",
    price: 0,
    logo: "https://quillbot.com/images/logo.svg",
    section: "writing"
  },
  "QuillBot Premium": {
    kindpaying: "구독",
    price: 9.95,
    logo: "https://quillbot.com/images/logo.svg",
    section: "writing"
  },
  "GitHub Copilot": {
    kindpaying: "구독",
    price: 10,
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    section: "coding"
  },
  "GitHub Copilot Enterprise": {
    kindpaying: "구독",
    price: 19,
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    section: "coding"
  },
  "Tabnine": {
    kindpaying: "구독",
    price: 0,
    logo: "https://www.tabnine.com/images/tabnine_logo.png",
    section: "coding"
  },
  "Tabnine Pro": {
    kindpaying: "구독",
    price: 12,
    logo: "https://www.tabnine.com/images/tabnine_logo.png",
    section: "coding"
  },
  "DeepCode": {
    kindpaying: "구독",
    price: 0,
    logo: "https://www.deepcode.ai/images/deepcode_logo.png",
    section: "coding"
  },
  "DeepCode Pro": {
    kindpaying: "구독",
    price: 12,
    logo: "https://www.deepcode.ai/images/deepcode_logo.png",
    section: "coding"
  },
  "DataRobot": {
    kindpaying: "구독",
    price: null,
    logo: "https://www.datarobot.com/wp-content/uploads/2020/07/DataRobot-logo-blue.svg",
    section: "coding"
  },
  "RapidMiner (Community)": {
    kindpaying: "구독",
    price: 0,
    logo: "https://www.rapidminer.com/wp-content/uploads/2020/06/RapidMiner-logo.png",
    section: "coding"
  },
  "RapidMiner (Enterprise)": {
    kindpaying: "구독",
    price: null,
    logo: "https://www.rapidminer.com/wp-content/uploads/2020/06/RapidMiner-logo.png",
    section: "coding"
  },
  "Adobe Premiere Pro": {
    kindpaying: "구독",
    price: 20.99,
    logo: "https://www.adobe.com/content/dam/cc/icons/premiere.svg",
    section: "videoediting"
  },
  "Adobe Creative Cloud All Apps": {
    kindpaying: "구독",
    price: 52.99,
    logo: "https://www.adobe.com/content/dam/cc/icons/creative-cloud.svg",
    section: "all-around"
  },
  "Final Cut Pro": {
    kindpaying: "일회성",
    price: 299.99,
    logo: "https://www.apple.com/v/final-cut-pro/home/o/images/overview/hero_logo__f4er8tm4oz2m_large.png",
    section: "videoediting"
  },
  "DaVinci Resolve": {
    kindpaying: "구독",
    price: 0,
    logo: "https://www.blackmagicdesign.com/images/products/davinciresolve/desktopicon.png",
    section: "videoediting"
  },
  "DaVinci Resolve Studio": {
    kindpaying: "일회성",
    price: 295,
    logo: "https://www.blackmagicdesign.com/images/products/davinciresolve/desktopicon.png",
    section: "videoediting"
  },
  "HitFilm Express": {
    kindpaying: "구독",
    price: 0,
    logo: "https://fxhome.com/images/hitfilm-express/hitfilm-express-icon.png",
    section: "videoediting"
  },
  "HitFilm Pro": {
    kindpaying: "일회성",
    price: 349,
    logo: "https://fxhome.com/images/hitfilm-pro/hitfilm-pro-icon.png",
    section: "videoediting"
  },
  "Magisto Premium": {
    kindpaying: "구독",
    price: 9.99,
    logo: "https://static.magisto.com/images/magisto_logo.svg",
    section: "videoediting"
  },
  "Magisto Professional": {
    kindpaying: "구독",
    price: 19.99,
    logo: "https://static.magisto.com/images/magisto_logo.svg",
    section: "videoediting"
  },
  "Magisto Business": {
    kindpaying: "구독",
    price: 69.99,
    logo: "https://static.magisto.com/images/magisto_logo.svg",
    section: "videoediting"
  },
  "Adobe Photoshop": {
    kindpaying: "구독",
    price: 20.99,
    logo: "https://www.adobe.com/content/dam/cc/icons/photoshop.svg",
    section: "photoeditor"
  },
  "CorelDRAW": {
    kindpaying: "일회성",
    price: 299,
    logo: "https://www.coreldraw.com/etc/clientlibs/coreldraw/prod/svg/logo.svg",
    section: "photoeditor"
  },
  "CorelDRAW": {
    kindpaying: "구독",
    price: 16.5,
    logo: "https://www.coreldraw.com/etc/clientlibs/coreldraw/prod/svg/logo.svg",
    section: "photoeditor"
  },
  "Procreate": {
    kindpaying: "일회성",
    price: 9.99,
    logo: "https://www.procreate.art/assets/images/logo.svg",
    section: "drawing"
  },
  "Clip Studio Paint PRO": {
    kindpaying: "일회성",
    price: 49.99,
    logo: "https://www.clipstudio.net/images/common/logo.png",
    section: "drawing"
  },
  "Clip Studio Paint EX": {
    kindpaying: "일회성",
    price: 219,
    logo: "https://www.clipstudio.net/images/common/logo.png",
    section: "drawing"
  },
  "Artbreeder": {
    kindpaying: "구독",
    price: 0,
    logo: "https://artbreeder.com/images/logo.svg",
    section: "drawing"
  },
  "Artbreeder Premium": {
    kindpaying: "구독",
    price: 8.99,
    logo: "https://artbreeder.com/images/logo.svg",
    section: "drawing"
  }
};

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

const ai_data = {
  "ChatGPT": [0, 4, 3, 3, 4, 1, 4, 4, 2, 2, 3, 4, 2, 3, 0, 1, 4, 3, 2, 3, 2, 3, 3, 4, 4],
  "ChatGPT Plus": [1, 1, 2, 3, 3, 2, 1, 3, 2, 0, 1, 3, 3, 3, 4, 1, 3, 0, 0, 0, 1, 0, 2, 3, 4],
  "Grammarly": [1, 2, 4, 0, 3, 4, 3, 4, 0, 4, 0, 4, 3, 2, 0, 1, 4, 1, 4, 0, 1, 2, 4, 4, 2],
  "Grammarly Premium": [0, 4, 1, 1, 4, 2, 3, 3, 3, 1, 2, 3, 1, 0, 0, 2, 4, 3, 4, 1, 2, 2, 4, 3, 1],
  "Hemingway Editor": [1, 0, 4, 4, 0, 3, 3, 0, 4, 0, 0, 3, 2, 0, 3, 1, 4, 0, 2, 2, 1, 1, 4, 0, 0],
  "Hemingway Editor 3": [4, 3, 3, 1, 0, 2, 3, 0, 2, 3, 0, 3, 0, 1, 3, 0, 2, 3, 4, 1, 1, 2, 3, 3, 2],
  "ProWritingAid": [3, 2, 4, 3, 2, 3, 3, 1, 3, 4, 0, 3, 1, 3, 0, 2, 3, 0, 4, 1, 1, 2, 3, 2, 2],
  "ProWritingAid Premium": [4, 3, 2, 4, 4, 4, 2, 4, 3, 4, 0, 3, 2, 4, 0, 3, 3, 1, 3, 2, 3, 3, 4, 2, 2],
  "ProWritingAid Premium Plus": [4, 4, 3, 4, 3, 4, 3, 4, 4, 3, 0, 3, 4, 3, 1, 3, 3, 2, 4, 3, 3, 3, 4, 4, 3],
  "QuillBot": [1, 1, 2, 2, 3, 0, 0, 1, 0, 2, 0, 2, 2, 0, 1, 1, 2, 0, 1, 0, 2, 1, 3, 4, 2],
  "QuillBot Premium": [2, 3, 2, 3, 3, 0, 1, 2, 1, 3, 0, 2, 3, 0, 2, 2, 3, 0, 2, 1, 3, 1, 3, 4, 3],
  "GitHub Copilot": [0, 0, 0, 1, 0, 4, 1, 4, 2, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0],
  "GitHub Copilot Enterprise": [0, 0, 0, 2, 1, 4, 2, 4, 3, 4, 0, 0, 0, 0, 0, 0, 3, 0, 1, 4, 0, 0, 0, 0, 0],
  "Tabnine": [0, 0, 0, 0, 0, 4, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0],
  "Tabnine Pro": [0, 0, 0, 0, 1, 4, 3, 3, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 4, 0, 0, 0, 0, 0],
  "DeepCode": [0, 0, 0, 0, 0, 4, 4, 3, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0],
  "DeepCode Pro": [0, 0, 0, 1, 1, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 3, 1, 1, 4, 0, 0, 0, 0, 0],
  "DataRobot": [0, 0, 0, 0, 0, 3, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 2, 3, 3, 0, 0, 0, 0, 0],
  "RapidMiner (Community)": [0, 0, 0, 0, 0, 2, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 3, 1, 2, 3, 0, 0, 0, 0, 0],
  "RapidMiner (Enterprise)": [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 4, 2, 3, 3, 0, 0, 0, 0, 0],
  "Adobe Premiere Pro": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Adobe Creative Cloud All Apps": [4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  "Final Cut Pro": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "DaVinci Resolve": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "DaVinci Resolve Studio": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "HitFilm Express": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "HitFilm Pro": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Magisto Premium": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Magisto Professional": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Magisto Business": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "Adobe Photoshop": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  "CorelDRAW": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3, 3, 3, 0, 0, 0, 0, 0],
  "CorelDRAW": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  "Procreate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  "Clip Studio Paint PRO": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 3, 3, 3, 0, 0, 0, 0, 0],
  "Clip Studio Paint EX": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
  "Artbreeder": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 2, 3, 3, 0, 0, 0, 0, 0],
  "Artbreeder Premium":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0]
};






// 호출명
// 버튼

const btStartpageToMytool=document.querySelector('.entry-mytool');
const btStartpageToAItool=document.querySelector('.entry-aItool');
const btHome=document.querySelector('.entry-home');


//main창

const mainHome=document.querySelector('.startpage');
const mainMytool=document.querySelector('.Grandpr-mytool');
const mainAitool=document.querySelector('.aitool');


// 메인 창 배열
let mainArr=[mainHome,mainMytool,mainAitool];

















//창열기함수정의
const openWindow=function(name,array){
  // array:원소로 메인창 호출명가짐
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      array[i].style.display = 'block';
    } else {
      array[i].style.display = 'none';
    }
  
}};
  
  
  
  
  
// 창전환로직
btStartpageToMytool.addEventListener('click',()=>openWindow(mainMytool,mainArr) );
  //렌더링 함수 적용                  

btHome.addEventListener('click', ()=>openWindow(mainHome,mainArr)   );

btStartpageToAItool.addEventListener('click',()=>openWindow(mainAitool,mainArr));
 
  

                                                
                                                 
                                          































































  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
// mytool페이지

//기초변수불러오기:+10줄
//스와이프로직:+20
//캘린더생성함수 :+90






// 기초변수불러오기
 const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월"
];

  
  
  

 
// 스와이프로직
  const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      mousewheel:true,
      speed:100,
     
      // loop:true
  
    });
  
 
  
  
const wholeswiper = new Swiper(".wholeSwiper",{
  wrapperClass:"wholewrapper",
  slideClass:"wholeslide",
  direction:'vertical',
  spaceBetween:30,
  grabCursor:true,
  mousewheel:true,
  
   on: {
    slideChangeTransitionEnd: function () {
      const slides = document.querySelectorAll('.wholeslide');
      
      slides.forEach((slide, index) => {
       
        
        
        
        
        if (index === wholeswiper.activeIndex) {
          // 현재 슬라이드는 보이게
          // slide.style.display = 'block';
          slide.style.opacity = '1';
          slide.style.pointerEvents = 'auto';
        } else {
          // 다른 슬라이드는 숨기되, 다시 보여질 수 있도록 유지
          // slide.style.display = 'none';
          slide.style.opacity = '0';
          slide.style.pointerEvents = 'none';
        };
        
      });
      
      if(wholeswiper.activeIndex===1){
        makeWholeCalendar(currentYear,currentMonth);
      };
      

  
  
  
}
   
   }
  
});
  
  
  
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.wholeslide');
  slides.forEach((slide, index) => {
    if (index === 0) {
      // slide.style.display = 'block';
      slide.style.opacity = '1';
    } else {
      // slide.style.display = 'none';
      slide.style.opacity = '0';
      slide.style.pointerEvents = 'none';
    }
  });
});




//캘린더생성함수

function renderCalendar(year, month) {
  const monthText = document.getElementById('current-month');
  const grid = document.querySelector('.calendar-grid');

  // 기존 날짜 제거
  const oldDates = document.querySelectorAll('.date-cell');
  oldDates.forEach(el => el.remove());

  // 월/연도 출력
  monthText.textContent = `${year}년 ${monthNames[month]}`;

  // 날짜 계산
  const firstDay = new Date(year, month, 1).getDay(); // 시작 요일
  const lastDate = new Date(year, month + 1, 0).getDate(); // 말일

  // 공백 셀 추가
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.classList.add('date-cell');
    empty.style.background = "transparent";
    grid.appendChild(empty);
    
    
    
  }

  // 날짜 셀 추가
  for (let i = 1; i <= lastDate; i++) {
    const cell = document.createElement('div');
    cell.classList.add('date-cell');
    cell.textContent = i;
    grid.appendChild(cell);
  }
}
function makeWholeCalendar(year,month) {
  
  renderCalendar(year,month);
  
  document.getElementById('prev-month').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(year, month);
});
  
  
document.getElementById('next-month').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(year, month);
});
  
};
// renderCalendar(currentYear, currentMonth);
  
    // 이전/다음 월 버튼






































































// aitool 부분




// 톱부분
const divTop=document.querySelector(".top-aitool");
const toptxtdivTop=document.querySelectorAll(".top-aitool > ul>li");

// 특정 과정만 볼드체 처리 함수
const functopBolding=function(index){
 for(let i=0;i<toptxtdivTop.length;i++){
   if(index===i){
     toptxtdivTop[i].style.fontWeight="bold";
   }else{
     toptxtdivTop[i].style.fontWeight="normal";
   };
 };
};




// 메인부분

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("next-btn");
const resultSection = document.getElementById("result-section");
const resultText = document.getElementById("result-text");
const againbt = document.getElementById("again");
const btTutorialToQuiz=document.querySelector(".tutorialbutton");


const tutorialDiv=document.getElementById("tutorial");


const quizSectionDiv=document.getElementById("quizSection");
const divSectionname=document.getElementById("section-name");

const i_arrOfresultLi=document.querySelectorAll("#result-section .item1>li");
const ii_arrOfresultLi=document.querySelectorAll("#result-section .item2>li");
const iii_arrOfresultLi=document.querySelectorAll("#result-section .item3>li");
const arr_arrOfresultLi=[i_arrOfresultLi,ii_arrOfresultLi,iii_arrOfresultLi];


// 버텀부분 지정
const divButtom =document.querySelector(".buttom-aitool");
const divProgressContainer=document.querySelector(".progress-container");
const divProgressBar = document.querySelector(".progress-bar");


const divResultBottom=document.querySelector(".result-buttons");
const arrOfBtInResultButtom=document.querySelectorAll(".result-buttons >button");
const arrOfUlrowInResultButton=document.querySelectorAll(".price-Inform > ul");







// 초기화시점 selectAnswer 마지막
let progress=0;

// progress 바 display 상태 연결함수
const funcProgressDisplay=function(display){
  // display값은 block 또는 none
  if(display === "block"){
    divProgressContainer.style.display='block';
    divButtom.style.display='block';
  }else{
    divProgressContainer.style.display='none';
    divButtom.style.display='none';
  }
}
// 작동확인




// questionBox 질문보이기 로직 관련 정의

// 초기화시점:selectAnswer 마지막
let currentQuestion = 0;

//초기화시점=> 
let answers =[];

//진행바 로직







const divarrTonextWindow=[tutorialDiv,quizSectionDiv,resultSection];




// 기본함수

// 1.창이동함수
const nextWindow=function(pageName,array){
  for(let i=0;i<array.length;i++){
    if(array[i]===pageName){
      array[i].style.display='block';
    }else{
    array[i].style.display='none'; 
    };
  };
};








const allfuncOfTutorialToQuize=function(){
  nextWindow(quizSectionDiv,divarrTonextWindow);
  //작동확인
  showQuestion();
  
};


//next tuttorialbutton 이벤트 지정
btTutorialToQuiz.onclick=() => allfuncOfTutorialToQuize();
//작동확인

function showQuestion() {
  // 진행바 display 바꾸기
  funcProgressDisplay('block');
  
  // top부분 bold처리
  functopBolding(0);
  
  // 다음버튼 없애기
  nextBtn.style.display="none";
  
  
  const q = ask[currentQuestion];
  // 질문 추가
  questionBox.innerHTML = `<h3>${q.text}</h3>`;
  //section 추가
  divSectionname.innerHTML=`<h2>${q.section}</h2>`;
  
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
  
  //!!! 진행도 업데이트
   
  
  // 진행도 정의
  progress=(currentQuestion/ask.length)*100;
  // 진행도바꾸기 (길이만큼 %)
  divProgressBar.style.width=progress+"%";
  
  
  
  if (currentQuestion < ask.length) {
    showQuestion();
    // 질문 끝까지 진행
   } else {
    // 결과보이기
    showResult();
    currentQuestion=0;
    progress=0;
    
  };
};


  

// 초기화시기:againbt 클릭시
 let totalsub=0;
 let totalonce=0;




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


//result 창관련 함수 변수=AI추천 결과 배열, 
const typingOutput=function(arrOfoutput,item_num){
    // 아이템 클라스지정
  const place=arr_arrOfresultLi[item_num];
    
    // ai정보 접근할 키값 지정
    aiName=arrOfoutput[item_num];
    // li첫번재 요소:이미지 추가 및 주소 추가 
    const newimg=document.createElement("img");
    const imgOfplace=place[0].appendChild(newimg);
    imgOfplace.src=aipropertyObj[aiName].logo;
    // 버텀부분 상수선언
 
  
    //2번째:이름
      place[1].innerHTML=`${aiName}`;
    //3번째:가격:구독=>구독,일시불이면 일시
    if(aipropertyObj[aiName].kindpaying==="구독"){
      place[2].innerHTML=`${aipropertyObj[aiName].price}$/month`;
      totalsub +=aipropertyObj[aiName].price;
      
    }else{
      place[2].innerHTML=`${aipropertyObj[aiName].price}$ (1회지불)`;
      totalonce+=aipropertyObj[aiName].price;
    };
    
  
  
  
  
  
};



//result 창 초기화 함수 

const resetResulst=function(numOfoutput){
  // 1)추가된 요소 모두 제거하기 
  // 각 행에 접근
  for(let i=0;i<numOfoutput;i++){
    const place=arr_arrOfresultLi[i];
    // 각열에 접근
    const targetImg=place[0].querySelector("img");
    
    place[0].removeChild(targetImg);
    place[1].innerHTML="";
    place[2].innerHTML="";
    
    
    
  };
  
  //바텀부분 display 상태 
  divResultBottom.style.display="none";
  
  
  
};




function showResult() {
  functopBolding(1);
  
  
  
  console.log(answers);
  // 퀴즈창 숨기고 결과창보이기
  document.getElementById("quizSection").style.display = "none";
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
    smalleraiCos[v2]=aiCos[v2];
  };
  console.log(smalleraiCos); //이상X
  
  
  
// 중복 접두사 제거하고 가장 유사도 높은 것만 선택

// 1. prefix → 추천 후보군 매핑
const prefixMap = {};  // { "ProWritingAid": [ { name, score } ] }

for (let i = 0; i < smallerAIname.length; i++) {
  const name = smallerAIname[i];
  const score = aiCos[name];

  // 접두사 추출
  let prefix = name.split(" ")[0];

  // 예외적인 브랜드명 대응 (2단어 이상의 접두사 고려)
  if (name.includes("ProWritingAid")) prefix = "ProWritingAid";
  if (name.includes("Grammarly")) prefix = "Grammarly";
  if (name.includes("GitHub Copilot")) prefix = "GitHub Copilot";
  if (name.includes("QuillBot")) prefix = "QuillBot";
  if (name.includes("ChatGPT")) prefix = "ChatGPT";

  // prefix 별로 그룹화
  if (!prefixMap[prefix]) prefixMap[prefix] = [];
  prefixMap[prefix].push({ name, score });
}

// 2. 각 prefix에서 유사도 가장 높은 툴 하나 선택
const bestCandidates = [];

for (const prefix in prefixMap) {
  const sortedGroup = prefixMap[prefix].sort((a, b) => b.score - a.score);
  bestCandidates.push(sortedGroup[0]);  // 가장 높은 점수만 채택
}

// 3. 전체 후보 중 상위 3개만 추천
const recomAI = bestCandidates
  .sort((a, b) => b.score - a.score)
  .slice(0, 3)
  .map(item => item.name);

  
  

  
  
  
  
  // 텍스트 구현:result-text(p태크)에 추가
//   resultText.textContent=recomAI.join("+");
//   console.log(recomAI);
  for(let i=0;i<3;i++){
   typingOutput(recomAI,i);
  }
  
    //바텀 부분 구현 초기화시기:resetResulst에 포함
  divProgressContainer.style.display="none";
  divResultBottom.style.display="block";
  
  let total=totalonce+totalsub;
  arrOfUlrowInResultButton[0].querySelector(".output").innerHTML=`${totalsub.toFixed(2)}`;
    arrOfUlrowInResultButton[1].querySelector(".output").innerHTML=`${totalonce.toFixed(2)}`;
    arrOfUlrowInResultButton[2].querySelector(".output").innerHTML=`${total.toFixed(2)}`;
  
  
  
  
  
  againbt.onclick=()=>{
    
    // 초기화
    resultSection.style.display = "none";
    document.getElementById("quizSection").style.display = "block";
    currentQuestion=0;
    answers=[];
    resetResulst(3);
    const totalsub=0;
    const totalonce=0;
    
    
    
    // 질문보이기
    
    showQuestion();
   
    
    
  };
  
  
        
  
  // 1)ai_data의 각 ai툴과 각 구하기
  // 2)각들을 새로운 객체에 넣기
  //3)각들이 적은 순으로 나열한후 3개씩 묶어서 추천하기 
  
};
