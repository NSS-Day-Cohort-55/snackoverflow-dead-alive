export const RegisterForm = () => {
  const contentElement = document.querySelector("main");

  contentElement.addEventListener("click", (event) => {
    if (event.target.id == "register__submit") {
      const regName = document.getElementById("register_name").value;
      const regEmail = document.getElementById("register_email").value;

      const userObj = { name: regName, email: regEmail, isAdmin: false };

      fetch(`http://localhost:8088/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      });
    }
  });
  return `
  <div>
    <h3>Register</h3>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Name</span>
      </div>
        <input type="text" class="form-control" aria-label="Default" 
        aria-describedby="inputGroup-sizing-default"
        value=""
        name="name"
        type="text"
        id="register_name"
         />
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Email</span>
      </div>
      <input type="text" class="form-control" aria-label="Default" 
       aria-describedby="inputGroup-sizing-default"
        value=""
        name="email"
        type="text"
        id="register_email"
        placeholder="name@place.com" />
  </div>
  <div class="input-group input-group-sm mb-3">
    <button type="button" class="btn btn-primary" id="register__submit" >Register</button>
  </div>
</div>
	`;
};
