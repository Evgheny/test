class PipelineController {
    getPipelines(req, res) {
        if (req.query.id) {
            if (req.pipelines.hasOwnProperty(req.query.id)) {
                return res.status(200).send(req.pipelines[req.query.id]);
            }
            else {
                return res
                    .status(404)
                    .send({ message: 'Pipelines not found.' });
            }
        } else if (!req.pipelines) {
            return res
                .status(404)
                .send({ message: 'Pipelines not found.' });
        }

        return res.status(200).send( req.pipelines );
    }
}

module.exports = new PipelineController();
