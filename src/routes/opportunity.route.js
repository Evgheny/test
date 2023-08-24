const express = require('express'),
    router = express.Router(),
    OpportunityService = require('../services/opportunity.service');

router.get('/:pipelineId', async (req, res) => {
    let opportunities = await OpportunityService.getOpportunitiesByPipelineId(req.params.pipelineId);

    if (opportunities && opportunities.length) {
        req.opportunities = opportunities;
        res.render('opportunity', { opportunities });
    } else
        return res
            .status(500)
            .send({ message: `No opportunities for pipeline with id: ${req.params.pipelineId}` });
});

module.exports = router;
