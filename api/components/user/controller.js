const nanoid = require('nanoid')
const auth = require('../auth')
const TABLA = 'user'


module.exports = function (injectedStore) {

    let store = injectedStore
    if (!store) {
        store = require('../../../store/dummy')
    }

    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    async function upsert(body, insert) {

        const user = {
            name: body.name,
            username: body.username
        }

        if (body.id) {
            user.id = body.id
        }

        else {
            user.id = nanoid()
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password
            }, insert)
        }

        return store.upsert(TABLA, user, insert)
    }

    return {
        list,
        get,
        upsert
    }
}

