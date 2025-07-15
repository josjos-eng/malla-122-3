// Estado global de la aplicación
const state = {
    currentPage: 'login',
    currentUser: null,
    courseStatus: {},
    currentCourse: null
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', initApp);

async function initApp() {
    // Cargar datos de la malla curricular
    await loadCurriculumData();
    
    // Cargar estados guardados de localStorage
    loadCourseStatus();
    
    // Configurar eventos
    document.getElementById('login-btn').addEventListener('click', loginUser);
    document.getElementById('back-to-curriculum').addEventListener('click', () => showPage('curriculum'));
    
    // Configurar selector de estado
    document.querySelectorAll('.status-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.status-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });
    
    // Guardar estado
    document.getElementById('save-status-btn').addEventListener('click', saveCourseStatus);
}

async function loadCurriculumData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('No se pudieron cargar los datos de la malla curricular');
        }
        window.curriculumData = await response.json();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        // Cargar datos de respaldo en caso de error
        window.curriculumData = backupCurriculumData;
    }
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
    
    // Actualizar la visualización en la malla
    renderConceptMap();
    renderStats();
    
    // Volver a la malla
    showPage('curriculum');
}

function renderConceptMap() {
    const container = document.getElementById('concept-map');
    if (!container || !window.curriculumData) return;
    
    container.innerHTML = '';
    
    window.curriculumData.forEach((semesterData, semesterIndex) => {
        const semesterColumn = document.createElement('div');
        semesterColumn.className = 'semester-column';
        
        const header = document.createElement('div');
        header.className = 'semester-header';
        header.textContent = semesterData.semester;
        semesterColumn.appendChild(header);
        
        semesterData.courses.forEach((course, courseIndex) => {
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
    
    // Dibujar líneas de prerrequisitos
    drawPrerequisiteLines();
}

function drawPrerequisiteLines() {
    const mapContainer = document.getElementById('concept-map');
    if (!mapContainer || !window.curriculumData) return;
    
    // Limpiar líneas anteriores
    document.querySelectorAll('.prerequisite-line').forEach(line => line.remove());
    
    window.curriculumData.forEach((semesterData, semesterIndex) => {
        semesterData.courses.forEach(course => {
            course.prerequisites.forEach(prereqName => {
                // Buscar el curso prerrequisito
                const prereqCourse = findCourseByName(prereqName);
                if (!prereqCourse) return;
                
                // Buscar elementos DOM
                const prereqElement = document.querySelector(`.course-node[data-id="${prereqCourse.id}"]`);
                const courseElement = document.querySelector(`.course-node[data-id="${course.id}"]`);
                
                if (!prereqElement || !courseElement) return;
                
                // Calcular posiciones
                const prereqRect = prereqElement.getBoundingClientRect();
                const courseRect = courseElement.getBoundingClientRect();
                const mapRect = mapContainer.getBoundingClientRect();
                
                const startX = prereqRect.left + prereqRect.width - mapRect.left;
                const startY = prereqRect.top + prereqRect.height/2 - mapRect.top;
                const endX = courseRect.left - mapRect.left;
                const endY = courseRect.top + courseRect.height/2 - mapRect.top;
                
                // Calcular distancia y ángulo
                const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                
                // Crear línea
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
    for (const semester of window.curriculumData) {
        for (const course of semester.courses) {
            if (course.name === name) {
                return course;
            }
        }
    }
    return null;
}

function renderStats() {
    const statsContainer = document.getElementById('stats-container');
    if (!statsContainer || !window.curriculumData) return;
    
    statsContainer.innerHTML = '';
    
    // Calcular estadísticas
    let totalCourses = 0;
    let approvedCount = 0;
    let registeredCount = 0;
    let failedCount = 0;
    
    window.curriculumData.forEach(semester => {
        totalCourses += semester.courses.length;
        semester.courses.forEach(course => {
            const status = state.courseStatus[course.id] || 'no_inscrita';
            if (status === 'aprobada') approvedCount++;
            if (status === 'registrada') registeredCount++;
            if (status === 'aplazada') failedCount++;
        });
    });
    
    // Crear tarjetas de estadísticas
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
    
    // Encontrar el semestre
    let semester = '';
    window.curriculumData.forEach(s => {
        if (s.courses.some(c => c.id === course.id)) {
            semester = s.semester;
        }
    });
    
    // Actualizar datos en la página
    document.getElementById('course-detail-title').textContent = course.name;
    document.getElementById('course-code').textContent = course.code;
    document.getElementById('course-name').textContent = course.name;
    document.getElementById('course-semester').textContent = semester;
    document.getElementById('course-credits').textContent = `${course.credits} créditos`;
    document.getElementById('course-prerequisites').textContent = course.prerequisites.join(', ') || 'Ninguno';
    document.getElementById('course-schedule').textContent = course.schedule;
    document.getElementById('course-professor').textContent = course.professor;
    document.getElementById('course-classroom').textContent = course.classroom;
    
    // Actualizar selector de estado
    document.querySelectorAll('.status-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.status === status) {
            option.classList.add('active');
        }
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

// Datos de respaldo en caso de que no se cargue data.json
const backupCurriculumData = [
    // Aquí irían todos los datos de la malla curricular
    // Se omiten por espacio, pero están en el archivo data.json
];
