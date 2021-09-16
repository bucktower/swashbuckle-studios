import Head from "next/head";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Swashbuckle Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src={require("../public/squidgylogo.png")}
          style={{ width: 400, maxWidth: "80%" }}
        />

        <p className="description">
          Welcome to the chaos and creation of{" "}
          <a href="https://bucktower.net" target="_blank">
            Buck Tower
          </a>
          .
          <br />
          This is the hub of all of my personal projects for all my different
          hobbies that I’d like to share
        </p>

        <div className="grid">
          <a
            href="https://buck.band"
            className="card"
            style={{
              backgroundImage:
                "url(" + `${require("../public/records.jpg")}` + ")",
              backgroundSize: "cover",
            }}
          >
            <h3>Swashbuckle Records &rarr;</h3>
            <p>
              I like music like a dog loves running. I make it for my own
              pleasure, but I like sharing it with friends.
            </p>
          </a>

          <a
            href="https://swashbuckle.dev"
            className="card"
            style={{
              backgroundImage:
                "url(" + `${require("../public/software.jpg")}` + ")",
              backgroundSize: "cover",
            }}
          >
            <h3>Swashbuckle Software &rarr;</h3>
            <p>
              Sometimes, it's great to try out a software project the way I want
              to architect it from the ground up
            </p>
          </a>
          <a
            href="https://swashbuckle.games"
            className="card"
            style={{
              backgroundImage:
                "url(" + `${require("../public/games.jpg")}` + ")",
              backgroundSize: "cover",
            }}
          >
            <h3>Swashbuckle Games &rarr;</h3>
            <p>
              Games are the perfect meeting place of code, music, and story. Might as well try making some.
            </p>
          </a>

          <a
            href="https://swashbucklestories.com/"
            className="card"
            style={{
              backgroundImage:
                "url(" + `${require("../public/stories.jpg")}` + ")",
              backgroundSize: "cover",
            }}
          >
            <h3>Swashbuckle Stories &rarr;</h3>
            <p>
              I enjoy reading and writing stories. It’d be cool to one day put them into some poetry, books, or film.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://twitter.com/bucktower" target="_blank">
          Message me on Twitter @bucktower &rarr;
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description a {
          color: #eb4c71;
          text-decoration: none;
        }

        .description a:hover,
        .description a:focus,
        .description a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: white;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #eb4c71;
          border-color: #eb4c71;
        }

        footer a:hover,
        footer a:focus,
        footer a:active {
          color: #eb4c71;
        }

        .card-disabled:hover,
        .card-disabled:focus,
        .card-disabled:active {
          color: lightgrey;
          border-color: lightgrey;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
