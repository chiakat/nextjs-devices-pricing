import { signIn } from 'next-auth/react';
import { Link } from '@mui/material';

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        Please&nbsp;
        <Link href="/api/auth/signin"
           onClick={(e) => {
             e.preventDefault();
             signIn();
           }}>log in</Link>
          &nbsp;to view this page
      </p>
    </>
  );
}
