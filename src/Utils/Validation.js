export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "Invalid email address.";
};

export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password) 
        ? "" 
        : "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
};

export const validateName = (username) => {
    return username.trim().length > 0 ? "" : "Name is required.";
};
