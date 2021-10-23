<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RakeshPotnuru/YearnQuest">
    <img src="https://user-images.githubusercontent.com/70439799/138451368-e3f096fa-68a3-43d2-b090-75e62c407ceb.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Yearn Quest</h3>

  <p align="center">
    Let's end the Hunger ✊
    <br />
    <!-- <a href="https://github.com/RakeshPotnuru/YearnQuest"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/RakeshPotnuru/YearnQuest/issues">Report Bug</a>
    ·
    <a href="https://github.com/RakeshPotnuru/YearnQuest/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Yearn Quest][product-screenshot]](https://example.com)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Bootstrap](https://getbootstrap.com)
- [JQuery](https://jquery.com)
- [Ejs](https://ejs.co)
- [NodeJs](https://nodejs.org)
- [Sawo API](https://sawolabs.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- You need [Sawo](https://sawolabs.com) and Twilio [SendGrid](https://sendgrid.com) API keys for this project.

### Installation and Setup

1. Clone the repo

   ```sh
   git clone https://github.com/RakeshPotnuru/YearnQuest.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Create `nodemon.json` file in the `/root` directory

   ```
   {
      "env": {
        "DB_URL": "mongodb://localhost:27017/databaseName"
        "SENDGRID_API_KEY" : "Sendgrid API key"
        "SENDER_EMAIL": "Sender email"
       }
    }
   ```

4. Create a `config.js` file at `public/js/` and add Sawo api key

  ```
  const keys = {
    SAWO_API_KEY: "Sawo api key",
  };
  ```

4. To start the server

   ```
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- ROADMAP -->

<!-- ## Roadmap

- [] Feature 1
- [] Feature 2
- [] Feature 3
  - [] Nested Feature

See the [open issues](https://github.com/RakeshPotnuru/YearnQuest/issues) for a full list of proposed features (and known issues). -->

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Rakesh - [@RakeshPotnuru](https://github.com/RakeshPotnuru)
- Rwitesh Bera - [@rwiteshbera](https://github.com/rwiteshbera)
- Aqsa Shadab Khan - [@aqsak1](https://github.com/aqsak1)

Project Link: [https://github.com/RakeshPotnuru/YearnQuest](https://github.com/RakeshPotnuru/YearnQuest)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/RakeshPotnuru/YearnQuest.svg?style=for-the-badge
[contributors-url]: https://github.com/RakeshPotnuru/YearnQuest/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RakeshPotnuru/YearnQuest.svg?style=for-the-badge
[forks-url]: https://github.com/RakeshPotnuru/YearnQuest/network/members
[stars-shield]: https://img.shields.io/github/stars/RakeshPotnuru/YearnQuest.svg?style=for-the-badge
[stars-url]: https://github.com/RakeshPotnuru/YearnQuest/stargazers
[issues-shield]: https://img.shields.io/github/issues/RakeshPotnuru/YearnQuest.svg?style=for-the-badge
[issues-url]: https://github.com/RakeshPotnuru/YearnQuest/issues
[license-shield]: https://img.shields.io/github/license/RakeshPotnuru/YearnQuest.svg?style=for-the-badge
[license-url]: https://github.com/RakeshPotnuru/YearnQuest/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: public/images/homePage.png
