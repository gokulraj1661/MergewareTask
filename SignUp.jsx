import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    Accounts.createUser({ email, password }, (error) => {
      if (error) {
        console.log(error.reason); // Handle error
      } else {
        FlowRouter.go('/'); // Redirect to home page after successful sign-up
      }
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

Template.register.events({
    'submit #registerForm': function (event) {
      event.preventDefault();
  
      // Get form values
      const email = event.target.registerEmail.value;
      const password = event.target.registerPassword.value;
  
      
      Accounts.createUser({
        email: email,
        password: password,
      }, function (error, userId) {
        if (error) {
          console.error(error.reason);
        } else {
         
          const selectedRole = event.target.roleSelect.value;
          
        
          Roles.addUsersToRoles(userId, selectedRole);
        }
      });
    }
  });
  

export default SignUp;
