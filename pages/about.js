import Link from "next/link";
function about() {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <br />
      <h1>About</h1>
    </div>
  );
}

export default about;
