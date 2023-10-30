export function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
        if (!response.ok) {
            throw new Error ('Unable to load tricks.')
        }
        return response.json()
    })
  }