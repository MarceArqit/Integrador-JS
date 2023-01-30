// LOGIN AND REGISTER FORM VALIDATION.


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
const PHONE_REGEX = /^[0-9]{10}$/;

const isEmpty = (value) => value === "";

const isBetween = (length, min, max) => length > min && length < max;

const isEmailValid = (email) => EMAIL_REGEX.test(email);

const isPasswordValid = (password) => PASSWORD_REGEX.test(password);


const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = "";
};

const checkUsername = () => {
  let valid = false;

  const min = 3;
  const max = 25;

  const username = userNameInput.value.trim();
  if (isEmpty(username)) {
    showError(userNameInput, "El nombre de Usuario es obligatorio");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      userNameInput,
      `El nombre debe tener entre ${min} y ${max} caracteres`
    );
  } else {
    showSuccess(userNameInput);
    valid = true;
  }
  return valid;
};



const checkPassword = () => {
  let valid = false;

  const password = passwordInput.value.trim();

  if (isEmpty(password)) {
    showError(passwordInput, "La contraseña es obligatoria");
  } else if (!isPasswordValid(password)) {
    showError(
      passwordInput,
      `La contraseña debe tener al menos 8 caracteres, una mayuscula,una minuscula y un simbolo.`
    );
  } else {
    showSuccess(passwordInput);
    valid = true;
  }
  return valid;
};



form.addEventListener ('submit', e =>{
  e.preventDefault()

  const isUsernameValid = checkUsername();
  const isPasswordValid = checkPassword();
 

  const isFormValid = isUsernameValid && isPasswordValid 
  console.log(isFormValid, ' Is form valid!')

  if(isFormValid){
    form.submit()
  }
  
})

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        fn.apply(null, args);
      }, delay);
    };
  };
  
  form.addEventListener(
    "input",
    debounce((e) => {
      switch (e.target.id) {
        case "username":
          checkUsername();
          break;
        case "password":
          checkPassword();
          break;
      }
    })
  );