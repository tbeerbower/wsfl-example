import { ref } from "vue"


const getRunners = () => {
    const runners = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const response = await fetch('http://localhost:8180/api/runners')
            if (!response.ok) {
                throw Error('no data available')
            }
            response.json().then( data => {
                      console.log(data);
                      runners.value = data
                    });
        }
        catch (err) {
            error.value = err.message
            console.log( error.value )
        }
    }
    return {runners, error, load}
}

export default getRunners