    const translations = {
      home: {
        spanish: [
            "Home",
            "¿Quíenes somos?",
            "¿Cómo funciona?",
            "login/Registro",
            "Calcule su crédito",
            "Tiempo en meses",
            "Su plan de pago",
            "Monto:",
            "Cantidad de cuotas:",
            "Valor cuota mensual:",
            "Total intereses:",
            "Total pagar:",
            "PEDIR MI CREDITO",
            "SOLICITA TU <br> PRESTAMO",
            "EN LINEA",
            "Solicitalo ya!"
          ],
        english: [
            "Home",
            "About Us",
            "How does it work?",
            "login/register",
            "Calculate your credit",
            "Time in months",
            "Your payment plan",
            "Amount:",
            "Amount of fees:",
            "Monthly fee value:",
            "Total interests:",
            "Total payment:",
            "ASK FOR MY CREDIT",
            "REQUEST YOUR LOAN",
            "ONLINE",
            "Request it now!"
        ],
      },
      segundo: {
        spanish: [
            "Titulo en la segunda página",
            "Parrafo en la segunda página",
            "Titulo con <span>texto grande</span> dentro en la segunda página"
          ],
        english: [
          "Title on second page",
          "Paragraph on second page",
          "Title with <span>big text</span> inside on second page"
        ]
      }
    };

    let currentLanguage = "spanish"; // Idioma predeterminado

    document.getElementById("language-link").addEventListener("click", function(event) {
      event.preventDefault(); // Evitar la acción predeterminada del enlace

      // página actual
      const currentPageId = document.body.id;
      
      // sleccion idioma a utilizar y qué array de traducción utilizar
      const lang = (currentLanguage === "english") ? "spanish" : "english";
      const langArray = translations[currentPageId][lang];

      // Iterar sobre las clases que comienzan con "textBoxL-"
      for (let i = 1; i <= langArray.length; i++) {
        const clase = ".textBoxL-" + i;
        document.querySelector(clase).innerHTML = langArray[i - 1];
      }
      
      // Cambiar el enlace y el texto del enlace
      document.getElementById("language-link").href = lang;
      document.getElementById("language-link").innerHTML = "<img  class=\"IconIdiom\" alt=\"\" src=\"assets/img/United-kingdom_flag_icon_round.svg.png\">";

      // Cambiar el atributo lang del elemento html
      document.documentElement.lang = (lang === "english") ? "en" : "es";

      // Actualizar el idioma actual
      currentLanguage = lang;
    });
 