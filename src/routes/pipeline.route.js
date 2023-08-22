const express = require('express'),
    router = express.Router(),
    PipelineController = require('../controllers/pipeline.controller'),
    PipelineService = require('../services/pipeline.service');

router.use(async (req, res, next) => {
    let data = await PipelineService.getPipelines();

    if (data) {
        req.pipelines = data;
        res.render('pipeline', data);
    } else
        return res
            .status(500)
            .send({ message: 'something went wrong' });
});

router
    .route('/')
    .get(PipelineController.getPipelines)

module.exports = router;
