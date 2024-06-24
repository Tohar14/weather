async function login_Student_func() {
    document.getElementById("form").preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const raw = JSON.stringify({
        Name: name,
        Password: password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const response = await fetch("/students/login", requestOptions);
    const result = await response.json();
    const ltl = document.getElementById("ltl");
    console.log(result);
    ltl.innerHTML = result.message;

    if (response.status === 200) {
        localStorage.setItem("token", result.accessToken);
        window.location.href = "/get_all_students.html"; // ניתוב לעמוד חדש לאחר ההתחברות
    }
}
