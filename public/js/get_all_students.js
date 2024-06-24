async function get_All_Students() {
    const token = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    const response = await fetch("/students/all", requestOptions);
    const result = await response.json();
    console.log(result);

    const studentsList = document.getElementById("students-list");

    if (response.status === 200) {
        result.forEach(student => {
            const studentDiv = document.createElement("div");
            studentDiv.textContent = `Name: ${student.Name}, Age: ${student.Age}, Grades: ${student.Grades.join(', ')}`;
            studentsList.appendChild(studentDiv);
        });
    } else {
        studentsList.textContent = result.message;
    }
}

window.onload = get_All_Students;
