const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  host: '44.205.23.149',
  database: 'mydatabase',
  password: 'myuser',
  port: 5432,
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const query = "SELECT * FROM utilisateurs WHERE nom = $1 AND prenom = $2";

  pool.query(query, [username, password], (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      if (res.rows.length === 1) {
        // l'utilisateur a été trouvé dans la base de données
        alert("Connexion réussie !");
      } else {
        // l'utilisateur n'a pas été trouvé dans la base de données
        alert("Nom d'utilisateur ou mot de passe incorrect.");
      }
    }
  });
}
