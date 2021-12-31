import { ref } from "vue"


const getRaces = (seasonId) => {
    const races = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const response = await fetch('http://localhost:8180/api/races?season-id=' + seasonId)
            if (!response.ok) {
                throw Error('no data available')
            }
            response.json().then( data => {
                      console.log(data);
                      races.value = data
                    });
        }
        catch (err) {
            error.value = err.message
            console.log( error.value )
        }
    }
    return {races, error, load}
}

export default getRaces