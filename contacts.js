import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, getDocs,collection } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


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

// Function to retrieve and display contact details
async function displayContactDetails() {
    const contactList = document.getElementById('contact-list');

    try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            var listItem ="";
            listItem = `<tr><td>${data.name}</td> <td>${data.subjects}</td> <td>${data.cell1}</td> <td>${data.cell2}</td> <td>${data.date||'old'}</td>`;
                
            listItem +=`<td><a href='https://wa.me/27740243108?text=Hi%20${data.name},%20we%20are%20reaching%20out%20because%20you%20said%20you%20need%20a%20tutor%20for%20${data.subjects}.'>💬</a> 1 <a href='tel:${data.cell1}'>📞</a> 2 <a href='tel:${data.cell2}'>📞</a></td></tr>`;
            contactList.innerHTML += listItem;
        });
    } catch (error) {
        console.error("Error retrieving documents: ", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const confirm = prompt("Security enter month");
    if (confirm === 'august')
    displayContactDetails();
    else alert("Please leave this page");
});
