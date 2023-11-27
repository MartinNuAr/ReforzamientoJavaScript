const currentUsers = [
    {
        'id': 'Piberto',
        'administrador': false
    },
    {
        'id': 'Marto',
        'administrador': true
    }
]

const isAdmin = (users) => users.administrador == true

const hasAdmins = (users) => users.some(isAdmin)

console.log(hasAdmins(currentUsers))