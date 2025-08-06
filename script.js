document.addEventListener("DOMContentLoaded", function () {
    
    const newsContainer = document.getElementById("news-container");

    fetch("news.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(noticia => {
                const div = document.createElement("div");
                div.classList.add("alert", "alert-info");
                div.textContent = noticia.titulo + " - " + noticia.fecha;
                newsContainer.appendChild(div);
            });
        });

    
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        
        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, ingresa un correo válido.");
            return;
        }

        alert("¡Mensaje enviado correctamente!");
        
        document.getElementById("contact-form").reset();
    });
});
