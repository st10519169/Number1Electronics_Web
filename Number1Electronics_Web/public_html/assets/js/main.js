/**
 * WEDE5020 Assignment Part 3 — Core Interactive Functionality Script
 * Student Number: st10519169
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize interactive modules when the page loads
    initSearchFilter();
    initLightbox();
});

// ==========================================
// 2.2 DYNAMIC CONTENT SEARCH BAR FILTER
// ==========================================
function initSearchFilter() {
    const searchInput = document.getElementById("searchBar");
    const itemCards = document.querySelectorAll(".item-card");
    
    if (!searchInput) return; // Exit if search bar doesn't exist on current page
    
    searchInput.addEventListener("input", (e) => {
        const queryText = e.target.value.toLowerCase().trim();
        
        itemCards.forEach(card => {
            const titleText = card.querySelector(".item-title").textContent.toLowerCase();
            const descText = card.querySelector(".item-desc").textContent.toLowerCase();
            
            // Show or hide product cards based on keyword search match
            if (titleText.includes(queryText) || descText.includes(queryText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ==========================================
// 2.1 INTERACTIVE ELEMENTS: IMAGE LIGHTBOX
// ==========================================
function initLightbox() {
    const galleryImages = document.querySelectorAll(".gallery-thumb");
    
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            // Create a modal dark window background dynamically
            const overlay = document.createElement("div");
            overlay.className = "lightbox-overlay";
            
            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigImg.alt = img.alt;
            bigImg.className = "lightbox-content";
            
            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);
            
            // Delete the image overlay window when clicked anywhere
            overlay.addEventListener("click", () => {
                overlay.remove();
            });
        });
    });
}



