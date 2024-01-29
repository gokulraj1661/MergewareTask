// imports/ui/layouts/MainLayout.jsx
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

const MainLayout = ({ user, content }) => (
  <div>
    <header>
      <h1>Your Meteor App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.emails[0].address}!</p>
          <button onClick={() => Meteor.logout()}>Logout</button>
        </div>
      ) : (
        
        <><p>Please sign in or sign up.</p><button onClick={() => FlowRouter.go('/signin')}>Sign In</button><button onClick={() => FlowRouter.go('/signup')}>Sign Up</button></>
        
      )}
    </header>
    <main>
      {content || <p>Page content goes here.</p>}
    </main>
  </div>
);

export default withTracker(() => ({
  user: Meteor.user(),
}))(MainLayout);
