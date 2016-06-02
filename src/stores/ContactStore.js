import AppDispatcher from '../dispatcher/AppDispatcher';
import ContactConstants from '../constants/ContactConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _contacts = [];
let _contact = {};

function setContacts(contacts) {
  _contacts = contacts;
}

function setContact(contact) {
  _contact = contact;
}

class ContactSoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getContacts() {
    return _contacts;
  }

  getContact() {
    return _contact;
  }
}

cont ContactStore = new ContactStoreClass();

ContactStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case ContactConstants.RECIEVE_CONTACTS:
      setContacts(action.contacts);
      ContactStore.emitChange();
      break;
    case ContactConstants.RECIEVE_CONTACT:
      setContact(action.contact);
      ContactStore.emitChange();
      break;
    case ContactConstants.RECIEVE_CONTACT_ERROR:
      alert(action.message);
      ContactStore.emitChange();
      break;
    case ContactConstants.RECIEVE_CONTACTS_ERROR:
      alert(action.message);
      break;
    default:
      return true
  }
});

export default ContactStore;
