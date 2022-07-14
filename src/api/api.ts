import { request } from './axios'



export class SiteInfo {
    

    /**
     * 站点信息列表
     * @param params page
     * @returns 
     */
    static async infoList(params) {
        return request('/api/site/info/list', params, 'post')
    }
    /**
     * 站点类型列表
     * @param params page 
     * @returns 
     */
    static async typeList(params) {
        return request('/api/site/type/list', params, 'post')
    }
}


export class OscNews {

    /**
     *  osc 资讯列表
     * @param params page
     * @returns 
     */
    static async newsList(params) {
        return request('/api/osc/news/list', params, 'post')
    }

    /**
     * osc 资讯详情
     * @param params page
     * @returns 
     */
    static async newsDetails(params) {
        return request('/api/osc/news/details', params, 'post')
    }
}
