import React from "react";
import Contact from './Contact'

const contacts = [
{
name: "Andrea Howard",
avatar: "https://randomuser.me/api/portraits/women/75.jpg",
status: false
  },
{
name: "Alice Simpson",
avatar: "https://randomuser.me/api/portraits/women/0.jpg",
status: true
},
{
name: "Alvin Watkins",
avatar: "https://randomuser.me/api/portraits/men/80.jpg",
status: false
},
{
name: "Mario Thompson",
avatar: "https://randomuser.me/api/portraits/men/12.jpg",
status: true
},
{
name: "Hailey Scott",
avatar: "https://randomuser.me/api/portraits/women/96.jpg",
status: false
}
]

const ContactList = () => (
  <div>
    {contacts.map(item => (
  <Contact name={item.name} avatar={item.avatar} status={item.status} />
)
)}
  </div>
);




export default ContactList;