import React from 'react';
import { useParams } from 'react-router-dom';
export default function UserPage() {
  let { id } = useParams();
  return (
    <div style={{ padding: 10 }}>
      <h3>UserPage Content</h3>
      <p>This is your awesome UserPage subtitle</p>
    </div>
  );
}
