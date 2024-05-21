import { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";

function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  // 최소 나이를 매개변수로 받아 해당 나이 이상인 학생들로 필터링
  const filterByAge = (minAge) => {
    setFilteredStudents(
      initialStudents.filter((student) => student.age >= minAge)
    );
  };

  // 특정 학점을 매개변수로 받아 해당 학점의 학생들로 필터링
  const filterByGrade = (grade) => {
    setFilteredStudents(
      initialStudents.filter((student) => student.grade === grade)
    );
  };

  // 필터를 초기화하여 모든 학생들을 표시
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      {/* TODO: FilterButtons 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <FilterButtons
        /* 필요한 props를 여기에 전달하세요. */
        filterByAge={filterByAge}
        filterByGrade={filterByGrade}
        resetFilter={resetFilter}
      />

      {/* TODO: StudentList 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <StudentList
        /* 필요한 props를 여기에 전달하세요. */
        students={filteredStudents}
      />
    </div>
  );
}

export default App;
