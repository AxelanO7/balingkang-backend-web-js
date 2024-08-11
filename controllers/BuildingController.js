import Building from "../models/BuildingModel.js";

export const getBuildings = async (req, res) => {
    try {
        const response = await Building.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getBuildingById = async (req, res) => {
    try {
        const response = await Building.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createBuilding = async (req, res) => {
    try {
        await Building.create(req.body);
        res.status(201).json({ msg: "Building Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBuilding = async (req, res) => {
    try {
        await Building.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Building Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBuilding = async (req, res) => {
    try {
        await Building.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Building Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};
