import { Meteor } from 'meteor/meteor'

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});