// Import Firebase modules using URLs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, doc, setDoc, getDocs,collection } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';






const firebaseConfig = {
    apiKey: "AIzaSyAWW2cidrB2D2EUZH4QElSzD_Kt7xDywDk",
    authDomain: "uhalisi-6d171.firebaseapp.com",
    projectId: "uhalisi-6d171",
    storageBucket: "uhalisi-6d171.appspot.com",
    messagingSenderId: "965949499764",
    appId: "1:965949499764:web:8642a02a9cc6145ef0e421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const subjects = document.getElementById('psubjects').value;
        const cell1 = document.getElementById('cell1').value;
        const cell2 = document.getElementById('cell2').value;
        const datax = {
            name: name,
            subjects: subjects,
            cell1: cell1,
            cell2: cell2
        };
        console.log(datax);

        try {
            await setDoc(doc(db, "contacts", name+cell1), datax);
            alert('Details submitted successfully');
            closeModal();
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Error submitting details');
        }
    });
});

function showModal() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = "none";
}

document.getElementById("closebutton").addEventListener('click',()=>{
    closeModal();
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(
        showModal
    ,4000);
});


// scripts.js
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function moveSlide(n) {
    slideIndex += n - 1; // Adjust for the showSlides increment
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);

document.getElementById("price-estimator-form").addEventListener('click',calculatePrice);
// scripts.js
function calculatePrice() {
    let total = 0;
    const checkboxes = document.querySelectorAll('input[name="subjects"]:checked');
    const priceOutput = document.getElementById('price-output');
    const priceText = document.getElementById('price');

    checkboxes.forEach((checkbox) => {
        switch (checkbox.value) {
            case 'math':
                total += 300;
                break;
            case 'physics':
                total += 300;
                break;
            case 'techmath':
                total += 250;
                break;
            case 'mathphysics':
                total += 250;
                break;
        }
    });
    if (total >= 500){
        total*= 0.8;
    }
    priceText.innerText = `R${total}`;

    // Show and animate the price output
    priceOutput.classList.add('show');
    
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('price-estimator-form').reset();
});