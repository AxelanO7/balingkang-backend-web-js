import Admin from "../models/AdminModel.js";

export const getAdmins = async (req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getAdminById = async (req, res) => {
    try {
        const response = await Admin.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const response = await Admin.findOne({
            where: {
                username: req.body.username,
                password: req.body.password,
            },
        });
        if (response) {
            res.status(200).json();
        } else {
            res.status(404).json({ msg: "Admin Not Found" });
        }
    } catch (error) {
        console.log(console.message);
    }
};

export const createAdmin = async (req, res) => {
    try {
        await Admin.create(req.body);
        res.status(201).json({ msg: "Admin Created" });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateAdmin = async (req, res) => {
    try {
        await Admin.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Admin Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        await Admin.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Admin Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};
