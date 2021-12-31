import { ref } from "vue"


const getSeasons = () => {
    const seasons = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const response = await fetch('http://localhost:8180/api/seasons')
            if (!response.ok) {
                throw Error('no data available')
            }
            response.json().then( data => {
                      console.log(data);
                      seasons.value = data
                    });
        }
        catch (err) {
            error.value = err.message
            console.log( error.value )
        }
    }
    return {seasons, error, load}
}

export default getSeasons