async function callAll() {

    var response = await fetch("/teachers/all"); //טוען את התשובה מהשרת 
    const result = await response.json(); // ממיר את התשובה לjson
    let arr = result.msg; // שולף את הנתונים מתוך אובייקט מוסכם על 2 הצדדים שנקרא msg 
    var div_element = document.getElementById("repeat_teachers"); // יוצר את הדיב שבתוכו אני רוצה להדפיס את הכל 


    for(let i =0;i<arr.length;i++){ //   בתוך לולאה אני מבצע תהליך שנקרא ריפטר 
      let somediv = document.createElement("div");  // יצירת אלמנטים html 
      let pAge = document.createElement("p");
      let pName = document.createElement("p");
      let pEmail = document.createElement("p");
      let pSubjetcs = document.createElement("p");
      // משרשר לערך של האלמנים נתונים מנורמלים 
      pAge.textContent =  "Age: "+arr[i].Age;
      pName.textContent = "Name: "+arr[i].Name;
      pEmail.textContent = "Email: "+arr[i].Email;
      pSubjetcs.innerHTML ="Sunbjects: " +JSON.stringify(arr[i].Subjects);

      // מוסיף את האלמנטים החדשים לאלמנט הראשי שמחזיק אותם 
      somediv.appendChild(pAge);
      somediv.appendChild(pName);
      somediv.appendChild(pEmail);
      somediv.appendChild(pSubjetcs);
      somediv.appendChild(document.createElement("hr"));

      div_element.appendChild(somediv);// מוסיף את האלמנט הראשי לתוך הדיב הראשי 
    }
}

  callAll(); // קריאה למתודה 