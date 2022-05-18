
module.exports = (sequelize,Sequelize)=>{
    const Paevik = sequelize.define("paevik",{
        Tegija:{
            type:Sequelize.STRING
        },
        Liik:{
            type:Sequelize.STRING
        },
        System:{
            type:Sequelize.STRING
        },
        Sisu:{
            type:Sequelize.STRING
        },
        FileURL:{
            type:Sequelize.STRING
        },
        ObjektID:{
            type:Sequelize.INTEGER   
        }
    });
    return Paevik;
}