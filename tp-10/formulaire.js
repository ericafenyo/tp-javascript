const API_URL = "https://digicode.cleverapps.io/utilisateurs";

const isAllFieldFilled = (data) => {
  let allField = true;
  for (const key in data) {
    const value = data[key] || "";

    //replace all spaces with empty string and check if the string is empty
    if (value.replace(/\s/g, "") === "") {
      allField = false;
      break;
    }
  }
  return allField;
};

const isDateValid = (date) => {
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  return datePattern.test(date);
};

// User must be 18 and above
const isUserAdult = (date) => {
  const dateArray = date.split("/");
  const year = dateArray[2];
  const currentYear = new Date().getFullYear();
  return currentYear - year >= 18;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  /*
  {
  "firstName": "John",
  "lastName": "Doe",
  "birthDate": "21/05/1996",
  "birthPlace": "Accra",
  "department": "Loire-Atlantique",
  "street": "9",
  "streetAddress": "Rue Marguerite de Rochechouart",
  "postalCode": "64983",
  "city": "Nantes"
}
  */

  const requestBody = {
    nom: data.lastName,
    prenom: data.firstName,
    dateNaissance: data.birthDate,
    lieuNaissance: data.birthPlace,
    departementNaissance: data.department,
    numeroRue: data.street,
    libelleRue: data.streetAddress,
    codePostal: data.postalCode,
    ville: data.city,
  };

  // Validate that all fields are filled
  let allField = isAllFieldFilled(requestBody);
  if (!allField) {
    alert("All fields are required");
    return;
  }

  // Validate date format
  let isDateValidValue = isDateValid(requestBody.dateNaissance);
  if (!isDateValidValue) {
    alert("Date format is invalid");
    return;
  }

  // Validate user is 18 and above
  let isUserAdultValue = isUserAdult(requestBody.dateNaissance);
  if (!isUserAdultValue) {
    alert("User must be 18 and above");
    return;
  }

  // All validation passed
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  fetch(API_URL, config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
