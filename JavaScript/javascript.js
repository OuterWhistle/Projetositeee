document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();

    const formattedDate = date.toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const dayOfWeek = date.getDay(); 

    const dateDisplayElement = document.getElementById("date-display");

    if (dateDisplayElement) {
        if (dayOfWeek >= 1 & dayOfWeek <= 5) {
            dateDisplayElement.textContent = `Hoje é ${formattedDate} - Estamos Abertos!`;
        } else {
            dateDisplayElement.textContent = `Hoje é ${formattedDate} - Estamos Fechados!`;
        }
    }
});
