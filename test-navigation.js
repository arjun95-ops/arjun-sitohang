// Test file untuk memastikan navigation berfungsi
console.log('Testing navigation...');

// Test 1: Pastikan navigate function tersedia
if (typeof window !== 'undefined') {
  console.log('Window object available');
  
  // Test 2: Pastikan pathname detection berfungsi
  const currentPath = window.location.pathname;
  console.log('Current path:', currentPath);
  
  // Test 3: Pastikan semua elemen navigation ada
  const navItems = document.querySelectorAll('button');
  console.log('Navigation buttons found:', navItems.length);
  
  // Test 4: Pastikan event listeners terpasang
  const projectsButton = Array.from(navItems).find(btn => 
    btn.textContent?.includes('Projects') || 
    btn.textContent?.includes('Show My Projects')
  );
  
  if (projectsButton) {
    console.log('Projects button found:', projectsButton.textContent);
    
    // Test click functionality
    projectsButton.addEventListener('click', () => {
      console.log('Projects button clicked');
      setTimeout(() => {
        console.log('Navigated to:', window.location.pathname);
      }, 100);
    });
  }
}