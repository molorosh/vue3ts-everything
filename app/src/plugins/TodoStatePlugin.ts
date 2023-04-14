import type { App, Plugin } from 'vue';
import TodoStatePluginTemplate from './TodoStatePluginTemplate.vue'

// The Install function used by Vue to register the plugin
export const TodoStatePlugin: Plugin = {
    install(app: App /*, options: PluginOptions*/ ) {

        // makes plugin available in your Vue.js app as either "$this.plugin" (in your Source) or "{{ $plugin }}" in your templates
        //app.config.globalProperties.$plugin = createPlugin(options)


        // register TodoStatePluginTemplate as a global component, so you can use it wherever you want in your app
        // Usage: <status :val=12></status>
        app.component('status', TodoStatePluginTemplate)
    }
}
