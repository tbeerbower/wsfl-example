import { ref } from "vue"


const getResults = (runnerId, raceId) => {
    const results = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const queryParams = []
            if (runnerId != null) {
                queryParams.push("runner-id=" + runnerId)
            }
            if (raceId != null) {
                queryParams.push("race-id=" + raceId)
            }

            const response = await fetch('http://localhost:8180/api/results?' + queryParams.join("&"))
            if (!response.ok) {
                throw Error('no data available')
            }
            response.json().then( data => {
                      console.log(data);
                      results.value = data
                    });
        }
        catch (err) {
            error.value = err.message
            console.log( error.value )
        }
    }
    return {results, error, load}
}

export default getResults