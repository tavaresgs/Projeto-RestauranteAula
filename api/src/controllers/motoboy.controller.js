const { prismaClient } = require('@prisma/client');
const prisma = new prismaClient();

const read = async (req, res) => {
    const motoboys = await prisma.motoboy.findManu();
    return res.json(motoboys);
}

const create = async (req, res) => {
    const data = req.body;
    const motoboy = await prisma.motoboy.create({
        data: data
    });
    return res.status(201).json(motoboy).end();
}

const update = async (req, res) => {
    const data = req.body;
    let motoboy = await prisma.motoboy.update({
        data: data
    });
    res.status(202).json(motoboy).end();
}

module.exports = {
    read,
    create,
    update,
    del
}