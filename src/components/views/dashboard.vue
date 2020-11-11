<template>
    <div>
        <primary-layout>
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
                    <vs-alert>
                        <template #title>
                            Vuesax Framework
                        </template>
                        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                        developed from the frontend lover to the backend that wants to easily create
                        your visual approach to the end user
                    </vs-alert>
                </vs-col>
            </vs-row>
        </primary-layout>
    </div>
</template>

<script>
import PrimaryLayout from './primary-layout';

export default {
  name: 'dashboard',
  components: { 
    'primary-layout': PrimaryLayout,
  }
}
</script>

