<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TysonThurman/domain-checker">
    <img src="images/logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">Domain Checker</h3>

  <p align="center">
    A library for pulling information about domain names using the WHOIS API
    <br />
  </p>
</div>

<!-- GETTING STARTED -->
## Getting Started

To get started using the code, see below.

### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://whois.whoisxmlapi.com/](https://whois.whoisxmlapi.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/TysonThurman/domain-checker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in the `.env` file
   ```js
   API_KEY='ENTER YOUR API';
   ```

<!-- ROADMAP -->
## Roadmap

- [ ] Domain Details: Get information about who registered the domain (registrar) and when the domain will expire.
- [ ] DNS Records: Look up the DNS records (IP addresses) for each domain.
- [ ] Add front end for the application

See the [open issues](https://github.com/TysonThurman/domain-checker/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.