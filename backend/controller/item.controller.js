import Item from "../model/items.model.js";

export const getItems = async (request, response) => {
    try {
        const items = await Item.find(); // Fetch all items
        response.send(items);
    } catch (error) {
        response.status(500).send({ error: "Error fetching items" });
    }
};
