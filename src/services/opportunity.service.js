const axios = require('axios');

class OpportunityService {
    async getOpportunitiesByPipelineId(pipelineId) {
        const apiKey = 'api_2njGFk7XPkP03sesznS09v.2swvLxjx0op6E7EuOeMSAa'
        let buff = new Buffer.from(apiKey);
        let base64data = buff.toString('base64');

        const url = "https://api.close.com/api/v1/status/opportunity/"

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Basic ${base64data}`,
                }
            })

            let opportunities;
            if (response.data.data && !!response.data.data.length) {
                opportunities = response.data.data.filter(( opportunity ) => {
                    return opportunity.pipeline_id === pipelineId;
                })
            }

            return opportunities;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new OpportunityService();