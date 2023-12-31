import React, { useState } from "react";
import styles from "./sign-in.module.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.header}>Авторизация</div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="login"
          placeholder="Введите логин"
          required
          onChange={handleInputChange}
          value={formData.login}
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
          onChange={handleInputChange}
          value={formData.password}
        />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default SignIn;
