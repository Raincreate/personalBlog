import { request } from './request';

export async function getList(params) {
    return request({
        url: '/api/v1/categories',
        params,
    });
}

export async function create(data) {
    return request({
        url: '/categories',
        method: 'post',
        data,
    });
}
export async function update(data) {
    return request({
        url: '/categories',
        method: 'put',
        data,
    });
}

export async function remove(data) {
    return request({
        url: '/categories',
        method: 'delete',
        data,
    });
}

