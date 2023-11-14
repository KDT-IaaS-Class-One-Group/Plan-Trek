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

// 일정 완료 처리하는 함수
function completeTask(taskText) {
  // taskText를 가진 일정을 찾아서 isCompleted 상태를 토글
  const taskIndex = tasks.findIndex(task => task.text === taskText);

  // 배열에 없는 경우인 findIndex가 -1인 경우를 제외하고 로직 작성
  if (taskIndex !== -1) { 
    // 해당 인덱스의 일정 상태를 토글
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
  }

  // 변경된 상태로 일정 목록을 다시 표시
  displayTasks();
}