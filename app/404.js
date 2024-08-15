// app/404.js
import Head from 'next/head';

function NotFound() {
  return (
    <div>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn't find that page. Try searching or visit our <a href="/">homepage</a>.</p>
    </div>
  );
}

export default NotFound;