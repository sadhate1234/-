let lottoCnt;   //구매할 로또 장수
let lottoNumMark = new Array(15);     //마킹한 로또 번호 저장
let page=0,markCnt= new Array(15);    //현재 마킹중인 로또용지의 페이지와 현재 페이지에서 마킹한 로또 번호 개수
let lottoNum = new Array(45);   //로또 추첨기에서 나온 수가 저장될 배열
let scene = 1;  // 현재 장면
let cmpresult = new Array(15);    //로또 번호가 맞았는지 비교  
let result; //라이브방송추첨결과
let livecnt=0;  //라이브뽑기공순서



let result2 =[];
let cnt=[0,0,0,0,0,0];
let maxCnt;

let clock1, clock2,five,six;
let fourth = new Array(10);
let rotateSpeed = 0;
let bgbg;
let w1;
let w2;
let w3;
let w4;
let w5;
let w6;
let w7;
let w8;
let w9;
let w10;
let woutline;
let person;
let smoke;
let phonebg;
let pen;
let lefthand;
let en;
let lll;
let rrr;
let qrshit;
let qrbox;
let phone;
let nor;
let dhcjsdnjs;
let dhaksdnjs;
let sp;
let fp;
let whwkrtjfaud;
let wpahr;

let matchNum=new Array(15);


let k = 1;

// 1. 전역 변수 선언
let phoneX = 1920;
let phoneY = 1080;
let phoneMoving = true; // 이동 중 여부
let phoneArrivedFrame = null;
let tearY = 0;
let tearSpeed = 4;





function randNum() {
  let num = new Set();
  
  while(num.size<7){
    let x = parseInt(random(1,46));
    num.add(x);
  }
  
  
  result = Array.from(num);
  
}


for(let i=0;i<15;i++)     //lottoNumMark 배열 선언 및 초기화
{
    lottoNumMark[i]=new Array(45);
    markCnt[i]=0;
    cmpresult[i] = new Array(6);
    for(let j=0;j<45;j++)
    {
        lottoNumMark[i][j]=-1;
        lottoNum[j]=-1;
    }

}

function preload(){
    sp = loadImage('assets/sp.png');
    fp = loadImage('assets/fp.png');
    wpahr = loadImage('assets/wpahr.png');
    whwkrtjfaud = loadImage('assets/whwkrtjfaud.png');
    nor = loadImage('assets/nor.png');
    dhcjsdnjs = loadImage('assets/5000r.png');
    dhaksdnjs = loadImage('assets/50000r.png');
    qrbox = loadImage('assets/qrbox.png');
    phone =loadImage('assets/phone.png');
    qrshit = loadImage('assets/qrshit.png');
    lll = loadImage('assets/lll.png');
    rrr = loadImage('assets/rrr.png');
    en = loadImage('assets/엔터네모.png');
    lefthand = loadImage('assets/왼손.png');
    clock1=loadImage('assets/3-1.png');
    clock2=loadImage('assets/3-2.png');
    fourth[0] = loadImage('assets/livebg.png');
    fourth[1] = loadImage('assets/ball1.png');
    fourth[2] = loadImage('assets/ball2.png');

    
    five=loadImage('assets/5.png');
    six=loadImage('assets/6.png');
    intro=loadImage('assets/0.png');
    ending=loadImage('assets/end.png');
    bgbg = loadImage('assets/bgbg.png');
    w1 = loadImage('assets/1,000.png');
    w2 = loadImage('assets/2,000.png');
    w3 = loadImage('assets/3,000.png');
    w4 = loadImage('assets/4,000.png');
    w5 = loadImage('assets/5,000.png');
    w6 = loadImage('assets/6,000.png');
    w7 = loadImage('assets/7,000.png');
    w8 = loadImage('assets/8,000.png');
    w9 = loadImage('assets/9,000.png');
    w10 = loadImage('assets/10,000.png');
    woutline = loadImage('assets/woutline.png');
    person = loadImage('assets/person.png');
    smoke = loadImage('assets/smoke.png');
    phonebg = loadImage('assets/복권당첨화면.png');
    pen = loadImage('assets/손.png');
}

function setup(){
    createCanvas(1920, 1080);
    randNum();
    fourth[9]=1;
    NumToOmr();
    
    
}

function draw(){
    background(193,228,159);
    if(scene === 0)
        image(intro,0,0);
    if(scene === 1)
        firstScene();
    lottoCnt=k;
    if(scene === 2)
        printLotto();
    if(scene === 3)
        clockAnimation();
    if(scene === 4)
    {
        fourth[9]++;
        fourthScene();
    }
    if(scene === 5)qrcheck();
    if(scene === 6)
    {
        lottoCmpResult1();
    }
    if(scene === 7)
        lottoResult();
    if(scene === 8)
        image(ending,0,0);
}

function firstScene(){
    background(220);
    image(bgbg,0,0,1920,1080);

    if(1200<mouseX && mouseX<1790 && 44<mouseY && mouseY<267){
        image(woutline,1000,-200,1000,800);
    }
    if(k>1)image(lll,1060,120,100,100);
    if(k<5)image(rrr,1810,120,100,100);


    if(k<2){
        image(w1,1000,-200,1000,800);
    }else if(k===2){
        image(w2,1000,-200,1000,800);
        image(smoke,1300,250,573,439);
    }else if(k===3){
        image(w3,1000,-200,1000,800);
    }else if(k===4){
        image(w4,1000,-200,1000,800);
        image(smoke,1300,250,573,439);
    }else if(k===5){
        image(w5,1000,-200,1000,800);
    }else if(k===6){
        image(w6,1000,-200,1000,800);
        image(smoke,1300,250,573,439);
    }else if(k===7){
        image(w7,1000,-200,1000,800);
    }else if(k===8){
        image(w8,1000,-200,1000,800);
        image(smoke,1300,250,573,439);
    }else if(k===9){
        image(w9,1000,-200,1000,800);
    }else if(k>9){
        image(w10,1000,-200,1000,800);
        image(smoke,1300,250,573,439);
    }
    image(person,1200,300,642,786);
    image(whwkrtjfaud,10,210,500,50);
    image(wpahr,10,10,900,130);

    
}


function printLotto() {
    
    
    textAlign(CENTER, CENTER);
    let i,j;
    rectMode(CENTER);
    fill('#FFFFFF');
    rect(width/2,height/2,350,1020);
    fill('#000000');
    textSize(100);
    text(page+1+'/'+lottoCnt,335,100);
    text(markCnt[page]+'/6',1400,100);
    textSize(20);
    for(i=0;i<6;i++)
    {
        for(j=0;j<7;j++)
        {
            if(lottoNumMark[page][i*7+j]>0)
            {
                fill('#000000');
            }
            else
            {
                fill('#FFFFFF');
            }
            rect(width/2-150+j*50,180+75*i,50,75);
            fill('#000000');
            text(i*7+j+1,width/2-150+j*50,180+75*i);
        }
    }
    for(j=0;j<3;j++)
    {
        if(lottoNumMark[page][i*7+j]>0)
        {
            fill('#000000');
        }
        else
        {
            fill('#FFFFFF');
        }
        rect(width/2-150+j*50,630,50,75);
        fill('#000000');
        text(i*7+j+1,width/2-150+j*50,630);
    }
    if(page>0)image(lll,600,400,100,100);
    if(page<k-1)image(rrr,1200,400,100,100);
    image(lefthand,200,650,400,400);
    noCursor();
    image(pen,mouseX,mouseY-50,300,300);
    
    
    if (
        
        markCnt.slice(0, k).every(cnt => cnt === 6)
    ) {
        if (frameCount % 46 < 30) image(en, 500, 400, 800, 350);
    }
    
}

function clockAnimation(){
    cursor();
    image(clock1,0,0);
    if(rotateSpeed<9.9)
    {
        rotateSpeed+=0.1;
    }
    push();
    translate(1450,450);
    rotate(rotateSpeed);
    image(clock2,-1450,-450);
    pop();
}
function fourthScene(){
    image(fourth[0],0,0);
    if(fourth[9]%2===0)image(fourth[1],0,0);
    if(fourth[9]%2===1)image(fourth[2],0,0);
    
    textSize(90);
    textStyle(BOLDITALIC);
    text('뽑기!',1420,320);
    textAlign(CENTER, CENTER);
    textSize(50);
    if(livecnt>0)text(result[0],675,905);
    if(livecnt>1)text(result[1],815,905);
    if(livecnt>2)text(result[2],955,905);
    if(livecnt>3)text(result[3],1095,905);
    if(livecnt>4)text(result[4],1235,905);
    if(livecnt>5)text(result[5],1375,905);
    if(livecnt>6)text(result[6],1505,905);
    

}




function qrcheck(){
    image(qrshit,0,0);

    // 이동 중이면 위치 갱신
    if(phoneMoving){
        if(phoneX > 560) phoneX -= 20;
        if(phoneY > 100) phoneY -= 20;
        if(phoneX <= 560 && phoneY <= 100){
            phoneX = 560;
            phoneY = 100;
            phoneMoving = false;
            phoneArrivedFrame = frameCount; // 도착한 시점 기록
        }
    }
    image(phone, phoneX, phoneY);

    // phone이 도착한 뒤 1초(60프레임) 후에 qrbox 표시
    if(phoneArrivedFrame !== null && frameCount - phoneArrivedFrame >= 60){
        image(qrbox,748,300);
    }
}




function lottoCmpResult1(){
    image(phonebg,0,0);

    textSize(50);
    textStyle(BOLDITALIC);
    textAlign(CENTER, CENTER);




    let xStart = 750;
    let xGap = 100;
    let y = 300;
    let circleSize = 70;
    let textSizeNum = 32;
    noStroke();
    for(let i = 0; i < 7; i++) {
        if(result2[i] >= 10 && result2[i] < 20) {
            fill(0, 128, 255); // 파랑
        } else if(result2[i] >= 20 && result2[i] < 30) {
            fill(255, 0, 0); // 빨강
        } else if(result2[i] >= 30 && result2[i] < 40) {
            fill(128, 128, 128); // 회색
        } else if(result2[i] >= 40 && result2[i] <= 45) {
            fill(0, 200, 0); // 초록
        } else {
            fill(255, 255, 0); // 노랑
        }
        ellipse(xStart + i * xGap, y, circleSize, circleSize);
        fill(0); // 검정색
        textSize(textSizeNum);
        textAlign(CENTER, CENTER);
        text(result2[i], xStart + i * xGap, y);
    }

    let rowYStart = 500;
    let rowYGap = 100;
    let colXStart = 850;
    let colXGap = 100;
    let circleMarkSize = 50;
    let cmpTextSize = 50;
    for(let row = 0; row < k; row++) {
        for(let col = 0; col < 6; col++) {
            let num = cmpresult[row][col];
            let x = colXStart + col * colXGap;
            let y = rowYStart + row * rowYGap;
            fill(0);
            textSize(cmpTextSize);
            textAlign(CENTER, CENTER);
            text(num, x, y);
            if(result2.includes(num)) {
                noFill();
                stroke(255, 0, 0, 150); // 연한 빨강
                strokeWeight(8);        // 두껍게
                ellipse(x, y, circleMarkSize, circleMarkSize);
                noStroke();
            }
        }

    }

    for(let i = 0;i<k;i++){
        if(cnt[i]<3)text('낙첨',725,500+100*i);
        if(cnt[i]===3)text('5등',725,500+100*i);
        if(cnt[i]===4)text('4등',725,500+100*i);
        if(cnt[i]===5)text('2등',725,500+100*i);
        if(cnt[i]===6)text('1등',725,500+100*i);
    }



    if(maxCnt<3)text('낙첨 되셨습니다!',1050,400);
    if(maxCnt === 3 )text('5등 당첨!',1050,400);
    if(maxCnt === 4 )text('4등 당첨!',1050,400);
    if(maxCnt === 5)text('2등 당첨!',1050,400);
    if(maxCnt === 6 )text('1등 당첨!',1050,400);


    


}






function lottoResult(){
    if(maxCnt<3){
        image(nor,0,0);

        // 예시: nor 이미지 위에 눈물 두 줄
        fill(0, 180, 255, 180);
        noStroke();
        // 좌표는 nor 이미지의 얼굴 위치에 맞게 조정하세요!
        ellipse(650, 400 + tearY, 20, 40); // 왼쪽 눈
        ellipse(900, 400 + tearY, 20, 40); // 오른쪽 눈

        tearY += tearSpeed;
        if(tearY > 1000) tearY = 0; // 눈물이 일정 거리 이상 떨어지면 다시 위로
    }
    if(maxCnt===3)image(dhcjsdnjs,0,0);
    if(maxCnt===4)image(dhaksdnjs,0,0);
    if(maxCnt===5)image(sp,0,0);
    if(maxCnt===6)image(fp,0,0);
}



function NumToOmr(){
    for(let i=0;i<7;i++)
    {
        lottoNum[result[i]-1]=1;
    }
  
 
}










function mousePressed(){




    if(scene === 1){
        if(1200<mouseX && mouseX<1790 && 44<mouseY && mouseY<267){
            scene++;
        }
    }

    if(scene === 2){
        if(mouseX>=785 && mouseX<=1135 && mouseY>=142.5 && mouseY<=667.5)
        {
            xPos=int((mouseX-785)/50);
            yPos=int((mouseY-142.5)/75);
            if(yPos*7+xPos<45&&markCnt[page]-lottoNumMark[page][yPos*7+xPos]<=6)
            {
                lottoNumMark[page][yPos*7+xPos]*=-1;
                markCnt[page]+=lottoNumMark[page][yPos*7+xPos];
            }    
        }
    }

    if(scene === 4){
        if(1300<mouseX && mouseX<1600 && 230<mouseY && mouseY<350){
            livecnt++;
        }
    }

    if(scene===5){
        if(750<mouseX && mouseX<1070 && 740<mouseY && mouseY<770){
            scene++;
        }

    }
    
}
function keyPressed(){
    if(key ==='f'){
      let fs = fullscreen();
      fullscreen(!fs);
    }
    if(keyCode===ENTER && scene!=8 && scene !=1&&scene!=5&&scene!=4)
    {
        if(scene === 2)
        {
            let p=1;
            for(let i=0;i<lottoCnt;i++)
            {
                if(markCnt[i]!=6)
                    p=-1;
            }
            if(p===1){
                scene++;
            }
        }
        else
        {
            scene++;
        }
    }
    if(scene === 1)
    {
        if(keyCode === RIGHT_ARROW && k<5) k ++;
        if(keyCode === LEFT_ARROW && k!=1) k--;
    }
    if(scene === 2)
    {
        if(keyCode===RIGHT_ARROW && page+1<lottoCnt)
            page++;
        if(keyCode===LEFT_ARROW && page>0)
            page--;
    }
    if(scene === 4){
        if(livecnt>6&&keyCode===ENTER)scene++;
    }




    if(scene === 3 && keyCode ===ENTER){
        numcmp();
        lr();
        r2();
    }
   
}




function numcmp(){
    for(let i = 0;i<k;i++){
        matchNum[i]=[0,0,0,0,0,0];
    }
    

    for(let i =0;i<k;i++){
        for(let j = 0;j<6;j++){
            let x =cmpresult[i][j];
            for(let l=0;l<7;l++){
                if(x===result[l])matchNum[i][j]=1;
            }

        }

    }
    

    for(let i =0;i<k;i++){
        
        for(let j = 0;j<45;j++){
            if(lottoNum[j]===1&&lottoNumMark[i][j]===1){
                cnt[i]++;
            }
        }
    }

    console.log(cnt);
    maxCnt = Math.max(...cnt);
    console.log(maxCnt);



}

function lr(){
  for(let i = 0; i<k;i++){
    cmpresult[i]=[];
    for(let j = 0;j<45;j++){
      if(lottoNumMark[i][j]>0)cmpresult[i].push(j+1);
      
    }
    
  }
  console.log(cmpresult);
  console.log(lottoNum);
  console.log(lottoNumMark[0]);
  console.log(lottoNumMark[1]);
  console.log(lottoNumMark[2]);


}


function r2(){

    for(let j = 0;j<45;j++){
        if(lottoNum[j]>0)result2.push(j+1);
        
    }
      

    console.log(result);
    console.log(result2);


}
  
