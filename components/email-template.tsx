import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string; 
}

export function EmailTemplate({ firstName, lastName, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Reader: {firstName} {lastName} </h1>
      <p>Message: {message}</p>
    </div>
  );
}