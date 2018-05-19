import axios from 'axios'

axios.defaults.baseUrl = 'http://localhost:49318/api'

const appService = {
    getStudents() {
        return new Promise((resolve) => {
            axios.get('/students')
                .then(response => { resolve(response.data) })
                .catch(error => { console.log(error) })
        })
    }
}

export default appService
