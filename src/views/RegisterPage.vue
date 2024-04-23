<template>
    <h1>Register</h1>
    <form>
       <div>
       <input type="text" id="givenname" name="givenname" placeholder="Given name" />
       <input type="text" id="surname" name="surname" placeholder="Surname" />
       <input type="email" id="email" name="email" placeholder="Email" />
       <input type="text" id="username" name="username" placeholder="Username" />
       <input type="text" id="password" name="password" placeholder="Password" />
       <input type="text" id="password2" name="password2" placeholder="Repeat password" />
      </div>
     </form>
     <button>REGISTER</button>
</template>

<script>
  export default {
    name: 'register',
  }
</script>
  