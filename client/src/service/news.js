import { apiGet } from '../utils/http';

export async function requestNewsList(data = {}) {
    const api = 'api/news';
    return await apiGet(api, data);
}

export async function requestNewsDetail(data = {}) {
    const api = 'api/news/detail';
    return await apiGet(api, data);
}