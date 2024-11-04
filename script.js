
        function loadContacts() {
            const chatList = document.getElementById("chat-list");
            chatList.innerHTML = "";
            
            const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

            contacts.forEach((contact, index) => {
                const chatDiv = document.createElement("div");
                chatDiv.classList.add("chat");

                chatDiv.innerHTML = `<a href="https://wa.me/${contact.number}" target="_blank">
                    <img src="https://poloshoppingindaiatuba.com.br/assets/images/732e11da931f0081ab573c6bf3f38459.jpg" alt="User">
                    <div class="chat-info">
                        <h2>${contact.message.split(' ')[0]} ${index + 1}</h2>
                        <p>Número: ${contact.number}</p>
                        <p>Adicionado em: ${contact.date}</p>
                    </a></div>
                    <button onclick="removeContact(${index})" class="remove-button">X</button>
                    <span class="time">Agora</span>
                `;
                chatList.appendChild(chatDiv);
            });
        }

        function addContact() {
            const phoneInput = document.getElementById("phone-input");
            const messageInput = document.getElementById("message-input");
            const phoneNumber = phoneInput.value.trim();
            const message = messageInput.value.trim();

           /* const phoneRegex = /^[0-9]+$/;
            if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
                alert("Por favor, insira um número de telefone válido.");
                return;
            }*/

            const date = new Date().toLocaleString();

            const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
            contacts.push({ number: phoneNumber, message: message, date: date });

            localStorage.setItem("contacts", JSON.stringify(contacts));

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

            phoneInput.value = "";
            messageInput.value "";
        }



const notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.innerText = "Contato adicionado!";
    
    setTimeout(() => {
        notification.style.display = "none";
    }, 4000); // Oculta a notificação após 2 segundos

                

function removeContact(index) {
    // Cria o efeito de explosão de partículas
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff0000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 5,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        }
    });

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    loadContacts();
}



        function searchContacts() {
            const searchInput = document.getElementById("search-input").value.toLowerCase();
            const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
            const chatList = document.getElementById("chat-list");
            chatList.innerHTML = ""; // Limpa a lista antes de carregar os contatos filtrados

            contacts.forEach((contact, index) => {
                if (contact.number.includes(searchInput) || contact.message.toLowerCase().includes(searchInput)) {
                    const chatDiv = document.createElement("div");
                    chatDiv.classList.add("chat");

                    chatDiv.innerHTML = `<a href="https://wa.me/${contact.number}" target="_blank">
                        <img src="https://poloshoppingindaiatuba.com.br/assets/images/732e11da931f0081ab573c6bf3f38459.jpg" alt="User">
                        <div class="chat-info">
                            <h2>${contact.message.split(' ')[0]} ${index + 1}</h2>
                            <p>Número: ${contact.number}</p>
                            <p>Adicionado em: ${contact.date}</p>
                        </a></div>
                        <button onclick="removeContact(${index})" class="remove-button">X</button>
                        <span class="time">Agora</span>
                    `;
                    chatList.appendChild(chatDiv);
                }
            });
        }
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}


        window.onload = loadContacts;
    
