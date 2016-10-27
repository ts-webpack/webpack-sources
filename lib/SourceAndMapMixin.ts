/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */
export = function mixinSourceAndMap(proto) {
    proto.map = function (options: { columns: boolean } = {}) {
        if (options.columns === false) {
            return this.listMap(options).toStringWithSourceMap({
                file: 'x'
            }).map;
        }

        return this.node(options).toStringWithSourceMap({
            file: 'x'
        }).map.toJSON();
    };

    proto.sourceAndMap = function (options: { columns: boolean } = {}) {
        if (options.columns === false) {
            // console.log(this.listMap(options).debugInfo());
            return this.listMap(options).toStringWithSourceMap({
                file: 'x'
            });
        }

        const res = this.node(options).toStringWithSourceMap({
            file: 'x'
        });
        return {
            source: res.code,
            map: res.map.toJSON()
        };
    };
};
