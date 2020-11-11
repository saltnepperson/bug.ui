<template>
    <div class="center grid">
        <navigation />
        <div class="content">
        </div>
    </div>
</template>

<script>
import Navigation from '../navigation';

export default {
    name:'primary-layout',

    components: {
        'navigation': Navigation
    }
}
</script>