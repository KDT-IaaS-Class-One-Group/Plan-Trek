// main.js

// 일정 목록 추가하는 함수 생성
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const ul = document.getElementById("taskList");

  if ( taskText !== ''){
    // span 생성
    const taskSpan = document.createElement('span');
    
    // span에 taskText 내용 추가
    taskSpan.textContent = taskText;

    // li 생성
    const taskLi = document.createElement('li');

    // li에 span을 자식 요소로 추가
    taskLi.appendChild(taskSpan);

    // ul에 li를 자식 요소로 추가
    ul.appendChild(taskLi);

    // 등록하면 입력창을 초기화
    taskInput.value = '';
  } else {
    console.error('일정 추가가 불가능합니다.')
  }
}