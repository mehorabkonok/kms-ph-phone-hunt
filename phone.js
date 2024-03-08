console.log('Working perfectly');

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data);

    displayPhones(phones);
}

const displayPhones = phones => {
    console.log(phones);
    // for (product of phones) {
    //     console.log(product);
    // }

    const phoneContainer = document.getElementById('phone-container');
    // console.log(phoneContainer);
    phoneContainer.textContent = '';

    console.log(phones.length);

    // display show all button
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');
    }


    // display only first 12 phones
    phones = phones.slice(0, 12);

    console.log(phones.length);

    phones.forEach(phone => {
        console.log(phone);

        // --------------------
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;

        phoneCard.innerHTML = `
        <figure>
            <img src="${phone.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary" onclick="handleShowDetail('${phone.slug}')">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
        // console.log(phoneCard);
    });
    // hide loading spinner
    toggleLoadingSpinner(false);
}

// 
const handleShowDetail = async (id) => {
    console.log('Click show details', id);

    // load single phone data
    const res = await fetch('https://openapi.programming-hero.com/api/phone/${id}');
    const data = await res.json();
    console.log(data);

}





// handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField2 = document.getElementById('search-field2');
    const searchText2 = searchField2.value;
    console.log(searchText2);
    loadPhone(searchText2);
}


const toggleLoadingSpinner = (isLodaing) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLodaing) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

// loadPhone('iphone');
// loadPhone('samsung');
// loadPhone('oppo');


// phone details object
//  




