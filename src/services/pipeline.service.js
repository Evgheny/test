const axios = require('axios')

class PipelineService {
    async getPipelines() {
        const apiKey = 'api_2njGFk7XPkP03sesznS09v.2swvLxjx0op6E7EuOeMSAa'
        let buff = new Buffer.from(apiKey);
        let base64data = buff.toString('base64');

        const url = "https://api.close.com/api/v1/pipeline"

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Basic ${base64data}`,
                }
            })

            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new PipelineService();
