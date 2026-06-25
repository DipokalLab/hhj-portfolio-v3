import { css } from "@emotion/react";

function OnePage() {
  return (
    <div
      css={css({
        backgroundColor: "#f2f3f5",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      })}
    >
      <div
        css={css({
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        })}
      >
        <h1 css={css({ fontSize: "2rem" })}>Hyeong Jun Huh</h1>
        <Links />
      </div>
    </div>
  );
}

function Links() {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      })}
    >
      <a
        href="https://github.com/DipokalLab/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/huhhyeongjun/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a href="https://cse.ac/" target="_blank" rel="noopener noreferrer">
        Blog
      </a>
      <a
        href="https://www.instagram.com/hyeongjun.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://x.com/huhhyeongjun"
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
      <a
        href="https://www.threads.com/@hyeongjun.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Threads
      </a>
      <a
        href="https://www.facebook.com/dipokalhhj"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>

      <a
        href="https://www.youtube.com/@huhhyeongjun"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>
      <a
        href="https://orcid.org/0009-0009-4865-5245"
        target="_blank"
        rel="noopener noreferrer"
      >
        orcid
      </a>
    </div>
  );
}

export default OnePage;
