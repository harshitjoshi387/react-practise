import React from 'react';
import Card from "./components/Card";

// Data ek jagah define karo
const users = [
  { id: 1, name: "harsh", src: "https://plus.unsplash.com/premium_photo-1738592736106-a17b897c0ab1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, name: "ramesh", src: "https://images.unsplash.com/photo-1772371272206-0525c3183ca9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "priya", src: "https://plus.unsplash.com/premium_photo-1738594383544-496c7cb479a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBpbGx1c3RyYXRpb258ZW58MHx8MHx8fDA%3D" },
  { id: 4, name: "riya", src: "https://plus.unsplash.com/premium_photo-1738449258742-f98da1490e2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2ZpbGUlMjBpbGx1c3RyYXRpb258ZW58MHx8MHx8fDA%3D" },
  { id: 5, name: "diya", src: "https://plus.unsplash.com/premium_photo-1738449258712-f1e6ad3d40e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGUlMjBpbGx1c3RyYXRpb258ZW58MHx8MHx8fDA%3D" }
];

function App() {
  return (
    <div className="parent">
      {users.map((user) => (
        <Card key={user.id} name={user.name} src={user.src} />
      ))}
    </div>
  );
}

export default App;