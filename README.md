
# Is It Down?

**Is It Down?** is a simple tool to check the status of a website or service. It allows users to verify whether a given URL is up or down by sending HTTP requests and providing a response based on the server's status.

## Features

- Check the availability of websites or services.
- View the HTTP status code returned by the server.
- Easy-to-use and lightweight.

## Installation

### Clone the repository

```bash
git clone https://github.com/Paul-Lecomte/is-it-down.git
```

### Install dependencies

Navigate to the project directory and install the necessary dependencies.

```bash
cd is-it-down
npm install
```

## Usage

To check if a website is up or down, run the following command:

```bash
node index.js <url>
```

Replace `<url>` with the URL you want to check. The tool will return the HTTP status code or a message indicating whether the website is up or down.

Example:

```bash
node index.js https://www.example.com
```

Output:

```
The website is up with status code: 200
```

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome to improve the tool or add new features!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Paul Lecomte](https://github.com/Paul-Lecomte).