const db = require("../models")
const Paevik = db.paeviks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.Tegija || !req.body.Liik || !req.body.System || !req.body.Sisu || !req.body.FileURL || !req.body.ObjektID) {
        res.status(400).send({
            message: "Content can not be empty"
        })
        return;
    }
    const paevik = {
        Tegija: req.body.Tegija,
        Liik: req.body.Liik,
        System: req.body.System,
        Sisu: req.body.Sisu,
        FileURL: req.body.FileURL,
        ObjektID: req.body.ObjektID,
    }
    Paevik.create(paevik).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Paevik."
        })
    })
}
exports.findAll = (req, res) => {
    Paevik.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while finding the Paevik"
        })
    })
}
exports.findOne = (req, res) => {
    const id = req.params.id
    Paevik.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Paevik with id=${id}.`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Paevik with id=" + id
        })
    })

}
exports.update = (req, res) => {
    const id = req.params.id
    Paevik.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Paevik was updated successfully."
            });
        }
        else {
            res.send({
                message: `Cannot update Paevik with id=${id}. Maybe Paevik was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Paevik with id=" + id
        });
    })
}
exports.delete = (req, res) => {
    const id = req.params.id
    Paevik.destroy({
        where:{id:id}
    }).then(num=>{
        if(num==1){
            res.send({
                message:"Paevik was deleted successfully.",
            })
        }
        else{
            res.send({
                message:`Cannot delete Paevik with id=${id}. Maybe Paevik was not found!`
            })
        }
    })
}