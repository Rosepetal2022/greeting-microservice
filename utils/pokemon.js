const pokemonGreetings = [
    "Pika Pika! Ready to track your collection?",
    "Charmander says hello! Let's update your cards!",
    "Squirtle Squad welcomes you! Time to check your cards?",
    "Bulba, Bulba! Let's see those collection stats!",
    "Eevee greets you! How's your collection growing?",
    "Gotta track 'em all! Welcome!",
    "Jigglypuff sings you a greeting! Time to check your cards!",
    "Snorlax woke up just to say hi! Ready to track your cards?",
    "Team Rocket’s blasting off to a great collection!",
    "Meowth, that's right! Let’s see those card values!",
    "Psyduck is confused but excited to track your collection!",
    "Charizard roars a fiery welcome! How's the collection?",
    "Pikachu uses greet! It's super effective!",
    "Mewtwo senses a valuable collection coming your way!",
    "Abra teleports you a warm welcome! Ready to track?",
    "Gengar’s spooky greeting! Let's update your cards!",
    "Ditto says hello! Let’s see your collection stats!",
    "Blastoise blasts a friendly welcome! How's your collection?",
    "Venusaur vines a greeting your way! Ready to track?",
    "Ash and Pikachu welcome you to the collection tracker!"
  ];


  const chooseGreeting = () => {
    const randomIndex = Math.floor(Math.random() * pokemonGreetings.length);
    return pokemonGreetings[randomIndex];
  };
  
  module.exports = chooseGreeting;