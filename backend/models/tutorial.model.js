module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {

        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    },
        {
            timestamps: false//Way to remove createdAt and updatedAt columns
        }
    );

    return Tutorial;
};

