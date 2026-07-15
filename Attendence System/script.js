// ==============================
// ATTENDANCE MANAGEMENT SYSTEM
// Part 1
// ==============================

// Elements
const startRollInput = document.getElementById("startRoll");
const endRollInput = document.getElementById("endRoll");
const startAttendanceBtn = document.getElementById("startAttendance");

const dashboard = document.getElementById("dashboard");

const rollNumber = document.getElementById("rollNumber");
const bigRoll = document.getElementById("bigRoll");
const studentName = document.getElementById("studentName");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const presentBtn = document.getElementById("presentBtn");
const absentBtn = document.getElementById("absentBtn");

const repeatVoice = document.getElementById("repeatVoice");

const attendanceTable = document.getElementById("attendanceTable");

const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

// Statistics
const totalCount = document.getElementById("totalCount");
const presentCount = document.getElementById("presentCount");
const absentCount = document.getElementById("absentCount");
const remainingCount = document.getElementById("remainingCount");

// Progress
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");

// Variables
let startRoll = 0;
let endRoll = 0;
let currentRoll = 0;

let totalStudents = 0;

let presentStudents = 0;
let absentStudents = 0;

let attendanceData = [];

dashboard.style.display = "none";

// ==============================
// Date & Time
// ==============================

function updateDateTime() {

    const now = new Date();

    currentDate.innerHTML = now.toLocaleDateString();

    currentTime.innerHTML = now.toLocaleTimeString();

}

setInterval(updateDateTime,1000);

updateDateTime();

// ==============================
// Start Attendance
// ==============================

startAttendanceBtn.addEventListener("click",()=>{

    startRoll = Number(startRollInput.value);

    endRoll = Number(endRollInput.value);

    if(startRoll<=0 || endRoll<=0){

        alert("Enter Valid Roll Numbers");

        return;

    }

    if(startRoll>endRoll){

        alert("Start Roll cannot be greater than End Roll");

        return;

    }

    currentRoll = startRoll;

    totalStudents = endRoll-startRoll+1;

    totalCount.innerHTML = totalStudents;

    remainingCount.innerHTML = totalStudents;

    dashboard.style.display="block";

    attendanceData=[];

    presentStudents=0;

    absentStudents=0;

    updateStudent();

});

// ==============================
// Update Student
// ==============================

function updateStudent() {

    rollNumber.innerHTML = currentRoll;

    bigRoll.innerHTML = currentRoll;

    let student = students.find(s => Number(s["Roll No"]) === currentRoll);

    if (student) {

        studentName.innerHTML = student["Student Name"];

        document.querySelector(".studentInfo").innerHTML = `
            <h2>${student["Student Name"]}</h2>
            <p><b>Roll Number :</b> ${student["Roll No"]}</p>
            <p><b>Department :</b> ${student["Department"]}</p>
            <p><b>Semester :</b> ${student["Semester"]}</p>
            <p><b>Section :</b> ${student["Section"]}</p>
        `;

    } else {

        studentName.innerHTML = "Student Not Found";

    }

    speakRoll();

}
// ==============================
// Voice
// ==============================

function speakRoll(){

    speechSynthesis.cancel();

    const speech=new SpeechSynthesisUtterance();

    speech.lang="en-US";

    speech.rate=0.9;

    speech.text="Roll Number "+currentRoll+
    ". Student "+((currentRoll-startRoll)+1);

    speechSynthesis.speak(speech);

}

repeatVoice.addEventListener("click",()=>{

    speakRoll();

});

// ==============================
// Navigation Buttons
// ==============================

nextBtn.addEventListener("click",()=>{

    if(currentRoll<endRoll){

        currentRoll++;

        updateStudent();

    }

});

previousBtn.addEventListener("click",()=>{

    if(currentRoll>startRoll){

        currentRoll--;

        updateStudent();

    }

});

// ==============================
// Keyboard Shortcuts
// ==============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        previousBtn.click();

    }

    if(e.key==="p" || e.key==="P"){

        presentBtn.click();

    }

    if(e.key==="a" || e.key==="A"){

        absentBtn.click();

    }

    if(e.code==="Space"){

        e.preventDefault();

        speakRoll();

    }

});
// ==========================================
// ATTENDANCE MARKING
// ==========================================

presentBtn.addEventListener("click", () => {

    saveAttendance("Present");

});

absentBtn.addEventListener("click", () => {

    saveAttendance("Absent");

});

// ==========================================
// SAVE ATTENDANCE
// ==========================================

function saveAttendance(status){

    // Prevent duplicate entry
    let already = attendanceData.find(item => item.roll === currentRoll);

    if(already){

        already.status = status;

        refreshTable();

        moveNext();

        return;

    }

    attendanceData.push({

        roll: currentRoll,

        name: "Student " + ((currentRoll-startRoll)+1),

        status: status

    });

    if(status==="Present"){

        presentStudents++;

        presentCount.innerHTML=presentStudents;

    }else{

        absentStudents++;

        absentCount.innerHTML=absentStudents;

    }

    remainingCount.innerHTML=

    totalStudents-(presentStudents+absentStudents);

    updateProgress();

    refreshTable();

    showToast(status+" Marked");

    moveNext();

}

// ==========================================
// MOVE TO NEXT STUDENT
// ==========================================

function moveNext(){

    if(currentRoll<endRoll){

        currentRoll++;

        updateStudent();

    }else{

        finishAttendance();

    }

}

// ==========================================
// UPDATE PROGRESS
// ==========================================

function updateProgress(){

    let completed=

    presentStudents+absentStudents;

    let percent=

    Math.round((completed/totalStudents)*100);

    progressFill.style.width=

    percent+"%";

    progressPercent.innerHTML=

    percent+"%";

}

// ==========================================
// ATTENDANCE TABLE
// ==========================================

function refreshTable(){

    attendanceTable.innerHTML="";

    attendanceData.forEach(student=>{

        let color=

        student.status==="Present"

        ? "#16a34a"

        : "#dc2626";

        attendanceTable.innerHTML+=`

        <tr>

            <td>${student.roll}</td>

            <td>${student.name}</td>

            <td style="font-weight:bold;color:${color};">

            ${student.status}

            </td>

        </tr>

        `;

    });

}

// ==========================================
// TOAST MESSAGE
// ==========================================

function showToast(message){

    const toast=

    document.getElementById("toast");

    toast.innerHTML=message;

    toast.style.display="block";

    setTimeout(()=>{

        toast.style.display="none";

    },1800);

}

// ==========================================
// FINISH ATTENDANCE
// ==========================================

function finishAttendance(){

    document.getElementById("confirmAttendance").style.display="inline-block";

    alert(

`Attendance Completed

Present : ${presentStudents}

Absent : ${absentStudents}`

    );

}
// =============================================
// CONFIRM ATTENDANCE
// =============================================

const confirmBtn = document.getElementById("confirmAttendance");
const downloadBtn = document.getElementById("downloadCSV");
const jumpBtn = document.getElementById("jumpBtn");
const jumpRoll = document.getElementById("jumpRoll");

// Hide download button initially
downloadBtn.style.display = "none";

// Confirm Attendance
confirmBtn.addEventListener("click", () => {

    let ok = confirm(

`Attendance Completed

Total Students : ${totalStudents}

Present : ${presentStudents}

Absent : ${absentStudents}

Download CSV ?`

    );

    if(ok){

        downloadBtn.style.display="inline-block";

        showToast("Attendance Saved Successfully");

    }

});

// =============================================
// DOWNLOAD CSV
// =============================================

downloadBtn.addEventListener("click",()=>{

    let csv="Roll No,Student Name,Status\n";

    attendanceData.sort((a,b)=>a.roll-b.roll);

    attendanceData.forEach(student=>{

        csv+=`${student.roll},${student.name},${student.status}\n`;

    });

    const blob=new Blob([csv],{

        type:"text/csv"

    });

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download="Attendance.csv";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

});

// =============================================
// JUMP TO ROLL NUMBER
// =============================================

jumpBtn.addEventListener("click",()=>{

    let roll=Number(jumpRoll.value);

    if(roll>=startRoll && roll<=endRoll){

        currentRoll=roll;

        updateStudent();

    }else{

        alert("Invalid Roll Number");

    }

});

// =============================================
// AUTO SAVE
// =============================================

function saveLocal(){

    localStorage.setItem(

        "attendanceData",

        JSON.stringify(attendanceData)

    );

}

function loadLocal(){

    let data=

    localStorage.getItem("attendanceData");

    if(data){

        attendanceData=JSON.parse(data);

        refreshTable();

    }

}

setInterval(saveLocal,1000);

loadLocal();

// =============================================
// PRINT ATTENDANCE
// =============================================

function printAttendance(){

    window.print();

}

// =============================================
// RESET ATTENDANCE
// =============================================

function resetAttendance(){

    if(confirm("Reset Attendance?")){

        attendanceData=[];

        presentStudents=0;

        absentStudents=0;

        presentCount.innerHTML=0;

        absentCount.innerHTML=0;

        remainingCount.innerHTML=totalStudents;

        attendanceTable.innerHTML="";

        progressFill.style.width="0%";

        progressPercent.innerHTML="0%";

        currentRoll=startRoll;

        updateStudent();

        localStorage.removeItem("attendanceData");

    }

}

// =============================================
// SHORTCUTS
// =============================================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="s"){

        e.preventDefault();

        confirmBtn.click();

    }

    if(e.ctrlKey && e.key==="p"){

        e.preventDefault();

        printAttendance();

    }

    if(e.ctrlKey && e.key==="r"){

        e.preventDefault();

        resetAttendance();

    }

});

// =============================================
// FINISH MESSAGE
// =============================================

function finishAttendance(){

    confirmBtn.style.display="inline-block";

    showToast("Attendance Completed");

    speakComplete();

}

function speakComplete(){

    speechSynthesis.cancel();

    const speech=new SpeechSynthesisUtterance(

        `Attendance Completed.
        Present ${presentStudents}.
        Absent ${absentStudents}.`
    );

    speech.lang="en-US";

    speech.rate=.9;

    speechSynthesis.speak(speech);

}
let students = [];

document.getElementById("excelFile").addEventListener("change", function (e) {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {

        const data = new Uint8Array(event.target.result);

        const workbook = XLSX.read(data, { type: "array" });

        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        students = XLSX.utils.sheet_to_json(sheet);

        alert("Student list loaded successfully!");

    };

    reader.readAsArrayBuffer(file);

});

