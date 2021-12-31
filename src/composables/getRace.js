import { ref } from "vue"


const getRace = (raceId) => {
    const race = ref([])
    const raceError = ref(null)

    const loadRace = async () => {
        try {
            const response = await fetch('http://localhost:8180/api/races/' + raceId)
            if (!response.ok) {
                throw Error('no data available')
            }
            response.json().then( data => {
                      console.log(data);
                      race.value = data
                    });
        }
        catch (err) {
            raceError.value = err.message
            console.log( raceError.value )
        }
    }
    return {race, raceError, loadRace}
}

export default getRace