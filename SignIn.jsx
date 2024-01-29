import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        console.log(error.reason); // Handle error
      } else {
        FlowRouter.go('/'); // Redirect to home page after successful sign-in
      }
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

Template.dashboard.helpers({
    canAccessDashboard: function () {
      // Check if the current user has the 'user' role
      return Roles.userIsInRole(Meteor.userId(), 'user');
    }
  });
  
 
  

export default SignIn;
