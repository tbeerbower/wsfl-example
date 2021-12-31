import { ref } from "vue"


const getRunner = (id) => {
    const runner = ref([])
    const error = ref(null)

    const loadRunner = async () => {
        try {
            const response = await fetch('http://localhost:8180/api/runners/' + id)
            if (!response.ok) {
                throw Error('no data available')
            }
            response.json().then( data => {
                      console.log(data);
                      runner.value = data
                    });
        }
        catch (err) {
            error.value = err.message
            console.log( error.value )
        }
    }
    return {runner, error, loadRunner}
}

export default getRunner