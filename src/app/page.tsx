import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>some text</p>
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
