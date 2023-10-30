export function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
        if (!response.ok) {
            throw new Error ('Unable to load tricks.')
        }
        return response.json()
    })
  }

//   export function addTrick(trick) {
//     return fetch('http://localhost:3001/api/v1/tricks'), {
//         method: 'POST',
//         headers: {
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify(trick)
//     }
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Unable to add trick.')
//         }
//         return response.json()
//     })
//   }