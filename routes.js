// imports/startup/client/routes.js
import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/imports/ui/MainLayout';
import Home from '/imports/ui/Home';
import SignUp from '/imports/ui/SignUp';
import SignIn from '/imports/ui/SignIn';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, { content: <Home /> });
  },
});

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    mount(MainLayout, { content: <SignUp /> });
  },
});

FlowRouter.route('/signin', {
  name: 'signin',
  action() {
    mount(MainLayout, { content: <SignIn /> });
  },
});
