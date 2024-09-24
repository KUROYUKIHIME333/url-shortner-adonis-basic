import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'demoAdonis',  // Remplacez par votre nom d'utilisateur
        password: '00001111',  // Remplacez par votre mot de passe
        database: 'DEMO_ADONIS',  // Remplacez par le nom de votre base de données
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig