import { CACHE_MANAGER, Inject } from "@nestjs/common";

export class CacheManage {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getCache(){
        const value = await this.cacheManager.keys('SAMPLE');
        
    }
};