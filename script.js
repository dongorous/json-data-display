// Data in JSON format
const data = [
    {
        "total": "212.9M",
        "gender": "Men",
        "byCountry": [
            { "ratio": "12:84M", "country": "Australia" },
            { "ratio": "16:46M", "country": "Ghana" },
            { "ratio": "139.13M", "country": "Indonesia" },
            { "ratio": "27:32M", "country": "Kenya" }
        ],
        "colors": {
            "primaryColor": "rgb(56 178 172)",
            "secondaryColor": "rgb(215 245 243)"
        }
    },
    {
        "total": "212.9M",
        "gender": "Women",
        "byCountry": [
            { "ratio": "12:94M", "country": "Australia" },
            { "ratio": "16:38M", "country": "Ghana" },
            { "ratio": "137:23M", "country": "Indonesia" },
            { "ratio": "27:66M", "country": "Kenya" }
        ],
        "colors": {
            "primaryColor": "rgb(85 60 154)",
            "secondaryColor": "rgb(233 224 255)"
        }
    },
    {
        "total": "172.9M",
        "gender": "Youth",
        "byCountry": [
            { "ratio": "5:71M", "country": "Australia" },
            { "ratio": "14:62M", "country": "Ghana" },
            { "ratio": "82:96M", "country": "Indonesia" },
            { "ratio": "24:42M", "country": "Kenya" }
        ],
        "colors": {
            "primaryColor": "rgb(49 130 206)",
            "secondaryColor": "rgb(204 230 255)"
        }
    }
];

// Function to render the data
function renderData() {
    const container = document.getElementById('data-container');
    
    data.forEach((item) => {
        const column = document.createElement('div');
        column.className = 'column';
        
        const content = `
            <h2 class="column__title">${item.total} <span>${item.gender.toUpperCase()}</span></h2>
            <div class="card">
                <strong>By country</strong>
                <div class="card-block">
                    ${item.byCountry.map((entry) => `
                        <div class="card_widget" style="background-color: ${item.colors.secondaryColor};">
                            <div class="card_widget_highlited" style="background-color: ${item.colors.primaryColor};">
                                ${entry.ratio}
                            </div>
                            <div  style="color: ${item.colors.primaryColor};">${entry.country}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        column.innerHTML = content;
        container.appendChild(column);
    });
}

// Call the function to render data
renderData();