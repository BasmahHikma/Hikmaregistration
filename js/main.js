
      function showConditions(event) {
        event.preventDefault();
        document.getElementById("conditionsModal").style.display = "block";
      }

      function closeConditions() {
        document.getElementById("conditionsModal").style.display = "none";
      }

      // Close the modal when clicking outside of it
      window.onclick = function (event) {
        var modal = document.getElementById("conditionsModal");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
const collegeSelect = document.getElementById("college");
const departmentSelect = document.getElementById("department");

collegeSelect.addEventListener("change", () => {
    const selectedCollege = collegeSelect.value;
    let departments = [];

    if (selectedCollege === "institute") {
        departments = ["قسم الحاسوب", "قسم التمريض"];
    } else if (selectedCollege === "medical") {
        departments = ["قسم الصيدلة", "قسم المختبرات", "قسم التمريض", "قسم التخدير"];
    } else if (selectedCollege === "engineering") {
        departments = ["قسم الهندسة المدنية", "قسم هندسة العمارة", "قسم تقنية المعلومات"];
    } else if (selectedCollege === "administration") {
        departments = ["قسم إدارة الأعمال", "قسم المحاسبة", "قسم التسويق", "قسم نظم المعلومات الإدارية"];
    }

    departmentSelect.innerHTML = "<option value='' disabled selected>اختر القسم</option>";
    departments.forEach((department) => {
        const option = document.createElement("option");
        option.value = department;
        option.textContent = department;
        departmentSelect.appendChild(option);
    });
});

// function updateProgress() {
//     const form = document.getElementById("registration-form");
//     const formElements = form.elements;
//     let filledCount = 0;
//     let totalCount = 0;

//     for (let element of formElements) {
//         if (element.tagName === "INPUT" || element.tagName === "SELECT") {
//             totalCount++;
//             // Only consider filled elements if they are not file inputs or checkboxes
//             if ((element.type !== "file" && element.type !== "checkbox") && element.value.trim() !== "") {
//                 filledCount++;
//             }
//         }
//     }

//     console.log(`Filled Count: ${filledCount}, Total Count: ${totalCount}`); // Debugging log

//     const progress = totalCount > 0 ? Math.round((filledCount / totalCount) * 100) : 0;
//     const progressBar = document.getElementById("progressBar");
//     progressBar.style.width = progress + "%";
//     progressBar.textContent = progress + "%";
// }

// Attach updateProgress to input elements
// document.querySelectorAll('input, select').forEach(element => {
//     element.addEventListener('change', updateProgress);
// });
// function refreshPage() {
//     // You can include form validation or submission here if needed
//     location.reload();
// }


document.getElementById('backIcon').addEventListener('click', function() {
    alert('تحرك للامام !');
});

document.getElementById('forwardIcon').addEventListener('click', function() {
    alert('تحرك للخلف!');
});


const inputs = document.querySelectorAll('input[type="text"],input[type="number"],input[type="date"], select');
        const radioButtons = document.querySelectorAll('input[name="sex"]');
        const progressBar = document.getElementById('progressBar');

        function updateProgress() {
            const totalFields = inputs.length + radioButtons.length; // إجمالي عدد الحقول
            let filledCount = 0;

            // حساب عدد الحقول المملوءة
            inputs.forEach(input => {
                if (input.value.trim()) filledCount++;
            });

            // حساب عدد الأزرار التي تم اختيارها
            radioButtons.forEach(radio => {
                if (radio.checked) filledCount++;
            });

            // حساب التقدم
            const progress = (filledCount / totalFields) * 100;
            progressBar.style.width = progress + '%';
            progressBar.textContent = Math.floor(progress) + '%'; // عرض التقدم كعدد صحيح
        }

        // تحديث التقدم عند الكتابة في الحقول وعند تغيير الاختيارات
        inputs.forEach(input => {
            input.addEventListener('input', updateProgress);
            input.addEventListener('change', updateProgress);
        });

        // تحديث التقدم عند اختيار زر الراديو
        radioButtons.forEach(radio => {
            radio.addEventListener('change', updateProgress);
        });





// const circles = document.querySelectorAll(".circle"),
// progressBar1 = document.querySelector(".indicator"),
// buttons = document.querySelectorAll("button");

// let currentStep = 1;

// const updateSteps = (e) => {
//     currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

// circles.forEach((circle, index) => {
//     circle.classList[`${index < currentStep ? "add" : "remove"}`]("active"); });

// progressBar1.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

// if (currentStep === circles.length) {
//     buttons[1].disabled = true; }
// else if (currentStep === 1) {
//    buttons[0].disabled = true; }
// else {
//    buttons.forEach((button) => (button.disabled = false)); } };

// buttons.forEach((button) => {
//     button.addEventListener("click", updateSteps); });


// const circles = document.querySelectorAll(".circle"),
//       progressBar1 = document.querySelector(".indicator"),
//       buttons = document.querySelectorAll("button");

// let currentStep = 1;

// const updateSteps = (e) => {
//     if (e.target.id === "next") {
//         // الانتقال إلى tab2
//         const tab2 = document.querySelector('label[for="tab2"]');
//         if (tab2) {
//             tab2.click(); // محاكاة النقر على label
//         }
//         currentStep++;
//     } else {
//         currentStep--;
//     }

//     circles.forEach((circle, index) => {
//         circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
//     });

//     progressBar1.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

//     if (currentStep === circles.length) {
//         buttons[1].disabled = true;
//     } else if (currentStep === 1) {
//         buttons[0].disabled = true;
//     } else {
//         buttons.forEach((button) => (button.disabled = false));
//     }
// };

// buttons.forEach((button) => {
//     button.addEventListener("click", updateSteps);
// });

const circles = document.querySelectorAll(".circle"),
      progressBar1 = document.querySelector(".indicator"),
      buttons = document.querySelectorAll("button");

let currentStep = 1;

const updateSteps = (e) => {
    if (e.target.id === "next") {
        if (currentStep === 1) {
            // الانتقال إلى tab2
            const tab2 = document.querySelector('label[for="tab2"]');
            if (tab2) {
                tab2.click(); // محاكاة النقر على label
            }
            currentStep++;
        } else if (currentStep === 2) {
            // الانتقال إلى tab3
            const tab3 = document.querySelector('label[for="tab3"]');
            if (tab3) {
                tab3.click(); // محاكاة النقر على label
            }
            currentStep++;
        }
    } else { // للسابق
        if (currentStep === 2) {
            // الانتقال إلى tab2
            const tab1 = document.querySelector('label[for="tab1"]');
            if (tab1) {
                tab1.click(); // محاكاة النقر على label
            }
            currentStep--;
        } else if (currentStep === 3) {
            // الانتقال إلى tab1
            const tab2 = document.querySelector('label[for="tab2"]');
            if (tab2) {
                tab2.click(); // محاكاة النقر على label
            }
            currentStep--;
        }
    }

    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });

    progressBar1.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

    if (currentStep === circles.length) {
        buttons[1].disabled = true;
    } else if (currentStep === 1) {
        buttons[0].disabled = true;
    } else {
        buttons.forEach((button) => (button.disabled = false));
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
});