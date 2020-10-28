import { apiGet } from '../utils/http';

export async function requestResourceList(data = {}) {
    const api = 'api/resource';
    return await apiGet(api, data);
}