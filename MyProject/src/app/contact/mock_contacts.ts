import { Contact } from './contact'
import { Injectable, InjectionToken } from '@angular/core';

export const MyContact = new InjectionToken<Contact[]>("bite");

export const Contacts: Contact[] = [
    { lastname: "kevin", firstname: "kevin", id: "1", email: "ansardkev@hotmail.fr", phone_number: "0669780106", img: null, naissance: "21 septembre"},
    { lastname: "toto", firstname: "zeeze", id: "2", email: "s@hotmail.fr", phone_number: "0669780106", img: null, naissance:"jamais"},
    { lastname: "tutu", firstname: "edze", id: "3", email: "z@hotmail.fr", phone_number: "0669780106", img: null, naissance:"pas encore née"}
];

