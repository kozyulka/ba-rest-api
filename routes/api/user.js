const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res) => {
    userService.findAll((err, data) => {
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
        return res.end('Invalid id');
    }

    userService.findOne(id, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});

router.get("/:id/receivers", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400);
        return res.end('Invalid id');
    }

    userService.findReceivers(id, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});

router.post("/", (req, res) => {
    if (typeof req.body !== 'object') {
        res.status(400);
        return res.end('Invalid data');
    }

    userService.create(req.body, (err, data) => {
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
        return res.end('Invalid id');
    }

    userService.update(id, req.body, (err, data) => {
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
        return res.end('Invalid id');
    }

    userService.deleteOne(id, (err, data) => {
        if (err) {
            res.status(400);
            return res.end();
        }

        res.json(data);
    });
});

module.exports = router;
