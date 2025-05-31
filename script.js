document.addEventListener('DOMContentLoaded', function() {
+    // Update countdown timers for upcoming races
+    updateCountdowns();
+    
+    // Set interval to update countdowns every minute
+    setInterval(updateCountdowns, 60000);
+    
+    // Add click event for CTA button
+    const ctaButton = document.querySelector('.cta-button');
+    if (ctaButton) {
+        ctaButton.addEventListener('click', function() {
+            const latestResultsSection = document.querySelector('.latest-results');
+            if (latestResultsSection) {
+                latestResultsSection.scrollIntoView({ behavior: 'smooth' });
+            }
+        });
+    }
+    
+    // Add click events for "View Full Results" buttons
+    const viewDetailsButtons = document.querySelectorAll('.view-details');
+    viewDetailsButtons.forEach(button => {
+        button.addEventListener('click', function() {
+            // This would normally navigate to a detailed results page
+            alert('This would navigate to the full race results page.');
+        });
+    });
+    
+    // Add click events for "View Full Standings" and "View Full Calendar" buttons
+    const viewAllButtons = document.querySelectorAll('.view-all');
+    viewAllButtons.forEach(button => {
+        button.addEventListener('click', function() {
+            const parentSection = this.closest('section');
+            if (parentSection) {
+                const sectionClass = parentSection.className;
+                let message = '';
+                
+                if (sectionClass.includes('driver-standings')) {
+                    message = 'This would navigate to the full driver standings page.';
+                } else if (sectionClass.includes('team-standings')) {
+                    message = 'This would navigate to the full constructor standings page.';
+                } else if (sectionClass.includes('upcoming-races')) {
+                    message = 'This would navigate to the full race calendar page.';
+                }
+                
+                if (message) {
+                    alert(message);
+                }
+            }
+        });
+    });
+    
+    // Add form submission handler for newsletter
+    const newsletterForm = document.querySelector('.footer-newsletter form');
+    if (newsletterForm) {
+        newsletterForm.addEventListener('submit', function(e) {
+            e.preventDefault();
+            const emailInput = this.querySelector('input[type="email"]');
+            if (emailInput && emailInput.value) {
+                alert(`Thank you for subscribing with ${emailInput.value}!`);
+                emailInput.value = '';
+            } else {
+                alert('Please enter a valid email address.');
+            }
+        });
+    }
+});
+
+// Function to update countdown timers
+function updateCountdowns() {
+    const raceEvents = document.querySelectorAll('.race-event');
+    const currentDate = new Date();
+    
+    raceEvents.forEach(event => {
+        const dateElement = event.querySelector('.race-date');
+        const countdownElement = event.querySelector('.countdown p');
+        
+        if (dateElement && countdownElement) {
+            const month = dateElement.querySelector('.month').textContent;
+            const day = dateElement.querySelector('.day').textContent;
+            const year = currentDate.getFullYear();
+            
+            // Convert month abbreviation to month number
+            const monthMap = {
+                'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
+                'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
+            };
+            
+            const monthNum = monthMap[month];
+            const raceDate = new Date(year, monthNum, parseInt(day));
+            
+            // If the race date is in the past (for this year), assume it's next year
+            if (raceDate < currentDate) {
+                raceDate.setFullYear(year + 1);
+            }
+            
+            const timeDiff = raceDate - currentDate;
+            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
+            
+            if (daysDiff === 0) {
+                countdownElement.textContent = 'Today!';
+                event.style.backgroundColor = '#fff8e1'; // Highlight today's race
+            } else if (daysDiff === 1) {
+                countdownElement.textContent = 'Tomorrow';
+            } else if (daysDiff > 1) {
+                countdownElement.textContent = `In ${daysDiff} days`;
+            } else {
+                countdownElement.textContent = 'Race completed';
+                event.style.opacity = '0.7'; // Dim past races
+            }
+        }
+    });
+}
+
+// Function to fetch latest F1 data (placeholder for future API integration)
+function fetchF1Data() {
+    // This function would normally fetch data from an F1 API
+    // For now, it's just a placeholder
+    console.log('Fetching F1 data...');
+    
+    // Example of how this might work with a real API:
+    /*
+    fetch('https://ergast.com/api/f1/current/last/results.json')
+        .then(response => response.json())
+        .then(data => {
+            // Update latest race results with the fetched data
+            updateLatestResults(data);
+        })
+        .catch(error => {
+            console.error('Error fetching F1 data:', error);
+        });
+    */
+}
+
+// Function to update latest race results (placeholder)
+function updateLatestResults(data) {
+    // This function would update the DOM with the latest race results
+    // For now, it's just a placeholder
+    console.log('Updating latest race results with:', data);
+}
+
+// Function to update driver standings (placeholder)
+function updateDriverStandings(data) {
+    // This function would update the DOM with the latest driver standings
+    // For now, it's just a placeholder
+    console.log('Updating driver standings with:', data);
+}
+
+// Function to update constructor standings (placeholder)
+function updateConstructorStandings(data) {
+    // This function would update the DOM with the latest constructor standings
+    // For now, it's just a placeholder
+    console.log('Updating constructor standings with:', data);
+}
