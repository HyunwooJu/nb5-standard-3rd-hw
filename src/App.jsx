export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  // 학생 이름 클릭 시 나이와 점수를 alert하는 함수
  const handleStudentClick = (student) => {
    alert(`Age: ${student.age}, Grade: ${student.grade}`);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index} onClick={() => handleStudentClick(student)}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
