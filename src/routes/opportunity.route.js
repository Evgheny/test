const express = require('express'),
    router = express.Router(),
    OpportunityController = require('../controllers/opportunity.controller'),
    OpportunityService = require('../services/opportunity.service');

router.use(async (req, res, next) => {
    // console.log('PIPELINEID', pipelineId)
    let data = await OpportunityService.getOpportunitiesByPipelineId(1234);

    if (data) {
        req.pipelines = data;
        res.render('opportunity', data);
    } else
        return res
            .status(500)
            .send({ message: 'something went wrong' });
});

router
    .route('/')
    .get(OpportunityController.getOpportunitiesByPypelineId)

module.exports = router;

