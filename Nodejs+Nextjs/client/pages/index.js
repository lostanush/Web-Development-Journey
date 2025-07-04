import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("Loading...");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("Loading...");

  useEffect(async () => {
    try {
      const { data } = await axios.get("http://localhost:3001", {
        message,
        user,
        items,
      });
      setMessage(data.message);
      setItems(data.items);
      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div>
        <h1>Welcome to Next.js!</h1>
        <p>
          This is a simple example of a Next.js application that fetches data
          from a Node.js backend.
        </p>
        <br />

        <ol className="list-disc list-inside">
          <li>
            {" "}
            Get started by editing <code>pages/index.js</code>.{" "}
          </li>
          <li>Save and see your changes instantly.</li>
          <li>{message}</li>
          <li>User: {user}</li>
        </ol>

        <div className="mt-4">
          {items.length > 0 ? (
            items.map((item, idx) => <div key={idx}>{item}</div>)
          ) : (
            <p>No items available.</p>
          )}
        </div>
      </div>
    </>
  );
  
}
