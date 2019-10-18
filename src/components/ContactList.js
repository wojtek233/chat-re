import React from "react";
import Contact from './Contact'

const contacts = [
{
name: "Andrea Howard",
avatar: "https://randomuser.me/api/portraits/women/75.jpg",
},
{
name: "Alice Simpson",
avatar: "https://randomuser.me/api/portraits/women/0.jpg",
},
{
name: "Alvin Watkins",
avatar: "https://randomuser.me/api/portraits/men/80.jpg",
},
{
name: "Mario Thompson",
avatar: "https://randomuser.me/api/portraits/men/12.jpg",
},
{
name: "Hailey Scott",
avatar: "https://randomuser.me/api/portraits/women/96.jpg",
}
]

const ContactList = () => (
  <div>
    {contacts.map(item => (
  <Contact name={item.name} avatar={item.avatar}/>
)
)}
  </div>
);




export default ContactList;