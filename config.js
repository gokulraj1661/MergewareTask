// config.js
import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
  defaultLayout: 'mainLayout',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,
  sendVerificationEmail: true,
  enforceEmailVerification: true,
  confirmPassword: true,
  continuousValidation: false,
  displayFormLabels: true,
  forbidClientAccountCreation: false,
  formValidationFeedback: true,
  homeRoutePath: '/',
  showAddRemoveServices: false,
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signup',
  path: '/signup',
});

Accounts.onLogin(() => {
  FlowRouter.go('/');
});

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn], {
  except: ['signin', 'signup'],
});
