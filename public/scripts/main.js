// main.js

// 빈 배열 생성
const tasks = [];

// 일정 목록 추가하는 함수 생성
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const ul = document.getElementById("taskList");

  if ( taskText !== ''){
    // li 생성
    const taskLi = document.createElement('li');

    // span 생성
    const taskSpan = document.createElement('span');
    
    // 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.checked = false;

    // 체크박스의 변경 이벤트에 대한 핸들러를 등록
    checkbox.onchange = function () {
      completeTask(taskText);
    }

    // span에 taskText 내용 추가
    taskSpan.textContent = taskText;

    // li에 체크박스, span을 자식 요소로 추가
    taskLi.appendChild(checkbox);
    taskLi.appendChild(taskSpan);

    // ul에 li를 자식 요소로 추가
    ul.appendChild(taskLi);

    // task 객체 생성 및 tasks 배열에 추가
    const task = { text: taskText, isCompleted: false};
    tasks.push(task);

    // 등록하면 입력창을 초기화
    taskInput.value = '';
  } else {
    console.error('일정 추가가 불가능합니다.')
  }
}
