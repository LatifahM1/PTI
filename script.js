// دالة لفتح/إغلاق قائمة الهامبرغر
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (navMenu && menuToggle) {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// إغلاق القائمة عند النقر على رابط
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// تحميل الأحداث القادمة
function loadUpcomingEvents() {
    const events = 
    [
        {
            title: "سنوية PTI",
            date: "2 فبراير 2026",
            description: "الذكرى السنوية لنادي PTI",
            time: "10:00 AM",
            location: "كود لاب",
        }
 
    ];
    
    const eventsGrid = document.querySelector('.events-grid');
    if (eventsGrid) {
        eventsGrid.innerHTML = events.map(event => `
            <div class="event-card">
                <div class="event-date">
                    <span class="day">${event.date.split(' ')[0]}</span>
                    <span class="month">${event.date.split(' ')[1]}</span>
                </div>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <div class="event-meta">
                        <span><i class="far fa-clock"></i> ${event.time}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة قائمة الهامبرغر
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // تحميل الأحداث
    loadUpcomingEvents();
    
    // تحديث الروابط النشطة
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');
        
        if (navMenu && menuToggle && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target) &&
            navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});