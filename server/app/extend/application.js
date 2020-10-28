'use strict';

module.exports = {
    async initAssetsMap() {
        if (!this.assetsMap) {
            this.assetsMap = await this.Helper.prototype.getAssetsMap.call(this);
        }
        return this.assetsMap;
    }
};
