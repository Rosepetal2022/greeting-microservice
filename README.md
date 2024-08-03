# Pokémon Greeting Microservice

This project is a simple microservice that provides a random Pokémon-themed greeting based on the time of day. It is built using Node.js and Express.

## Features

- Returns a greeting message based on the time of day (`morning`, `afternoon`, or `evening`).
- Provides a random Pokémon-themed greeting.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later recommended)

### Cloning the Repository

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Rosepetal2022/greeting-microservice.git
    ```

2. Navigate into the project directory:

    ```bash
    cd greeting-microservice
    ```

### Installing Dependencies

3. Install the required dependencies:

    ```bash
    npm install
    ```

### Running the Application

4. Start the server:

    ```bash
    npm start
    ```

5. The server will be running on `http://localhost:3000`.

### Making API Calls

To get a Pokémon-themed greeting, send a GET request to the `/pokegreet` endpoint.

example call in REACT
Paste code on homepage and the user will get a random greeting. 
```bash
  function App() {
  const [greeting, setGreeting] = useState('');
  const [pokeGreeting, setPokeGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      const apiUrl = 'http://localhost:3002/pokegreet'; 

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGreeting(data.greeting);
        setPokeGreeting(data.pokeGreeting);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Pokemon Greeting!!</h1>
      <p>{greeting} {pokeGreeting}</p>
      <img className="pokemon" src="/images/pokemon.jpg" alt="Pokemon" />
    </div>
  );
}
  ```

#### Example Using `curl`

You can use the `curl` command-line tool to make the API call. Open your terminal and run:

```bash
curl http://localhost:3000/pokegreet