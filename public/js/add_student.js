async function add_Student_func() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grades = document.getElementById("grades").value;
    const password = document.getElementById("password").value;
    let grades_array = grades.split(',').map(grade => grade.trim());

    const raw = JSON.stringify({
        Name: name,
        Age: age,
        Grades: grades_array,
        Password: password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const response = await fetch("/students/add", requestOptions);
    const result = await response.json();
    console.log(result);
}
