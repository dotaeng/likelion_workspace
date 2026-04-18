/* object를 이용해 학생 3명의 이름과 학점, 백분율을 작성하시고, 학점이 3.0 이상이고 백분율ㅇ 90 이상인 학생만을 출력하시오. */

let students = [
    {name: "karina",grade: 4.0,percentage: 95},
    {name: "winter",grade: 2.7,percentage: 85},
    {name: "ningning",grade: 3.8,percentage: 92}
  ];
  
  for (var i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.grade >= 3.0 && student.percentage >= 90) {
      console.log(student.name + " 학생은 학점이 3.0 이상이고 백분율이 90 이상입니다.");
    }
  }
  