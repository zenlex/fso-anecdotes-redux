# Anecdotes
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

A toy app that collects anecdotes and allows voting on them and filtering. 

### Install
- Fork / Clone repo.
- Run `npm install` to install dependencies.

### Usage
- `json-server` provides simple REST API backend.
- Run `npm run server` to launch json-server on port 3001 (change options in package.json).
- Run `npm start` to launch client.

- json-server endpoints:
  - `GET /anecdotes` returns all anecdotes.
  - `GET /anecdotes/{id}` returns anecdote with matching id (if it exists).
  - `POST /anecdotes` adds anecdote. Request body fields: {content, votes} (id assigned by server).
### Contributing
Not accepting PRs at this time. Contact erich@zenlex.dev with questions. 

### License
[GNU General Public License](https://opensource.org/licenses/GPL-3.0)