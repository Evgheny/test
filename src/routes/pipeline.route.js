const express = require('express'),
    router = express.Router(),
    PipelineService = require('../services/pipeline.service');

router.use(async (req, res) => {
    let data = await PipelineService.getPipelines();

    if (data) {
        req.pipelines = data;
        res.render('pipeline', data);
    } else
        return res
            .status(500)
            .send({ message: 'something went wrong' });
});

module.exports = router;
