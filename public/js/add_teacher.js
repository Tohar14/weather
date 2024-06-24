async function add_Teacher_func() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); // מכריז על סוג  הנתונים שיעברו באפליקציה 

    const name = document.getElementById("name").value;// שולף את הקלט מהמשתמש 
    const age = document.getElementById("age").value;
    const subjects = document.getElementById("subjects").value;
    const email = document.getElementById("email").value;


    let subjects_array = subjects.split(','); // נרמול נתנונים  ( על פי דעת המתכנת) 
    subjects_array = subjects_array.map(subject => subject.trim());


    // יוצר אובייקט json מוכן לשליחה בתוך גוף הבקשה 
    const raw = JSON.stringify({
        "Name": name,
        "Age": age,
        "Subjects": subjects_array,
        "Email": email
    });

    // יצירת גוף הבקשה 
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };


    var response = await fetch("/teachers/add", requestOptions); // פונה לשרת יחד עם הבקשה שלי ומחכה לתשובה 
    const result = await response.json();  // ממיר את התשובה לjson
    console.log(result);  
}