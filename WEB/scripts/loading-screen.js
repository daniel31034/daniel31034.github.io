document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const layout = document.getElementById('_layout');
    
    // Function to show loading screen
    function showLoadingScreen() {
        loadingScreen.style.display = 'flex';
        loadingScreen.classList.remove('slide-up');
        loadingScreen.classList.add('slide-down');
        layout.style.visibility = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    // Function to hide loading screen
    function hideLoadingScreen() {
        loadingScreen.classList.remove('slide-down');
        loadingScreen.classList.add('slide-up');
        layout.style.visibility = 'visible';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.classList.add('loaded');
            document.body.style.overflow = 'auto'; // Allow scrolling
        }, 500);
    }

    // Initial page load
    if (performance.navigation.type === performance.navigation.TYPE_NAVIGATE || performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        showLoadingScreen();
        setTimeout(hideLoadingScreen, 1000); // Show loading screen for 1 second
    } else {
        // For back/forward navigation, don't show loading screen
        loadingScreen.style.display = 'none';
        layout.style.visibility = 'visible';
        document.body.classList.add('loaded');
    }

    // Handle hash changes (for single-page navigation)
    window.addEventListener('hashchange', function() {
        showLoadingScreen();
        setTimeout(hideLoadingScreen, 500);
    });

    // Remove the beforeunload event listener as it's causing issues
    // window.removeEventListener('beforeunload', showLoadingScreen);
});