const router = require("express").Router();
const messageService = require("../../services/message");

router.get("/", (req, res) => {
    messageService.findAll((err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400);
        return res.end();
    }

    messageService.findOne(id, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});

router.post("/", (req, res) => {
     messageService.create(req.body, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    })
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400);
        return res.end();
    }

    messageService.update(id, req.body, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});


router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400);
        return res.end();
    }

    messageService.deleteOne(id, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});

module.exports = router;