document.addEventListener("DOMContentLoaded", function() {
    fetch('topfooter/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    fetch('topnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('topnav-placeholder').innerHTML = data;
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                menuIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });
        });

       
     
});




