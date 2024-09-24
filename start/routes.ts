/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')

router.on('/').render('pages/index')

router.post('/generate', [UsersController, 'index'])

// //static route example
// router.get('/test', () => {
//   return { msg: 'hello' }
// })

// //dynamic route example
// router.get('/profile/:username', ({ request }) => {
//   const usernamame = request.params().username
//   return { msg: usernamame }
// })
