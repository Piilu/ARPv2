const db = require("../models")
const Objektid = db.objektids
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.Klient && !req.body.Aadress && !req.body.Kontakt && !req.body.Email && !req.body.Telefon && !req.body.System) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return;
    }
    //Objektid andmed
    const objekt = {
        Klient: req.body.Klient,
        Aadress: req.body.Aadress,
        Kontakt: req.body.Kontakt,
        Email: req.body.Email,
        Telefon: req.body.Telefon,
        System: req.body.System,
    }
    //Salvesta objekt andmebaasi
    Objektid.create(objekt).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Objekt.",
        })
    })
};

exports.findAll = (req, res) => {
    Objektid.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while finding the Objekt"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Objektid.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Objekt with id=${id}.`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Objekt with id=" + id
        })
    })
}
exports.update = (req, res) => {
    const id = req.params.id
    Objektid.update(req.body,
        {
            where: { id: id }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Objekt was updated successfully."
                });
            }
            else {
                res.send({
                    message: `Cannot update Objekt with id=${id}. Maybe Objekt was not found or req.body is empty!`
                });
            }
        }).catch(err=>{
            res.status(500).send({
                message: "Error updating Objekt with id=" + id
            });
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Objektid.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Objekt was deleted successfully."
            });
        }
        else {
            res.send({
                message: `Cannot delete Objekt with id=${id}. Maybe Objekt was not found!`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message: "Could not delete  Objekt with id=" + id
        });
    })
}