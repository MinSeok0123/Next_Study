import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>pages/index.js</h1>
      <ul>
        <li>
          <a href="/sub/1">[id]</a>
          <a href="/sub/2">[id]</a>
          <a href="/sub/3">[id]</a>
        </li>
      </ul>
    </div>
  );
}
