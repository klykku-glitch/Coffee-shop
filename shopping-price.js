// Coffee data list
const coffeeMenu = [
    "Ethiopian Yirgacheffe",
    "Colombia Supremo",
    "Brazil Santos",
    "Vietnam Robusta",
    "Sumatra Mandheling",
    "Costa Rica Tarrazu",
    "Guatemala Antigua",
    "Kenya AA",
    "Tanzania Peaberry"
];

// DOM elements
const searchInput = document.getElementById('coffeeSearch');
const resultsContainer = document.getElementById('coffeeResults');
const clearBtn = document.getElementById('clearBtn');

// Function to render coffee list based on search text
function renderCoffeeList(filterText = '') {
    const lowerFilter = filterText.toLowerCase().trim();
    let filteredCoffees = coffeeMenu;

    if (lowerFilter !== '') {
        filteredCoffees = coffeeMenu.filter(coffee =>
            coffee.toLowerCase().includes(lowerFilter)
        );
    }

    if (filteredCoffees.length === 0) {
        resultsContainer.innerHTML = `<div class="empty-message">☕ No coffee found for “${escapeHtml(filterText)}”</div>`;
        return;
    }

    resultsContainer.innerHTML = filteredCoffees.map(coffee =>
        `<div class="coffee-item">☕ ${coffee}</div>`
    ).join('');
}

// Helper function to escape HTML (security)
function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Event: when user types in search box
searchInput.addEventListener('input', (e) => {
    renderCoffeeList(e.target.value);
});

// Event: clear button click
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderCoffeeList('');
    searchInput.focus();
});

// Initial render
renderCoffeeList('');