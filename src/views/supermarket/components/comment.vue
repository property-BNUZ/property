<template>
    <div>
        <div id="vcomments"></div>
    </div>

</template>
<script>
    export default {
        name: 'Valine',
        mounted: function () {
            // require window 
            const Valine = require('valine');
            if (typeof window !== 'undefined') {
                this.window = window
                window.AV = require('leancloud-storage')

            }

            new Valine({
                el: '#vcomments',
                appId: 'BVjfBr7jOxGbsTBBcRmMUQkQ-gzGzoHsz',
                appKey: 'ytedyJrwsk2DuPCWsfksckET',
                notify: false,
                verify: false,
                avatar: 'mm',
                placeholder: '输入商品评价'
            });
        },
    }
</script>