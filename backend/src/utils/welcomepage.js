export const WelocmeHtml = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 50px;
      }

      h1 {
        color: #333;
      }

      p {
        color: #666;
        margin: 20px 0;
      }

      a {
        color: #007BFF;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My API Service</h1>
    <br />
    <br />
    <p>
      Postman documentation content: -
      <a
        href="https://documenter.getpostman.com/view/27782301/2s9Ye8fup3"
        target="_blank"
        rel="noopener noreferrer"
        >documentation </a
      >
    </p>

    <p>
      Project on GitHub: -
      <a
        href="https://github.com/Mo2022Hamoo/ecommerce_deploy"
        target="_blank"
        rel="noopener noreferrer"
        >E-commerce link</a
      >
    </p>
  </body>
</html>
`;
};

export const hellowpage = async () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mohamed Hamed Portfolio</title>
    <link
      rel="icon"
      href="path_to_your_image/favicon.ico"
      type="image/x-icon"
    />
    <!-- Add image for tab icon -->
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #333;
        color: #fff;
        transition: background-color 0.3s, color 0.3s;
      }
      .light-mode {
        background-color: #f4f4f4;
        color: #333;
      }
      .container {
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background-color: #444;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
      .content h4 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
      }
      .content p,
      h2 {
        font-size: 16px;
        margin-bottom: 10px;
        text-align: center;
      }
      .link-container a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-size: 12px;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;
      }
      .link-container a:hover {
        background-color: #0056b3;
      }
      .social-icons a {
        display: inline-block;
        margin: 5px;
        font-size: 14px;
        color: #fff;
        background-color: #4caf50;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
      }
      .social-icons a:hover {
        background-color: #45a049;
      }
      iframe {
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
        border-radius: 10px;
        border: none;
      }
      img {
        max-width: 200px;
        border-radius: 10px;
        display: block;
        margin: 20px auto;
      }
      .toggle-button {
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        background-color: #555;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .toggle-button:hover {
        background-color: #333;
      }
    </style>
  </head>
  <body>
    <button class="toggle-button" onclick="toggleMode()">
      Toggle Light/Dark Mode
    </button>
    <div id="MainContent" class="container">
      <!-- Video Section -->

      <iframe
        id="MainContent"
        src="${process.env.ProjectVideo}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <!-- Main Content -->
      <h4 style="text-align: center; color: #fff">
        Welcome to My API Services
      </h4>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
        "
        id="MainContent"
        class="content"
      >
        <!-- الصورة -->
        <img
          src="https://res.cloudinary.com/dxjng5bfy/image/upload/v1708653712/Genaral%20IMgs/ebln3zo88mzfmzai3pg9.jpg"
          alt="Mohamed Hamed"
          style="max-width: 270px; max-height: 100%; border-radius: 10px"
        />

        <!-- النصوص والروابط -->

        <div style="flex: 1; margin-left: 20px">
          <div
            class="link-container"
            style="
              margin-bottom: 15px;
              text-align: left;
              display: flex;
              flex-direction: column;
              gap: 10px;
            "
          >
            <!-- Documentation -->
            <div style="text-align: center; margin-top: 50px">
              <p
                style="
                  margin-right: 15px;
                  font-size: 14px;
                  color: #f4f4f4;
                  display: inline-block;
                "
              >
                API Documentation
              </p>
              <a
                href="${process.env.Apidoc}"
                target="_blank"
                style="background-color: #28a745"
                >View Documentation
              </a>
            </div>

            <!-- GitHub -->
            <div style="text-align: center">
              <p
                style="
                  display: inline-block;
                  margin-right: 15px;
                  font-size: 14px;
                  color: #f4f4f4;
                  display: inline-block;
                "
              >
                GitHub Repository
              </p>
              <a
                href="${process.env.ProjectOnGithub}"
                target="_blank"
                style="
                  background-color: #007bff;
                  color: #fff;
                  text-decoration: none;
                "
                >View on GitHub
              </a>
            </div>

            <!-- Live Project -->
            <div style="text-align: center">
              <p
                style="
                  margin-right: 15px;
                  display: inline-block;
                  font-size: 14px;
                  color: #f4f4f4;
                "
              >
                view Live Project
              </p>
              <a
                href="${process.env.LiveServer}"
                target="_blank"
                style="background-color: #dc3545"
                >View Live frontend</a
              >
            </div>
          </div>

          <h2 style="text-align: center">${process.env.Myname}</h2>
          <p style="text-align: center">Title: Backend Node.js Developer</p>
          <p style="text-align: center">Email: ${process.env.useremail}</p>
          <p style="text-align: center">Location: ${process.env.location}</p>
          <div class="social-icons" style="text-align: center">
            <a href="${process.env.GitHub}" target="_blank">GitHub</a>
            <a href="${process.env.linkedIn}" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>

    <script>
      function toggleMode() {
        document.body.classList.toggle("light-mode");
        document.getElementById("MainContent").classList.toggle("light-mode");
        document.getElementById("MainContent").style.color = "#fff";
      }
    </script>
  </body>
</html>
`;
};
