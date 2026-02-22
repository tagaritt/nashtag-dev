import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string; 
}

export function EmailTemplate({ firstName, lastName, email,message }: EmailTemplateProps) {
  return (
    <div>
      <h1> My name is {firstName} {lastName}, and here{"'"}s what I have to say: </h1>
      <p> {message} </p>

      <p>To respond, please contact me at {email}{"."}</p>
    </div>
  );
}