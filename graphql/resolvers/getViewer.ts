import {User} from "../../types";

export const getViewer = async (
    _parent: never,
    input: never,
): Promise<User> => {
    return { id: 1, name: 'John Smith', status: 'cached' };
}

export default getViewer;