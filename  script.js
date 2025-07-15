// Datos de la malla curricular
const curriculumData = [
    {
        semester: "Primer Semestre",
        courses: [
            { id: "qmg122", code: "QMG122", name: "QUIMICA GENERAL", credits: 4, prerequisites: [], schedule: "Lunes y Miércoles 8:00-10:00", professor: "Dr. Carlos Mendoza", classroom: "Aula 302 - Edificio B" },
            { id: "fbi122", code: "FBI122", name: "FISICA BASICA I", credits: 4, prerequisites: [], schedule: "Martes y Jueves 8:00-10:00", professor: "Ing. Laura Ramírez", classroom: "Aula 105 - Edificio A" },
            { id: "dti122", code: "DTI122", name: "DIBUJO TECNICO I", credits: 3, prerequisites: [], schedule: "Lunes y Miércoles 10:00-12:00", professor: "Arq. Miguel Torres", classroom: "Laboratorio 5 - Edificio C" },
            { id: "cal1122", code: "CAL1122", name: "CALCULO I", credits: 5, prerequisites: [], schedule: "Martes y Jueves 10:00-12:00", professor: "Dr. Ana Gutiérrez", classroom: "Aula 201 - Edificio A" },
            { id: "alg1122", code: "ALG1122", name: "ALGEBRA I", credits: 4, prerequisites: [], schedule: "Viernes 8:00-12:00", professor: "MSc. Roberto Sánchez", classroom: "Aula 203 - Edificio A" }
        ]
    },
    {
        semester: "Segundo Semestre",
        courses: [
            { id: "qo122", code: "QO122", name: "QUIMICA ORGANICA", credits: 4, prerequisites: ["QUIMICA GENERAL"], schedule: "Lunes y Miércoles 8:00-10:00", professor: "Dr. Patricia Vargas", classroom: "Aula 305 - Edificio B" },
            { id: "fbii122", code: "FBII122", name: "FISICA BASICA II", credits: 4, prerequisites: ["CALCULO I", "FISICA BASICA I"], schedule: "Martes y Jueves 8:00-10:00", professor: "Ing. Laura Ramírez", classroom: "Aula 107 - Edificio A" },
            { id: "inf1122", code: "INF1122", name: "INFORMATICA I", credits: 3, prerequisites: ["DIBUJO TECNICO I"], schedule: "Lunes y Miércoles 10:00-12:00", professor: "Ing. Javier López", classroom: "Laboratorio 3 - Edificio C" },
            { id: "cal2122", code: "CAL2122", name: "CALCULO II", credits: 5, prerequisites: ["CALCULO I"], schedule: "Martes y Jueves 10:00-12:00", professor: "Dr. Ana Gutiérrez", classroom: "Aula 202 - Edificio A" },
            { id: "alg2122", code: "ALG2122", name: "ALGEBRA II", credits: 4, prerequisites: ["ALGEBRA I"], schedule: "Viernes 8:00-12:00", professor: "MSc. Roberto Sánchez", classroom: "Aula 204 - Edificio A" },
            { id: "ecg122", code: "ECG122", name: "ECONOMIA GENERAL", credits: 3, prerequisites: ["ALGEBRA I"], schedule: "Sábado 8:00-11:00", professor: "Lic. Fernando Morales", classroom: "Aula 101 - Edificio D" }
        ]
    },
    {
        semester: "Tercer Semestre",
        courses: [
            { id: "fq122", code: "FQ122", name: "FISICOQUIMICA", credits: 4, prerequisites: ["QUIMICA ORGANICA", "FISICA BASICA II"], schedule: "Lunes y Miércoles 8:00-10:00", professor: "Dr. Carlos Mendoza", classroom: "Aula 306 - Edificio B" },
            { id: "fbiii122", code: "FBIII122", name: "FISICA BASICA III", credits: 4, prerequisites: ["FISICA BASICA II", "CALCULO II"], schedule: "Martes y Jueves 8:00-10:00", professor: "Ing. Laura Ramírez", classroom: "Aula 108 - Edificio A" },
            { id: "cm122", code: "CM122", name: "CIENCIAS DE LOS MATERIALES", credits: 3, prerequisites: ["INFORMATICA I"], schedule: "Lunes y Miércoles 10:00-12:00", professor: "Ing. Sofía Castro", classroom: "Laboratorio 4 - Edificio C" },
            { id: "ed122", code: "ED122", name: "ECUACIONES DIFERENCIALES", credits: 5, prerequisites: ["CALCULO II"], schedule: "Martes y Jueves 10:00-12:00", professor: "Dr. Ana Gutiérrez", classroom: "Aula 203 - Edificio A" },
            { id: "pe122", code: "PE122", name: "PROBABILIDAD Y ESTADISTICA", credits: 4, prerequisites: ["ALGEBRA II"], schedule: "Viernes 8:00-12:00", professor: "MSc. Roberto Sánchez", classroom: "Aula 205 - Edificio A" },
            { id: "ci122", code: "CI122", name: "CONTABILIDAD INDUSTRIAL", credits: 3, prerequisites: ["ECONOMIA GENERAL"], schedule: "Sábado 8:00-11:00", professor: "Lic. Fernando Morales", classroom: "Aula 102 - Edificio D" }
        ]
    },
    {
        semester: "Cuarto Semestre",
        courses: [
            { id: "tt122", code: "TT122", name: "TERMODINAMICA TECNICA", credits: 4, prerequisites: ["FISICOQUIMICA"], schedule: "Lunes y Miércoles 8:00-10:00", professor: "Dr. Carlos Mendoza", classroom: "Aula 307 - Edificio B" },
            { id: "rm122", code: "RM122", name: "RESISTENCIA DE LOS MATERIALES", credits: 4, prerequisites: ["FISICA BASICA III", "CIENCIAS DE LOS MATERIALES"], schedule: "Martes y Jueves 8:00-10:00", professor: "Ing. Laura Ramírez", classroom: "Aula 109 - Edificio A" },
            { id: "nl122", code: "NL122", name: "NORMAS LEGALES", credits: 3, prerequisites: ["ECUACIONES DIFERENCIALES"], schedule: "Lunes y Miércoles 10:00-12:00", professor: "Lic. Ricardo Vargas", classroom: "Aula 103 - Edificio D" },
            { id: "em122", code: "EM122", name: "ESTADISTICA MATEMATICA", credits: 4, prerequisites: ["PROBABILIDAD Y ESTADISTICA"], schedule: "Martes y Jueves 10:00-12:00", professor: "MSc. Roberto Sánchez", classroom: "Aula 206 - Edificio A" },
            { id: "mi122", code: "MI122", name: "MECADOTECNIA INDUSTRIAL", credits: 3, prerequisites: ["CONTABILIDAD INDUSTRIAL"], schedule: "Viernes 8:00-11:00", professor: "Lic. Fernando Morales", classroom: "Aula 104 - Edificio D" }
        ]
    },
    {
        semester: "Quinto Semestre",
        courses: [
            { id: "mt122", code: "MT122", name: "MAQUINAS TERMICAS", credits: 4, prerequisites: ["TERMODINAMICA"], schedule: "Lunes y Miércoles 8:00-10:00", professor: "Dr. Carlos Mendoza", classroom: "Aula 308 - Edificio B" },
            { id: "tm122", code: "TM122", name: "TECNOLOGIA MECANICA", credits: 4, prerequisites: ["RESISTENCIA DE LOS MATERIALES"], schedule: "Martes y Jueves 8:00-10:00", professor: "Ing. Laura Ramírez", classroom: "Aula 110 - Edificio A" },
            { id: "ei122", code: "EI122", name: "ELECTROTECNIA INDUSTRIAL I", credits: 4, prerequisites: ["CIENCIAS DE LOS MATERIALES"], schedule: "Lunes y Miércoles 10:00-12:00", professor: "Ing. Sofía Castro", classroom: "Laboratorio 2 - Edificio C" },
            { id: "mi122", code: "MI122", name: "METODOLOGIA DE LA INVESTIGACION", credits: 3, prerequisites: ["NORMAS LEGALES", "ESTADISTICA MATEMATICA"], schedule: "Martes y Jueves 10:00-12:00", professor: "Dr. Ana Gutiérrez", classroom: "Aula 207 - Edificio A" },
            { id: "io1122", code: "IO1122", name: "INVESTIGACION OPERATIVA I", credits: 4, prerequisites: ["ESTADISTICA MATEMATICA"], schedule: "Viernes 8:00-12:00", professor: "MSc. Roberto Sánchez", classroom: "Aula 208 - Edificio A" },
            { id: "ai122", code: "AI122", name: "ADMINISTRACION INDUSTRIAL", credits: 3, prerequisites: ["MECADOTECNIA INDUSTRIAL"], schedule: "Sábado 8:00-11:00", professor: "Lic. Fernando Morales", classroom: "Aula 105 - Edificio D" }
        ]
    }
];

// Estado global de la aplicación
const state = {
    currentPage: 'login',
    currentUser: null,
    courseStatus: {},
    currentCourse: null
};

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    loadCourseStatus();
    document.getElementById('login-btn').addEventListener('click', loginUser);
    document.getElementById('back-to-curriculum').addEventListener('click', () => showPage('curriculum'));
    document.querySelectorAll('.status-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.status-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });
    document.getElementById('save-status-btn').addEventListener('click', saveCourseStatus);
}

function loginUser() {
    const name = document.getElementById('student-name').value.trim();
    const id = document.getElementById('student-id').value.trim();
    if (!name || !id) {
        alert('Por favor ingrese su nombre y número de registro.');
        return;
    }
    state.currentUser = { name, id };
    document.getElementById('username-display').textContent = name;
    showPage('curriculum');
    renderConceptMap();
    renderStats();
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(`${page}-page`).classList.add('active-page');
    state.currentPage = page;
}

function loadCourseStatus() {
    const savedStatus = localStorage.getItem('courseStatus');
    if (savedStatus) {
        state.courseStatus = JSON.parse(savedStatus);
    }
}

function saveCourseStatus() {
    if (!state.currentCourse) return;
    const selectedOption = document.querySelector('.status-option.active');
    if (!selectedOption) return;
    const status = selectedOption.dataset.status;
    state.courseStatus[state.currentCourse.id] = status;
    localStorage.setItem('courseStatus', JSON.stringify(state.courseStatus));
    renderConceptMap();
    renderStats();
    showPage('curriculum');
}

function renderConceptMap() {
    const container = document.getElementById('concept-map');
    container.innerHTML = '';
    curriculumData.forEach((semesterData, semesterIndex) => {
        const semesterColumn = document.createElement('div');
        semesterColumn.className = 'semester-column';
        const header = document.createElement('div');
        header.className = 'semester-header';
        header.textContent = semesterData.semester;
        semesterColumn.appendChild(header);
        semesterData.courses.forEach(course => {
            const status = state.courseStatus[course.id] || 'no_inscrita';
            const courseNode = document.createElement('div');
            courseNode.className = `course-node ${status}`;
            courseNode.dataset.id = course.id;
            courseNode.innerHTML = `
                <div class="course-code">${course.code}</div>
                <div class="course-name">${course.name}</div>
                <div class="course-meta">
                    <div class="course-credits">${course.credits} CR</div>
                    <div class="course-status ${status}">
                        ${getStatusText(status)}
                    </div>
                </div>
            `;
            courseNode.addEventListener('click', () => {
                state.currentCourse = course;
                showCourseDetail();
            });
            semesterColumn.appendChild(courseNode);
        });
        container.appendChild(semesterColumn);
    });
    drawPrerequisiteLines();
}

function drawPrerequisiteLines() {
    const mapContainer = document.getElementById('concept-map');
    curriculumData.forEach((semesterData, semesterIndex) => {
        semesterData.courses.forEach(course => {
            course.prerequisites.forEach(prereqName => {
                const prereqCourse = findCourseByName(prereqName);
                if (!prereqCourse) return;
                const prereqElement = document.querySelector(`.course-node[data-id="${prereqCourse.id}"]`);
                const courseElement = document.querySelector(`.course-node[data-id="${course.id}"]`);
                if (!prereqElement || !courseElement) return;
                const prereqRect = prereqElement.getBoundingClientRect();
                const courseRect = courseElement.getBoundingClientRect();
                const mapRect = mapContainer.getBoundingClientRect();
                const startX = prereqRect.left + prereqRect.width - mapRect.left;
                const startY = prereqRect.top + prereqRect.height/2 - mapRect.top;
                const endX = courseRect.left - mapRect.left;
                const endY = courseRect.top + courseRect.height/2 - mapRect.top;
                const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                const line = document.createElement('div');
                line.className = 'prerequisite-line';
                line.style.width = `${distance}px`;
                line.style.left = `${startX}px`;
                line.style.top = `${startY}px`;
                line.style.transform = `rotate(${angle}deg)`;
                mapContainer.appendChild(line);
            });
        });
    });
}

function findCourseByName(name) {
    for (const semester of curriculumData) {
        for (const course of semester.courses) {
            if (course.name === name) return course;
        }
    }
    return null;
}

function renderStats() {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';
    let totalCourses = 0, approvedCount = 0, registeredCount = 0, failedCount = 0;
    curriculumData.forEach(semester => {
        totalCourses += semester.courses.length;
        semester.courses.forEach(course => {
            const status = state.courseStatus[course.id] || 'no_inscrita';
            if (status === 'aprobada') approvedCount++;
            if (status === 'registrada') registeredCount++;
            if (status === 'aplazada') failedCount++;
        });
    });
    const stats = [
        { value: totalCourses, label: "Total Materias", className: "total-courses" },
        { value: approvedCount, label: "Aprobadas", className: "approved-courses" },
        { value: registeredCount, label: "Registradas", className: "registered-courses" },
        { value: failedCount, label: "Aplazadas", className: "failed-courses" }
    ];
    stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = `stat-card ${stat.className}`;
        statCard.innerHTML = `
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        statsContainer.appendChild(statCard);
    });
}

function showCourseDetail() {
    if (!state.currentCourse) return;
    const course = state.currentCourse;
    const status = state.courseStatus[course.id] || 'no_inscrita';
    let semester = '';
    curriculumData.forEach(s => {
        if (s.courses.some(c => c.id === course.id)) semester = s.semester;
    });
    document.getElementById('course-detail-title').textContent = course.name;
    document.getElementById('course-code').textContent = course.code;
    document.getElementById('course-name').textContent = course.name;
    document.getElementById('course-semester').textContent = semester;
    document.getElementById('course-credits').textContent = `${course.credits} créditos`;
    document.getElementById('course-prerequisites').textContent = course.prerequisites.join(', ') || 'Ninguno';
    document.getElementById('course-schedule').textContent = course.schedule;
    document.getElementById('course-professor').textContent = course.professor;
    document.getElementById('course-classroom').textContent = course.classroom;
    document.querySelectorAll('.status-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.status === status) option.classList.add('active');
    });
    showPage('course-detail');
}

function getStatusText(status) {
    const statusTexts = {
        'no_inscrita': 'No Inscrita',
        'registrada': 'Registrada',
        'aprobada': 'Aprobada',
        'aplazada': 'Aplazada'
    };
    return statusTexts[status] || 'No Inscrita';
}
