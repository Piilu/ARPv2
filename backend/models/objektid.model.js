
module.exports=(sequelize,Sequelize)=>{
    const Objektid = sequelize.define("objektid",{
        Klient:{
            type:Sequelize.STRING
            
        },
        Aadress:{
            type:Sequelize.STRING
        },
        Kontakt:{
            type:Sequelize.STRING
        },
        Email:{
            type:Sequelize.STRING
        },
        Telefon:{
            type:Sequelize.STRING
        },
        System:{
            type:Sequelize.STRING
        }
    });
    return Objektid;
}